
function Division(a, b) {
  if (b === 0) {
    throw new Error("Be careful: Division by zero is not allowed");
  }
  return a / b;
}

//Handled division by 0 error
try {
  console.log(Division(1, 0));
} catch (error) {
  console.error(error.message);
}
