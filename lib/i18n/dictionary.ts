import type { Locale } from "./config";

export const translations = {
  vi: {
    "header.brand": "tocdovps.dev",
    "header.nav.about": "Trang chủ",
    "header.nav.howItWorks": "Cách hoạt động",
    "header.nav.leaderboard": "Bảng xếp hạng",
    "header.locale.vi": "VI",
    "header.locale.en": "EN",
    "hero.title": "Đánh giá tốc độ VPS một cách minh bạch",
    "hero.subtitle":
      "tocdovps.dev là dự án cá nhân giúp bạn nhìn rõ hiệu năng thực tế của các gói VPS: độ trễ, tốc độ mạng, I/O… được kiểm tra và trình bày một cách dễ hiểu.",
    "hero.ctaPrimary": "Khám phá benchmark (Coming soon)",
    "hero.ctaSecondary": "Xem kết quả benchmark mới nhất",
    "hero.ctaPrimaryNote": "Bắt đầu benchmark VPS của bạn với tocdovps.dev.",
    "hero.scriptLabel": "Chạy benchmark trên VPS của bạn",
    "hero.copyButton": "Sao chép script",
    "hero.copiedButton": "Đã sao chép",
    "hero.benchmarkCount": "Tổng số benchmark: {count}",
    "features.title": "Tính năng",
    "features.landingPage.title": "Landing page",
    "features.landingPage.description":
      "Trang chủ giới thiệu dự án và hướng dẫn sử dụng.",
    "features.leaderboard.title": "Bảng tổng hợp kết quả benchmark",
    "features.leaderboard.description":
      "Xem chi tiết các kết quả benchmark với sorting và pagination.",
    "features.auth.title": "Xác thực người dùng",
    "features.auth.description":
      "Đăng nhập với credentials, Google, GitHub (đang phát triển).",
    "features.customScript.title": "Script cá nhân hóa",
    "features.customScript.description":
      "Đa dạng lựa chọn speedtest, phần cứng (đang phát triển).",
    "features.notifications.title": "Thông báo tự động",
    "features.notifications.description":
      "Gửi kết quả về Telegram, Discord, Email (đang phát triển).",
    "features.compare.title": "So sánh VPS",
    "features.compare.description":
      "So sánh hiệu năng giữa các VPS khác nhau (đang phát triển).",
    "features.badge.available": "Có sẵn",
    "features.badge.comingSoon": "Sắp ra mắt",
    "banner.howItWorks.title": "Cách hoạt động",
    "banner.howItWorks.step1.title": "Bước 1 – Thu thập thông tin",
    "banner.howItWorks.step1.body":
      "Chọn gói VPS, nhà cung cấp và khu vực test.",
    "banner.howItWorks.step2.title": "Bước 2 – Chạy bài test",
    "banner.howItWorks.step2.body":
      "Chạy các bài test về ping, băng thông mạng, I/O đĩa trên môi trường thật.",
    "banner.howItWorks.step3.title": "Bước 3 – Tổng hợp & xếp hạng",
    "banner.howItWorks.step3.body":
      "Chuẩn hóa kết quả, tính điểm tổng và hiển thị trong bảng xếp hạng dễ đọc.",
    "banner.demo.title": "Demo bảng xếp hạng (dữ liệu minh họa)",
    "banner.demo.note":
      "Đây là dữ liệu demo cho phần giao diện, chưa phải kết quả test thật.",
    "footer.note":
      "Dự án cá nhân, đang trong giai đoạn phát triển tính năng benchmark thực tế.",
    "footer.links.title": "Liên kết",
    "footer.links.home": "Trang chủ",
    "footer.links.leaderboard": "Bảng xếp hạng",
    "footer.links.howItWorks": "Cách hoạt động",
    "footer.social.title": "Liên hệ",
    "footer.social.website": "hophamlam.com",
    "footer.copyright": "© {year} tocdovps.dev. Dự án mã nguồn mở.",
    "latestBenchmarks.title": "Kết quả benchmark mới nhất",
    "latestBenchmarks.description":
      "Một số lần chạy gần đây được báo cáo từ script CLI.",
    "latestBenchmarks.table.time": "Thời gian (UTC)",
    "latestBenchmarks.table.label": "Nhãn",
    "latestBenchmarks.table.ping": "Ping trung bình (ms)",
    "latestBenchmarks.table.download": "Tải xuống (Mbps)",
    "latestBenchmarks.table.score": "Điểm",
    "latestBenchmarks.empty": "Chưa có kết quả benchmark nào.",
    "latestBenchmarks.emptyDescription":
      "Chạy script benchmark trên VPS của bạn để xem kết quả ở đây.",
    "stats.subtitle":
      "Thống kê nhanh từ các kết quả benchmark đã được gửi lên hệ thống.",
    "stats.totalRuns": "Tổng số lần benchmark",
    "stats.avgScore": "Điểm trung bình",
    "stats.avgDownload": "Tốc độ tải xuống trung bình",
    "leaderboard.title": "Bảng xếp hạng",
    "leaderboard.description":
      "Xem các kết quả benchmark được sắp xếp theo điểm số, tốc độ tải xuống, ping hoặc thời gian.",
    "leaderboard.sortBy": "Sắp xếp theo",
    "leaderboard.sort.score": "Điểm số",
    "leaderboard.sort.download": "Tốc độ tải",
    "leaderboard.sort.ping": "Ping",
    "leaderboard.sort.date": "Ngày",
    "leaderboard.table.time": "Thời gian",
    "leaderboard.table.label": "Nhãn",
    "leaderboard.table.ping": "Ping (ms)",
    "leaderboard.table.download": "Tải xuống (Mbps)",
    "leaderboard.table.score": "Điểm",
    "leaderboard.empty": "Chưa có kết quả benchmark nào.",
    "leaderboard.emptyDescription":
      "Chạy script benchmark trên VPS của bạn để xem kết quả ở đây.",
    "leaderboard.pagination.showing":
      "Hiển thị {start}-{end} trong tổng {total}",
    "leaderboard.pagination.previous": "Trước",
    "leaderboard.pagination.next": "Sau",
    "result.title": "Chi tiết kết quả benchmark",
    "result.description":
      "Xem thông tin chi tiết và dữ liệu thô của lần benchmark này.",
    "result.backToLeaderboard": "Quay lại bảng xếp hạng",
    "result.summary.title": "Tóm tắt",
    "result.summary.time": "Thời gian",
    "result.summary.serverLabel": "Nhãn server",
    "result.summary.avgPing": "Ping trung bình",
    "result.summary.downloadSpeed": "Tốc độ tải xuống",
    "result.summary.score": "Điểm số",
    "result.summary.sourceIp": "IP nguồn",
    "result.rawPayload.title": "Dữ liệu thô (Raw Payload)",
    "result.rawPayload.description":
      "Toàn bộ dữ liệu JSON được gửi từ script benchmark.",
    "error.notFound.title": "Trang không tìm thấy",
    "error.notFound.description":
      "Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    "error.notFound.backHome": "Về trang chủ",
    "error.notFound.viewLeaderboard": "Xem bảng xếp hạng",
    "error.generic.title": "Đã xảy ra lỗi",
    "error.generic.description":
      "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
    "error.generic.retry": "Thử lại",
    "error.generic.backHome": "Về trang chủ",
  },
  en: {
    "header.brand": "tocdovps.dev",
    "header.nav.about": "Home",
    "header.nav.howItWorks": "How it works",
    "header.nav.leaderboard": "Leaderboard",
    "header.locale.vi": "VI",
    "header.locale.en": "EN",
    "hero.title": "Transparent VPS performance benchmarking",
    "hero.subtitle":
      "tocdovps.dev is a personal project to reveal the real-world performance of VPS plans – latency, network throughput, disk I/O – presented in a clear and honest way.",
    "hero.ctaPrimary": "Explore benchmarks (Coming soon)",
    "hero.ctaSecondary": "View latest benchmarks",
    "hero.ctaPrimaryNote": "Start benchmarking your VPS with tocdovps.dev.",
    "hero.scriptLabel": "Run benchmark on your VPS",
    "hero.copyButton": "Copy script",
    "hero.copiedButton": "Copied",
    "hero.benchmarkCount": "Total benchmarks: {count}",
    "features.title": "Features",
    "features.landingPage.title": "Landing page",
    "features.landingPage.description":
      "Homepage introducing the project and usage guide.",
    "features.leaderboard.title": "Benchmark results leaderboard",
    "features.leaderboard.description":
      "View detailed benchmark results with sorting and pagination.",
    "features.auth.title": "User authentication",
    "features.auth.description":
      "Sign in with credentials, Google, GitHub (coming soon).",
    "features.customScript.title": "Customizable script",
    "features.customScript.description":
      "Multiple speedtest and hardware options (coming soon).",
    "features.notifications.title": "Automatic notifications",
    "features.notifications.description":
      "Send results to Telegram, Discord, Email (coming soon).",
    "features.compare.title": "VPS comparison",
    "features.compare.description":
      "Compare performance between different VPS (coming soon).",
    "features.badge.available": "Available",
    "features.badge.comingSoon": "Coming soon",
    "banner.howItWorks.title": "How it works",
    "banner.howItWorks.step1.title": "Step 1 – Collect information",
    "banner.howItWorks.step1.body":
      "Select the VPS plan, provider, and test region.",
    "banner.howItWorks.step2.title": "Step 2 – Run the tests",
    "banner.howItWorks.step2.body":
      "Run latency, network throughput, and disk I/O tests on real environments.",
    "banner.howItWorks.step3.title": "Step 3 – Aggregate & rank",
    "banner.howItWorks.step3.body":
      "Normalize results, compute an overall score, and display them in an easy-to-read leaderboard.",
    "banner.demo.title": "Leaderboard demo (sample data)",
    "banner.demo.note":
      "This is demo data for the UI only, not real benchmark results yet.",
    "footer.note":
      "Personal project, real benchmarking features are under active development.",
    "footer.links.title": "Links",
    "footer.links.home": "Home",
    "footer.links.leaderboard": "Leaderboard",
    "footer.links.howItWorks": "How it works",
    "footer.social.title": "Connect",
    "footer.social.website": "hophamlam.com",
    "footer.copyright": "© {year} tocdovps.dev. Open source project.",
    "latestBenchmarks.title": "Latest benchmarks",
    "latestBenchmarks.description":
      "A few of the most recent runs reported by the CLI script.",
    "latestBenchmarks.table.time": "Time (UTC)",
    "latestBenchmarks.table.label": "Label",
    "latestBenchmarks.table.ping": "Avg ping (ms)",
    "latestBenchmarks.table.download": "Download (Mbps)",
    "latestBenchmarks.table.score": "Score",
    "latestBenchmarks.empty": "No benchmark results yet.",
    "latestBenchmarks.emptyDescription":
      "Run the benchmark script on your VPS to see results here.",
    "stats.subtitle":
      "Quick overview from benchmark runs that have been submitted.",
    "stats.totalRuns": "Total benchmark runs",
    "stats.avgScore": "Average score",
    "stats.avgDownload": "Average download speed",
    "leaderboard.title": "Leaderboard",
    "leaderboard.description":
      "View benchmark results sorted by score, download speed, ping, or date.",
    "leaderboard.sortBy": "Sort by",
    "leaderboard.sort.score": "Score",
    "leaderboard.sort.download": "Download",
    "leaderboard.sort.ping": "Ping",
    "leaderboard.sort.date": "Date",
    "leaderboard.table.time": "Time",
    "leaderboard.table.label": "Label",
    "leaderboard.table.ping": "Ping (ms)",
    "leaderboard.table.download": "Download (Mbps)",
    "leaderboard.table.score": "Score",
    "leaderboard.empty": "No benchmark results yet.",
    "leaderboard.emptyDescription":
      "Run the benchmark script on your VPS to see results here.",
    "leaderboard.pagination.showing": "Showing {start}-{end} of {total}",
    "leaderboard.pagination.previous": "Previous",
    "leaderboard.pagination.next": "Next",
    "result.title": "Benchmark Result Details",
    "result.description":
      "View detailed information and raw data for this benchmark run.",
    "result.backToLeaderboard": "Back to leaderboard",
    "result.summary.title": "Summary",
    "result.summary.time": "Time",
    "result.summary.serverLabel": "Server Label",
    "result.summary.avgPing": "Average Ping",
    "result.summary.downloadSpeed": "Download Speed",
    "result.summary.score": "Score",
    "result.summary.sourceIp": "Source IP",
    "result.rawPayload.title": "Raw Payload",
    "result.rawPayload.description":
      "Complete JSON data sent from the benchmark script.",
    "error.notFound.title": "Page Not Found",
    "error.notFound.description":
      "The page you're looking for doesn't exist or has been removed.",
    "error.notFound.backHome": "Back to Home",
    "error.notFound.viewLeaderboard": "View Leaderboard",
    "error.generic.title": "Something went wrong",
    "error.generic.description":
      "Sorry, an error occurred. Please try again later.",
    "error.generic.retry": "Try Again",
    "error.generic.backHome": "Back to Home",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type TranslationKeys = keyof (typeof translations)[Locale];

export function getTranslation(locale: Locale, key: TranslationKeys): string {
  return translations[locale][key] ?? translations.vi[key] ?? key;
}
