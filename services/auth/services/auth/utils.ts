
import bcrypt from "bcryptjs";

export const hashPassword = async (pass: string) => {
  return await bcrypt.hash(pass, 10);
};

export const verifyPassword = async (pass: string, hash: string) => {
  return await bcrypt.compare(pass, hash);
};
