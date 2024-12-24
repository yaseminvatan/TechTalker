document.addEventListener('DOMContentLoaded', () => {
  const createPostForm = document.querySelector('#create-post-form');
  if (createPostForm) {
    createPostForm.addEventListener('submit', async (event) => {
       event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post.');
      }
    }
  });
}
});

  document.querySelectorAll('.edit-post').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.getAttribute('data-id');
      const title = prompt('Enter the new title:');
      const content = prompt('Enter the new content:');
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post.');
        }
      }
    });
  });

  document.querySelectorAll('.delete-post').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post.');
      }
    });
  });
  