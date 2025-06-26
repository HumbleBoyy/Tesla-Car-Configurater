const topBar = document.getElementById('topBar');
const exteriorButtons = document.querySelector("#exterior-buttons");
const interiorButtons = document.querySelector("#interior-buttons")
const exteriorImage = document.getElementById("exteriorImage");
const interiorImage = document.getElementById("interiorImage");

// Handle Top Bar Scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle("visible-bar", atTop);
    topBar.classList.toggle("hidden-bar", !atTop);
};

// Handle Color Selection

const handleColorButtonClick = (e) => {
    let button;

    if(e.target.tagName === "IMG"){
        button = e.target.closest('button');
    }else if (e.target.tagName === "BUTTON"){
        button = e.target;
    }

    if(button){
        const buttons = e.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('button_selected'))
        button.classList.add('button_selected')
    }
}


// Event Listeners
window.addEventListener('scroll', ()=>  requestAnimationFrame(handleScroll));
exteriorButtons.addEventListener('click', handleColorButtonClick);
interiorButtons.addEventListener('click', handleColorButtonClick);