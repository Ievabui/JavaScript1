"use strict"

var name = "Ieva"; // Global scope
var count = 12;
var price = 14.50;
const items = 11;

const sum = function (a,b) { //First class function
    return a+b
}

function add() { //funkcijos scope
    var lname = "xxxx";
    return count *12


/*const count = (a,b)=>{ // Arrow function
    return a+b;*/
}

const demo = (a,b)=>{
    b();

}
const movie = "Samsara";
const count1 = 1222;
const online = false;

//const students = ['Ieva', 'Lina', 'Karolina', 'Andrius'];
const students = [
    {
        name:"Ieva",
        lname:"Ievaite",
        skills: 'HTML'
    },
    {
        name:"Toma",
        lname:"Ievaite",
        skills: 'CSS'
    }
];



/*if(count) {
   let name = "Kazkas"
} else {
    let name ="Kazkoks"
    console.log(false)
}*/

/*for(let i=0; i<10; i++){
    for(let i=0; i<12; i++) {
        console.log(i)
    }
}*/

demo(12, ()=>{
    console.log("labas")
})
console.log(`"Suma apmokejimui yra ${count*price} Eur`);
console.log(`Mano vardas yra: ${name}`);
console.log(add());
console.log(sum(12, 14))
console.log()
console.log("Filmo pavadinimas yra\"Pavadinimas\"")
console.log(typeof (online))
console.log(students[2])
/*for(let i=0;i<students.length;i++){
    console.log(students[i])
}*/
/*for (let student of students) {
    console.log(student) }*/

for (let student in students) {
    console.log(students[student])
}
for(let student of students) {
    for (let data in student) {
        console.log(student[data])
    }
    console.log('_______________')
}



