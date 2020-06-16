const person = ['John Doe', 33, 'Mexico'];

const showInfo = ([name, , country, carrer = 'No specified'] = person) => {
    console.log(name, country, carrer);
}

showInfo();