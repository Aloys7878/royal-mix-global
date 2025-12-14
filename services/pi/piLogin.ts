export async function piLogin(piUser: any) {
  return {
    piUserId: piUser.uid,
    name: piUser.username,
    verified: true
  };
}
