export async function useGlobalAI(payload: any) {
  const res = await fetch("/global-ai", {
    method: "POST",
    body: JSON.stringify(payload)
  });
  return res.json();
}
