import assert from "node:assert/strict";
import test from "node:test";

test("the package reports that it is reserved", async () => {
  await assert.rejects(
    import("../index.js"),
    /reserved by Tenzir.*installation instructions/,
  );
});
