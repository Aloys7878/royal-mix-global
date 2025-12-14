export async function uploadImage(file: any) {
  const res = await fetch("YOUR_API_URL/cloudinary/signature");
  const sig = await res.json();

  const form = new FormData();
  form.append("file", file);
  form.append("api_key", sig.apiKey);
  form.append("timestamp", sig.timestamp);
  form.append("signature", sig.signature);

  const upload = await fetch(
    `https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`,
    { method: "POST", body: form }
  );

  return upload.json();
}
