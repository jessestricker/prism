import assert from "node:assert/strict";
import { suite, test } from "node:test";

import { LabColorBase, RgbColorBase, XyzColorBase } from "../src/base.ts";

await suite("LabColorBase", () => {
  test("values returns l,a,b", () => {
    const lab = new (class extends LabColorBase {})(1, 2, 3);
    assert.deepEqual(lab.values, [1, 2, 3]);
  });
});

await suite("RgbColorBase", () => {
  test("values returns l,a,b", () => {
    const rgb = new (class extends RgbColorBase {})(1, 2, 3);
    assert.deepEqual(rgb.values, [1, 2, 3]);
  });
});

await suite("XyzColorBase", () => {
  test("values returns l,a,b", () => {
    const xyz = new (class extends XyzColorBase {})(1, 2, 3);
    assert.deepEqual(xyz.values, [1, 2, 3]);
  });
});
