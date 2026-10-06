const dishes = [
  {
    "id": 1,
    "name": "Бесбармақ",
    "category": "Ет тағамдары",
    "emoji": "🥩",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kazakh%20beshbarmak.jpg",
    "short": "Қазақ дастарханының ең танымал дәстүрлі тағамдарының бірі.",
    "description": "Бесбармақ — қайнатылған ет, жайма және сорпадан дайындалатын ұлттық тағам. Көбіне жылқы, қой немесе сиыр еті қолданылады.",
    "ingredients": [
      "ет",
      "жайма",
      "пияз",
      "сорпа",
      "тұз",
      "бұрыш"
    ],
    "fact": "Дәстүр бойынша ет табаққа мүшелеп салынып, қонақтарға жол-жоралғыға сай ұсынылады."
  },
  {
    "id": 2,
    "name": "Қазы",
    "category": "Ет тағамдары",
    "emoji": "🐎",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%27Horse%20meat%20sausages%27%20in%20Chorsu%20Bazaar.jpg",
    "short": "Жылқы етінен дайындалатын ұлттық дәмді тағам.",
    "description": "Қазы — жылқының қабырға еті мен майынан дайындалатын шұжық тәрізді ұлттық тағам.",
    "ingredients": [
      "жылқы еті",
      "май",
      "тұз",
      "бұрыш",
      "сарымсақ"
    ],
    "fact": "Қазы мерекелік дастарханға және құрметті қонақтарға жиі ұсынылады."
  },
  {
    "id": 3,
    "name": "Қарта",
    "category": "Ет тағамдары",
    "emoji": "🍖",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/A%20set%20table%20full%20of%20Kazakh%20national%20dishes.jpg",
    "short": "Жылқы етінен дайындалатын дәстүрлі тағам.",
    "description": "Қарта — жылқының ішегінен дайындалатын, ерекше дәмі бар ұлттық тағам.",
    "ingredients": [
      "жылқы қартасы",
      "тұз",
      "бұрыш"
    ],
    "fact": "Қарта көбіне қазы және жал-жаямен бірге дастарханға қойылады."
  },
  {
    "id": 4,
    "name": "Жал-жая",
    "category": "Ет тағамдары",
    "emoji": "🥓",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/A%20laid%20table%20full%20of%20Kazakh%20national%20dishes.jpg",
    "short": "Жылқы етінің ең кәделі бөліктерінен дайындалатын тағам.",
    "description": "Жал-жая — жылқының жалы мен жая бөлігін тұздап, сүрлеп немесе қайнатып әзірлейтін ұлттық тағам.",
    "ingredients": [
      "жылқы еті",
      "тұз",
      "дәмдеуіштер"
    ],
    "fact": "Жал-жая дәстүрлі қонақ асы кезінде ерекше құрметпен ұсынылады."
  },
  {
    "id": 5,
    "name": "Қуырдақ",
    "category": "Ет тағамдары",
    "emoji": "🍲",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kazakh%20quwyrdaq.jpg",
    "short": "Жаңа сойылған мал етінен тез дайындалатын ыстық тағам.",
    "description": "Қуырдақ — ет пен ішкі ағзаларды пиязбен бірге қуырып дайындалатын дәстүрлі тағам.",
    "ingredients": [
      "ет",
      "бауыр",
      "жүрек",
      "пияз",
      "май",
      "тұз"
    ],
    "fact": "Қуырдақ көбіне мал сойылған күні дайындалады."
  },
  {
    "id": 6,
    "name": "Бауырсақ",
    "category": "Ұн тағамдары",
    "emoji": "🥯",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kazakh%20Baursak.jpg",
    "short": "Майға пісірілетін жұмсақ әрі дәмді ұлттық нан.",
    "description": "Бауырсақ — ашытылған қамырдан жасалып, майға пісірілетін ұлттық тағам.",
    "ingredients": [
      "ұн",
      "сүт",
      "ашытқы",
      "тұз",
      "қант",
      "май"
    ],
    "fact": "Бауырсақ тойларда, мерекелерде және күнделікті дастарханда жиі кездеседі."
  },
  {
    "id": 7,
    "name": "Шелпек",
    "category": "Ұн тағамдары",
    "emoji": "🫓",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/ShelpekKZ1.JPG",
    "short": "Жұқа қамырдан пісірілетін дәстүрлі нан тағамы.",
    "description": "Шелпек — жұқа етіп жайылған қамырды майға немесе табаға пісіру арқылы дайындалады.",
    "ingredients": [
      "ұн",
      "су",
      "тұз",
      "май"
    ],
    "fact": "Шелпек қазақтың дәстүрлі отбасылық және діни салттарында да дайындалады."
  },
  {
    "id": 8,
    "name": "Құрт",
    "category": "Сүт тағамдары",
    "emoji": "⚪",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kurut.jpg",
    "short": "Сүттен дайындалатын ұзақ сақталатын ұлттық тағам.",
    "description": "Құрт — айран немесе сүзбеден жасалып, тұздалып, кептірілетін сүт өнімі.",
    "ingredients": [
      "айран",
      "сүзбе",
      "тұз"
    ],
    "fact": "Құрт ұзақ сақталатындықтан көшпелі өмір салтына өте қолайлы болған."
  },
  {
    "id": 9,
    "name": "Ірімшік",
    "category": "Сүт тағамдары",
    "emoji": "🧀",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kazakh%20national%20food.jpg",
    "short": "Сүттен дайындалатын дәстүрлі ұлттық тағам.",
    "description": "Ірімшік — сүтті ұйытып, қайнатып және кептіріп дайындалатын тағам.",
    "ingredients": [
      "сүт",
      "ұйытқы"
    ],
    "fact": "Ірімшік ақ және қызыл ірімшік түрінде дайындалуы мүмкін."
  },
  {
    "id": 10,
    "name": "Қаймақ",
    "category": "Сүт тағамдары",
    "emoji": "🥛",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaymak.jpg",
    "short": "Сүттің майлы бөлігінен алынатын қою тағам.",
    "description": "Қаймақ — сүттің бетіне жиналған майлы бөлігінен алынатын ұлттық сүт өнімі.",
    "ingredients": [
      "сүт"
    ],
    "fact": "Қаймақ бауырсақ, нан және шаймен бірге жиі беріледі."
  },
  {
    "id": 11,
    "name": "Қымыз",
    "category": "Сусындар",
    "emoji": "🥛",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kumis.jpg",
    "short": "Бие сүтінен ашытылып дайындалатын ұлттық сусын.",
    "description": "Қымыз — бие сүтін арнайы ашыту арқылы дайындалатын дәстүрлі сусын.",
    "ingredients": [
      "бие сүті",
      "қымыз ашытқысы"
    ],
    "fact": "Қымыз қазақ халқының ең көне дәстүрлі сусындарының бірі."
  },
  {
    "id": 12,
    "name": "Шұбат",
    "category": "Сусындар",
    "emoji": "🐪",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Shubat.jpg",
    "short": "Түйе сүтінен дайындалатын ұлттық сусын.",
    "description": "Шұбат — түйе сүтін ашыту арқылы дайындалатын қою әрі нәрлі сусын.",
    "ingredients": [
      "түйе сүті",
      "ашытқы"
    ],
    "fact": "Шұбат әсіресе Қазақстанның батыс және оңтүстік өңірлерінде кең таралған."
  },
  {
    "id": 13,
    "name": "Айран",
    "category": "Сусындар",
    "emoji": "🥣",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ayran%20.jpg",
    "short": "Сүттен ашытылып дайындалатын салқын сусын.",
    "description": "Айран — сүтті ашыту арқылы алынатын дәстүрлі әрі күнделікті сусын.",
    "ingredients": [
      "сүт",
      "ашытқы"
    ],
    "fact": "Айран әрі сусын, әрі басқа тағамдарды дайындауға арналған негіз ретінде қолданылады."
  },
  {
    "id": 14,
    "name": "Наурызкөже",
    "category": "Мерекелік тағамдар",
    "emoji": "🥣",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9D%D0%B0%D1%83%D1%80%D1%8B%D0%B7%20%D0%BA%D0%BE%D0%B6%D0%B5.jpg",
    "short": "Наурыз мерекесіне арнайы дайындалатын дәстүрлі тағам.",
    "description": "Наурызкөже — Наурыз мейрамында дайындалатын, құрамына бірнеше түрлі тағамдық өнім кіретін көже.",
    "ingredients": [
      "су",
      "ет",
      "тұз",
      "дәнді дақылдар",
      "сүт өнімдері"
    ],
    "fact": "Наурызкөже молшылық пен берекенің белгісі ретінде ұсынылады."
  }
];

