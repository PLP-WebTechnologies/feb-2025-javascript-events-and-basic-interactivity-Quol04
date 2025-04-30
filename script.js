
const submitButton = document.querySelector('.submit');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const showModal= document.querySelector('.modal');
const closeModal = document.querySelector('.close');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const username = usernameInput.value;

    if (email === '' || username === '') {
        return alert('Please fill in the email and username fields!');
    } else {
        showModal.classList.add('show');
        // alert('Form submitted successfully!');
        emailInput.value = '';
        usernameInput.value = '';
    }
});
closeModal.addEventListener('click', () => {
    showModal.classList.remove('show');
});