const STORAGE_KEYS = {
  language: "novelSiteLanguage",
  theme: "novelSiteTheme",
  recentNovel: "novelSiteRecentNovel",
  recentEpisode: "novelSiteRecentEpisode",
  defaultsVersion: "novelSiteDefaultsVersion",
};

const DEFAULT_LANGUAGE = "en";
const DEFAULT_THEME = "dark";
const DEFAULTS_VERSION = "en-dark-v1";

const translations = {
  ko: {
    documentTitle: "미정",
    navWorks: "작품",
    navRecent: "최근 읽은 작품",
    languageLabel: "언어",
    themeToggleLight: "화이트 모드",
    themeToggleDark: "다크 모드",
    topAd: "광고 배너",
    sideAd: "광고",
    eyebrow: "무료 웹소설",
    pageTitle: "작품 선택",
    pageCopy: "읽고 싶은 작품을 고르면 바로 본문으로 이동합니다.",
    worksTitle: "작품 목록",
    worksCount: "6개 작품",
    recentTitle: "최근 읽은 작품",
    recentMeta: "마지막 위치가 이 브라우저에 저장됩니다.",
    resumeButton: "이어보기",
    openNovel: "작품 열기",
    backToWorks: "작품",
    openEpisode: "회차 열기",
    episodeCount: "8개 회차",
    episodeLabel: "화",
    episodeSubtitles: [
      "낯선 시작",
      "첫 번째 흔적",
      "비밀의 문장",
      "흔들리는 밤",
      "다시 만난 이름",
      "가려진 진실",
      "조용한 선택",
      "다음 계절",
    ],
    novels: [
      "달빛 아래의 문장",
      "회색 도시의 밤",
      "바람이 지나간 자리",
      "끝나지 않는 계절",
      "푸른 기록",
      "낡은 서랍 속 편지",
    ],
  },
  en: {
    documentTitle: "미정",
    navWorks: "Works",
    navRecent: "Recently Read",
    languageLabel: "Language",
    themeToggleLight: "Light Mode",
    themeToggleDark: "Dark Mode",
    topAd: "Ad Banner",
    sideAd: "Ad",
    eyebrow: "Free Web Novels",
    pageTitle: "Choose a Novel",
    pageCopy: "Select a title and continue straight to the story.",
    worksTitle: "Novel List",
    worksCount: "6 works",
    recentTitle: "Recently Read",
    recentMeta: "Your last position is saved in this browser.",
    resumeButton: "Continue",
    openNovel: "Open novel",
    backToWorks: "Works",
    openEpisode: "Open episode",
    episodeCount: "8 episodes",
    episodeLabel: "Episode",
    episodeSubtitles: [
      "A Strange Beginning",
      "The First Trace",
      "A Secret Sentence",
      "The Unsteady Night",
      "A Name Found Again",
      "The Hidden Truth",
      "A Quiet Choice",
      "The Next Season",
    ],
    novels: [
      "Sentences Under Moonlight",
      "Night in the Gray City",
      "Where the Wind Passed",
      "The Season That Never Ends",
      "The Blue Record",
      "Letters in an Old Drawer",
    ],
  },
  ja: {
    documentTitle: "미정",
    navWorks: "作品",
    navRecent: "最近読んだ作品",
    languageLabel: "言語",
    themeToggleLight: "ライトモード",
    themeToggleDark: "ダークモード",
    topAd: "広告バナー",
    sideAd: "広告",
    eyebrow: "無料ウェブ小説",
    pageTitle: "作品を選ぶ",
    pageCopy: "読みたい作品を選ぶと、すぐ本文へ移動します。",
    worksTitle: "作品一覧",
    worksCount: "6作品",
    recentTitle: "最近読んだ作品",
    recentMeta: "最後に読んだ位置はこのブラウザに保存されます。",
    resumeButton: "続きを読む",
    openNovel: "作品を開く",
    backToWorks: "作品",
    openEpisode: "話を開く",
    episodeCount: "8話",
    episodeLabel: "第",
    episodeSubtitles: [
      "見知らぬ始まり",
      "最初の痕跡",
      "秘密の文章",
      "揺れる夜",
      "再び出会った名前",
      "隠された真実",
      "静かな選択",
      "次の季節",
    ],
    novels: [
      "月明かりの下の文章",
      "灰色都市の夜",
      "風が通り過ぎた場所",
      "終わらない季節",
      "青い記録",
      "古い引き出しの手紙",
    ],
  },
  es: {
    documentTitle: "미정",
    navWorks: "Obras",
    navRecent: "Leído Recientemente",
    languageLabel: "Idioma",
    themeToggleLight: "Modo Claro",
    themeToggleDark: "Modo Oscuro",
    topAd: "Banner Publicitario",
    sideAd: "Publicidad",
    eyebrow: "Novelas Web Gratis",
    pageTitle: "Elegir Novela",
    pageCopy: "Elige un título y continúa directamente con la lectura.",
    worksTitle: "Lista de Novelas",
    worksCount: "6 obras",
    recentTitle: "Leído Recientemente",
    recentMeta: "La última posición se guarda en este navegador.",
    resumeButton: "Continuar",
    openNovel: "Abrir novela",
    backToWorks: "Obras",
    openEpisode: "Abrir episodio",
    episodeCount: "8 episodios",
    episodeLabel: "Episodio",
    episodeSubtitles: [
      "Un Comienzo Extraño",
      "La Primera Huella",
      "Una Frase Secreta",
      "La Noche Inestable",
      "Un Nombre Encontrado",
      "La Verdad Oculta",
      "Una Decisión Silenciosa",
      "La Próxima Estación",
    ],
    novels: [
      "Frases Bajo la Luna",
      "Noche en la Ciudad Gris",
      "El Lugar Donde Pasó el Viento",
      "La Estación Que No Termina",
      "El Registro Azul",
      "Cartas en un Cajón Viejo",
    ],
  },
};

