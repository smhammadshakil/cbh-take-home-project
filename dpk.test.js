const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test('Returns "0" when event is falsy.', () => {
    expect(deterministicPartitionKey(null)).toBe('0');
    expect(deterministicPartitionKey(undefined)).toBe('0');
    expect(deterministicPartitionKey(false)).toBe('0');
    expect(deterministicPartitionKey(0)).toBe('0');
    expect(deterministicPartitionKey('')).toBe('0');
  });

  test('Returns the correct partitionKey when event.partitionKey is a falsy.', () => {
    const event = { partitionKey: '' };
    expect(deterministicPartitionKey(event)).not.toBe('');
    
    const event2 = { partitionKey: null };
    expect(deterministicPartitionKey(event2)).not.toBeNull();
    
    const event3 = { partitionKey: undefined };
    expect(deterministicPartitionKey(event3)).not.toBeUndefined();
    
    const event4 = { partitionKey: false };
    expect(deterministicPartitionKey(event4)).not.toBeFalsy();
    
    const event5 = { partitionKey: 0 };
    expect(deterministicPartitionKey(event4)).not.toBe(0);
  });

  test('Returns the correct partitionKey when event is provided.', () => {
    const event = { partitionKey: 'customKey' };
    expect(deterministicPartitionKey(event)).toBe('customKey');
  });

  test('Generates a hash-based partitionKey when event.partitionKey is not provided.', () => {
    const event = { data: 'some data' };
    const hash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  test('Generates a different hash-based partitionKey for different events.', () => {
    const event1 = { data: 'event 1' };
    const event2 = { data: 'event 2' };
    const partitionKey1 = deterministicPartitionKey(event1);
    const partitionKey2 = deterministicPartitionKey(event2);
    expect(partitionKey1).not.toBe(partitionKey2);
  });
});
