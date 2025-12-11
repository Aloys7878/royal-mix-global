import crypto from "crypto";

export const verifyPiSignature = (payload: any, signature: string, publicKey: string) => {
  const verifier = crypto.createVerify("SHA256");
  verifier.update(JSON.stringify(payload));
  verifier.end();

  return verifier.verify(publicKey, signature, "base64");
};
