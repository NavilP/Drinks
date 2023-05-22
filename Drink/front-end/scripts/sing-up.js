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

    /*if(!isInBD(usuario, correo)){
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
    }*/

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
    else{
        axios.post('http://localhost:3000/api/users', {
            nombre: usuario,
            correo: correo,
            password: contra
        })
        .then(response => {
            if(response.data == 'Usuario registrado'){
                window.location.href = "./index-user.html?id=" + usuario;
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
        })
        .catch(error => console.error(error));
    }
    
    user.value = '';
    email.value = '';
    pass.value = '';
    check.checked = false;
}