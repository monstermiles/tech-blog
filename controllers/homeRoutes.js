const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const isAuth = require('../utils/auth');


// router.get('/', (req, res) => {
//     res.render('homepage')
// });


/////////////////////////renders all the posts on the homepage/////////////////////////
router.get('/', async (req, res) => {
    try {
        
        //returns an array of model instance objects
        const postData = await Post.findAll({
            
            //for each post, return its associate username
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        
        //map over the postData array and turn each one into a plain js object
        const posts = postData.map((post) => post.get({ plain: true }))
        
        //render the homepage handlebars, with the posts. 
        res.render('homepage', {
            posts,
            
            logged_in: req.session.logged_in
        })
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});
///////////////////////////////////////////////////////////////////////////



/////////////////////////render login page/////////////////////////////////

router.get('/login', async (req, res) => {
    try {
    res.render('login')
    } catch (err) {
        res.json(err)
    }
});

///////////////////////////////////////////////////////////////////////////











module.exports = router;