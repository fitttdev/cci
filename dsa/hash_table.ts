class HashTable {
  insert(): string {
    return "Inserted";
  }

  read(): string {
    return "Read";
  }


  delete(): string {
    return "Deleted";
  }

  clear(): string {
    return "Cleared all the K:V";
  }
}

const c = new HashTable();
console.log(c.insert());
console.log(c.read());

