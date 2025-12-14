export async function createUser(userId: string, provider: string) {
  return {
    id: userId,
    provider,
    role: "user",
    createdAt: new Date(),
  };
}
