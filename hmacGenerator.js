import crypto from "crypto";

export function getHMAC(key, message) {
  return crypto.createHmac("sha3-256", key).update(message).digest("hex");
}
