export function float32ToInt16Base64(float32Samples) {
  if (!float32Samples || float32Samples.length === 0) {
    return "";
  }
  const int16 = new Int16Array(float32Samples.length);
  for (let i = 0; i < float32Samples.length; i++) {
    const clamped = Math.max(-1, Math.min(1, float32Samples[i]));
    int16[i] = clamped < 0 ? Math.round(clamped * 0x8000) : Math.round(clamped * 0x7fff);
  }
  const bytes = new Uint8Array(int16.buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export function base64PcmToFloat32(base64) {
  if (!base64 || typeof base64 !== "string") {
    return new Float32Array(0);
  }
  const binary = atob(base64);
  const byteLength = binary.length - (binary.length % 2);
  const sampleCount = byteLength / 2;
  const bytes = new Uint8Array(byteLength);
  for (let i = 0; i < byteLength; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const view = new DataView(bytes.buffer);
  const float32 = new Float32Array(sampleCount);
  for (let i = 0; i < sampleCount; i++) {
    const sample = view.getInt16(i * 2, true);
    float32[i] = sample < 0 ? sample / 0x8000 : sample / 0x7fff;
  }
  return float32;
}
