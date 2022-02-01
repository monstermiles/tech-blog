const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const isAuth = require('../utils/auth');


// router.get('/', (req, res) => {
//     res.render('homepage')
// });

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }))
        // console.log(posts)
        res.render('homepage', {
            posts,
            // logged_in: req.session.logged_in

        })
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;