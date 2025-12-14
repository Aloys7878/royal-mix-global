export function can(role: string, action: keyof typeof PERMISSIONS) {
  return PERMISSIONS[action]?.includes(role);
}
