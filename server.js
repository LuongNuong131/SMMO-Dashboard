const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// CẤU HÌNH
const CONFIG = {
  // Lấy key từ biến môi trường của Vercel
  API_KEY:
    process.env.SMMO_API_KEY ||
    "WheDlZJpvB7C01xLyMaBe4ezeZeWBQCBUEYx5yr9BNRWLMtCyT61kXRzq9idLYCaYq0E12S9nqwv1N7l",
  MY_ID: 1283624,
  API_URL: "https://api.simple-mmo.com/v1",
};

app.use(cors());
app.use(express.static("public"));

// ROUTE API (Dùng Regex để fix lỗi path-to-regexp)
app.get(/^\/api\/proxy\/(.*)/, async (req, res) => {
  try {
    const endpoint = req.params[0];
    console.log(`[Proxy] Requesting: ${endpoint}`);

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
