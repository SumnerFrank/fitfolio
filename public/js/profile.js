console.log('TEST HERE')
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#content').value.trim();
  console.log('test123'); 
  console.log(title);
  console.log(description);
    if (title && description) {
        console.log('hello world')
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_body = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#comment').dataset.id.trim();
  console.log('test123'); 
  console.log(comment_body);
    if (comment_body) {
        console.log('hello world')
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_body, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create comment');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  // document
  //   .querySelector('.new-post-form')
  //   .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')

  document
  .querySelector('.new-workout')
  .addEventListener('submit', newFormHandler)

// if(document.querySelector('#comment-form')) {
  document
  .querySelector('#comment-form')
  .addEventListener('click', commentFormHandler)
// }
