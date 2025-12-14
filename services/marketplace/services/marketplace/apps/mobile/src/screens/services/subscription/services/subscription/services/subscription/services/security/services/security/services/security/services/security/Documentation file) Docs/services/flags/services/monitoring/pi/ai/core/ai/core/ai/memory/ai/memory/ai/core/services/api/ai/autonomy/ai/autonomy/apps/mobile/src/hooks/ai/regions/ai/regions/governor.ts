import { Region } from "./regions";

export function regionalGovernor(region: Region) {
  return {
    region,
    languagePriority:
      region === "AFRICA" ? ["en", "fr", "sw"] :
      region === "EUROPE" ? ["en", "fr", "de"] :
      ["en"],
    aiPolicy: "localized-optimization"
  };
}
