
//fcn that can change other fcn
function FcnChangOther(f){
    return (...args)=>{
        console.log("calling with",args)
        let result = f(...args);
        console.log("call with ", args, "return ", result)
        return result;

    }
}

FcnChangOther(Math.min)(3,2,1)


function testing(n, thisTest){
    for(let i = 0;i <n ; i++){
        thisTest(i)
    }
}

testing(5, console.log)
let b =[]
testing(4,i=>{b.push(`ssss ${i + 1}`)})