//ASYNC AWAIT
//used to shorten code by replacing .then 



async function abcd() {
    let raw = await fetch('https://randomuser.me/api/');
    //fetch is an async function. Using await, it is moved to side stack and raw data is obtained 
    let ans = await raw.json();
    //above process is also async as it DEPENDS on fetch() function to obtain ans, so await is used here as well to move it to side stack

    //.json() converts raw data into readable format


    console.log(ans);//THIS IS A SYNC CODE
    //async await is used to make sure that above task works only AFTER previous lines are executed
}