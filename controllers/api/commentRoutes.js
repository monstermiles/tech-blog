const router = require('express').Router();
const { Comment } = require('../../models');
const isAuth = require('../../utils/isAuth');


/////////////////////////////create a comment//////////////////////////////////////////////
router.post('/', isAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_body: req.body.comment_body,
            user_id : req.session.user_id,
            post_id: req.body.post_id,
        })
        console.log(newComment)
        res.status(200).json(newComment)
    } catch (err) {
        res.json(err)
    }
})
///////////////////////////////////////////////////////////////////////////

module.exports = router;