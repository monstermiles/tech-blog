const router = require('express').Router();
const { User } = require('../../models');

/////////////////////////login an existing user//////////////////////////////////////////
router.post('/login', async (req, res) => {
    try {
        console.log("request body -------" + req.body)
        //look for a user with the given username
        const existingUser = await User.findOne(
            {
                where: {
                    username: req.body.usernameInput
                }
            }
        );
        if (!existingUser) {
            res.status(400)
            alert('Username or password is invalid.')
        }
        //use checkPassword function from User model to compare password
        const existingPassword = await existingUser.checkPassword(req.body.passwordInput);

        if (!existingPassword) {
            res.status(400)
            alert('Username or password is invalid.')
        }
        else {
            console.log('You are logged in, I think.')}
    } catch {

    }
})

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////create a new user//////////////////////////////////////////




module.exports = router;