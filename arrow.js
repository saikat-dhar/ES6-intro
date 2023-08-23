
const sum = ( num1 , num2) => num1 * num2;

const numbers = sum(3,5);
console.log(numbers);

const speace = `
    this is my mother land 
    i was born in my country
    i fell very happy for my land

`
console.log(speace);

const friendAge = (friend1, friend2) => {
    const sum = friend1 + friend2;
    const multy = friend1 * friend2;
    const total = sum + multy ;
   return total;
}

const age1 = 25 ;
const age2 = 19 ;
const age = friendAge(age1 , age2);
console.log(age);


