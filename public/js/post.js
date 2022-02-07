//////////////////////////////////////////create a post//////////////////////////////////////
const createPost = async (event) => {
    event.preventDefault();

    const postBody = document.querySelector('.create-post').value.trim();
    console.log(postBody)

    // const response = await fetch('/api/posts', {
    //     method: 'POST',
    //     body: postBody,
    //     headers: { 'Content-Type': 'application/json' },
    // });

    // if (response.ok) {
    //     console.log('Post successfully created')
    //     document.location.replace('/profile')
    // } else {
    //     response.json(err)
    // }
};



document.querySelector('.submit-post-button').addEventListener('submit', createPost)
/////////////////////////////////////////////////////////////////////////////////////