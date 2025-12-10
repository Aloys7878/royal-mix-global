import { LoginSchema } from "../utils/schema";
import { comparePassword } from "../utils/hash";
import { signToken } from "../utils/jwt";

export const handler = async (event: any) => {
  try {
    const body = JSON.parse(event.body);
    const parsed = LoginSchema.parse(body);

    const user = {}; // TODO: Replace with real DB query

    if (!user) {
      return { statusCode: 404, body: "User not found" };
    }

    const match = await comparePassword(parsed.password, user.password);

    if (!match) {
      return { statusCode: 401, body: "Wrong password" };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Logged in",
        token: signToken({ id: user.id, email: user.email }),
        user,
      }),
    };
  } catch (err: any) {
    return { statusCode: 400, body: err.toString() };
  }
};

