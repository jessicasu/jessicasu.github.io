// List of flashcards with English, Chinese character, and Cantonese (Jyutping-style)
const flashcards = [
    { english: "Apple", chinese: "蘋果", cantonese: "ping4 gw2o" },
    { english: "Book", chinese: "書", cantonese: "syu1" },
    { english: "School", chinese: "學校", cantonese: "hok6 haau6" },
    { english: "Water", chinese: "水", cantonese: "seoi2" },
    { english: "Friend", chinese: "朋友", cantonese: "pang4 jau5" },
    { english: "Week", chinese: "星期", cantonese: "sing1 kei42" },
    { english: "Year", chinese: "年", cantonese: "nin4" },
    { english: "Today", chinese: "今日", cantonese: "gam1 jat6" },
    { english: "Tomorrow", chinese: "聽日", cantonese: "ting1 jat6" },
    { english: "Yesterday", chinese: "噚日", cantonese: "cam4 jat6" },
    { english: "Calendar", chinese: "日曆", cantonese: "jat6 lik6" },
    { english: "O'Clock", chinese: "點鐘", cantonese: "dim2 zung1" },
    { english: "Use", chinese: "用", cantonese: "jung6" },
    { english: "Laugh", chinese: "笑", cantonese: "siu3" },
    { english: "See", chinese: "睇", cantonese: "tai2" },
    { english: "I / Me", chinese: "我", cantonese: "ngo5" },
    { english: "You", chinese: "你", cantonese: "nei5" },
    { english: "He / She / Him / Her", chinese: "佢", cantonese: "keoi5" },
    { english: "We / Us", chinese: "我哋", cantonese: "ngo5 dei6" },
    { english: "They / Them", chinese: "佢哋", cantonese: "keoi5 dei6" },
    { english: "This", chinese: "呢個", cantonese: "ni1 go3" },
    { english: "That", chinese: "嗰個", cantonese: "go2 go3" },
    { english: "Here", chinese: "呢度", cantonese: "ni1 dou6" },
    { english: "There", chinese: "嗰度", cantonese: "go2 dou6" },
    { english: "What", chinese: "乜嘢", cantonese: "mat1 je5" },
    { english: "Where", chinese: "邊度", cantonese: "bin1 dou6" },
    { english: "Why", chinese: "點解", cantonese: "dim2 gaai2" },
    { english: "How", chinese: "點樣", cantonese: "dim2 joeng2" },
    { english: "Yes", chinese: "係", cantonese: "hai6" },
    { english: "No / Not", chinese: "唔係", cantonese: "m4 hai6" },
    { english: "Want", chinese: "想", cantonese: "soeng2" },
    { english: "Have", chinese: "有", cantonese: "jau5" },
    { english: "Don’t have", chinese: "冇", cantonese: "mou5" },
    { english: "Can / Able to", chinese: "可以", cantonese: "ho2 ji5" },
    { english: "Need", chinese: "要", cantonese: "jiu3" },
    { english: "Go", chinese: "去", cantonese: "heoi3" },
    { english: "Come", chinese: "嚟", cantonese: "lai4" },
    { english: "Eat", chinese: "食", cantonese: "sik6" },
    { english: "Drink", chinese: "飲", cantonese: "jam2" },
    { english: "Sleep", chinese: "訓覺", cantonese: "fan3 gaau3" },
    { english: "Speak", chinese: "講", cantonese: "gong2" },
    { english: "Listen", chinese: "聽", cantonese: "teng1" },
    { english: "Look / See", chinese: "睇", cantonese: "tai2" },
    { english: "Do / Make", chinese: "做", cantonese: "zou6" },
    { english: "Know", chinese: "知", cantonese: "zi1" },
    { english: "Don’t know", chinese: "唔知", cantonese: "m4 zi1" },
    { english: "Happy", chinese: "開心", cantonese: "hoi1 sam1" },
    { english: "Sad", chinese: "唔開心", cantonese: "m4 hoi1 sam1" },
    { english: "Hot", chinese: "熱", cantonese: "jit6" },
    { english: "Cold", chinese: "凍", cantonese: "dung3" },
    { english: "Big", chinese: "大", cantonese: "daai6" },
    { english: "Small", chinese: "細", cantonese: "sai3" },
    { english: "Good", chinese: "好", cantonese: "hou2" },
    { english: "Bad", chinese: "差", cantonese: "caa1" },
    { english: "Expensive", chinese: "貴", cantonese: "gwai3" },
    { english: "Cheap", chinese: "平", cantonese: "peng4" },
    { english: "Beautiful", chinese: "靚", cantonese: "leng3" },
    { english: "Fast", chinese: "快", cantonese: "faai3" },
    { english: "Slow", chinese: "慢", cantonese: "maan6" },
    { english: "Busy", chinese: "忙", cantonese: "mong4" },
    { english: "Free / Not busy", chinese: "得閒", cantonese: "dak1 haan4" },
  ];
  
