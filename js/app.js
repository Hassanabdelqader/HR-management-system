
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

        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) ) + 500; 
        return this.salary;
    }
    
}

Employee.prototype.getNetSalary =function(){

        this.netSalary = Math.floor(this.getSalary() - (this.getSalary() * 0.075)); 
        return this.netSalary;

    }
    




const ghaziSamer  = new Employee(1000,"Hasan Mousa" , "Administration" , "Senior","./assets/Ghazi.jpg" );

const lanaAli  = new Employee(1001,"Doha Ibnian" , "Finance" ,"Senior","./assets/Lana.jpg" );

const tamaraAyoub = new Employee(1001,"Tamara Ayoub" , "Marketing" ,"Senior","./assets/Tamara.jpg" );

const safiWalid = new Employee(1001,"Safi Walid" , "Administration" , "Mid-Senior" ,"./assets/Safi.jpg");

const omarZaid = new Employee(1001,"Omar Zaid" , "Development" ,"Senior","./assets/Omar.jpg"  );

const ranaSaleh = new Employee(1001,"Rana Saleh" , "Development" ,"Junior","./assets/Rana.jpg"  );

const hadiAhmad = new Employee(1001,"Hadi Ahmad" , "Finance" , "Mid-Senior","./assets/Hadi.jpg"  );

Employee.prototype.showInfo=function(){
    document.write(` Emplyee Name is : ${this.fullName},and his Salary is :  ${this.getSalary()} <br>`);
}




for (const key in emplyeeArr) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let br1 = document.createElement("br");
        let br2 = document.createElement("br");
        let br3 = document.createElement("br");
        let span = document.createElement("span");
        let t = "";
        span.setAttribute("class","span-em");
        div.setAttribute("class", "card"); 
        img.setAttribute("class","img-em");

        console.log(emplyeeArr[key].imageURL);
        img.setAttribute("src",emplyeeArr[key].imageURL);

        div.appendChild(img);//add image 
        div.appendChild(br1);

        t = document.createTextNode(`Name : ${emplyeeArr[key].fullName} - ID : ${emplyeeArr[key].emplyeeId}`);
        
        span.appendChild(t);
        span.appendChild(br2);
        div.appendChild(span);

        div.appendChild(br3);

        t = document.createTextNode(`Departemnt : ${emplyeeArr[key].department} - ID : ${emplyeeArr[key].level}`);
        span.appendChild(t);
        span.appendChild(br3);
        div.appendChild(span);

        t = document.createTextNode(`Salary : ${emplyeeArr[key].getSalary()} `);
        span.appendChild(t);
        div.appendChild(span);



        (emplyeeArr[key].department =="Administration")? document.getElementById('Administration').appendChild(div):
            (emplyeeArr[key].department =="Finance")?document.getElementById('Finance').appendChild(div):
                 (emplyeeArr[key].department =="Marketing")?document.getElementById('Marketing').appendChild(div):
                      document.getElementById('Development').appendChild(div);

   
}




