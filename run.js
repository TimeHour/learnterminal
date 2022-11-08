function write(string){
process.stdout.write(string);
}
write('Hello\n')


//bold                                 //unbold
write('\x1B[1m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//dim/faint                             //unbold
write('\x1B[2m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//italic                                 //unbold
write('\x1B[3m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//underline                                 //unbold
write('\x1B[4m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//blinking                                 //unbold
write('\x1B[5m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//inverse                                 //unbold
write('\x1B[7m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//hidden invisible                         //unbold
write('\x1B[8m'), write('Hello\n'), write('\x1B[0m'); write('\n')
//striketrough                             //unbold
write('\x1B[9m'), write('Hello\n'), write('\x1B[0m'); write('\n')




// \x1B[1;30m
for(let i=30; i<40; i++){
    if(i==38) continue;
    //colors
    write('\x1B[1;'+i+'m'); write('color code number ' + i); write('\x1B[0m'); write('\n');
}
for(let i=30; i<40; i++){
    if(i==38) continue;
    //colors
    write('\x1B[2;'+i+'m'); write('color code number ' + i); write('\x1B[0m'); write('\n');
}

for(let i=40; i<50; i++){
    if(i==48) continue;
    //colors
    write('\x1B[1;'+i+'m'); write('color code number ' + i); write('\x1B[0m'); write('\n');
}

for(let i=40; i<50; i++){
    if(i==48) continue;
    //colors
    write('\x1B[2;'+i+'m'); write('color code number ' + i); write('\x1B[0m'); write('\n');
}

console.clear();
write('hello mm21');
write('\x1B[4D');
write('Martin');