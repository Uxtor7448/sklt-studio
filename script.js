// ========== ДАННЫЕ ПРОЕКТОВ ==========
const projectsData = [
    {
        id: 7,
        cover: "images/FE.png",
        title: "Fractured Edges",
        version: "V1",
        description: "Короткая игра созданная для Myindie GameJam LVL10 на тему «Враг — это ты».",
        link: "https://sklt-studio.itch.io/fractured-edges"
    },
    {
        id: 6,
        cover: "images/FNAF3R.png",
        title: "Five Nights at Freddy's 3 Remake",
        version: "B1.0",
        description: "Ремастер культового хоррора. Управляйте камерами и выживайте в обновлённой атмосфере ужаса.",
        link: "https://sklt-studio.itch.io/five-nights-at-freddys-3-remake"
    },
    {
        id: 5,
        cover: "images/TCOT.png",
        title: "The Curse Of Tryton",
        version: "V1.0.0b",
        description: "Вы попытались устроиться в корпорацию Tryton INC, но что-то пошло не так, а вокруг ни души. Исследуйте полузаброшенный завод и раскройте все тайны этого места.",
        link: "https://sklt-studio.itch.io/the-curse-of-tryton"
    },
    {
        id: 4,
        cover: "images/SA.png",
        title: "Sense Adapt",
        version: "1.1",
        description: "Игра для Evening-Jam на тему: Сенсорная Адаптация, где нужно адаптироваться к кривому управлению, галлюцинациям и звукам. Три уровня с уникальными механиками: мигающий свет, навигация по звуку и невидимый путь.",
        link: "https://sklt-studio.itch.io/sense-adapt"
    },
    {
        id: 3,
        cover: "images/MN.png",
        title: "Markot's Nightmare",
        version: "V1.1st",
        description: "Злой Cheter украл весь запас травы Маркота. Верните украденное в безумном приключении.",
        link: "https://sklt-studio.itch.io/markots-nightmare"
    },
    {
        id: 2,
        cover: "images/TP.png",
        title: "The Parkourer",
        version: "v1.0.0",
        description: "Динамичный мобильный паркур-платформер с 14 уровнями: 10 обычных, 1 битва с боссом и 3 уровня адской сложности. Простое управление и оптимизированная графика сделают игру плавной и удобной.",
        link: "https://sklt-studio.itch.io/the-parkourer"
    },
    {
        id: 1,
        cover: "images/SB.png",
        title: "Spring-Ball",
        version: "1.0",
        description: "Хардкорный платформер, где вы управляете мячом на пружине. Избегайте красных платформ и держитесь как можно дольше. Только для Android.",
        link: "https://sklt-studio.itch.io/springball"
    }
];

// ========== ДАННЫЕ ОТЗЫВОВ ==========
const reviewsData = [
    {
        id: 2,
        author: "Bonkmasta43",
        stars: 5,
        text: "FINISHED! I really love the game!",
        gameTitle: "Five Nights at Freddy's 3 Remake",
        gameLink: "https://sklt-studio.itch.io/five-nights-at-freddys-3-remake"
    },
    {
        id: 1,
        author: "stevegamer",
        stars: 4,
        text: "Выглядит прикольно, но я не любитель скримеров + чуть-чуть начало подташнивать, так что я даже первый уровень не прошёл. Но мне нравится, прям не просто игра, а целый эксперимент. Годот уважаю. Кроссплатформенность тоже круто, но мне лень было скачивать на телефон.",
        gameTitle: "Sense Adapt",
        gameLink: "https://sklt-studio.itch.io/sense-adapt"
    }
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    return starsHtml;
}

