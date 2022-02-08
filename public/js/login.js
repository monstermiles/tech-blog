///////////////////////////////////////create a new user////////////////////////////////////////
const addNewUser = async (event) => {
    event.preventDefault();

    //grab user input
    const username = document.querySelector('#create-username').value.trim();
    const email = document.querySelector('#create-email').value.trim();
    const password = document.querySelector('#create-password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();

    //if all fields are entered...
    if (username && email && password && confirmPassword) {
        //if passwords match
        if (password === confirmPassword) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            //if user is successfullly created, go to homepage
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
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()
    
    if (username && password) {
        // console.log("username and password input-----" + usernameInput + passwordInput)
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        // console.log("response body------" + response.body)
        if (response.ok) {
           console.log('Login successful.') 
           document.location.replace('/')
        }
        else {
            response.json({message: 'Username or password is incorrect.'}) 
        }
    } 
    else {
        alert("Username or password is incorrect.")
    }
}
document.querySelector('.user-login').addEventListener('submit', userLogin)
/////////////////////////////////////////////////////////////////////////////////////

