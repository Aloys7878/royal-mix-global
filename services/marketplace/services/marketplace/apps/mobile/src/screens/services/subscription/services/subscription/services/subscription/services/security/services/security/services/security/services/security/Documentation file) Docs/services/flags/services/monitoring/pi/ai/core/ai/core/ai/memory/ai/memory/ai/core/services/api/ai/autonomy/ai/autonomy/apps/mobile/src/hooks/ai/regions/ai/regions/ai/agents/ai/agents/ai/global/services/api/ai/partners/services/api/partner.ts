export async function handler(event: any) {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      accepted: true,
      federation: "Royal Mix Global",
      region: body.region
    })
  };
    }
