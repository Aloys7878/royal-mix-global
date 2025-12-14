import crypto from "crypto";

export const handler = async () => {
  const timestamp = Math.floor(Date.now() / 1000);
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
  const apiKey = process.env.CLOUDINARY_API_KEY!;
  const apiSecret = process.env.CLOUDINARY_API_SECRET!;

  const signature = crypto
    .createHash("sha1")
    .update(`timestamp=${timestamp}${apiSecret}`)
    .digest("hex");

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      cloudName,
      apiKey,
      timestamp,
      signature,
    }),
  };
};
