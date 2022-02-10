/////////////////////////////////delete a post////////////////////////////////////////////////////
const deletePost = async (event) => {
    event.preventDefault();

    //get post_id from url 
    const id = window.location.toString().split('/').at(-1)

    const response = await fetch (`/api/posts/${id}`, {
      method: 'DELETE',
      body:  JSON.stringify({post_id:id}),
      headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deletePost)
/////////////////////////////////////////////////////////////////////////////////////