//////////////////////////////////////////create a post//////////////////////////////////////
const createPost = async (event) => {
    event.preventDefault();

    const post_body = document.querySelector('#post-body').value.trim();
    console.log(post_body)

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: post_body,
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log('Post successfully created')
        document.location.replace('/profile')
    } else {
        response.json(err)
    }
};


document.querySelector('.submit-post-btn').addEventListener('submit', createPost)
/////////////////////////////////////////////////////////////////////////////////////