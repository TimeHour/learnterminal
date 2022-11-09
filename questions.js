import inquirer from 'inquirer';

inquirer
    .prompt([
        {type:'confirm', name:'question', message: 'These questions are going to more personal if u want to continue press y if no press n'},        
    ])
.then((answer)=> {
    if(answer.question == true) {
    console.log(`Alright on to the next question`);
    inquirer
    .prompt([
                {type:'number', name:'age', message: 'How old are you?'},      
                {type:'input', name:'name', message: 'What is your name?'},
                {type:'input', name:'eye', message: 'What is your eye color'},
                {type:'input', name:'food', message: 'What is your favorite food?'},
                {type:'expand', name:'gender', message: 'What is your gender', choices:["Male","Female","Other"]},
                {type:'confirm', name:'yes', message: 'Is this right?'},
                



])
.then((answer)=> {

                  console.log(`I am ${answer.age} years old`);
                 console.log(`My name is ${answer.name}`);
                 console.log(`My eye color is ${answer.eye}`);
                 console.log(`My favorite food is ${answer.food}`);
                 console.log(`My gender is ${answer.gender}`);
                  
    
})
} else {
console.log(`Alright we respect your choice goodbye`);
       process.exit()
    }
   
  
    
})







