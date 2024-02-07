export class HashTable {
  private table: Array<Array<[string, any]>>;
  private size: number;

  constructor(size: number = 100) {
    this.table = new Array(size);
    this.size = size;
  }

  public set(key: string, value: any): void {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  public get(key: string): any {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  public delete(key: string): void {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
}
