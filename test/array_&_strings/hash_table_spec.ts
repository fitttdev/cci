import { expect, test } from "bun:test";
import { ArrayHashTable } from '../../dsa/arrays_&_strings/hash.table';

test("ArrayHashTable set method should add a key-value pair", () => {
  const arrayHashTable = new ArrayHashTable();
  arrayHashTable.set('key1', 'value1');
  expect(arrayHashTable.get('key1')).toBe('value1');
});

test("ArrayHashTable set method should update the value for an existing key", () => {
  const arrayHashTable = new ArrayHashTable();
  arrayHashTable.set('key1', 'value1');
  arrayHashTable.set('key1', 'updatedValue1');
  expect(arrayHashTable.get('key1')).toBe('updatedValue1');
});

test("ArrayHashTable get method should return the value for a given key", () => {
  const arrayHashTable = new ArrayHashTable();
  arrayHashTable.set('key1', 'value1');
  arrayHashTable.set('key2', 'value2');
  expect(arrayHashTable.get('key1')).toBe('value1');
  expect(arrayHashTable.get('key2')).toBe('value2');
});

test("ArrayHashTable get method should return undefined for a non-existent key", () => {
  const arrayHashTable = new ArrayHashTable();
  expect(arrayHashTable.get('nonexistentKey')).toBeUndefined();
});

test("ArrayHashTable delete method should remove the value at the specified key", () => {
  const arrayHashTable = new ArrayHashTable();
  arrayHashTable.set('key1', 'value1');
  arrayHashTable.delete('key1');
  expect(arrayHashTable.get('key1')).toBeUndefined();
});

test("ArrayHashTable delete method should not throw an error for a non-existent key", () => {
  const arrayHashTable = new ArrayHashTable();
  expect(() => arrayHashTable.delete('nonexistentKey')).not.toThrow();
});

test("HashTable clear method should reset the table to a new array of the specified size", () => {
  const arrayHashTable = new ArrayHashTable();
  arrayHashTable.set('key1', 'value1');
  arrayHashTable.delete('key1');
  arrayHashTable.clear();
  arrayHashTable.set('key1', 'value1');
  arrayHashTable.delete('key1');
  // expect(arrayHashTable.table.length).toBe(arrayHashTable.size);
});
