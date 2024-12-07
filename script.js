
const bibleVerses = [
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "John 3:16 - For God so loved the world that he gave his one and only Son...",
  "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
  "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord...",
  "Romans 8:28 - And we know that in all things God works for the good of those who love him."
];

function getVerse() {
  const randomIndex = Math.floor(Math.random() * bibleVerses.length);
  const verseDisplay = document.getElementById("verse-display");
  verseDisplay.textContent = bibleVerses[randomIndex];
}
