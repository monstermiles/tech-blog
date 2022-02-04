const router = require('express').Router();
const { User } = require('../../models');


/////////////////////////login an existing user//////////////////////////////////////////
router.post('/login', async (req, res) => {
    try {
        // console.log("request body -------" + req.body)
        //look for a user with the given username
        const existingUser = await User.findOne(
            {
                where: {
                    username: req.body.usernameInput
                }
            }
        );
        if (!existingUser) {
            res.status(400).json({message: "User wasn't found - username "})
            return;
        }
        //use checkPassword function from User model to compare password
        const existingPassword = existingUser.checkPassword(req.body.passwordInput);

        if (!existingPassword) {
            res.status(400).json({message: "User wasn't found - password "})
            return;
        }

        req.session.save(() => {
            req.session.user_id = existingUser.id;
            req.session.loggedIn = true;
        })

        res.status(200).json({message:"successful."})

    } catch (err) {
        res.status(400).json({message: "User wasn't found"})
    }
})

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////create a new user//////////////////////////////////////////
// router.post('/', async (req, res) => {
//     try {
//         const
//     }
//     catch {

//     }
// })



module.exports = router;