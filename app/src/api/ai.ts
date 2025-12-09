export const sendToAI = async (message: string) => {
  const res = await fetch("https://api.royalmixglobal.com/ai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  return res.json();
};
