function setAppearance(mode) {
    sessionStorage.setItem('appearance', mode);
    mode = !mode ? 'auto' : mode;
    document.body.setAttribute('appearance', mode);
}

document.onreadystatechange = function (_) {
    if (document.readyState === 'interactive') {
        let appearance = sessionStorage.getItem('appearance');
        setAppearance(appearance);
    }
};