const phraseCards = [
{ english: "Hello / Hi", chinese: "你好", cantonese: "nei5 hou2" },
{ english: "How are you?", chinese: "你好嗎？", cantonese: "nei5 hou2 maa3?" },
{ english: "Thank you (for service)", chinese: "唔該", cantonese: "m4 goi1" },
{ english: "Thank you (for gift or favor)", chinese: "多謝", cantonese: "do1 ze6" },
{ english: "You're welcome", chinese: "唔使客氣", cantonese: "m4 sai2 haak3 hei3" },
{ english: "Good morning", chinese: "早晨", cantonese: "zou2 san4" },
{ english: "Sorry", chinese: "對唔住", cantonese: "deoi3 m4 zyu6" },
{ english: "Goodbye", chinese: "再見", cantonese: "zoi3 gin3" },
{ english: "I don’t understand", chinese: "我唔明", cantonese: "ngo5 m4 ming4" },
{ english: "I love you", chinese: "我愛你", cantonese: "ngo5 oi3 nei5" },
{ english: "What is this?", chinese: "呢個係乜嘢？", cantonese: "ni1 go3 hai6 mat1 je5?" },
{ english: "Can you help me?", chinese: "你可唔可以幫我？", cantonese: "nei5 ho2 m4 ho2 ji5 bong1 ngo5?" },
{ english: "How much is it?", chinese: "幾多錢？", cantonese: "gei2 do1 cin2?" },
{ english: "Excuse me", chinese: "唔好意思", cantonese: "m4 hou2 ji3 si1" },
{ english: "Where is the bathroom?", chinese: "洗手間喺邊？", cantonese: "sai2 sau2 gaan1 hai2 bin1?" },
{ english: "What's your name?", chinese: "你叫咩名？", cantonese: "nei5 giu3 me1 meng2?" },
{ english: "My name is...", chinese: "我叫...", cantonese: "ngo5 giu3..." },
{ english: "Nice to meet you", chinese: "好高興見到你", cantonese: "hou2 gou1 hing3 gin3 dou2 nei5" },
{ english: "I’m hungry", chinese: "我肚餓", cantonese: "ngo5 tou5 ngo6" },
{ english: "I’m tired", chinese: "我攰", cantonese: "ngo5 gui6" },
{ english: "I’m happy", chinese: "我開心", cantonese: "ngo5 hoi1 sam1" },
{ english: "No problem", chinese: "冇問題", cantonese: "mou5 man6 tai4" },
{ english: "Where are you going?", chinese: "你去邊度？", cantonese: "nei5 heoi3 bin1 dou6?" },
{ english: "I don’t know", chinese: "我唔知道", cantonese: "ngo5 m4 zi1 dou3" },
{ english: "Can I ask a question?", chinese: "可唔可以問一問？", cantonese: "ho2 m4 ho2 ji5 man6 jat1 man6?" },
{ english: "Just a moment", chinese: "等一陣", cantonese: "dang2 jat1 zan6" },
{ english: "I’m learning Cantonese", chinese: "我學緊廣東話", cantonese: "ngo5 hok6 gan2 gwong2 dung1 waa2" },
{ english: "Can you speak English?", chinese: "你識唔識講英文？", cantonese: "nei5 sik1 m4 sik1 gong2 jing1 man2?" },
{ english: "Let’s go!", chinese: "我哋走啦！", cantonese: "ngo5 dei6 zau2 laa1!" },
{ english: "Don’t worry", chinese: "唔使擔心", cantonese: "m4 sai2 daam1 sam1" },
{ english: "Good night", chinese: "早唞", cantonese: "zou2 tau2" },
{ english: "See you later", chinese: "遲啲見", cantonese: "ci4 di1 gin3" },
{ english: "See you tomorrow", chinese: "聽日見", cantonese: "ting1 jat6 gin3" },
{ english: "It's okay / Never mind", chinese: "冇所謂", cantonese: "mou5 so2 wai6" },
{ english: "Wait a moment", chinese: "等一等", cantonese: "dang2 jat1 dang2" },
{ english: "Too expensive", chinese: "太貴啦", cantonese: "taai3 gwai3 laa1" },
{ english: "Do you understand?", chinese: "你明唔明？", cantonese: "nei5 ming4 m4 ming4?" },
{ english: "I understand", chinese: "我明", cantonese: "ngo5 ming4" },
{ english: "I don’t understand", chinese: "我唔明", cantonese: "ngo5 m4 ming4" },
{ english: "What time is it?", chinese: "而家幾點？", cantonese: "ji4 gaa1 gei2 dim2?" },
{ english: "I’m fine", chinese: "我冇事", cantonese: "ngo5 mou5 si6" },
{ english: "Be careful", chinese: "小心啲", cantonese: "siu2 sam1 di1" },
{ english: "I like it", chinese: "我鍾意", cantonese: "ngo5 zung1 ji3" },
{ english: "I don’t like it", chinese: "我唔鍾意", cantonese: "ngo5 m4 zung1 ji3" },
{ english: "Let me try", chinese: "等我試下", cantonese: "dang2 ngo5 si3 haa5" }
];

