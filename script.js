function fibonacci(num) { 
    let a=0;
    let b=1;
    let result= 0;
    for(i=0; i<num; i++) {
        result= a+b;
        a=b;
        b=result;
    console.log(result);
    }
    }
    fibonacci(25);