function toggleMenu() { 
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const btn = document.getElementById('hamburgerBtn'); 
    const isOpen = drawer.classList.toggle('open'); 
    overlay.classList.toggle('active'); 
    btn.classList.toggle('active'); 
}
