function generateStrongPassword(length = 12) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allCharacters = upperCase + lowerCase + numbers + symbols;
    let password = '';
  
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
  
    for (let i = password.length; i < length; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
  
    return password.split('').sort(() => 0.5 - Math.random()).join('');
  }
  
  export default generateStrongPassword;
  