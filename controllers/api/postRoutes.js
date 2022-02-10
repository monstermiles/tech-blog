const { Post } = require('../../models');

const router = require('express').Router();

///////////////////////////////////////create a post//////////////////////////////////////////
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,

        });
        res.json(newPost);
    } catch (err) {
        res.json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////delete a post////////////////////////////////////////////////
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
                where: {id: req.params.id}
            })
        
        if (!postData) {
            res.status(404).json('No post with this ID.')
            return;
        }

        res.status(200).json(postData)
    } catch (err){
        res.json(err)
    }
})
/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;