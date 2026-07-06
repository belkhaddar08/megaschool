/* ============================================
   PHYSIQUE-CHIMIE — M. BELKHADDAR MOHAMMED
   Scripts JavaScript
   ============================================ */

// Menu mobile
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Mode sombre / clair
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    
    // Mise à jour de l'icône
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

// Charger le thème sauvegardé
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        const btn = document.querySelector('.theme-toggle');
        if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    }
});

// Accordéons des chapitres (page Cours)
function toggleChapitre(header) {
    const item = header.parentElement;
    item.classList.toggle('open');
}

// Recherche de cours
function searchCours() {
    const input = document.getElementById('searchCours');
    const filter = input.value.toLowerCase();
    const chapitres = document.querySelectorAll('.chapitre-item');
    
    chapitres.forEach(chap => {
        const text = chap.textContent.toLowerCase();
        chap.style.display = text.includes(filter) ? '' : 'none';
    });
}

// Recherche d'exercices
function searchExos() {
    const input = document.getElementById('searchExos');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.exo-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(filter) ? '' : 'none';
    });
}

// Filtrer exercices par niveau
function filterExos(niveau, btn) {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filtrer les cartes
    const cards = document.querySelectorAll('.exo-card');
    cards.forEach(card => {
        if (niveau === 'all' || card.dataset.niveau === niveau) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Onglets des devoirs
function switchTab(tabId, btn) {
    // Masquer tous les contenus
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.getElementById('tab-' + tabId).classList.remove('hidden');
    
    // Mettre à jour les boutons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Formulaire de contact
function handleSubmit(e) {
    e.preventDefault();
    alert('✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
    e.target.reset();
    return false;
}

// Fermer le menu mobile en cliquant ailleurs
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.navbar');
    const links = document.getElementById('navLinks');
    if (!nav.contains(e.target) && links.classList.contains('active')) {
        links.classList.remove('active');
    }
});
