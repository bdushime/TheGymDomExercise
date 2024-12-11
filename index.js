document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.getElementById('myParagraph'); // Correct method
  const text = paragraph.textContent; // Access text content

  // Function to remove punctuation
  const removePunctuation = (word) => {
      const punctuation = [".", ",", ";", ":", "!", "?", "(", ")", "[", "]", "\"", "'"];
      return word.split('').filter((char) => !punctuation.includes(char)).join('');
  };

  // Split text into words and remove punctuation
  const words = text.split(' ').map((element) => removePunctuation(element).trim());

  // Function to find duplicates
  const findDuplicates = (wordArray) => {
      const wordCount = {};
      const duplicates = [];

      for (const word of wordArray) {
          wordCount[word] = (wordCount[word] || 0) + 1;
      }

      for (const word in wordCount) {
          if (wordCount[word] > 1) {
              duplicates.push(word);
          }
      }
      return duplicates.slice(0, 5); // Return top 5 duplicates
  };

  const wordFrequency = findDuplicates(words); // Find most frequent words

  // Highlight the most frequent words
  let updatedContent = paragraph.innerHTML; // Get the existing HTML content
  wordFrequency.forEach((word) => {
      // Replace word globally with highlighted version
      const regex = new RegExp(`\\b${word}\\b`, 'g'); // Match whole word
      updatedContent = updatedContent.replace(regex, `<span style="background-color: yellow;">${word}</span>`);
  });

  paragraph.innerHTML = updatedContent; // Update paragraph content with highlighted words
});