const state = {
  search: "",
  category: "all",
  favorites: new Set(JSON.parse(localStorage.getItem("qazaqDishFavorites") || "[]")),
  quizCurrent: null,
  quizAnswered: false,
  score: 0,
  questions: 0,
  wordTrainerCurrent: null,
  wordTrainerPicked: [],
  wordTrainerLetters: [],
  wordTrainerAnswered: false,
  wordTrainerScore: 0,
  wordTrainerQuestions: 0
};

const els = {
  dishCount: document.querySelector("#dishCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  categoryFilter: document.querySelector("#categoryFilter"),
  categoryTabs: document.querySelector("#categoryTabs"),
  catalogCards: document.querySelector("#catalogCards"),
  catalogEmpty: document.querySelector("#catalogEmpty"),
  favoritesCards: document.querySelector("#favoritesCards"),
  favoritesEmpty: document.querySelector("#favoritesEmpty"),
  resultInfo: document.querySelector("#resultInfo"),
  randomDishBtn: document.querySelector("#randomDishBtn"),
  exploreBtn: document.querySelector("#exploreBtn"),
  appSection: document.querySelector("#appSection"),
  modal: document.querySelector("#dishModal"),
  modalEmoji: document.querySelector("#modalEmoji"),
  modalCategory: document.querySelector("#modalCategory"),
  modalTitle: document.querySelector("#modalTitle"),
  modalShort: document.querySelector("#modalShort"),
  modalDescription: document.querySelector("#modalDescription"),
  modalIngredients: document.querySelector("#modalIngredients"),
  modalFact: document.querySelector("#modalFact"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  quizFeedback: document.querySelector("#quizFeedback"),
  scoreValue: document.querySelector("#scoreValue"),
  questionValue: document.querySelector("#questionValue"),
  nextQuestionBtn: document.querySelector("#nextQuestionBtn"),
  wordTrainerImage: document.querySelector("#wordTrainerImage"),
  wordTrainerCategory: document.querySelector("#wordTrainerCategory"),
  wordTrainerHint: document.querySelector("#wordTrainerHint"),
  wordTrainerAnswer: document.querySelector("#wordTrainerAnswer"),
  wordTrainerLetters: document.querySelector("#wordTrainerLetters"),
  wordTrainerFeedback: document.querySelector("#wordTrainerFeedback"),
  wordScoreValue: document.querySelector("#wordScoreValue"),
  wordQuestionValue: document.querySelector("#wordQuestionValue"),
  wordResetBtn: document.querySelector("#wordResetBtn"),
  wordCheckBtn: document.querySelector("#wordCheckBtn"),
  wordNextBtn: document.querySelector("#wordNextBtn")
};

function normalize(value) {
  return value.toLocaleLowerCase("kk-KZ").trim();
}

function imageTemplate(dish, extraClass = "") {
  return `
    <div class="dish-photo-fallback ${extraClass}">${dish.emoji}</div>
    <img
      class="dish-photo ${extraClass}"
      src="${dish.image}"
      alt="${dish.name}"
      loading="lazy"
      referrerpolicy="no-referrer"
      onerror="this.style.display='none'; if(this.previousElementSibling) this.previousElementSibling.style.display='grid';"
    >
  `;
}

function saveFavorites() {
  localStorage.setItem("qazaqDishFavorites", JSON.stringify([...state.favorites]));
  els.favoriteCount.textContent = state.favorites.size;
}

function getCategories() {
  return [...new Set(dishes.map(dish => dish.category))];
}

function getFilteredDishes() {
  const query = normalize(state.search);

  return dishes.filter(dish => {
    const matchesSearch =
      !query ||
      normalize(dish.name).includes(query) ||
      normalize(dish.short).includes(query) ||
      normalize(dish.description).includes(query);

    const matchesCategory =
      state.category === "all" || dish.category === state.category;

    return matchesSearch && matchesCategory;
  });
}

function cardTemplate(dish) {
  const favorite = state.favorites.has(dish.id);

  return `
    <article class="dish-card">
      <div class="dish-card__visual">
        ${imageTemplate(dish)}
      </div>
      <div class="dish-card__body">
        <div class="dish-card__top">
          <span class="badge">${dish.category}</span>
          <button
            class="favorite-btn ${favorite ? "is-favorite" : ""}"
            type="button"
            data-favorite="${dish.id}"
            aria-label="${favorite ? "Таңдаулыдан алып тастау" : "Таңдаулыға қосу"}"
            title="${favorite ? "Таңдаулыдан алып тастау" : "Таңдаулыға қосу"}"
          >
            ${favorite ? "♥" : "♡"}
          </button>
        </div>

        <h3>${dish.name}</h3>
        <p>${dish.short}</p>

        <button class="dish-card__more" type="button" data-open="${dish.id}">
          Толығырақ оқу →
        </button>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const filtered = getFilteredDishes();
  els.catalogCards.innerHTML = filtered.map(cardTemplate).join("");
  els.catalogEmpty.hidden = filtered.length !== 0;
  els.resultInfo.textContent = `Табылды: ${filtered.length} / ${dishes.length}`;
}

function renderFavorites() {
  const favorites = dishes.filter(dish => state.favorites.has(dish.id));
  els.favoritesCards.innerHTML = favorites.map(cardTemplate).join("");
  els.favoritesEmpty.hidden = favorites.length !== 0;
  els.favoriteCount.textContent = favorites.length;
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }

  saveFavorites();
  renderCatalog();
  renderFavorites();
}

function openModal(id) {
  const dish = dishes.find(item => item.id === id);
  if (!dish) return;

  els.modalEmoji.innerHTML = imageTemplate(dish, 'dish-photo--modal');
  els.modalCategory.textContent = dish.category;
  els.modalTitle.textContent = dish.name;
  els.modalShort.textContent = dish.short;
  els.modalDescription.textContent = dish.description;
  els.modalIngredients.innerHTML = dish.ingredients
    .map(item => `<span class="ingredient">${item}</span>`)
    .join("");
  els.modalFact.textContent = dish.fact;

  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
}

function populateCategories() {
  getCategories().forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.append(option);
  });
}

function buildCategoryTabs() {
  const categories = ["all", ...getCategories()];

  els.categoryTabs.innerHTML = categories.map(category => `
    <button
      class="category-tab ${category === "all" ? "is-active" : ""}"
      type="button"
      data-category="${category}"
    >
      ${category === "all" ? "Барлығы" : category}
    </button>
  `).join("");
}

function setCategory(category) {
  state.category = category;
  els.categoryFilter.value = category;

  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("is-active", tab.dataset.category === category);
  });

  renderCatalog();
}

function showView(name) {
  document.querySelectorAll(".nav__btn").forEach(button => {
    button.classList.toggle("is-active", button.dataset.view === name);
  });

  document.querySelectorAll(".view").forEach(view => {
    view.classList.remove("is-active");
  });

  const target = document.querySelector(`#${name}View`);
  if (target) target.classList.add("is-active");

  if (name === "favorites") renderFavorites();
  if (name === "quiz" && !state.quizCurrent) nextQuestion();
  if (name === "wordTrainer" && !state.wordTrainerCurrent) nextWordTrainer();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function nextQuestion() {
  state.quizAnswered = false;
  els.quizFeedback.textContent = "";
  els.quizFeedback.className = "quiz__feedback";

  const current = pickRandom(dishes);
  state.quizCurrent = current;

  els.quizQuestion.textContent = `«${current.short}» — бұл қай тағам?`;

  const distractors = shuffle(
    dishes.filter(dish => dish.id !== current.id)
  ).slice(0, 3);

  const options = shuffle([current, ...distractors]);

  els.quizOptions.innerHTML = options.map(dish => `
    <button class="quiz-option" type="button" data-answer="${dish.id}">
      ${dish.name}
    </button>
  `).join("");
}

function answerQuestion(id) {
  if (state.quizAnswered || !state.quizCurrent) return;

  state.quizAnswered = true;
  state.questions += 1;

  const correct = id === state.quizCurrent.id;

  if (correct) {
    state.score += 1;
  }

  els.scoreValue.textContent = state.score;
  els.questionValue.textContent = state.questions;

  document.querySelectorAll(".quiz-option").forEach(button => {
    const buttonId = Number(button.dataset.answer);
    button.disabled = true;

    if (buttonId === state.quizCurrent.id) {
      button.classList.add("is-correct");
    } else if (buttonId === id && !correct) {
      button.classList.add("is-wrong");
    }
  });

  els.quizFeedback.textContent = correct
    ? "Дұрыс! Жарайсың!"
    : `Қате. Дұрыс жауап: ${state.quizCurrent.name}.`;

  els.quizFeedback.classList.add(correct ? "ok" : "bad");
}



function getTrainerDishes() {
  return dishes.filter(dish => !/[\s-]/.test(dish.name));
}

function shuffleLetters(word) {
  const original = Array.from(word.toLocaleUpperCase("kk-KZ"));
  let shuffled = shuffle(original);
  let attempts = 0;

  while (shuffled.join("") === original.join("") && attempts < 10) {
    shuffled = shuffle(original);
    attempts += 1;
  }

  return shuffled;
}

function renderWordTrainerAnswer() {
  if (!state.wordTrainerCurrent) return;

  const targetLength = Array.from(state.wordTrainerCurrent.name).length;
  const pickedLetters = state.wordTrainerPicked.map(item => item.letter);

  els.wordTrainerAnswer.innerHTML = Array.from({ length: targetLength }, (_, index) => {
    const letter = pickedLetters[index] || "";
    return `<button class="word-slot ${letter ? "is-filled" : ""}" type="button" data-remove-letter="${index}" ${letter ? "" : "disabled"}>${letter}</button>`;
  }).join("");
}

function renderWordTrainerLetters() {
  els.wordTrainerLetters.innerHTML = state.wordTrainerLetters.map((item, index) => `
    <button
      class="letter-btn"
      type="button"
      data-letter-index="${index}"
      ${item.used || state.wordTrainerAnswered ? "disabled" : ""}
    >${item.letter}</button>
  `).join("");
}

function clearWordTrainerStatus() {
  els.wordTrainerFeedback.textContent = "";
  els.wordTrainerFeedback.className = "word-trainer__feedback";
  els.wordTrainerAnswer.classList.remove("is-correct", "is-wrong");
}

function nextWordTrainer() {
  const pool = getTrainerDishes();
  let dish = pickRandom(pool);

  if (state.wordTrainerCurrent && pool.length > 1) {
    let attempts = 0;
    while (dish.id === state.wordTrainerCurrent.id && attempts < 10) {
      dish = pickRandom(pool);
      attempts += 1;
    }
  }

  state.wordTrainerCurrent = dish;
  state.wordTrainerPicked = [];
  state.wordTrainerAnswered = false;
  state.wordTrainerLetters = shuffleLetters(dish.name).map(letter => ({ letter, used: false }));

  els.wordTrainerImage.innerHTML = imageTemplate(dish);
  els.wordTrainerCategory.textContent = dish.category;
  els.wordTrainerHint.textContent = dish.short;
  clearWordTrainerStatus();
  renderWordTrainerAnswer();
  renderWordTrainerLetters();
}

function addTrainerLetter(index) {
  if (state.wordTrainerAnswered || !state.wordTrainerCurrent) return;

  const item = state.wordTrainerLetters[index];
  if (!item || item.used) return;

  const targetLength = Array.from(state.wordTrainerCurrent.name).length;
  if (state.wordTrainerPicked.length >= targetLength) return;

  item.used = true;
  state.wordTrainerPicked.push({ letter: item.letter, sourceIndex: index });
  clearWordTrainerStatus();
  renderWordTrainerAnswer();
  renderWordTrainerLetters();
}

function removeTrainerLetter(position) {
  if (state.wordTrainerAnswered) return;
  const picked = state.wordTrainerPicked[position];
  if (!picked) return;

  const source = state.wordTrainerLetters[picked.sourceIndex];
  if (source) source.used = false;

  state.wordTrainerPicked.splice(position, 1);
  clearWordTrainerStatus();
  renderWordTrainerAnswer();
  renderWordTrainerLetters();
}

function resetWordTrainer() {
  if (!state.wordTrainerCurrent) return;

  state.wordTrainerPicked = [];
  state.wordTrainerAnswered = false;
  state.wordTrainerLetters.forEach(item => item.used = false);
  clearWordTrainerStatus();
  renderWordTrainerAnswer();
  renderWordTrainerLetters();
}

function checkWordTrainer() {
  if (!state.wordTrainerCurrent || state.wordTrainerAnswered) return;

  const target = state.wordTrainerCurrent.name.toLocaleUpperCase("kk-KZ");
  const answer = state.wordTrainerPicked.map(item => item.letter).join("");

  if (answer.length !== Array.from(target).length) {
    els.wordTrainerFeedback.textContent = "Алдымен барлық әріпті қолданып сөзді толық құрастыр.";
    els.wordTrainerFeedback.className = "word-trainer__feedback bad";
    return;
  }

  state.wordTrainerAnswered = true;
  state.wordTrainerQuestions += 1;
  const correct = answer === target;

  if (correct) {
    state.wordTrainerScore += 1;
    els.wordTrainerFeedback.textContent = `Дұрыс! ${state.wordTrainerCurrent.name} сөзін дұрыс құрастырдың.`;
    els.wordTrainerFeedback.className = "word-trainer__feedback ok";
    els.wordTrainerAnswer.classList.add("is-correct");
  } else {
    els.wordTrainerFeedback.textContent = `Қате. Дұрыс жауап: ${state.wordTrainerCurrent.name}.`;
    els.wordTrainerFeedback.className = "word-trainer__feedback bad";
    els.wordTrainerAnswer.classList.add("is-wrong");
  }

  els.wordScoreValue.textContent = state.wordTrainerScore;
  els.wordQuestionValue.textContent = state.wordTrainerQuestions;
  renderWordTrainerLetters();
}


document.addEventListener("click", event => {
  const navButton = event.target.closest(".nav__btn");
  if (navButton) {
    showView(navButton.dataset.view);
  }

  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
  }

  const openButton = event.target.closest("[data-open]");
  if (openButton) {
    openModal(Number(openButton.dataset.open));
  }

  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
  }

  const answerButton = event.target.closest("[data-answer]");
  if (answerButton) {
    answerQuestion(Number(answerButton.dataset.answer));
  }

  const trainerLetter = event.target.closest("[data-letter-index]");
  if (trainerLetter) {
    addTrainerLetter(Number(trainerLetter.dataset.letterIndex));
  }

  const removeLetter = event.target.closest("[data-remove-letter]");
  if (removeLetter) {
    removeTrainerLetter(Number(removeLetter.dataset.removeLetter));
  }
});

els.searchInput.addEventListener("input", () => {
  state.search = els.searchInput.value;
  renderCatalog();
});

els.clearSearch.addEventListener("click", () => {
  els.searchInput.value = "";
  state.search = "";
  renderCatalog();
  els.searchInput.focus();
});

els.categoryFilter.addEventListener("change", () => {
  setCategory(els.categoryFilter.value);
});

els.randomDishBtn.addEventListener("click", () => {
  const filtered = getFilteredDishes();
  if (!filtered.length) return;

  openModal(pickRandom(filtered).id);
});

els.exploreBtn.addEventListener("click", () => {
  els.appSection.scrollIntoView({ behavior: "smooth" });
});

els.nextQuestionBtn.addEventListener("click", nextQuestion);

els.wordResetBtn.addEventListener("click", resetWordTrainer);
els.wordCheckBtn.addEventListener("click", checkWordTrainer);
els.wordNextBtn.addEventListener("click", nextWordTrainer);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !els.modal.hidden) {
    closeModal();
  }
});

populateCategories();
buildCategoryTabs();
els.dishCount.textContent = dishes.length;
saveFavorites();
renderCatalog();
renderFavorites();
