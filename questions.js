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
                {type: 'rawlist', name:'iq', message: 'Now for a quick iq test tell me with one is called "jumbo"',choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],},
                {type:'input', name:'food', message: 'What is your favorite food?'},
                {type: 'list', name:'size', message: 'What size food do you usually order',choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],},
                {type: 'checkbox', message: 'What devices you are using right now?',name:'device',choices: ['Mobile','Computer','Tablet','Steam deck'],},
                {type: 'expand',message: 'What is your gender?',name:'gender',choices: [{key: 'y',name: 'Male',value: 'male',},{key: 'a',name: 'Female',value: 'female',},{key: 'd',name: 'Other',value: 'other',},],},
                {type: 'password',message: 'Enter a password of your liking',name: 'password',mask: '*',},
                {type: 'editor', name:'text', message:'type something funny for me',}
            ])
                
                
                

    


.then((answer)=> {

                console.log(`I am ${answer.age} years old`);
                console.log(`My name is ${answer.name}`);
                console.log(`My eye color is ${answer.eye}`);
                console.log(`My iq is ${answer.iq}`);
                console.log(`My favorite food is ${answer.food}`);
                console.log(`My usual order is ${answer.size}`);
                console.log(`My gender is ${answer.gender}`);
                console.log(`I own a ${answer.device} right now`);
                  
    
})
} else {
console.log(`Alright we respect your choice goodbye`);
       process.exit()
    }
   
  
    
})







