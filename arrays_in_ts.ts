// Arrays in TS 

/*
  let/var <variable_name> : <variable_type>[] = [val1,val2,val3,.....]
*/

var arr : string[] = ["abc","def","ghi","jkl"];
console.log(arr);

//heterogenous arrays are not allowed in TS

var arr1 : number[] = [1,2,3,4,"E"];
console.log(arr1);


//heterogenous array 

let hetero:any[] = [1,false,true,undefined,null,"adgggs",Symbol()];
console.log(hetero);


//variable of type any

var y:any = 10;
console.log(y);

y = "Reema";
console.log(y);

y=false;
console.log(y);

y=Symbol();
console.log(y);

//Arrays in form of typed tuple 

var tuple:[number,boolean,string] = [1,false,"reena"];
console.log(tuple);
