let fizz = document.getElementById("frizz");
let buzz = document.getElementById("buzz");
let fizzBuzz = document.getElementById("frizzbuzz");
let numbers = document.getElementById("numbers");

//First Step: scrivi un programma che stampi in console i numeri da 0 a 100
for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {

    //? Per i numeri che sono multipli di 3 che di 5 stampi <"FizzBuzz">
    // fizzBuzz.append("FizzBuzz! ");
    console.log("FrizzBuzz");
    
} else if (i % 3 === 0) {
    //?per i multiply di 5 stampi <"Fizz">
    // fizz.append("Fizz! ");
    console.log("Frizz");

} else if (i % 5 === 0) {
    //? per i multipli di 5 stampi “Buzz”
    // buzz.append("Buzz! ");
    console.log("Buzz");
    console.log(i + 'buzz')
}
}
