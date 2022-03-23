abstract class Employees{
   abstract pratice():void;

   write():void{
    console.log("this is write method");
   }

 
}
class Employee1 extends Employees{
    pratice(): void {
        console.log("Employee1 is implemented.");
    }
}
class Employee2 extends Employees{
    pratice(): void {
        console.log("Employee2 is implemnted.");
    }
    
}
let emp1=new Employees1();
    emp1.pratice();
    emp1.write();
let sai1=new Employees2();
    sai1.pratice();
    sai1.write();




