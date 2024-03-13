function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+\@[^\s@]+\.[^\s@]+$/; // Corrected email pattern
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if (values.email === "") {
    error.email = "Email should not be empty"; // Corrected error message
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email format is invalid"; // Corrected error message
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty"; // Corrected error message
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password format is invalid"; // Corrected error message
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
