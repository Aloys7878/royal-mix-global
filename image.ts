export async function generateImage(prompt: string) {
  return {
    url: "https://cloudinary.com/generated-image",
    prompt,
  };
}

