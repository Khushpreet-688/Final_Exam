
function change_mode(){
    document.body.classList.toggle('dark-theme')
}

toggle = document.querySelector(".toggle")
toggle.addEventListener('change', change_mode)

function submit(e){
    frm_name = document.querySelector("#name")
    frm_email = document.querySelector("#email")
    frm_msg = document.querySelector("#msg")
    let form_info = {
        name: `${frm_name.value}`,
        email: `${frm_email.value}`,
        message: `${frm_msg.value}`
    }

    console.log(form_info)
    e.preventDefault()
}

submit_btn = document.querySelector("#frm-btn")
submit_btn.addEventListener('click', submit)