import test from "node:test";
import assert from "node:assert/strict";
import { base64PcmToFloat32, float32ToInt16Base64 } from "./audio";

test("float32ToInt16Base64 and base64PcmToFloat32 round-trip samples accurately", () => {
  const input = new Float32Array([0, 0.5, -0.5, 1, -1, 1.5, -1.5]);
  const encoded = float32ToInt16Base64(input);
  assert.ok(encoded.length > 0);

  const decoded = base64PcmToFloat32(encoded);
  assert.equal(decoded.length, input.length);
  assert.ok(Math.abs(decoded[0] - 0) < 0.001);
  assert.ok(Math.abs(decoded[1] - 0.5) < 0.001);
  assert.ok(Math.abs(decoded[2] - -0.5) < 0.001);
  assert.ok(Math.abs(decoded[3] - 1) < 0.001);
  assert.ok(Math.abs(decoded[4] - -1) < 0.001);
  // Clamped out-of-range values
  assert.ok(Math.abs(decoded[5] - 1) < 0.001);
  assert.ok(Math.abs(decoded[6] - -1) < 0.001);
});

test("audio PCM helpers handle empty inputs safely", () => {
  assert.equal(float32ToInt16Base64(new Float32Array(0)), "");
  assert.equal(float32ToInt16Base64(null), "");
  assert.equal(base64PcmToFloat32("").length, 0);
  assert.equal(base64PcmToFloat32(null).length, 0);
});
