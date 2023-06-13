# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Change the candidate variable name to partitionKey it was not the right choice for the variable name.
2. Removed if where data type "string" checked for the variable it was unnecessary.
3. I did a research on sha3-512 and digest('hex') so removed MAX_PARTITION_KEY_LENGTH=256 because checking length was useless as sha3-512 with digest('hex') return hash with the length of 128.
4. Also reduced code line by replacing additionally nested if with a simple ternary operator.
5. Also removed TRIVIAL_PARTITION_KEY and initialized partitionKey with "0".
6. Also used proper name e.g algorithm and digestFormat it make code more readable.
7. Add code comments where necessary.
8. Code is quite readable, any developer can understand that the function task is to return either the event partition key or newly created partition key or the default partition key.