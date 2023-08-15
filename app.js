
const login = document.querySelector('#login-btn').addEventListener('click', ()=>{
    const userEmail = document.querySelector("#user-email").value;
    const userPassword = document.querySelector("#user-password").value;
    
    if(userEmail === 'admin' && userPassword == 'admin'){
        location.href ="dashboard.html"
    }else{
        // alert("পার্সওয়ার্ড ঠিক মত দে")
        const myModal = document.querySelector("#my_modal_1");
        myModal.showModal();
    }

})
