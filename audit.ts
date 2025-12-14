export function audit(action: string, actor: string) {
  return {
    action,
    actor,
    time: new Date(),
  };
}
