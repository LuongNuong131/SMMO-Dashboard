const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path"); // <-- BỔ SUNG: Thêm module path

const app = express();
const PORT = process.env.PORT || 3000;

// CẤU HÌNH (Key cứng đã được chèn lại theo yêu cầu)
const CONFIG = {
  // Lấy key từ biến môi trường của Vercel hoặc dùng key cứng
  API_KEY:
    process.env.SMMO_API_KEY ||
    "WheDlZJpvB7C01xLyMaBe4ezeZeWBQCBUEYx5yr9BNRWLMtCyT61kXRzq9idLYCaYq0E12S9nqwv1N7l",
  MY_ID: 1283624,
  API_URL: "https://api.simple-mmo.com/v1",
};

app.use(cors());
app.use(express.static("public"));

// <-- BỔ SUNG: ROUTE HANDLER TƯỜNG MINH CHO ĐƯỜNG DẪN GỐC (/)
app.get("/", (req, res) => {
  // Chỉ định chính xác đường dẫn tuyệt đối đến index.html
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// ----------------------------------------------------

// ROUTE API (Dùng Regex để fix lỗi path-to-regexp)
app.get(/^\/api\/proxy\/(.*)/, async (req, res) => {
  try {
    const endpoint = req.params[0];
    console.log(`[Proxy] Requesting: ${endpoint}`);

    // Kiểm tra API Key đã được cấu hình chưa
    if (!CONFIG.API_KEY) {
      return res.status(500).json({ error: "API Key not configured." });
    }

    const params = new URLSearchParams();
    params.append("api_key", CONFIG.API_KEY);

    const response = await axios.post(`${CONFIG.API_URL}/${endpoint}`, params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    res.json(response.data);
  } catch (error) {
    const msg = error.response?.data?.error || error.message;
    console.error(`[Proxy Error]:`, msg);
    res.status(500).json({ error: msg });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
