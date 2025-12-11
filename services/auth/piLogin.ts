import { verifyPiSignature } from "../../pi/pi-auth/verifySignature";
import { decodePiUser } from "../../pi/pi-auth/decodeUser";

export const handler = async (event: any) => {
  try {
    const { payload, signature } = JSON.parse(event.body);

    const valid = verifyPiSignature(payload, signature, process.env.PI_PUBLIC_KEY!);
    if (!valid) return { statusCode: 403, body: "Invalid signature" };

    const user = decodePiUser(payload.user);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        user,
      }),
    };
  } catch (err: any) {
    return { statusCode: 500, body: err.toString() };
  }
};
