import { expect, test } from "bun:test";
import { URIfy } from "../urlify";

test("replaces spaces with '%20'", () => {
  const input = "Mr John Smith ";
  const expectedOutput = "Mr%20John%20Smith";
  const actualOutput = URIfy(input, input.length);
  expect(actualOutput).toEqual(expectedOutput);
});

test("does not modify non-space characters", () => {
  const input = "HelloWorld!";
  const expectedOutput = "HelloWorld!";
  const actualOutput = URIfy(input, input.length);
  expect(actualOutput).toEqual(expectedOutput);
});

test("handles empty strings", () => {
  const input = "";
  const expectedOutput = "";
  const actualOutput = URIfy(input, input.length);
  expect(actualOutput).toEqual(expectedOutput);
});

test("handles strings with leading spaces", () => {
  const input = "   Hello World!";
  const expectedOutput = "%20%20%20Hello%20World!";
  const actualOutput = URIfy(input, input.length);
  expect(actualOutput).toEqual(expectedOutput);
});

test("handles strings with trailing spaces", () => {
  const input = "Hello World!   ";
  const expectedOutput = "Hello%20World!";
  const actualOutput = URIfy(input, input.length);
  expect(actualOutput).toEqual(expectedOutput);
});
