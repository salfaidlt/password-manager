function generateStrongPassword(lowercase: number, uppercase: number, digits: number, symbols: number) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digitChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-={}:<>?';

  const password = [];

  // Add lowercase letters
  for (let i = 0; i < lowercase; i++) {
    password.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
  }

  // Add uppercase letters
  for (let i = 0; i < uppercase; i++) {
    password.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
  }

  // Add digits
  for (let i = 0; i < digits; i++) {
    password.push(digitChars[Math.floor(Math.random() * digitChars.length)]);
  }

  // Add symbols
  for (let i = 0; i < symbols; i++) {
    password.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
  }

  // Shuffle the password array to ensure randomness
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  // Convert the password array to a string
  return password.join('');
}

export default generateStrongPassword;
