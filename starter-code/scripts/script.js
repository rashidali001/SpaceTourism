
/* Open Nav */
function openNav()
{
    const overlay = document.querySelector('div.overlay');
    overlay.style.animationName = 'effects';
    overlay.style.display = 'block';
}
/* Close Nav */
function closeNav()
{
    let overlay = document.querySelector('div.overlay');
    overlay.style.display = 'none';
}
