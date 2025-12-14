export async function useRoyalAI(task: any) {
  const res = await fetch("/ai", {
    method: "POST",
    body: JSON.stringify(task)
  });

  return res.json();
}

