import Constants from "expo-constants";

export const Runtime = {
  env: Constants.expoConfig?.extra?.env ?? "development",
  apiBaseUrl: Constants.expoConfig?.extra?.apiBaseUrl,
  piEnv: Constants.expoConfig?.extra?.piEnv
};
