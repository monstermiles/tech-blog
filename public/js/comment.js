const createComment = async (event) => {
    event.preventDefault();

    console.log('this function is firing')

    const comment_body = document.querySelector('#comment-input').value.trim();
    const post_id = window.location.toString().split('/').at(-1);

    console.log(comment_body, post_id)
    if (!comment_body) {
        alert('comment can not be empty')
    } else {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment_body, post_id}),
            headers: {'Content-Type' : 'application/json'}
        })
        if (response.ok) {
            console.log('comment posted')
        } else {
            alert(response.statusText)
        }
    }
}

// function createComment() {
//     console.log('this button works')
// }

document.querySelector('.submit-comment-btn').addEventListener('click', createComment)