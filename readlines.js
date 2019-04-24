const readLine = require('readline');
const rl = readLine.createInterface({input:process.stdin,output:process.stdout});

let x = Math.floor(Math.random()*10);
let y = Math.floor(Math.random()*10);

let res = x+y;
rl.question(`What is ${x} + ${y} ?\n`,function(userAns){
    if(userAns.trim() == res){
        rl.close();
    }
    else{
        rl.setPrompt('Wrong. Try again!!\n');
        rl.prompt();
        rl.on('line',function(userAns){
            if(userAns.trim() == res){
                rl.close();
            }
            else{
                rl.setPrompt('Wrong again.Please Try again!!\n');
                rl.prompt();
            }
        });
    }
});

rl.on('close',function(){
    console.log("Correct!!");
});

