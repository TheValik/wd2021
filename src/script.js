
//---------------------------------------------- 1
let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv,%20UA&APPID=6ed55aaa6af55f24b71d529588503993"

const text0 = document.getElementById("place10")
const text1 = document.getElementById("place11")
const text2 = document.getElementById("place12")
const text3 = document.getElementById("place13")
const text4 = document.getElementById("place14")

let res1;

function minaty(){
    fetch(URL1)
    .then(response=> response.json())
    .then(r=>{
        res1 = r; 
 //       console.log(res1);
        vstavka1(res1)
        
    })

    .catch(err=>console.log(err))


const vstavka1 = (response) =>{
    text0.textContent =`${Math.round(res1.main.temp-272.15)}°`;
    text1.textContent =`${Math.round(res1.main.temp_min-272.15)}°`;
    text2.textContent =`${Math.round(res1.main.temp_max-272.15)}°`;
    text3.textContent =`${Math.round(res1.main.feels_like-272.15)}°`;
    text4.textContent =`${res1.weather[0].description}`;

}
}
minaty()

const btnoform = document.querySelector('.oform');
btnoform.addEventListener('click', function () {

    const nom =document.querySelector('.phone').value
    let URL1 = "https://api.openweathermap.org/data/2.5/weather?q="+nom+",%20UA&APPID=6ed55aaa6af55f24b71d529588503993"
    minaty()
 }) 

//-------------------------------------------------------- 2
let res2;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json =>{ 
 //   console.log(json[0].title);
    res2=json;
    vstavka2(res2);

    })



    const place02 = document.getElementById("place20")
    const place12 = document.getElementById("place21")
    const place22 = document.getElementById("place22")

    const text02 = document.getElementById("text0")
    const text12 = document.getElementById("text1")
    const text22 = document.getElementById("text2")


const vstavka2 = (response) =>{

        place02.textContent =`${res2[0].title}`;
        place12.textContent =`${res2[1].title}`;
        place22.textContent =`${res2[2].title}`;

        text02.textContent =`${res2[0].body}`;
        text12.textContent =`${res2[1].body}`;
        text22.textContent =`${res2[2].body}`;
    
    }


//------------------------------3

let kudavst = document.querySelector('.taktak')
const URL3= "data.json"
let res3
let textVstfin=""
//console.log(kudavst)
fetch(URL3)
    .then(response=> response.json())
    .then(r5=>{
        res3 = r5; 
     //   console.log(res3);
        vstavka3(res3)
        
    })

    .catch(err=>console.log(err))

const vstavka3 = (response) =>{
    for (let i=0;i<3;i++){
        const textVstpoch = `<div>Name: ${res3[i].name} </div>
         <div>Price: ${res3[i].prise}</div>
         <div>Time:  ${res3[i].time}</div>
         <br>`
         textVstfin+=textVstpoch
    }
  //  console.log(textVstfin)
    kudavst.innerHTML=textVstfin
}



