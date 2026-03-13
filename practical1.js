function calculateResult(){
    const n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter sunject number" + (i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90){
        grade="A+";
    }
    else if(average>75){
        grade="A";
    }
    else if(average>65){
        grade="B";
    }
    else if(average>50){
        grade="C";
    }
    else if(average>40){
        grade="D";
    }
    else{
        grade="F";
    }
    let result=document.getElementById("results").innerHTML="Total: "+total+"<br>Average: "+average.toFixed(2)+"<br>Grade: "+grade;
}