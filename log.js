const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      alert('Email atau password salah');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

