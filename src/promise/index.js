const promise = new Promise(function(resolve, reject){
    resolve ('hey!');
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`Tenemos ${cows} vacas en la granja`);
    }else{
        reject("No tenemos las vacas en la granja");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('Finalizado'));