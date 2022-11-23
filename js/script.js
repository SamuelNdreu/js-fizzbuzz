let fizz = document.getElementById("frizz");
let buzz = document.getElementById("buzz");
let fizzBuzz = document.getElementById("frizzbuzz");
let numbers = document.getElementById("numbers");

//First Step: scrivi un programma che stampi in console i numeri da 0 a 100
for (let i = 0; i < 101; i++){
    console.log(i);

    if (i % 3 === 0){
        frizz.append("Fizz! ");
        console.log(i + 'frizz')
    }else if (i % 5 === 0){
        buzz.append("Buzz! ");
        console.log(i + 'buzz');
    }
    if (i % 3 === 0 && i % 5 === 0){
        fizzBuzz.append("FrizzBuzz! ");
        console.log(i + 'FrizzBuzz');
    }
}
