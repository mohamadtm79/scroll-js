let imgBox = document.querySelectorAll('.imgBox')
imgBox.forEach((item)=>{
    item.addEventListener('click',()=>{
        console.log(item);
        item.classList.toggle('activ')
    })
})