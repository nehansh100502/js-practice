// anagram 
class Anagram {
    constructor(str1, str2) {
      this.str1 = str1;
      this.str2 = str2;
    }
  
    areAnagrams() {
      // Helper function to normalize the strings
      const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
      // Normalize the strings
      const normalizedStr1 = normalize(this.str1);
      const normalizedStr2 = normalize(this.str2);
  
      // If the lengths are not the same, they cannot be anagrams
      if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
      }
  
      // Create a character frequency map for the first string
      const charCount = {};
      for (let char of normalizedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
  
      // Compare the character frequency map with the second string
      for (let char of normalizedStr2) {
        if (!charCount[char]) {
          return false;
        }
        charCount[char]--;
        if (charCount[char] < 0) {
          return false;
        }
      }
  
      return true;
    }
  }
  
  // Example usage:
  const str1 = "listen";
  const str2 = "silent";
  const anagramChecker = new Anagram(str1, str2);
  const result = anagramChecker.areAnagrams();
  console.log(result); // Output: true
  
  const str3 = "hello";
  const str4 = "billion";
  const anagramChecker2 = new Anagram(str3, str4);
  const result2 = anagramChecker2.areAnagrams();
  console.log(result2); // Output: false
  //