let activeSet = [...flashcards];
let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const flashcardInner = flashcard.querySelector(".flashcard-inner");
const englishWordEl = document.getElementById("englishWord");
const cantoneseWordEl = document.getElementById("cantoneseWord");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");

// Shuffle helper
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}

// Show content
function showFlashcard() {
const card = activeSet[currentIndex];
englishWordEl.textContent = card.english;
cantoneseWordEl.innerHTML = `
    <div><strong>Pronunciation:</strong> ${card.cantonese}</div>
    <div><strong>Character:</strong> ${card.chinese}</div>
`;
}

// Flip
flashcard.addEventListener("click", () => {
flashcard.classList.toggle("flipped");
});

// Next button
nextBtn.addEventListener("click", () => {
if (flashcard.classList.contains("flipped")) {
    currentIndex = (currentIndex + 1) % activeSet.length;
    const card = activeSet[currentIndex];
    englishWordEl.textContent = card.english;
    flashcard.classList.remove("flipped");

    flashcardInner.addEventListener("transitionend", function handler() {
    flashcardInner.removeEventListener("transitionend", handler);
    cantoneseWordEl.innerHTML = `
        <div><strong>Pronunciation:</strong> ${card.cantonese}</div>
        <div><strong>Character:</strong> ${card.chinese}</div>
    `;
    });
} else {
    currentIndex = (currentIndex + 1) % activeSet.length;
    showFlashcard();
}
});

// Toggle between sets
document.getElementById("setSelect").addEventListener("change", (e) => {
const selected = e.target.value;
activeSet = selected === "phrases" ? [...phraseCards] : [...flashcards];
shuffleArray(activeSet);
currentIndex = 0;
flashcard.classList.remove("flipped");
showFlashcard();
});

// Audio
playBtn.addEventListener("click", (e) => {
e.stopPropagation();
const card = activeSet[currentIndex];
responsiveVoice.speak(card.chinese, "Chinese (Hong Kong) Female");
});

// Init
shuffleArray(activeSet);
showFlashcard();

