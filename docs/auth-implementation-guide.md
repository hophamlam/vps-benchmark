# Hướng Dẫn Triển Khai Authentication - Step by Step

## 🚀 Quick Start

### Bước 1: Provision Neon Auth

Sử dụng MCP Neon tool để provision authentication:

```bash
# Project ID: cold-bread-53989958
# Database: neondb (default)
```

Sau khi provision, bạn sẽ nhận được:
- `NEXT_PUBLIC_STACK_PROJECT_ID`
- `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`
- `STACK_SECRET_SERVER_KEY`

### Bước 2: Cài đặt Stack Auth

```bash
npm install @stackframe/stack
npx @stackframe/init-stack . --no-browser
```

### Bước 3: Cấu hình Environment Variables

Thêm vào `.env.local`:

```env
# Stack Auth Credentials
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key
STACK_SECRET_SERVER_KEY=your_secret_key

# Existing
DATABASE_URL=your_neon_connection_string
REPORT_TOKEN=your_report_token
```

## 📝 Code Examples

### 1. Stack Configuration (stack.ts)

File này sẽ được tự động tạo bởi `@stackframe/init-stack`, nhưng bạn có thể customize:

```typescript
// stack.ts
import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/handler/sign-in",
    signUp: "/handler/sign-up",
    afterSignIn: "/",
    afterSignUp: "/",
    afterSignOut: "/",
  },
});
```

### 2. Update Root Layout

```typescript
// app/layout.tsx
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ThemeProvider>
              <I18nProvider>{children}</I18nProvider>
            </ThemeProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
```

### 3. Update Header Component

```typescript
// components/layout/header.tsx
"use client";

import { useUser, UserButton } from "@stackframe/stack";
import { SignInButton } from "@stackframe/stack";

export const Header: React.FC = () => {
  const user = useUser();
  const { locale, setLocale, t } = useI18n();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/">{t("header.brand")}</Link>

        <div className="flex items-center gap-3">
          {/* Navigation */}
          <nav className="hidden items-center gap-4 text-xs sm:flex">
            <Link href="/">{t("header.nav.about")}</Link>
            <Link href="/leaderboard">{t("header.nav.leaderboard")}</Link>
          </nav>

          {/* Auth UI */}
          {user ? (
            <>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <button className="text-sm">{t("auth.signIn.title")}</button>
              </SignInButton>
            </>
          )}

          {/* Theme Toggle */}
          <Toggle onPressedChange={handleToggleTheme} pressed={theme === "dark"}>
            {/* ... */}
          </Toggle>

          {/* Language Toggle */}
          <Toggle onPressedChange={handleToggleLanguage} pressed={locale === "en"}>
            {/* ... */}
          </Toggle>
        </div>
      </div>
    </header>
  );
};
```

### 4. Protected Route - Client Component

```typescript
// app/dashboard/page.tsx
"use client";

import { useUser } from "@stackframe/stack";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const user = useUser({ or: "redirect" }); // Tự động redirect nếu chưa login

  return (
    <div>
      <h1>Welcome, {user.displayName || user.primaryEmail}!</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

### 5. Protected Route - Server Component

```typescript
// app/admin/page.tsx
import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await stackServerApp.getUser({ or: "redirect" });

  // Check admin role
  if (user.clientMetadata?.role !== "admin") {
    redirect("/");
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin content */}
    </div>
  );
}
```

### 6. Middleware Protection

```typescript
// app/middleware.ts
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Protected routes
  const protectedPaths = ["/dashboard", "/profile", "/admin"];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    const user = await stackServerApp.getUser();
    if (!user) {
      const signInUrl = new URL("/handler/sign-in", request.url);
      signInUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }

    // Check admin route
    if (request.nextUrl.pathname.startsWith("/admin")) {
      if (user.clientMetadata?.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
};
```

### 7. Protected API Route

```typescript
// app/api/users/me/route.ts
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    id: user.id,
    displayName: user.displayName,
    primaryEmail: user.primaryEmail,
    profileImageUrl: user.profileImageUrl,
  });
}

export async function PATCH(request: Request) {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();
  
  // Update user
  await user.update({
    displayName: body.displayName,
    // ... other fields
  });

  return NextResponse.json({ success: true });
}
```

### 8. Custom Sign In Page (Optional)

```typescript
// app/(auth)/sign-in/page.tsx
"use client";

import { SignIn } from "@stackframe/stack";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Đăng nhập</CardTitle>
          <CardDescription>
            Đăng nhập vào tài khoản của bạn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </div>
  );
}
```

### 9. User Profile Page

```typescript
// app/(auth)/profile/page.tsx
"use client";

