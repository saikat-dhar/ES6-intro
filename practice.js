
const myFuc = (num4, num5, num6) => num4 * num5 * num6;
// console.log(myFuc);

const total = myFuc(3,5,7);
console.log(total);


  const first =  'i am a developer';
  const seconde =   'i love to code ';
  const third =  'i love to eat biriany';

const added = ` ${first} . ${seconde} . ${third}.`;
console.log(added);


const arrow = ( a , b = 6 ) => {
    const multifly = a * b ;
    return multifly;
}

const isArrow = arrow(4);
console.log(isArrow);

// this problem will not solved by me.
const names = ['saikat', 'rakibul', 'shrabon', 'shuvo', 'royal'];
const [...name] = names;
console.log(names);


const sum = (a, b, c, d) => {
    const one = Math.pow(a , 2);
    const two = Math.pow(b, 2);
    const three = Math.pow(c, 2);
    const four = Math.pow(d, 2);
    const totalSum = one + two + three + four ;
    return totalSum
}
const num = sum(2, 3, 4, 5, );
console.log(num);





const fullNumber = (array1 , array2) => {
    const maximum = Math.max(...array1, ...array2);
    return maximum;

}

const array1 = [2, 94, 7, 8];
const array2 = [ 10, 45, 78, 23];
const maxNumber = fullNumber(array1, array2);
// const arrayIs = [...array1 , ...array2];
// const maxNumber = Math.max(...array1 , ...array2);
console.log(maxNumber);