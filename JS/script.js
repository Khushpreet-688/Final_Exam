function change_mode(){
    document.body.classList.toggle('dark-theme')
}


toggle = document.querySelector(".toggle")
toggle.addEventListener('change', change_mode)