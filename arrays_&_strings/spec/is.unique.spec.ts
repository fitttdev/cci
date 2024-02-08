import { expect, test } from "bun:test";
import isUnique from "../is.unique";

test("isUnique returns true for strings with unique characters", () => {
  const result = isUnique('abc');
  expect(result).toBe(true);
});

test("isUnique returns false for strings with duplicate characters", () => {
  const result = isUnique('aab');
  expect(result).toBe(false);
});

test("isUnique returns true for empty strings", () => {
  const result = isUnique('');
  expect(result).toBe(true);
});
