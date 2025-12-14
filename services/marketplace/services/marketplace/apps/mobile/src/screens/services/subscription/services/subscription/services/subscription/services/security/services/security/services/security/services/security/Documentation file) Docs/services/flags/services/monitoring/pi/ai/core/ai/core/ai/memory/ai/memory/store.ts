const memoryDB = new Map<string, any>();

export function saveMemory(userId: string, data: any) {
  memoryDB.set(userId, data);
}

export function loadMemory(userId: string) {
  return memoryDB.get(userId);
}
