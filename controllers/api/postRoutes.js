const { Post } = require('../../models');

const router = require('express').Router();

///////////////////////////////////////create a post//////////////////////////////////////////
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            post_body: req.body,
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch (err) {
        res.json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;