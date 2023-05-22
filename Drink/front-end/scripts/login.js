function submitForm(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;

    const pass = document.getElementById('password');
    const contra = pass.value;

    axios.post('http://localhost:3000/api/users', {
        dato: usuario, 
        password: contra
    })
    .then(response => {
        if (response.data == 'Usuario logeado') {
            const id = usuario;

            let admin = '';

            axios.post('http://localhost:3000/api/users/admin', {
                usuario: usuario,
                password: contra
            })
            .then(response => {
                const id = usuario;
                if (response.data === 'El usuario es administrador') {
                    window.location.href = "./admin-view.html?id=" + id;
                }
                else if(response.data === 'El usuario no es administrador'){
                    window.location.href = "./index-user.html?id=" + id;
                }
            })
            .catch(error => console.error(error));

            /*if(admin === 'El usuario es administrador'){
                window.location.href = "./admin-view.html?id=" + id;
            }
            else {
                window.location.href = "./index-user.html?id=" + id;
            }*/
        }
        else{
            //Mandar mensaje de error
            const error = document.getElementById('error-message');
            error.classList.remove('hide');
            user.value = '';
            pass.value = '';
        }
    })
    .catch(error => console.error(error));
}