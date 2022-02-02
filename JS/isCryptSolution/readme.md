# Is [crypt solution](https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H/description)

## Instructions:

- Need to see if the crypt sent is valid.
- parameters:
  1. crypt: This is an array of 3 words.
  2. solution: This is the cypher key to the words
- returns:

  - true: if the first two words are decoded from solution and equal the third word that is also decoded
  - false: any trailing zeros or the two words decoded are not equal to the third decoded.

- ex:

  - crypt = ["SEND", "MORE", "MONEY"]
  - solution = [['O', '0'],
  ['M', '1'],
  ['Y', '2'],
  ['E', '5'],
  ['N', '6'],
  ['D', '7'],
  ['R', '8'],
  ['S', '9']]

  - output true 9567 + 1085 = 10652
