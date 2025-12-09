export const RoyalImageGen = async (prompt: string) => {
  return {
    url: `https://cdn.royalmixglobal.com/generated/${encodeURIComponent(
      prompt
    )}.jpg`
  };
};
