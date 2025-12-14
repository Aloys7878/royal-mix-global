export interface Memory {
  userId: string;
  lastActions: string[];
  preferences?: Record<string, any>;
}
