window.onload =function (){
    document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("#excuse").innerHTML=generateExcuse();
    })
};
let generateExcuse= function (){
let who=["My husband","My sister ","My niece","My nephew"];
let what=["didn't call", "didn't buy me food", " didn't send me flowers", "forgot my birthday", "sent me toilet paper"] ;
let when=["last month","in the spring", "in June"];

let whorandom=Math.floor(Math.random()*who.length);
let whatrandom=Math.floor(Math.random()*what.length);
let whenrandom=Math.floor(Math.random()*when.length);

return  who[whorandom] + " " +  what[whatrandom]+ " " +when[whenrandom]

};



