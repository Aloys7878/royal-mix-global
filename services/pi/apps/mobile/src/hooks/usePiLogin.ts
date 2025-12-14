export async function usePiLogin() {
  // @ts-ignore
  const pi = window.Pi;
  const auth = await pi.authenticate(["username"], () => {});
  return auth.user;
}
