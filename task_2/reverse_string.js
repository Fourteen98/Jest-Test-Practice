// Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
export default function reverseString(string) {
  return string.split('').reverse().join('');
}