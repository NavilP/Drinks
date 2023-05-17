function isInBD(usuario, correo){
    let accept = false;
    BD.forEach((user) =>{
        if((usuario === user.user) && (correo === user.email)){
            accept = true;
        }
    });
    return accept;
}

function singUp(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;
    console.log(usuario);

    const email = document.getElementById('user-email');
    const correo = email.value;
    console.log(correo);

    const pass = document.getElementById('password');
    const contra = pass.value;
    console.log(contra);

    let data = {
        user: usuario,
        email: correo,
        password: contra,
    };

    const check = document.getElementById('check');

    if(!isInBD(usuario, correo)){
        BD.push(data);
        console.log(BD);
        //window.location.href = "./login.html";
        if(!check.checked){
            //Mandar mensaje de error
            const error = document.getElementById('error-message2');
            error.classList.remove('hide');
    
            const inputBoxes = document.querySelectorAll('.inputbox');
            inputBoxes.forEach(inputBox => {
                inputBox.addEventListener('click', () =>{
                    error.classList.add('hide');
                });
            });
        }
    }
    else{
        //Mandar mensaje de error
        const error = document.getElementById('error-message1');
        error.classList.remove('hide');

        const inputBoxes = document.querySelectorAll('.inputbox');
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('click', () => {
                error.classList.add('hide');
            });
        });

        check.checked = false;
    }
    
    user.value = '';
    email.value = '';
    pass.value = '';
    check.checked = false;
}