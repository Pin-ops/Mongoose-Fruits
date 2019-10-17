const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true, useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "Peaches are so yummy!"
});

// fruit.save();



const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 9,
//     review: "Great fruit."
// });

const Person = mongoose.model("Person", personSchema)

const mandarinen = new Fruit({
    name: "Mandarinen",
    rating: 8,
    Review: "Sweety!"
})

// pineapple.save();
mandarinen.save();


Person.updateOne({ name: "John" }, { favouriteFruit: mandarinen },
    function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Succesfully updated the document!")
        };
    });


// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });


// person.save();


// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me!"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weird texture!"
// });

// const cherry = new Fruit({
//     name: "Cherry",
//     rating: 8,
//     review: "Such a beautiful color!"
// });

// const mango = new Fruit({
//     name: "Mango",
//     rating: 5,
//     review: "What's the inside?"
// });

// const avocado = new Fruit({
//     name: "Avocado",
//     rating: 10,
//     review: "My Best KetoFriend!"
// });


// Fruit.insertMany([kiwi, orange, banana, cherry, mango, avocado], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB!");
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({ _id: "5da8bedc415e901dfc838d3a" }, { name: "Peach" },
//     function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully updated the document.")
//         }
//     });

// Fruit.deleteOne({ name: "Peach" },
//     function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted the document.")
//         }
//     }
// );

// Person.deleteMany({ name: "John" },
//     function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted the person.")
//         }
//     });

// Fruit.deleteMany({ name: ["Apple", "Kiwi", "Orange", "Banana"] },
//     function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted all the documents!")
//         }
//     });