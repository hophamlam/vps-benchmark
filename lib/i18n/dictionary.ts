import type { Locale } from "./config";

type TranslationKeys =
  | "header.brand"
  | "header.nav.about"
  | "header.nav.howItWorks"
  | "header.locale.vi"
  | "header.locale.en"
  | "hero.title"
  | "hero.subtitle"
  | "hero.subtitleEn"
  | "hero.ctaPrimary"
  | "hero.ctaSecondary"
  | "hero.ctaPrimaryNote"
  | "hero.ctaPrimaryNoteEn"
  | "banner.goal.title"
  | "banner.goal.item1"
  | "banner.goal.item1En"
  | "banner.goal.item2"
  | "banner.goal.item2En"
  | "banner.goal.item3"
  | "banner.goal.item3En"
  | "banner.howItWorks.title"
  | "banner.howItWorks.step1.title"
  | "banner.howItWorks.step1.body"
  | "banner.howItWorks.step1.bodyEn"
  | "banner.howItWorks.step2.title"
  | "banner.howItWorks.step2.body"
  | "banner.howItWorks.step2.bodyEn"
  | "banner.howItWorks.step3.title"
  | "banner.howItWorks.step3.body"
  | "banner.howItWorks.step3.bodyEn"
  | "banner.demo.title"
  | "banner.demo.note"
  | "banner.demo.noteEn"
  | "footer.note"
  | "footer.noteEn";

type TranslationDict = Record<TranslationKeys, string>;

