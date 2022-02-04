const router = require('express').Router();
const { User } = require('../../models');



//////////////////////////////// create a new user /////////////////////////////////////////////
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create(req.body);
        req.session.user_id = newUserData.id;
        req.session.logged_in = true;

        res.status(200).json(newUserData)

        console.log(newUserData);

    } catch (err) {
        res.status(400).json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


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
            res.status(400).json({ message: "User wasn't found - username " })
            return;
        }
        //use checkPassword function from User model to compare password
        const existingPassword = existingUser.checkPassword(req.body.passwordInput);

        if (!existingPassword) {
            res.status(400).json({ message: "User wasn't found - password " })
            return;
        }

        req.session.save(() => {
            req.session.user_id = existingUser.id;
            req.session.logged_in = true;
        })

        res.status(200).json({ message: "successful." })

    } catch (err) {
        res.status(400).json({ message: "User wasn't found" })
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
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// log out //////////////////////////////////////////
router.post('/logout', (req, res) => {
    try {
        // if (req.session.loggedIn) {
        //     req.session.destroy(() => {
        //         res.status(204).end();
        //     })
        // } else {
        //     res.status(404).end();
        // }
        req.session.destroy(() => {
            res.status(204).end();
            console.log("logged out!")
        })

    } catch (err) {
        res.status(404).end();
    }
})

/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;