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

