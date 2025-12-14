export function suggestNext(action: string) {
  if (action === "image") return "video";
  if (action === "chat") return "image";
  return "chat";
}
