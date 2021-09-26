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
