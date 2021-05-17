function createPromise(value, timeout){
    return new Promise(f=>{
        setTimeout(()=>{
            console.log('ready ', value)
            f(value);
        }, timeout, value)
    })
}

async function runPromiseAfterPromise(){
    for (let i = 0; i < 10; i++){
        await createPromise(i, 1000)
    }
}

function runPromiseAfterPromise2(){
    var promiseFactoryList = []
    for (let i=0; i < 10; i++){
        promiseFactoryList.push(createPromise.bind(this, i, 1000));
    }
    return runPromiseChain(promiseFactoryList)
}

function runPromiseChain(promises){
    let currentPromise = promises.shift();
    if (!currentPromise) return null;

    return currentPromise()
        .then(() => runPromiseChain(promises))

}

//runPromiseAfterPromise();
runPromiseAfterPromise2()
    .then(()=>console.log('ready'))