const userLogin = async (event) => {
    //stop page from reloading on click
    event.preventDefault();

    //grab the user input 
    const usernameInput = document.querySelector('#username').value.trim()
    const passwordInput = document.querySelector('#password').value.trim()
    
    if (usernameInput && passwordInput) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ usernameInput, passwordInput }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
           console.log('Login successful.') 
        }
        else {
            response.status 
        }
    }
}


loginBtn = document.querySelector('.user-login').addEventListener('submit', userLogin)