export const translations: Record<Locale, TranslationDict> = {
  vi: {
    "header.brand": "VPS Benchmark by hophamlam",
    "header.nav.about": "Giới thiệu",
    "header.nav.howItWorks": "Cách hoạt động",
    "header.locale.vi": "VI",
    "header.locale.en": "EN",
    "hero.title": "Đánh giá hiệu năng VPS một cách minh bạch",
    "hero.subtitle":
      "vps-benchmark-hophamlam là dự án cá nhân giúp bạn nhìn rõ hiệu năng thực tế của các gói VPS: độ trễ, tốc độ mạng, I/O… được kiểm tra và trình bày một cách dễ hiểu.",
    "hero.subtitleEn":
      "vps-benchmark-hophamlam is a personal project to reveal the real-world performance of VPS plans – latency, network throughput, disk I/O – presented in a clear and honest way.",
    "hero.ctaPrimary": "Khám phá benchmark (Coming soon)",
    "hero.ctaSecondary": "Tìm hiểu cách mình benchmark",
    "hero.ctaPrimaryNote":
      "Hiện tại chỉ là bản giới thiệu giao diện – tính năng benchmark sẽ được mở sau.",
    "hero.ctaPrimaryNoteEn":
      "UI preview only for now – real benchmarking features are coming soon.",
    "banner.goal.title": "Mục tiêu của vps-benchmark-hophamlam",
    "banner.goal.item1":
      "Cung cấp góc nhìn trung lập về hiệu năng VPS từ nhiều nhà cung cấp khác nhau.",
    "banner.goal.item1En":
      "Provide a neutral view on VPS performance across different providers.",
    "banner.goal.item2":
      "Dùng các bài test đơn giản, dễ hiểu, có thể lặp lại.",
    "banner.goal.item2En":
      "Use simple, repeatable tests that are easy to understand.",
    "banner.goal.item3":
      "Chia sẻ kết quả công khai, minh bạch, không quảng cáo trá hình.",
    "banner.goal.item3En":
      "Share results publicly and transparently, with no hidden sponsorship.",
    "banner.howItWorks.title":
      "Cách benchmark sẽ hoạt động (dự kiến)",
    "banner.howItWorks.step1.title": "Bước 1 – Thu thập thông tin",
    "banner.howItWorks.step1.body":
      "Chọn gói VPS, nhà cung cấp và khu vực test.",
    "banner.howItWorks.step1.bodyEn":
      "Select the VPS plan, provider, and test region.",
    "banner.howItWorks.step2.title": "Bước 2 – Chạy bài test",
    "banner.howItWorks.step2.body":
      "Chạy các bài test về ping, băng thông mạng, I/O đĩa trên môi trường thật.",
    "banner.howItWorks.step2.bodyEn":
      "Run latency, network throughput, and disk I/O tests on real environments.",
    "banner.howItWorks.step3.title": "Bước 3 – Tổng hợp & xếp hạng",
    "banner.howItWorks.step3.body":
      "Chuẩn hóa kết quả, tính điểm tổng và hiển thị trong bảng xếp hạng dễ đọc.",
    "banner.howItWorks.step3.bodyEn":
      "Normalize results, compute an overall score, and display them in an easy-to-read leaderboard.",
    "banner.demo.title": "Demo bảng xếp hạng (dữ liệu minh họa)",
    "banner.demo.note":
      "Đây là dữ liệu demo cho phần giao diện, chưa phải kết quả test thật.",
    "banner.demo.noteEn":
      "This is demo data for the UI only, not real benchmark results yet.",
    "footer.note":
      "Dự án cá nhân, đang trong giai đoạn phát triển tính năng benchmark thực tế.",
    "footer.noteEn":
      "Personal project, real benchmarking features are under active development.",
  },
  en: {
    "header.brand": "VPS Benchmark by hophamlam",
    "header.nav.about": "About",
    "header.nav.howItWorks": "How it works",
    "header.locale.vi": "VI",
    "header.locale.en": "EN",
    "hero.title": "Transparent VPS performance benchmarking",
    "hero.subtitle":
      "vps-benchmark-hophamlam is a personal project to reveal the real-world performance of VPS plans – latency, network throughput, disk I/O – presented in a clear and honest way.",
    "hero.subtitleEn":
      "vps-benchmark-hophamlam is a personal project to reveal the real-world performance of VPS plans – latency, network throughput, disk I/O – presented in a clear and honest way.",
    "hero.ctaPrimary": "Explore benchmarks (Coming soon)",
    "hero.ctaSecondary": "See how I benchmark",
    "hero.ctaPrimaryNote":
      "UI preview only for now – real benchmarking features are coming soon.",
    "hero.ctaPrimaryNoteEn":
      "UI preview only for now – real benchmarking features are coming soon.",
    "banner.goal.title": "The goal of vps-benchmark-hophamlam",
    "banner.goal.item1":
      "Provide a neutral view on VPS performance across different providers.",
    "banner.goal.item1En":
      "Provide a neutral view on VPS performance across different providers.",
    "banner.goal.item2":
      "Use simple, repeatable tests that are easy to understand.",
    "banner.goal.item2En":
      "Use simple, repeatable tests that are easy to understand.",
    "banner.goal.item3":
      "Share results publicly and transparently, with no hidden sponsorship.",
    "banner.goal.item3En":
      "Share results publicly and transparently, with no hidden sponsorship.",
    "banner.howItWorks.title":
      "How the benchmarking will work (planned)",
    "banner.howItWorks.step1.title": "Step 1 – Collect information",
    "banner.howItWorks.step1.body":
      "Select the VPS plan, provider, and test region.",
    "banner.howItWorks.step1.bodyEn":
      "Select the VPS plan, provider, and test region.",
    "banner.howItWorks.step2.title": "Step 2 – Run the tests",
    "banner.howItWorks.step2.body":
      "Run latency, network throughput, and disk I/O tests on real environments.",
    "banner.howItWorks.step2.bodyEn":
      "Run latency, network throughput, and disk I/O tests on real environments.",
    "banner.howItWorks.step3.title": "Step 3 – Aggregate & rank",
    "banner.howItWorks.step3.body":
      "Normalize results, compute an overall score, and display them in an easy-to-read leaderboard.",
    "banner.howItWorks.step3.bodyEn":
      "Normalize results, compute an overall score, and display them in an easy-to-read leaderboard.",
    "banner.demo.title": "Leaderboard demo (sample data)",
    "banner.demo.note":
      "This is demo data for the UI only, not real benchmark results yet.",
    "banner.demo.noteEn":
      "This is demo data for the UI only, not real benchmark results yet.",
    "footer.note":
      "Personal project, real benchmarking features are under active development.",
    "footer.noteEn":
      "Personal project, real benchmarking features are under active development.",
  },
};

export function getTranslation(locale: Locale, key: TranslationKeys): string {
  return translations[locale][key] ?? translations.vi[key] ?? key;
}


