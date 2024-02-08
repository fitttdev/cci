// 1. Using Array
export class ArrayHashTable {
  private table: Array<Array<[string, any]>>
  private size: number

  constructor(size: number = 100) {
    this.table = new Array(size);
    this.size = size;
  }

  public set(key: string, value: any): void {
    let index = this.hash(key);

    // Assign empty bucket if there is nothing at this
    // particular index at this point, meaning, setting
    // for the first time.
    if (this.table[index] === undefined) {
      this.table[index] = [];
    }

    let bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  public get(key: string): any {
    let index = this.hash(key);
    let bucket = this.table[index];

    // nothing at this index at this point
    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        // Found the value
        return bucket[i][1];
      }
    }
    return undefined;
  }

  public delete(key: string): any {
    let index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
    return undefined;
  }

  public clear(): void {
    this.table = new Array(this.size);
  }

  // Calculates the hash code for the given key to
  // determine its storage index. The hash code is 
  // computed as the:
  // sum of ASCII values of each character modulo the size.
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
}

// 2. Balanced Binary Treee
export class BalancedBTreeHashTable {
  // Implement
}