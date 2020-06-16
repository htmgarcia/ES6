function registerUser(name, country = 'No specified', email, telephone = 'No specified') {
    return `Name: ${name}, Country: ${country}, Email: ${email}, Telephone: ${telephone}`;
}

console.log(registerUser('John Doe', undefined, 'mail@nomail.com', undefined));