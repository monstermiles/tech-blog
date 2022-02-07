const router = require('express').Router();
// const { TimeoutError, Error } = require('sequelize/dist');
const { Post, User, Comment } = require('../models');
// const isAuth = require('../utils/auth');


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


//////////////////////////////view a single post///////////////////////////////////////
router.get('/post/:id', async (req, res) => {
    try {
        const singlePostData = await Post.findByPk(req.params.id, {
            //inclue the username of the post's creator
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        console.log(singlePostData)
        const singlePost = singlePostData.get({plain: true})
        console.log(singlePost)

        res.render('post', {
            ... singlePost
        })
    
    } catch (err) {
        res.status(err)
    }
});
///////////////////////////////////////////////////////////////////////////

///////////////////////////render profile page////////////////////////////////////
router.get('/profile', async (req, res) => {
    try {
        const userPostData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [
                {model: Post,}
            ]
        });

        const posts = userPostData.get({plain: true})

        res.render('profile', {
            ...posts,
            logged_in: true
        })

    } catch (err) {
        res.json(err)
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

////////////////////////////render create post page /////////////////////////////
router.get('/createpost', async (req, res) => {
    try {
        res.render('createpost')
    } catch (err) {
        res.json(err)
    }
});
///////////////////////////////////////////////////////////////////////////











module.exports = router;