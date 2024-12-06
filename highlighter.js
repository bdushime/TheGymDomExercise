document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("myParagraph");
    const text = paragraph.innerText;

    const removePunctuation = (word) => {
        const punctuation = [".", ",", ";", ":", "!", "?", "(", ")", "[", "]", "\"", "'"];
        return word.split("").filter(char => !punctuation.includes(char)).join("");
    };

    const words = text.split(" ").map(word => removePunctuation(word).trim());

    const wordFrequency = {};
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        wordFrequency[lowerCaseWord] = (wordFrequency[lowerCaseWord] || 0) + 1;
    });

    const mostFrequentWords = Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([word]) => word);

    const highlightedHTML = words
        .map(word => {
            const lowerCaseWord = word.toLowerCase();
            if (mostFrequentWords.includes(lowerCaseWord)) {
                let formattedWord = `<span style="background-color: yellow;">${word}</span>`;
                if (word[0] === word[0].toUpperCase() && isNaN(word[0])) {
                    formattedWord = `<span style="background-color: yellow; text-decoration: underline;">${word}</span>`;
                }
                return formattedWord;
            }
            return word;
        })
        .join(" ");

    paragraph.innerHTML = highlightedHTML;
});
