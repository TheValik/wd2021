const tovar1={
    tname: "CPU",
    tcode: 123,
    tprice: 5000,
    timg: "Photo\cpu.jpg",
    kilk:0,
}
const tovar2={
    tname:"GPU",
    tcode:456,
    tprice: 20000,
    timg: "Photo\gpu.jpg",
    kilk:0,
}
const tovar3={
    tname:"SSD",
    tcode:789,
    tprice:7000,
    timg: "Photo\ssd.jpg",
    kilk:0,
}

const cartWraper = document.querySelector('.cart-wraper')

window.addEventListener('click', function(event){

    // перевіряємо чи обєкт це кнопка +
    if(event.target.dataset.action==="plus"){
        const counterWraper=  event.target.closest('.container')
        const counter2 = counterWraper.querySelector('[data-counter]')
        counter2.innerText=++counter2.innerText

    }
    // перевіряємо чи обєкт це кнопка -
    if(event.target.dataset.action==="minus"){
        
        const counterWraper=  event.target.closest('.container')
        const counter2 = counterWraper.querySelector('[data-counter]')
        if(parseInt(counter2.innerText)>1){
            counter2.innerText=--counter2.innerText
        }
        
    }
})


window.addEventListener('click', function(event){

    if(event.target.hasAttribute('data-add')){

        console.log('click in button')

        const card =event.target.closest('.card')
        console.log(card)

        const productInfo ={
            imgSrc: card.querySelector('.gphoto').getAttribute('src'),
            title: card.querySelector('.title').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            id: card.dataset.id,

        }

        const itemInCart = cartWraper.querySelector(`[data-id="${productInfo.id}"]`)
        console.log(itemInCart)
        if(itemInCart){
            const conterelement = itemInCart.querySelector('[data-counter]')
            conterelement.innerText = parseInt(conterelement.innerText) + parseInt(productInfo.counter)
        }
        else{
                    const cartItemHTML = `<div class="card" data-id="${productInfo.id}">
        <div><img class="gphoto haha" src="${productInfo.imgSrc}" alt="photo"></div>
        <div class="title">${productInfo.title}</div>
        <div class="container">
            <div><h3>Ціна:</h3></div>
            <div><h3 class="price">${productInfo.price}</h3></div>
            <div><h3>грн.</h3></div>
        </div>
        <div class="container">
            <div><button type="button" class="knop" data-action="minus">-</button></div>
            <div data-counter>${productInfo.counter}</div>
            <div><button type="button" class="knop" data-action="plus">+</button></div>
        </div>
    </div>`
        cartWraper.insertAdjacentHTML("beforeend", cartItemHTML)
    }
// скидаємо щотчик на 1
    card.querySelector('[data-counter]').innerText=1


 //   const kilk =card.querySelector('[data-counter]').innerText
   // const summ = document.querySelector('.summ').innerText;
    //summ= parseInt(summ)+ parseInt(productInfo.price)*parseInt(kilk ) 
        }


})