const languageSelect = document.querySelector("#languageSelect");
const themeToggle = document.querySelector("#themeToggle");
const novelList = document.querySelector("#novelList");
const worksTitle = document.querySelector("#worksTitle");
const worksCount = document.querySelector("[data-i18n='worksCount']");
const backToWorks = document.querySelector("#backToWorks");
const recentTitleText = document.querySelector("#recentTitleText");
const recentEpisodeText = document.querySelector("#recentEpisodeText");
const resumeButton = document.querySelector(".resume-button");
const homeLinks = [document.querySelector(".brand"), document.querySelector("[data-i18n='navWorks']")];

if (localStorage.getItem(STORAGE_KEYS.defaultsVersion) !== DEFAULTS_VERSION) {
  localStorage.setItem(STORAGE_KEYS.language, DEFAULT_LANGUAGE);
  localStorage.setItem(STORAGE_KEYS.defaultsVersion, DEFAULTS_VERSION);
}

let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || DEFAULT_LANGUAGE;
let currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || DEFAULT_THEME;
let selectedNovelIndex = null;

function getDictionary() {
  return translations[currentLanguage] || translations[DEFAULT_LANGUAGE];
}

function setTheme(theme) {
  currentTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = currentTheme;
  localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  renderText();
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
  document.documentElement.lang = currentLanguage;
  languageSelect.value = currentLanguage;
  localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
  renderText();
  renderCurrentView();
}

function renderText() {
  const dict = getDictionary();

  document.title = dict.documentTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  themeToggle.querySelector("[data-i18n='themeToggle']").textContent =
    currentTheme === "dark" ? dict.themeToggleLight : dict.themeToggleDark;
  themeToggle.setAttribute(
    "aria-label",
    currentTheme === "dark" ? dict.themeToggleLight : dict.themeToggleDark,
  );
}

