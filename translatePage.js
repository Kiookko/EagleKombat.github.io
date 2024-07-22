document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      title: "The most advanced translator of the future, 59% accuracy",
      translatePageBtn: "Translate Page",
      fromTextPlaceholder: "Enter text",
      toTextPlaceholder: "Translation",
      translateBtn: "Translate"
    },
    ru: {
      title: "Самый совершенный переводчик будущего, точность 59%",
      translatePageBtn: "Перевести страницу",
      fromTextPlaceholder: "Введите текст",
      toTextPlaceholder: "Перевод",
      translateBtn: "Перевести"
    }
  };

  let currentLang = 'ru';

  const translatePageBtn = document.getElementById('translatePageBtn');
  const title = document.getElementById('title');
  const fromText = document.querySelector('.from-text');
  const toText = document.querySelector('.to-text');
  const translateBtn = document.getElementById('translateBtn');

  translatePageBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    const lang = translations[currentLang];

    title.textContent = lang.title;
    translatePageBtn.textContent = lang.translatePageBtn;
    fromText.placeholder = lang.fromTextPlaceholder;
    toText.placeholder = lang.toTextPlaceholder;
    translateBtn.textContent = lang.translateBtn;
  });
});