import { useUser } from "@stackframe/stack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ProfilePage() {
  const user = useUser({ or: "redirect" });
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleUpdate = async () => {
    if (!user) return;
    
    await user.update({
      displayName,
    });
    
    // Show success toast
  };

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Hồ sơ của tôi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user?.primaryEmail || ""}
              disabled
            />
          </div>
          <div>
            <Label htmlFor="displayName">Tên hiển thị</Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <Button onClick={handleUpdate}>
            Cập nhật
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### 10. Database Schema Extensions

```sql
-- user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES neon_auth.users(id) ON DELETE CASCADE,
  display_name VARCHAR(255),
  avatar_url TEXT,
  bio TEXT,
  preferences JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_id ON user_profiles(id);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- user_roles table
CREATE TABLE IF NOT EXISTS user_roles (
  user_id UUID REFERENCES neon_auth.users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL,
  granted_at TIMESTAMPTZ DEFAULT NOW(),
  granted_by UUID REFERENCES neon_auth.users(id),
  PRIMARY KEY (user_id, role)
);

CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON user_roles(role);
```

### 11. Helper Functions

```typescript
// lib/auth/permissions.ts
import { stackServerApp } from "@/stack";
import type { StackServerAppUser } from "@stackframe/stack";

/**
 * Kiểm tra user có role cụ thể không
 * @param user - Stack user object
 * @param role - Role cần kiểm tra
 * @returns true nếu user có role đó
 */
export async function hasRole(
  user: StackServerAppUser,
  role: string
): Promise<boolean> {
  // Check trong clientMetadata hoặc database
  return user.clientMetadata?.role === role;
}

/**
 * Kiểm tra user có permission không
 * @param user - Stack user object
 * @param permission - Permission cần kiểm tra
 * @returns true nếu user có permission
 */
export async function hasPermission(
  user: StackServerAppUser,
  permission: string
): Promise<boolean> {
  // Implement permission check logic
  // Có thể query từ database hoặc check trong metadata
  return false;
}

/**
 * Lấy user từ request (server-side)
 * @returns User object hoặc null
 */
export async function getCurrentUser() {
  return await stackServerApp.getUser();
}
```

### 12. i18n Translations

```typescript
// lib/i18n/dictionary.ts - Thêm vào translations object

auth: {
  signIn: {
    title: "Đăng nhập",
    email: "Email",
    password: "Mật khẩu",
    submit: "Đăng nhập",
    forgotPassword: "Quên mật khẩu?",
    noAccount: "Chưa có tài khoản?",
    signUp: "Đăng ký",
  },
  signUp: {
    title: "Đăng ký",
    email: "Email",
    password: "Mật khẩu",
    confirmPassword: "Xác nhận mật khẩu",
    submit: "Đăng ký",
    hasAccount: "Đã có tài khoản?",
    signIn: "Đăng nhập",
  },
  profile: {
    title: "Hồ sơ",
    displayName: "Tên hiển thị",
    email: "Email",
    update: "Cập nhật",
    updated: "Đã cập nhật thành công",
  },
  userButton: {
    profile: "Hồ sơ",
    settings: "Cài đặt",
    signOut: "Đăng xuất",
  },
}
```

## 🔄 Workflow Triển Khai

1. **Provision Neon Auth** → Nhận credentials
2. **Install & Init Stack Auth** → Setup cơ bản
3. **Update Layout** → Wrap với StackProvider
4. **Update Header** → Thêm auth UI
5. **Create Protected Routes** → Dashboard, Profile
6. **Create Middleware** → Protect routes
7. **Create API Routes** → User management
8. **Add Database Schema** → Extensions
9. **Add i18n** → Translations
10. **Test** → All flows

## ✅ Testing Checklist

- [ ] Sign up với email/password
- [ ] Sign in với email/password
- [ ] Sign out
- [ ] Protected route redirect khi chưa login
- [ ] Protected route access khi đã login
- [ ] API route protection
- [ ] Profile update
- [ ] OAuth login (nếu có)
- [ ] Password reset flow
- [ ] Email verification
- [ ] i18n translations
- [ ] Dark mode compatibility
- [ ] Mobile responsive

## 🐛 Troubleshooting

### Issue: Stack Auth không hoạt động
- Check environment variables đã được set đúng chưa
- Verify credentials từ Neon Auth
- Check console logs

### Issue: Redirect loop
- Verify middleware logic
- Check redirect URLs trong stack.ts config

### Issue: Database connection
- Verify DATABASE_URL
- Check Neon project status
- Verify network access

---

**Lưu ý**: Đây là implementation guide chi tiết. Thực hiện từng bước một và test sau mỗi bước.


