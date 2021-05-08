//Normal Copy
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let copiedPerson = person;
copiedPerson.firstName = 'Jane';
console.log(person); 
//OUTPUT-----------------------------------------------------------------------------------
                                                                                            // {
                                                                                            //     firstName: 'Jane',
                                                                                            //     lastName: 'Doe'
                                                                                            // }

//DeepCopy(No connected component)-ALL KEY-VALUES ARE COPIED;
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(person);

// OUTPUT------------------------------------------------------------------------
                                                                                // {
                                                                                //     firstName: 'John',
                                                                                //     lastName: 'Doe',
                                                                                //     address: {
                                                                                //         street: 'North 1st street',
                                                                                //         city: 'San Jose',
                                                                                //         state: 'CA',
                                                                                //         country: 'USA'
                                                                                //     }
                                                                                // }
 
                                                                                
//SHALLOW COPY--ONLY HIGH LEVEL KEYS ARE COPIED AND FOR INTERNAL OBJECTS THEIR ADDRESS IS COPIED; 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);

//OUTPUT------------------------------------
                                            // {
                                            //     firstName: 'Jane',
                                            //     lastName: 'Doe',
                                            //     address: {
                                            //         street: 'Amphitheatre Parkway',
                                            //         city: 'Mountain View',
                                            //         state: 'CA',
                                            //         country: 'USA'
                                            //     }
                                            // }
                                            // console.log(person);
                                            // {
                                            //     firstName: 'John',
                                            //     lastName: 'Doe',
                                            //     address: {
                                            //         street: 'Amphitheatre Parkway',
                                            //         city: 'Mountain View',
                                            //         state: 'CA',
                                            //         country: 'USA'
                                            //     }
                                            // }

/************ONLY THE DEEPEST LEVELS ARE CONNECTED(CHANGING ONE WILL AUTOMATICALLY CHANGE OTHER) IN NORMAL AND SHALLOW */        
// SHALLOW AND DEEP COPY ARE CASES FOR NESTED OBJECTS */                                                                       