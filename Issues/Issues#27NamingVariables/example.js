//Bad naming

//let a = false;
//let info = "";

/*function process(a) {
  if (!a) {
    console.log("UserNotActive");
  } else {
    console.log("User is active information ");
  }
}

process(a);*/

//Refracting
let userActive = false;

function UserIdentityVerification(userActive) {
  if (!userActive) {
    console.log('UserNotActive');
  } else {
    console.log('User is active information ');
  }
}

UserIdentityVerification(userActive);
