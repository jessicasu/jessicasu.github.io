// List of flashcards with English, Chinese character, and Cantonese (Jyutping-style)
const flashcards = [
    { english: "apple", chinese: "蘋果", cantonese: "ping4 gw2o" },
    { english: "book", chinese: "書", cantonese: "syu1" },
    { english: "school", chinese: "學校", cantonese: "hok6 haau6" },
    { english: "water", chinese: "水", cantonese: "seoi2" },
    { english: "friend", chinese: "朋友", cantonese: "pang4 jau5" },
    { english: "week", chinese: "星期", cantonese: "sing1 kei42" },
    { english: "year", chinese: "年", cantonese: "nin4" },
    { english: "today", chinese: "今日", cantonese: "gam1 jat6" },
    { english: "tomorrow", chinese: "聽日", cantonese: "ting1 jat6" },
    { english: "yesterday", chinese: "噚日", cantonese: "cam4 jat6" },
    { english: "calendar", chinese: "日曆", cantonese: "jat6 lik6" },
    { english: "o'clock", chinese: "點鐘", cantonese: "dim2 zung1" },
    { english: "use", chinese: "用", cantonese: "jung6" },
    { english: "laugh", chinese: "笑", cantonese: "siu3" },
    { english: "see", chinese: "睇", cantonese: "tai2" },
  ];
  
  let currentIndex = 0;
  
  // DOM references
  const flashcard = document.getElementById("flashcard");
  const englishWordEl = document.getElementById("englishWord");
  const cantoneseWordEl = document.getElementById("cantoneseWord");
  const nextBtn = document.getElementById("nextBtn");
  const playBtn = document.getElementById("playBtn");
  
  // Show the current flashcard content
  function showFlashcard() {
    const card = flashcards[currentIndex];
    englishWordEl.textContent = card.english;
    cantoneseWordEl.innerHTML = `
      <div><strong>Pronunciation:</strong> ${card.cantonese}</div>
      <div><strong>Character:</strong> ${card.chinese}</div>
    `;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  
  // Flip the card on click
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
  
  const flashcardInner = flashcard.querySelector('.flashcard-inner');

  nextBtn.addEventListener('click', () => {
    if (flashcard.classList.contains('flipped')) {
      // 1. Update front content immediately
      currentIndex = (currentIndex + 1) % flashcards.length;
      const card = flashcards[currentIndex];
      englishWordEl.textContent = card.english;
  
      // 2. Flip back to front
      flashcard.classList.remove('flipped');
  
      // 3. After flip animation finishes, update back content
      flashcardInner.addEventListener('transitionend', function handler() {
        flashcardInner.removeEventListener('transitionend', handler);
  
        cantoneseWordEl.innerHTML = `
          <div><strong>Pronunciation:</strong> ${card.cantonese}</div>
          <div><strong>Character:</strong> ${card.chinese}</div>
        `;
      });
  
    } else {
      // If showing front, just update both front and back immediately
      currentIndex = (currentIndex + 1) % flashcards.length;
      shuffleArray(flashcards);
      showFlashcard();
    }
  });
  
  
  
  // Play Cantonese audio (stop propagation so card doesn't flip)
  playBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Play button clicked");
    const card = flashcards[currentIndex];
    responsiveVoice.speak(card.chinese, "Chinese (Hong Kong) Female");
  });
  
  // Initial display
  shuffleArray(flashcards);
  showFlashcard();
  