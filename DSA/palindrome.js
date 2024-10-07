//palindrom 
class Palindrome {
    constructor(str) {
      this.str = str;
    }
  
    isPalindrome() {
      // Helper function to normalize the string
      const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
      // Normalize the string
      const normalizedStr = normalize(this.str);
  
      // Check if the normalized string is equal to its reverse
      const reversedStr = normalizedStr.split('').reverse().join('');
      return normalizedStr === reversedStr;
    }
  }
  
  // Example usage:
  const str1 = "A man, a plan, a canal, Panama";
  const palindromeChecker1 = new Palindrome(str1);
  const result1 = palindromeChecker1.isPalindrome();
  console.log(result1); // Output: true
  
  const str2 = "hello";
  const palindromeChecker2 = new Palindrome(str2);
  const result2 = palindromeChecker2.isPalindrome();
  console.log(result2); // Output: false
  