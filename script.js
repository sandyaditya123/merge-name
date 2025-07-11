let firstName, lastName, fullName, myAlert;

document.getElementById('ButtonMerge').onclick = function () {
    firstName = document.getElementById('first-name').value;
    lastName = document.getElementById('last-name').value;
    fullName = document.getElementById('full-name');
    myAlert = document.getElementById('alert');
    if (!firstName && !lastName) {
        myAlert.textContent = 'Please enter your full name!';
        myAlert.classList.toggle('d-none');
    } else if (!firstName && lastName) {
        myAlert.textContent = 'Please enter your first name!';
        myAlert.classList.toggle('d-none');
    } else if (firstName && !lastName) {
        myAlert.textContent = 'Please enter your last name!';
        myAlert.classList.toggle('d-none');
    } else {
        fullName.style.fontWeight = 'bold';
        fullName.textContent = `${firstName} ${lastName}`;
    }
};
