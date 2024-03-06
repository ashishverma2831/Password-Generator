function generatePassword(len) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
    for (let i = 0; i < len; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }
    return password;
}

module.exports = generatePassword;

