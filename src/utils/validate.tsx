export const validateData = (email: string, password: string) => {
  if (typeof email === "string") {
    const emailValidate =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (!emailValidate) {
      return "Email format is not correct";
    }
  }

  const passwordValidate = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!passwordValidate) {
    return "Password should be 6 to 16 characters long and may include letters, numbers, and special characters";
  }

  return null;
};
