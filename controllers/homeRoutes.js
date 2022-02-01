const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const isAuth = require('../utils/auth');


// router.get('/', (req, res) => {
//    try {
//     //    const postData = await Post.findAll()
//     //    res.json(postData)
//     res.render('index')
//    }
//    catch (err) {
//     res.json(err)
//    }
// })

router.get('/', (req, res) => {
    res.render('homepage')
});



module.exports = router;