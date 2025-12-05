/**
 * Kiểu dữ liệu payload chi tiết mà script benchmark gửi lên
 * - Chứa thông tin ping, download và các trường có thể mở rộng sau này
 */
export type BenchmarkDownloadInfo = {
  /**
   * URL dùng để tải file test
   */
  url: string;
  /**
   * Tốc độ download trung bình (Mbps)
   */
  speedMbps: number;
  /**
   * Thời gian tải file (giây)
   */
  timeSeconds: number;
};

export type BenchmarkPayload = {
  /**
   * Danh sách host được dùng để đo ping
   */
  pingTargets: string[];
  /**
   * Ping trung bình qua tất cả host (ms)
   */
  avgPingMs: number;
  /**
   * Thông tin chi tiết bài test download
   */
  download: BenchmarkDownloadInfo;
  /**
   * Cho phép chứa thêm field khác trong tương lai mà không làm vỡ type
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: unknown;
};

/**
 * Kiểu sort cho leaderboard và các truy vấn liên quan
 * - Dùng chung giữa API, pages và components
 */
export type BenchmarkSortBy = "score" | "download" | "ping" | "date";

/**
 * Kiểu summary cho một benchmark run để hiển thị trên leaderboard
 * - Đã được chuẩn hóa về kiểu number / string để dùng trực tiếp ở UI
 */
export type BenchmarkRunSummary = {
  /**
   * ID của lần benchmark trong DB
   */
  id: string;
  /**
   * Thời gian tạo record (ISO string)
   */
  createdAt: string;
  /**
   * Nhãn server do user đặt (có thể null)
   */
  serverLabel: string | null;
  /**
   * Ping trung bình (ms) đã parse sang number, có thể null
   */
  avgPingMs: number | null;
  /**
   * Tốc độ download trung bình (Mbps) đã parse sang number, có thể null
   */
  downloadMbps: number | null;
  /**
   * Điểm tổng hợp (0–10) đã parse sang number, có thể null
   */
  score: number | null;
};



