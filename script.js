function translateText() {
    const inputText = document.getElementById('inputText').value;
    const language = document.getElementById('languageSelect').value;
    const outputText = document.getElementById('outputText');

    // Simulated translation for demo purposes
    const translations = {
        es: 'Texto traducido al español.',
        fr: 'Texte traduit en français.',
        de: 'In deutschen übersetzter Text.',
        ru: 'Переведенный текст на русский.'
    };

    outputText.value = translations[language] || 'Translation not available.';
}

