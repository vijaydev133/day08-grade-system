let mark = parseInt(prompt("Enter your mark :"))

function grade(x){
    if(mark <= 40){
        console.log("you got D grade");
    }
    else if(mark > 40 && mark <= 60){
        console.log("you got C grade");
    }
    else if(mark > 60 && mark <= 80){
        console.log("you got B grade");
    }
    else if(mark > 80 && mark <= 100){
        console.log("you got A grade");
    }
    else{
        console.log("enter mark");
    }
}
grade(mark);