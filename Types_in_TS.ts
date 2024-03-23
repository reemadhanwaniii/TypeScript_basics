// types in typescript 

/*
        Below are primitive data types in TS ( they can't be altered )

        String - text
        number - integer,real
        boolean
        bigint
        undefined
        null
        symbol

        These are atomic in nature i.e we can't disintegrate them further
*/

// Define values in TS 

// let <variable_name> : <variable_type> = value;

let no : number = 20;  // this is called type annotation or type signature

console.log(no);

let str : string = "anccb";
console.log(str);

/*
  Note : TypeScript is not a dumb langauge what typescript says that if we want to specifically mention that this variable is going
  to be of this  type for readability purpose then we can do it but if we want to skip it we can. typescript automatically infer the type
*/

let id = 20;
console.log(id);

/*
  JS : let firstName = "Reema";
console.log(firstName);
firstName = "yachna";
console.log(firstName);

firstName = 10;  
console.log(firstName)

the above code works fine with no error while in TS it throws error

*/

let firstName = "Reema";
console.log(firstName);
firstName = "yachna";
console.log(firstName);

firstName = 10;   // this will throw error
console.log(firstName);

/*
  suppose we have one web client and one mobile client both the clients are sending 'id' to server . the server logic is written in TS
  and id is stored as 'number' . web client sending id as string and mobile client sending id as number in that case all web client 
  request should be fail but we can't make such a strict api .In that case we have union of types
*/

let num : number | string;
num  = 10;
console.log(num);
num = "gstvsc";
console.log(num);
