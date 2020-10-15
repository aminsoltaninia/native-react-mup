import Constants from "expo-constants";

const { manifest } = Constants;

console.log(`http://${manifest.debuggerHost.split(':').shift()}:3000`)
export const baseUrl = `https://${manifest.debuggerHost.split(':').shift()}:3000`;
