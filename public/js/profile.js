console.log('TEST HERE')
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  console.log('test123');
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
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')

document.querySelector('#submit-btn').addEventListener('click', newFormHandler)