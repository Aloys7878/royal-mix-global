export async function generateImage(prompt: string) {
  if (!prompt) {
    return { error: "Prompt required" };
  }

  return {
    success: true,
    type: "image",
    prompt,
    imageUrl: "https://placehold.co/1024x1024?text=Royal+Mix+AI",
    createdAt: new Date().toISOString(),
  };
}
