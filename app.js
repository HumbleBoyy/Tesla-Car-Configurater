const topBar = document.getElementById('topBar');

// Handle Top Bar Scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle("visible-bar", atTop);
    topBar.classList.toggle("hidden-bar", !atTop);
};


// Event Listeners

window.addEventListener('scroll', ()=>  requestAnimationFrame(handleScroll));
