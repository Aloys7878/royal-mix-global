import { RegisterSchema } from "../utils/schema";
import { hashPassword } from "../utils/hash";
import { signToken } from "../utils/jwt";

export const handler = async (event: any) => {
  try {
    const body = JSON.parse(event.body);
    const parsed = RegisterSchema.parse(body);

    const hashed = await hashPassword(parsed.password);

    const user = {
      id: Date.now().toString(),
      email: parsed.email,
      password: hashed,
      name: parsed.name,
      createdAt: Date.now(),
    };

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "User registered",
        token: signToken({ id: user.id, email: user.email }),
        user,
      }),
    };
  } catch (err: any) {
    return { statusCode: 400, body: err.toString() };
  }
};
