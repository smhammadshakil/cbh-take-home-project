const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const algorithm = "sha3-512";
  const digestFormat = "hex";
  let partitionKey = "0"; // default value
  
  if (event) {
    partitionKey = event.partitionKey ||
      crypto.createHash(algorithm).update(JSON.stringify(event)).digest(digestFormat);
  }
  return partitionKey;
};