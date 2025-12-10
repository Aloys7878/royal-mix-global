export const useAI = () => {
  const generateImage = async (prompt: string) => {
    const res = await fetch("YOUR_AI_IMAGE_ENDPOINT", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
    return res.json();
  };

  return { generateImage };
};
