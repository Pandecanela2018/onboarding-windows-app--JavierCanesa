const userName = 'javier Canesa';
const userEmail = 'javier@gmail.com ';

/*
function processName(userName, userEmail) {
  if (!isEmailValid(userEmail)) {
    notifyInvalidEmail();
    return;
  }

  saveUser(userName);
  sendWelcomeEmail(userEmail);
}

function isEmailValid(email) {
  return email.includes("@");
}

function notifyInvalidEmail() {
  console.log("Invalid email. Please enter a valid email address.");
}

function saveUser(name) {
  console.log(`User "${name}" saved successfully.`);
}

function sendWelcomeEmail(email) {
  console.log(`Welcome email sent to ${email}.`);
}

processName(userName, userEmail);
*/

function processName(userName, userEmail) {
  if (!userEmail.includes('@')) {
    console.log(' Invalid email. Please enter a valid email address.');
    return;
  }

  console.log(` User "${userName}" saved successfully.`);

  console.log(` Welcome email sent to ${userEmail}.`);
}

processName(userName, userEmail);
