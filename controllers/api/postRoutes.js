const { Post } = require('../../models');

const router = require('express').Router();

///////////////////////////////////////create a post//////////////////////////////////////////
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const newPost = await Post.create({
            ...req.body,
            // user_id: req.session.user_id,
            user_id:3
        });
        console.log('new post______________' + newPost)
        res.json(newPost);
    } catch (err) {
        res.json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;