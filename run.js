function write(string){
    process.stdout.write(string);
}
import chalk, { backgroundColorNames } from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){        
        let color = (i*j).toString()    
        write(chalk.ansi256(color)(color.padEnd(4,' '))); 
    }
    write('\n');
}

write(boxen(chalk.blue.bgGreen('Mello'), {
    padding: 1,
    margin:1,
    borderStyle: 'double',
    float: 'right'
}));







write(boxen(chalk.red.bold.bgBlue('Hello World!'), {
    padding: 5,
    margin:2,
    borderStyle: 'arrow'
}));


write(boxen(chalk.red.bgBlack('Nope'), {
    //padding: 12,
    margin:6,
    width:25,
    height:10,
    titleAlignment: 'center',
    title: 'can you marry me?',
    textAlignment: 'right'
    
}));

write(boxen(chalk.green.bgBlueBright('Yep im still here'), {
    padding: 8,
    margin:12,
    backgroundColor: 'cyan'
    
}));


write(boxen(chalk.black.bgWhite('How did you like my banana clicker'), {
    padding: 7,
    margin:18,
    backgroundColor: 'white',
    borderStyle: 'classic'
    
}));


write(boxen(chalk.white.bgYellowBright('bruh'), {
    padding: 16,
    margin:21,
    dimBorder: true,
    borderStyle: 'round',
    
}));