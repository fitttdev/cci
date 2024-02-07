import { expect, test } from "bun:test";
import { HashTable } from '../dsa/hash_table'; 

test("HashTable set method should add a key-value pair", () => {
  const hashTable = new HashTable();
  hashTable.set('key1', 'value1');
  expect(hashTable.get('key1')).toBe('value1');
});

test("HashTable set method should update the value for an existing key", () => {
  const hashTable = new HashTable();
  hashTable.set('key1', 'value1');
  hashTable.set('key1', 'updatedValue1');
  expect(hashTable.get('key1')).toBe('updatedValue1');
});

test("HashTable get method should return the value for a given key", () => {
  const hashTable = new HashTable();
  hashTable.set('key1', 'value1');
  hashTable.set('key2', 'value2');
  expect(hashTable.get('key1')).toBe('value1');
  expect(hashTable.get('key2')).toBe('value2');
});

test("HashTable get method should return undefined for a non-existent key", () => {
  const hashTable = new HashTable();
  expect(hashTable.get('nonexistentKey')).toBeUndefined();
});

test("HashTable delete method should remove the value at the specified key", () => {
  const hashTable = new HashTable();
  hashTable.set('key1', 'value1');
  hashTable.delete('key1');
  expect(hashTable.get('key1')).toBeUndefined();
});

test("HashTable delete method should not throw an error for a non-existent key", () => {
  const hashTable = new HashTable();
  expect(() => hashTable.delete('nonexistentKey')).not.toThrow();
});
