function translateText() {
    const englishText = document.getElementById('englishText').value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ur&dt=t&q=${encodeURI(englishText)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const urduTranslation = data[0][0][0];
            document.getElementById('urduTranslation').value = urduTranslation;
        })
        .catch(error => console.error('Error:', error));
}