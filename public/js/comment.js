const createComment = async (event) => {
    event.preventDefault();

    console.log('this function is firing')

    const comment_body = document.querySelector('#comment-input').value.trim();
    const post_id = window.location.toString().split('/').at(-1)

    console.log(comment_body, post_id)
    if (!comment_body) {
        alert('comment can not be empty')
    } else {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment_body, post_id}),
            headers: {'Content-Type' : 'application/json'}
        })
    }

    if (response.ok) {
        document.location.reload()
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#submit-button').addEventListener('submit', createComment)