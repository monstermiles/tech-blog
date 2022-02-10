///////////////////////////////delete a post////////////////////////////////////////////////////
const deletePost = async (event) => {
    event.preventDefault();
    console.log('this button is working')

    if (event.target.hasAttribute('delete-id')) {
        const id = event.target.getAttribute('delete-id')
        console.log(id)

        const response = await fetch (`/api/posts/${id}`, {
            method: 'DELETE',
          //   body:  JSON.stringify({post_id:id}),
          //   headers: {'Content-Type': 'application/json'}
          })

          if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }

  
}

document.querySelector('.delete-post-btn').addEventListener('click', deletePost)
/////////////////////////////////////////////////////////////////////////////////////