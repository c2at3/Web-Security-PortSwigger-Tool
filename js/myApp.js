document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        const location = link.getAttribute('href');
        link.addEventListener('click', () => chrome.tabs.create({ active: true, url: location }));
    });
});