// ========== РЕНДЕР ПРОЕКТОВ ==========
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = '';
    
    if (projectsData.length === 0) {
        container.innerHTML = '<div class="loading-projects">Нет добавленных проектов</div>';
        return;
    }
    
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <img class="project-cover" src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" loading="lazy" 
                onerror="this.src='https://placehold.co/600x400/220811/ff2d55?text=no+image'">
            <div class="project-info">
                <div class="project-title">
                    ${escapeHtml(project.title)}
                    <span class="project-version">${escapeHtml(project.version)}</span>
                </div>
                <p class="project-description">${escapeHtml(project.description)}</p>
                <a href="${escapeHtml(project.link)}" target="_blank" class="project-link">
                    Подробнее
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// ========== РЕНДЕР ОТЗЫВОВ И РАСЧЁТ СРЕДНЕГО БАЛЛА ==========
function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    const avgSpan = document.getElementById('avgRating');
    
    if (!container) return;
    
    let totalStars = 0;
    reviewsData.forEach(review => {
        totalStars += review.stars;
    });
    const avgRating = reviewsData.length > 0 ? (totalStars / reviewsData.length).toFixed(1) : "0.0";
    
    if (avgSpan) {
        avgSpan.textContent = avgRating;
    }
    
    container.innerHTML = '';
    
    if (reviewsData.length === 0) {
        container.innerHTML = '<div class="no-reviews">Пока нет отзывов. Будьте первым!</div>';
        return;
    }
    
    reviewsData.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.animationDelay = `${0.1 + index * 0.05}s`;
        
        card.innerHTML = `
            <div class="review-header">
                <div class="review-author">
                    <i class="fas fa-user"></i> ${escapeHtml(review.author)}
                </div>
                <div class="review-stars">
                    ${renderStars(review.stars)}
                </div>
            </div>
            <div class="review-text">
                "${escapeHtml(review.text)}"
            </div>
            <div class="review-game">
                <span class="review-game-name">
                    ${escapeHtml(review.gameTitle)}
                </span>
                <a href="${escapeHtml(review.gameLink)}" target="_blank" class="review-game-link">
                    Подробнее <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// ========== ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ ==========
const homePage = document.getElementById('homePage');
const projectsPage = document.getElementById('projectsPage');
const reviewsPage = document.getElementById('reviewsPage');
const navHome = document.getElementById('navHome');
const navProjects = document.getElementById('navProjects');
const navReviews = document.getElementById('navReviews');
const homeNavLink = document.getElementById('homeNavLink');

let isAnimating = false;

function switchPage(pageName) {
    if (isAnimating) return;
    
    const pages = {
        home: homePage,
        projects: projectsPage,
        reviews: reviewsPage
    };
    
    const currentPage = [homePage, projectsPage, reviewsPage].find(p => p && p.style.display !== 'none');
    const nextPage = pages[pageName];
    
    if (!currentPage || !nextPage || currentPage === nextPage) return;
    
    isAnimating = true;
    
    currentPage.style.animation = 'pageSwitchOut 0.2s ease forwards';
    
    setTimeout(() => {
        currentPage.style.display = 'none';
        currentPage.style.animation = '';
        
        nextPage.style.display = 'block';
        nextPage.style.animation = 'pageSwitchIn 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards';
        
        if (navHome) navHome.classList.remove('active');
        if (navProjects) navProjects.classList.remove('active');
        if (navReviews) navReviews.classList.remove('active');
        
        if (pageName === 'home') {
            if (navHome) navHome.classList.add('active');
            document.title = "SKLT Studio";
        } else if (pageName === 'projects') {
            if (navProjects) navProjects.classList.add('active');
            document.title = "SKLT Studio — Проекты";
            renderProjects();
        } else if (pageName === 'reviews') {
            if (navReviews) navReviews.classList.add('active');
            document.title = "SKLT Studio — Отзывы";
            renderReviews();
        }
        
        setTimeout(() => {
            isAnimating = false;
        }, 350);
    }, 200);
}

if (navHome) navHome.addEventListener('click', (e) => { e.preventDefault(); switchPage('home'); });
if (navProjects) navProjects.addEventListener('click', (e) => { e.preventDefault(); switchPage('projects'); });
if (navReviews) navReviews.addEventListener('click', (e) => { e.preventDefault(); switchPage('reviews'); });
if (homeNavLink) homeNavLink.addEventListener('click', (e) => { e.preventDefault(); switchPage('home'); });

document.body.style.animation = 'pageFadeIn 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards';

homePage.style.display = 'block';
projectsPage.style.display = 'none';
reviewsPage.style.display = 'none';
navHome.classList.add('active');

renderProjects();
renderReviews();