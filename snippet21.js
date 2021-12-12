function compareByLen(str1, str2) {
  return str2.length - str1.length;
}

console.log(
  ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
);
