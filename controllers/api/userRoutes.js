const router = require('express').Router();
const { User } = require('../../models');
const isAuth = require('../../utils/isAuth');


//////////////////////////////// create a new user /////////////////////////////////////////////
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create(req.body);
        
        req.session.save(() => {
            req.session.user_id = newUserData.id;
            req.session.logged_in = true;
            res.status(200).json(newUserData)
        })

        console.log(newUserData);
        

    } catch (err) {
        res.status(400).json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////login an existing user//////////////////////////////////////////
router.post('/login', async (req, res) => {
    try {
        //look for a user with the given username
        const existingUser = await User.findOne(
            {
                where: {
                    username: req.body.username
                }
            }
        );
        if (!existingUser) {
            res.status(400).json({ message: "Username or password is incorrect." })
            return;
        }
        //use checkPassword function from User model to compare password
        const existingPassword = existingUser.checkPassword(req.body.password);

        if (!existingPassword) {
            res.status(400).json({ message: "Username or password is incorrect" })
            return;
        }

        req.session.save(() => {
            req.session.user_id = existingUser.id;
            req.session.logged_in = true;
            res.status(200).json({user: existingUser, message: "Login successful." })
        })

        

    } catch (err) {
        res.status(400).json({ message: "User wasn't found" })
    }
})

/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// log out //////////////////////////////////////////
router.post('/logout', (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
            res.sendStatus(204)
            })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(404).end();
    }
})
/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;