function getEpisodeLabel(index) {
  const dict = getDictionary();
  const episodeNumber = String(index + 1).padStart(2, "0");

  if (currentLanguage === "ko") {
    return `${index + 1}${dict.episodeLabel}`;
  }

  if (currentLanguage === "ja") {
    return `${dict.episodeLabel}${index + 1}話`;
  }

  return `${dict.episodeLabel} ${episodeNumber}`;
}

function normalizeIndex(value, length) {
  const index = Number(value);
  return Number.isInteger(index) && index >= 0 && index < length ? index : 0;
}

function renderCurrentView() {
  if (selectedNovelIndex === null) {
    renderNovels();
    return;
  }

  renderEpisodes(selectedNovelIndex);
}

function renderRecent() {
  const dict = getDictionary();
  const recentNovelIndex = normalizeIndex(
    localStorage.getItem(STORAGE_KEYS.recentNovel),
    dict.novels.length,
  );
  const recentEpisodeIndex = normalizeIndex(
    localStorage.getItem(STORAGE_KEYS.recentEpisode),
    dict.episodeSubtitles.length,
  );

  recentTitleText.textContent = dict.novels[recentNovelIndex];
  recentEpisodeText.textContent = getEpisodeLabel(recentEpisodeIndex);
}

function renderNovels() {
  const dict = getDictionary();

  selectedNovelIndex = null;
  backToWorks.classList.add("is-hidden");
  worksTitle.textContent = dict.worksTitle;
  worksCount.textContent = dict.worksCount;
  novelList.innerHTML = "";
  dict.novels.forEach((title, index) => {
    const item = document.createElement("button");
    item.className = "novel-card";
    item.type = "button";
    item.setAttribute("aria-label", `${dict.openNovel}: ${title}`);
    item.innerHTML = `
      <span>
        <span class="novel-title"></span>
      </span>
      <span class="novel-arrow" aria-hidden="true">›</span>
    `;

    item.querySelector(".novel-title").textContent = title;
    item.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEYS.recentNovel, String(index));
      localStorage.setItem(STORAGE_KEYS.recentEpisode, "0");
      selectedNovelIndex = index;
      renderRecent();
      renderEpisodes(index);
    });

    novelList.appendChild(item);
  });

  renderRecent();
}

function renderEpisodes(novelIndex) {
  const dict = getDictionary();
  const normalizedNovelIndex = normalizeIndex(novelIndex, dict.novels.length);
  const novelTitle = dict.novels[normalizedNovelIndex];

  selectedNovelIndex = normalizedNovelIndex;
  backToWorks.classList.remove("is-hidden");
  worksTitle.textContent = novelTitle;
  worksCount.textContent = dict.episodeCount;
  novelList.innerHTML = "";

  dict.episodeSubtitles.forEach((episodeTitle, index) => {
    const item = document.createElement("button");
    item.className = "episode-card";
    item.type = "button";
    item.setAttribute("aria-label", `${dict.openEpisode}: ${getEpisodeLabel(index)}`);
    item.innerHTML = `
      <span>
        <span class="episode-number"></span>
        <span class="episode-title"></span>
      </span>
      <span class="novel-arrow" aria-hidden="true">›</span>
    `;

    item.querySelector(".episode-number").textContent = getEpisodeLabel(index);
    item.querySelector(".episode-title").textContent = episodeTitle;
    item.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEYS.recentNovel, String(normalizedNovelIndex));
      localStorage.setItem(STORAGE_KEYS.recentEpisode, String(index));
      renderRecent();
    });

    novelList.appendChild(item);
  });
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

backToWorks.addEventListener("click", renderNovels);

resumeButton.addEventListener("click", () => {
  const recentNovelIndex = normalizeIndex(
    localStorage.getItem(STORAGE_KEYS.recentNovel),
    getDictionary().novels.length,
  );
  renderEpisodes(recentNovelIndex);
});

homeLinks.filter(Boolean).forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    renderNovels();
  });
});

document.documentElement.dataset.theme = currentTheme;
setLanguage(currentLanguage);
