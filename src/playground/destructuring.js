const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

//The below definition is called Object Destructuring- using specific properties of an object and can rename them or create a default value to them.

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array destructuring is similar to object destructuring - instead here we get the array items all at once.

const item = ['Coffee (iced)', '2.00$', '3.50$', '2.75$'];

const [productName, smallCoffeeCost, mediumCoffeeCost, largeCoffeeCost] = item;

console.log(`A medium ${productName} costs ${mediumCoffeeCost}`);
