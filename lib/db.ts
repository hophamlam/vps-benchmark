import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(connectionString);

/**
 * Hàm helper thực thi câu lệnh SQL với @neondatabase/serverless
 * @param strings - template strings cho câu lệnh SQL
 * @param values - các giá trị bind vào câu lệnh
 * @returns Kết quả truy vấn từ Neon
 */
export const db = sql;


