/*
  how to define types for object in typescript?

    - interfaces   - classes
    
*/

// interfaces in TS 

interface Product {
  name : string,
  price : number,
  brand : string,
  display() : void
}


// interface defines structure of object or it is like contact 

let p1 : Product = {
 name : 'iphone',
 price : 1000000,
 brand : 'apple',
 display() {
  console.log(this.name +": "+ this.price +" : "+this.brand);
 }
}

console.log(p1);
console.log(p1.display())


//functions in TS 

function sum() : number {
  return 10;
}

console.log(sum());

function sum1(a : number,b : number) : number {
  return a+b;
}

console.log(sum1(10,20));

function sum2(a:number,b?:number) : number {
  return a+(b||0);
}

console.log(sum2(11));


/*
  Note : Typescript doesn't exist at runtime it converts our code to JS and actually JS will run. All the type checking is done
  at compile time not at runtime.
*/

// Date object in TS

const dob = new Date(2001,2,15);
console.log(dob);
console.log(dob.getDate());

// if we want to define a variable of type any but we don't want to write any then we can do it like this : 

let x;
x = 10;
console.log(x);
x = "reema";
console.log(x);


/*
 Note : The whole purpose of typescript is to make sure things are type safe. why would we want to have features that is violating
 offering of typescript whole altogether.there can be cases where it won't be possible for us to create typescript type to represent an item.
*/

