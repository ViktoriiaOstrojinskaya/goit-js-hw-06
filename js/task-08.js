const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (!email.value || !password.value) {
    alert('All fields must be filled!');
  }

  console.log(data);
  event.target.reset();
}
