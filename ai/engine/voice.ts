export async function generateVoice(text: string) {
  if (!text) {
    return { error: "Text required" };
  }

  return {
    success: true,
    type: "voice",
    audioUrl: "https://example.com/royal-mix-voice.mp3",
    text,
  };
}
