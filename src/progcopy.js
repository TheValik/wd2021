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

//сума заказу
function calcPrice(){
    // шукаємо обєкт в корзині
    let totalPrice=0;
    const cartItems = document.querySelectorAll('.cart-item')
    const pushPrice = document.querySelector('.summ')
    const pushPrice2 = document.querySelector('.prise')

    cartItems.forEach(function(item){
        const amountEL = item.querySelector('[data-counter]')
        const priceEL = item.querySelector('.price')
        const currentPrice = parseInt(amountEL.innerText)*parseInt(priceEL.innerText)
        totalPrice+=currentPrice
        
    })

    pushPrice.innerText=totalPrice
    pushPrice2.innerText=totalPrice

}

const cartWraper = document.querySelector('.cart-wraper')

window.addEventListener('click', function(event){

    // перевіряємо чи обєкт це кнопка +
    if(event.target.dataset.action==="plus"){
        const counterWraper=  event.target.closest('.container')
        const counter2 = counterWraper.querySelector('[data-counter]')
        counter2.innerText=++counter2.innerText
        calcPrice()

    }
    // перевіряємо чи обєкт це кнопка -
    if(event.target.dataset.action==="minus"){
        
        const counterWraper=  event.target.closest('.container')
        const counter2 = counterWraper.querySelector('[data-counter]')
        if(parseInt(counter2.innerText)>1){
            counter2.innerText=--counter2.innerText
            calcPrice()
        }
        //перевірка на товар який в корзині
        else if(event.target.closest('.cart-wraper')&& parseInt(counter2.innerText)===1){
            //Видаляємо товар з корзини
 //            event.target.closest('.haha2').remove();
             event.target.closest('.cart-item').remove()
        }
        
    }
})


window.addEventListener('click', function(event){

    if(event.target.hasAttribute('data-add')){


        const card =event.target.closest('.card')

        const productInfo ={
            imgSrc: card.querySelector('.gphoto').getAttribute('src'),
            title: card.querySelector('.title').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            id: card.dataset.id,

        }

        const itemInCart = cartWraper.querySelector(`[data-id="${productInfo.id}"]`)
        if(itemInCart){
            const conterelement = itemInCart.querySelector('[data-counter]')
            conterelement.innerText = parseInt(conterelement.innerText) + parseInt(productInfo.counter)
        }
        else{
                    const cartItemHTML = `<div class="corz cart-item" data-id="${productInfo.id}">
        <div ><img class="gphoto" src="${productInfo.imgSrc}" alt="photo"></div>
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

    calcPrice()

    }
    //const kilk =card.querySelector('[data-counter]').innerText
    //const summ = document.querySelector('.summ').innerText;
    //summ= parseInt(summ)+ parseInt(productInfo.price)*parseInt(kilk ) 
        


})


const btnoform = document.querySelector('.oform');
 btnoform.addEventListener('click', function () {

    const nom =document.querySelector('.phone').value
    alert(`Замовлення оформлено на телефон: ${nom}`)
 }) 

 