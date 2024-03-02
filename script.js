let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

function toggle_review(view, icon) {
    
    
    
    
    const _view = document.getElementById(view);
    const _plus = document.getElementById(icon);
   
    if (_view.style.display !== 'block') {
        _view.style.display = 'block';
        _plus.classList.remove('fa-plus');
        _plus.classList.add('fa-minus');

        for (let i = 0; i < 6; i++) {
            if (view === 'review-' + String(i + 1)) {
                continue;
            } else {
                document.getElementById('plus-' + String(i + 1)).classList.remove("fa-minus");
                document.getElementById('plus-' + String(i + 1)).classList.add("fa-plus");
                document.getElementById('review-' + String(i + 1)).style.display = 'none';
            }
        }

    } else {
        _view.style.display = 'none';
        _plus.classList.add('fa-plus');
        _plus.classList.remove('fa-minus');
    }
    

}