export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "ok",
      env: "testnet",
      service: "Royal Mix Global API",
      timestamp: new Date().toISOString()
    })
  };
};
