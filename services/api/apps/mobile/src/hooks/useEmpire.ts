export async function useEmpire(signal: any) {
  const res = await fetch("/empire", {
    method: "POST",
    body: JSON.stringify(signal)
  });
  return res.json();
}

