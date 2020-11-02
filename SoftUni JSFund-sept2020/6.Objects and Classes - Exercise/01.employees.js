function emp(array) {

    for (const name of array) {
        let employee = {};
        employee.name = name;
        let nameLength = name.length;
        employee.personalNumber = nameLength;
        console.log(`Name: ${name} -- Personal Number: ${nameLength}`);
    }
}

emp([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);