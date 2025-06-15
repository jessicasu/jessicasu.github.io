// List of flashcards with English, Chinese character, and Cantonese (Jyutping-style)
const flashcardSets = {
    words : [
        { english: "Book", chinese: "書", cantonese: "syu1" },
        { english: "School", chinese: "學校", cantonese: "hok6 haau6" },
        { english: "Friend", chinese: "朋友", cantonese: "pang4 jau5" },
        { english: "Police", chinese: "警察", cantonese: "ging2 caat3" },
        { english: "Firefighter", chinese: "消防員", cantonese: "siu1 fong4 jyun4" },
        { english: "Student", chinese: "學生", cantonese: "hok6 saang1" },
        { english: "Teacher", chinese: "老師", cantonese: "lou5 si1" },
        { english: "Classroom", chinese: "課室", cantonese: "fo3 sat1" },
        { english: "Work", chinese: "工作", cantonese: "gung1 zok3" },
        { english: "Office", chinese: "辦公室", cantonese: "baan6 gung1 sat1" },
        { english: "Number", chinese: "數字", cantonese: "sou3 zi6" },
        { english: "Name", chinese: "名", cantonese: "meng2" },
        { english: "Language", chinese: "語言", cantonese: "jyu5 jin4" },
        { english: "Word", chinese: "字", cantonese: "zi6" },
        { english: "Sentence", chinese: "句子", cantonese: "geoi3 zi2" },
        { english: "Bookstore", chinese: "書店", cantonese: "syu1 dim3" },
        { english: "Hospital", chinese: "醫院", cantonese: "ji1 jyun2" },
        { english: "Doctor", chinese: "醫生", cantonese: "ji1 sang1" },
        { english: "Sun", chinese: "太陽", cantonese: "taai3 joeng4" },
        { english: "Moon", chinese: "月亮", cantonese: "jyut6 loeng6" },
        { english: "Rain", chinese: "雨", cantonese: "jyu5" },
        { english: "Cloud", chinese: "雲", cantonese: "wan4" },
        { english: "Wind", chinese: "風", cantonese: "fung1" },
        { english: "Sky", chinese: "天空", cantonese: "tin1 hung1" },
        { english: "Star", chinese: "星星", cantonese: "sing1 sing1" },
        { english: "Weather", chinese: "天氣", cantonese: "tin1 hei3" },
        { english: "Day", chinese: "日", cantonese: "jat6" },
        { english: "Night", chinese: "夜", cantonese: "je6" },
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
        { english: "Mom", chinese: "媽媽", cantonese: "maa4 maa1" },
        { english: "Dad", chinese: "爸爸", cantonese: "baa4 baa1" },
        { english: "Street", chinese: "街", cantonese: "gaai1" },
        { english: "Car", chinese: "車", cantonese: "ce1" },
        { english: "Bus", chinese: "巴士", cantonese: "baa1 si2" },
        { english: "Train", chinese: "火車", cantonese: "fo2 ce1" },
        { english: "MTR (Subway)", chinese: "地鐵", cantonese: "dei6 tit3" },
        { english: "Taxi", chinese: "的士", cantonese: "dik1 si2" },
        { english: "Money", chinese: "錢", cantonese: "cin2" },
        { english: "Phone", chinese: "電話", cantonese: "din6 waa2" },
        { english: "Key", chinese: "鎖匙", cantonese: "so2 si4" },
        { english: "Bag", chinese: "袋", cantonese: "doi6" },
        { english: "Shirt", chinese: "衫", cantonese: "saam1" },
        { english: "Pants", chinese: "褲", cantonese: "fu3" },
        { english: "Shoes", chinese: "鞋", cantonese: "haai4" },
        { english: "Market", chinese: "街市", cantonese: "gaai1 si5" },
        { english: "Shop", chinese: "鋪頭", cantonese: "pou3 tau2" },
        { english: "Restaurant", chinese: "餐廳", cantonese: "caan1 teng1" },
        { english: "Food", chinese: "食物", cantonese: "sik6 mat6" },
    ],

    house : [
        { english: "Table", chinese: "枱", cantonese: "toi2" },
        { english: "Chair", chinese: "櫈", cantonese: "dang3" },
        { english: "Door", chinese: "門", cantonese: "mun4" },
        { english: "Window", chinese: "窗", cantonese: "coeng1" },
        { english: "Bed", chinese: "床", cantonese: "cong4" },
        { english: "Toilet", chinese: "廁所", cantonese: "ci3 so2" },
        { english: "Bathroom", chinese: "洗手間", cantonese: "sai2 sau2 gaan1" },
        { english: "Home", chinese: "屋企", cantonese: "uk1 kei2" },
        { english: "House", chinese: "屋", cantonese: "uk1" },
    ],
    
    time : [
        { english: "Week", chinese: "星期", cantonese: "sing1 kei42" },
        { english: "Year", chinese: "年", cantonese: "nin4" },
        { english: "Today", chinese: "今日", cantonese: "gam1 jat6" },
        { english: "Tomorrow", chinese: "聽日", cantonese: "ting1 jat6" },
        { english: "Yesterday", chinese: "噚日", cantonese: "cam4 jat6" },
        { english: "Calendar", chinese: "日曆", cantonese: "jat6 lik6" },
        { english: "O'Clock", chinese: "點鐘", cantonese: "dim2 zung1" },
        { english: "Time", chinese: "時間", cantonese: "si4 gaan3" },
        { english: "Minute", chinese: "分鐘", cantonese: "fan1 zung1" },
        { english: "Second", chinese: "秒", cantonese: "miu5" },
        { english: "Hour", chinese: "鐘頭", cantonese: "zung1 tau4" },
        { english: "Morning (Time)", chinese: "早上", cantonese: "zou2 soeng6" },
        { english: "Afternoon", chinese: "下午", cantonese: "haa6 ng5" },
        { english: "Evening", chinese: "晚上", cantonese: "maan5 soeng6" },
        { english: "Weekday", chinese: "平日", cantonese: "ping4 jat6" },
        { english: "Weekend", chinese: "週末", cantonese: "zau1 mut6" },
        { english: "Holiday", chinese: "假期", cantonese: "gaa3 kei4" },
    ],

    pronouns : [
        { english: "I / Me", chinese: "我", cantonese: "ngo5" },
        { english: "You", chinese: "你", cantonese: "nei5" },
        { english: "He / She / Him / Her", chinese: "佢", cantonese: "keoi5" },
        { english: "We / Us", chinese: "我哋", cantonese: "ngo5 dei6" },
        { english: "They / Them", chinese: "佢哋", cantonese: "keoi5 dei6" },
    ],

    adjectives : [
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
    ],

    food : [
        { english: "Fruit", chinese: "生果", cantonese: "saang1 gwo2" },
        { english: "Vegetable", chinese: "菜", cantonese: "coi3" },
        { english: "Meat", chinese: "肉", cantonese: "juk6" },
        { english: "Rice", chinese: "飯", cantonese: "faan6" },
        { english: "Noodles", chinese: "麵", cantonese: "min6" },
        { english: "Soup", chinese: "湯", cantonese: "tong1" },
        { english: "Egg", chinese: "蛋", cantonese: "daan6" },
        { english: "Chicken", chinese: "雞", cantonese: "gai1" },
        { english: "Fish", chinese: "魚", cantonese: "jyu4" },
        { english: "Pork", chinese: "豬肉", cantonese: "zyu1 juk6" },
        { english: "Beef", chinese: "牛肉", cantonese: "ngau4 juk6" },
        { english: "Apple", chinese: "蘋果", cantonese: "ping4 gwo2" },
        { english: "Banana", chinese: "香蕉", cantonese: "hoeng1 ziu1" },
        { english: "Orange", chinese: "橙", cantonese: "caang2" },
        { english: "Bread", chinese: "麵包", cantonese: "min6 baau1" },
        { english: "Cake", chinese: "蛋糕", cantonese: "daan6 gou1" },
        { english: "Tofu", chinese: "豆腐", cantonese: "dau6 fu6" },
        { english: "Tofu skin", chinese: "腐竹", cantonese: "fu6 zuk1" },
        { english: "Dumpling", chinese: "餃子", cantonese: "gaau2 zi2" },
        { english: "Spring roll", chinese: "春卷", cantonese: "ceon1 gyun2" },
        { english: "Congee", chinese: "粥", cantonese: "zuk1" },
        { english: "Dim sum", chinese: "點心", cantonese: "dim2 sam1" },
        { english: "Bun", chinese: "包", cantonese: "baau1" },
        { english: "Shrimp", chinese: "蝦", cantonese: "haa1" },
        { english: "Crab", chinese: "蟹", cantonese: "haai5" },
        { english: "Lettuce", chinese: "生菜", cantonese: "saang1 coi3" },
        { english: "Mushroom", chinese: "冬菇", cantonese: "dung1 gu1" },
        { english: "House special fried rice", chinese: "招牌炒飯", cantonese: "ziu1 paai4 caau2 faan6" },
        { english: "Beef chow mein", chinese: "牛肉炒麵", cantonese: "ngau4 juk6 caau2 min6" },
    ],

    chineseBakery : [
        { english: "Egg tart", chinese: "蛋撻", cantonese: "daan6 taat1" },
        { english: "Pineapple bun", chinese: "菠蘿包", cantonese: "bo1 lo4 baau1" },
        { english: "Wife cake", chinese: "老婆餅", cantonese: "lou5 po4 beng2" },
        { english: "Steamed bun", chinese: "包子", cantonese: "baau1 zi2" },
        { english: "Lotus seed bun", chinese: "蓮蓉包", cantonese: "lin4 jung4 baau1" },
        { english: "Red bean bun", chinese: "紅豆包", cantonese: "hung4 dau6 baau1" },
        { english: "Sesame ball", chinese: "芝麻球", cantonese: "zi1 maa4 kau4" },
        { english: "Doughnut", chinese: "甜甜圈", cantonese: "tim4 tim4 hyun1" },
        { english: "Steamed sponge cake", chinese: "馬拉糕", cantonese: "maa5 laai1 gou1" },
        { english: "Chinese donut stick", chinese: "油條", cantonese: "jau4 tiu4" },
        { english: "Custard bun", chinese: "奶黃包", cantonese: "naai5 wong4 baau1" },
        { english: "Pineapple cake", chinese: "鳳梨酥", cantonese: "fung6 lei4 sou1" },
        { english: "Turnip cake", chinese: "蘿蔔糕", cantonese: "lo4 baak6 gou1" },
        { english: "Steamed rice roll", chinese: "腸粉", cantonese: "coeng4 fan2" },
        { english: "Barbecue pork bun", chinese: "叉燒包", cantonese: "caa1 siu1 baau1" },
        { english: "Mooncake", chinese: "月餅", cantonese: "jyut6 beng2" },
        { english: "Glutinous rice ball", chinese: "湯圓", cantonese: "tong1 jyun4" },
        { english: "Red bean cake", chinese: "紅豆糕", cantonese: "hung4 dau6 gou1" },
        { english: "Sesame seed cake", chinese: "芝麻餅", cantonese: "zi1 maa4 beng2" },
        { english: "Egg roll", chinese: "蛋卷", cantonese: "daan6 gyun2" }
    ],

    beverages : [
        { english: "Tea", chinese: "茶", cantonese: "caa4" },
        { english: "Coffee", chinese: "咖啡", cantonese: "gaa3 fe1" },
        { english: "Milk", chinese: "牛奶", cantonese: "ngau4 naai5" },
        { english: "Juice", chinese: "果汁", cantonese: "gwo2 zap1" },
        { english: "Beer", chinese: "啤酒", cantonese: "be1 zau2" },
        { english: "Red wine", chinese: "紅酒", cantonese: "hung4 zau2" },
        { english: "White wine", chinese: "白酒", cantonese: "baak6 zau2" },
        { english: "Soy milk", chinese: "豆漿", cantonese: "dau6 zoeng1" },
        { english: "Iced water", chinese: "冰水", cantonese: "bing1 seoi2" },
        { english: "Soft drink", chinese: "汽水", cantonese: "hei3 seoi2" },
        { english: "Bubble tea", chinese: "珍珠奶茶", cantonese: "zan1 zyu1 naai5 caa4" },
        { english: "Green tea", chinese: "綠茶", cantonese: "luk6 caa4" },
        { english: "Jasmine tea", chinese: "茉莉花茶", cantonese: "mut6 lai6 faa1 caa4" },
    ],

    verbs : [
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
        { english: "Use", chinese: "用", cantonese: "jung6" },
        { english: "Laugh", chinese: "笑", cantonese: "siu3" },
        { english: "See", chinese: "睇", cantonese: "tai2" },
        { english: "Want", chinese: "想", cantonese: "soeng2" },
        { english: "Have", chinese: "有", cantonese: "jau5" },
        { english: "Don’t have", chinese: "冇", cantonese: "mou5" },
        { english: "Can / Able to", chinese: "可以", cantonese: "ho2 ji5" },
    ],

    kitchen : [
        { english: "Cup", chinese: "杯", cantonese: "bui1" },
        { english: "Bowl", chinese: "碗", cantonese: "wun2" },
        { english: "Plate", chinese: "碟", cantonese: "dip6" },
        { english: "Spoon", chinese: "羹", cantonese: "gang1" },
        { english: "Fork", chinese: "叉", cantonese: "caa1" },
        { english: "Knife", chinese: "刀", cantonese: "dou1" },
        { english: "Kitchen", chinese: "廚房", cantonese: "cyu4 fong2" },
        { english: "Salt", chinese: "鹽", cantonese: "jim4" },
        { english: "Sugar", chinese: "糖", cantonese: "tong4" },
        { english: "Pepper", chinese: "胡椒", cantonese: "wu4 ziu1" },
    ],

    phrases: [
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
    ]
};


let activeSet = [...flashcardSets.words];
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
    activeSet = [...flashcardSets[selected]];
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

