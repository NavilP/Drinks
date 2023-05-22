function submitForm(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;
    const pass = document.getElementById('password');
    const contra = pass.value;

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
}