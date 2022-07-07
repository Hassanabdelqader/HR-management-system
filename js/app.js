
"use strict";

let ID = 0 ;
const emplyeeArr=[];

function Employee(emplyeeId,fullName, department, level, imageURL){
this.emplyeeId = emplyeeId;
this.fullName = fullName;
this.department = department;
this.level = level;
this.imageURL=imageURL;
emplyeeArr.push(this);

}

Employee.prototype.getSalary =function(){

    if (this.level.toUpperCase()=="SENIOR") {
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500; 
        return this.salary;

    }else if(this.level.toUpperCase()=="MID-SENIOR"){
        
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000;
        return this.salary;
    
    }else if(this.level.toUpperCase()=="JUNIOR"){
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) ) + 5000; 
        return this.salary;
    }
    
}

Employee.prototype.getNetSalary =function(){

        this.netSalary = Math.floor(this.getSalary() - (this.getSalary() * 0.075)); 
        return this.netSalary;

    }
    




const ghaziSamer  = new Employee(1000,"Ghazi Samer" , "Administration" , "Senior" );

const lanaAli  = new Employee(1001,"Lana Ali" , "Finance" ,"Junior" );

const tamaraAyoub = new Employee(1001,"Tamara Ayoub" , "Marketing" ,"Senior" );

const safiWalid = new Employee(1001,"Safi Walid" , "Administration" , "Mid-Senior");

const omarZaid = new Employee(1001,"Omar Zaid" , "Development" ,"Senior" );

const ranaSaleh = new Employee(1001,"Rana Saleh" , "Development" ,"Junior" );

const hadiAhmad = new Employee(1001,"Hadi Ahmad" , "Finance" , "Mid-Senior" );

Employee.prototype.showInfo=function(){
    document.write(` Emplyee Name is : ${this.fullName},and his Salary is :  ${this.getSalary()} <br>`);
}

let table = ` <table border = 1> <tr><th>Name</th> <th>Salary</th> </tr> `;
for (const key in emplyeeArr) {

    table+=`<tr><td>${emplyeeArr[key].fullName}</td> <td>${emplyeeArr[key].getSalary()}</td></tr>`;
  
   // emplyeeArr[key].showInfo();
}
document.write(table);

