const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    exchangeIcon = document.querySelector(".exchange"),
    selectTags = document.querySelectorAll("select"),
    translateBtn = document.querySelector("button"),
    icons = document.querySelectorAll(".row i");

selectTags.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id === 0 ? (country_code === "en-GB" ? "selected" : "") : (country_code === "bn-IN" ? "selected" : "");
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchangeIcon.addEventListener("click", () => {
    [fromText.value, toText.value] = [toText.value, fromText.value];
    [selectTags[0].value, selectTags[1].value] = [selectTags[1].value, selectTags[0].value];
});

fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
        translateFrom = selectTags[0].value,
        translateTo = selectTags[1].value;

    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            toText.value = data.responseData.translatedText;
            data.matches.forEach(match => {
                if (match.id === 0) {
                    toText.value = match.translation;
                }
            });
            toText.setAttribute("placeholder", "Translation");
        });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
            navigator.clipboard.writeText(target.id === "from" ? fromText.value : toText.value);
        } else {
            let utterance = new SpeechSynthesisUtterance(target.id === "from" ? fromText.value : toText.value);
            utterance.lang = target.id === "from" ? selectTags[0].value : selectTags[1].value;
            speechSynthesis.speak(utterance);
        }
    });
});
