export const apiKeyGuard = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!key || key !== process.env.ROYAL_API_KEY) {
    return res.status(401).json({ success:false, message:"Invalid API Key" });
  }
  next();
};
