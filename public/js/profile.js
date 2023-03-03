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