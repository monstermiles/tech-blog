///////////////////////////////////////create a new user////////////////////////////////////////
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

document.querySelector('.create-user').addEventListener('submit', addNewUser)
/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////login an existing user/////////////////////////////////////////
const userLogin = async (event) => {
    //stop page from reloading on click
    event.preventDefault();

    //grab the user input 
    const usernameInput = document.querySelector('#username').value.trim()
    const passwordInput = document.querySelector('#password').value.trim()
    
    if (usernameInput && passwordInput) {
        // console.log("username and password input-----" + usernameInput + passwordInput)
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({usernameInput, passwordInput}),
            headers: { 'Content-Type': 'application/json' },
        });
        // console.log("response body------" + response.body)
        if (response.ok) {
           console.log('Login successful.') 
        // document.location.replace('/profile')
        }
        else {
            response.status 
        }
    } 
    else {
        alert("Username or password is incorrect.")
    }
}


document.querySelector('.user-login').addEventListener('submit', userLogin)
/////////////////////////////////////////////////////////////////////////////////////

