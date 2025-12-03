import React from "react";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/landing/hero";
import { BannerSection } from "@/components/landing/banner";
import { Footer } from "@/components/layout/footer";

/**
 * Trang landing chính cho vps-benchmark-hophamlam
 * @returns Skeleton landing gồm Header, Hero, Banner và Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BannerSection />
      </main>
      <Footer />
    </div>
  );
}

