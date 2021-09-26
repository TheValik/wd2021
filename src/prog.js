const tovar1={
    tname: "CPU",
    tcode: 123,
    tprice: 5000,
    timg: "Photo\cpu.jpg",
}
const tovar2={
    tname:"GPU",
    tcode:456,
    tprice: 20000,
    timg: "Photo\gpu.jpg",
}
const tovar3={
    tname:"SSD",
    tcode:789,
    tprice:7000,
    timg: "Photo\ssd.jpg",
}

window.addEventListener('click', function(event){
    console.log('click window')
    console.log(event.target.dataset.add)

    if (event.target.dataset.add){
        const gphoto= event.target.closest('.haha')
        console.log(gphoto)
        const pr= gphoto.querySelector('[data-price]')
        console.log(pr)
    }
})




// rezerv

// Находим элементы на странице
const btnAdd1 = document.querySelector('[data-add="cart1"]');
const btnAdd2 = document.querySelector('[data-add="cart2"]');
const btnAdd3 = document.querySelector('[data-add="cart3"]');
const sum = document.querySelector('[data-counter]') ;
let counter= parseInt(sum.innerText)

console.log(counter)

// Отслеживаем клик на кнопку btnPlus
btnAdd1.addEventListener('click', function () {
    tovar1.kilk=++tovar1.kilk
    counter=counter + tovar1.tprice
    sum.innerText=counter
})
btnAdd2.addEventListener('click', function () {
    tovar2.kilk=++tovar2.kilk
    counter=counter + tovar2.tprice
    sum.innerText=counter
    console.log()
})
btnAdd3.addEventListener('click', function () {
    tovar3.kilk=++tovar3.kilk
    counter=counter + tovar3.tprice
    sum.innerText=counter
})

const btncart = document.querySelector('[data-cart="cart"]');
btncart.addEventListener('click', function(){
    console.log(tovar1.kilk)

    for(let i=1; i<4; i++){

        
    }
    const cartItemHTML =`<div><img class="gphoto haha" src="Photo\gpu.jpg" alt="photo"></div>`

})