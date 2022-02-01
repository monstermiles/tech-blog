const sequelize = require('../config/connection');
const User = require('../models/User')
const Post = require('../models/Post')
// const Comment = require('../models/Comment')

const userData = require('./userData.json')
const postData = require('./postData.json')
// const commentData = require('./commentData.json')




const seedDatabase = async () => {
    await sequelize.sync({ force: false });
    try {
        const user = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });


        for (const post of postData) {
            await Post.create({
                ...post,
                user_id: user[Math.floor(Math.random() * user.length)].id,
            });
        }

        // for (const comment of commentData) {
        //     await Comment.create({
        //         ...comment,
        //         user_id: user[Math.floor(Math.random() * user.length)].id,
        //         post_id: post[Math.floor(Math.random() * post.length)].id
        //     });
        // }
    }
    catch (error) {
        console.log(error)
    }
    process.exit(0);
};

seedDatabase();