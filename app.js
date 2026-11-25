// Proste przełączanie widoków (Model Oś i Szprychy)
function goToScreen(screenName) {
    // 1. Schowaj wszystkie ekrany
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // 2. Odznacz przyciski w menu
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // 3. Pokaż wybrany ekran
    const targetScreen = document.getElementById(screen - ${ screenName });
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // 4. Podświetl aktywny przycisk
    const targetBtn = document.getElementById(btn - ${ screenName });
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

// Podpięcie kliknięć pod przyciski menu
document.getElementById('btn-home').addEventListener('click', () => goToScreen('home'));
document.getElementById('btn-catalog').addEventListener('click', () => goToScreen('catalog'));
document.getElementById('btn-report').addEventListener('click', () => goToScreen('report'));

// Obsługa wyszukiwarki
document.getElementById('main-search-btn').addEventListener('click', () => {
    const query = document.getElementById('main-search').value.trim();
    if (query) {
        alert(Wyszukuję: "${query}" -> Przenoszę do katalogu sal.);
        goToScreen('catalog');
    } else {
        alert('Wpisz najpierw numer sali lub nazwę miejsca!');
    }
});
