document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
  
    if (username && password && email) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  });
}
});
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#signup-form')?.addEventListener('submit', async (event) => {;
      event.preventDefault();
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
  
    if (username && password && email) {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
          console.error(errorData);
        alert('Failed to sign up.');
      }
    }catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred during signup.');
    }
  } else {
    alert('Please enter both a username and password.');
  }
});
});