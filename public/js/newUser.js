const addNewUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#create-username').value.trim();
    const email = document.querySelector('#create-email').value.trim();
    const password = document.querySelector('#create-password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();

    console.log('--------------' + username, email, password, confirmPassword)

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            if (response.ok) {
                document.location.replace('/')
            } else {
                alert(response.status);
            }
        } else {
            alert('Passwords must match.')
        }
    }

}


document.querySelector('#create-user').addEventListener('submit', addNewUser)