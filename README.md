## tocdovps.dev

Landing page + experimental VPS benchmark tooling for **tocdovps.dev** by **hophamlam**.

- Frontend: [Next.js](https://nextjs.org) App Router, Tailwind CSS, custom theme generated via [tweakcn](https://tweakcn.com/editor/theme?tab=other) for shadcn-style tokens.
- i18n: simple VI/EN dictionary with a small `I18nProvider`.
- Theming: light/dark toggle using CSS variables and a `ThemeProvider`.
- CLI: early **local-only** benchmark script for VPS (no data is sent anywhere yet).

---

## 1. Development (web)

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000` to see the landing page:

- Hero section styled in a modern SaaS style (inspired by Framer).
- Banner section explaining the project goals and how benchmarking will work.
- Language switch (VI/EN) and theme switch (light/dark) in the header.

---

## 2. Local VPS benchmark script (v1)

The repository includes an **early, local-only** benchmark script:

- File: `scripts/vps-benchmark.sh`
- What it does (v1):
  - Pings a couple of public hosts (currently `google.com` and `cloudflare.com`).
  - Runs a simple HTTP download test against a public file.
  - Calculates a very rough combined “score” (0–10) from average ping and download speed.
  - Prints a human-readable summary in **English**.
- What it does **not** do yet:
  - Does **not send** any data to any API or database.
  - Does **not install** any system packages automatically.

### 2.1. Running the script on a VPS

Copy the script to your VPS and run it:

```bash
scp scripts/vps-benchmark.sh user@your-vps:/tmp/vps-benchmark.sh
ssh user@your-vps
chmod +x /tmp/vps-benchmark.sh
/tmp/vps-benchmark.sh
```

You should see a summary like:

- Average latency per host.
- Overall average latency.
- Download time + speed (Mbps).
- A temporary combined score (0–10).

### 2.2. `curl | bash` entrypoint (GitHub raw, early version)

There is an early installer script in `scripts/install.sh`.  
With the public GitHub repo you can already run:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/hophamlam/vps-benchmark/refs/heads/main/scripts/install.sh)
```

Where:

- `install.sh` is a tiny shell script that:
  - Downloads the latest `scripts/vps-benchmark.sh` from this repo.
  - Runs it.
  - Cleans up the temporary file.
- The CLI currently:
  - Only runs the **local-only** benchmark.
  - Prints results to stdout.

In the future the CLI will also be responsible for:

- Running richer benchmarks (network, I/O, etc.).
- Posting structured results back to the tocdovps.dev API.

---

## 3. Roadmap (high-level)

- Web:
  - Add `/leaderboard` and `/result/:id` pages (mock first, then backed by real data).
  - Integrate with a Postgres/Neon backend for storing benchmark runs.
- CLI:
  - Turn the shell script into a proper CLI (possibly in Go or Node).
  - Add more metrics: disk I/O, CPU quick tests, more network targets.
  - Implement secure result submission to the web API.

This project is in an **early exploration phase** and is expected to evolve quickly.
