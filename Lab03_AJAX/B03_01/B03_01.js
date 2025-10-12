async function func1(){
    if (Math.random()<0.5){
        throw new Error("something went wrong!");

    }
    return "func 1 is correct!";

}

async function func2(){
    if (Math.random()<0.5){
        throw new Error("something went wrong!");
    }
    return "func 2 is correct!";
}

async function main(){
    try {
        const result = await Promise.any([func1(), func2()]);
        console.log("function is complete!");

    }
    catch {
        console.log("functions are not complete!");

    }

}
main();