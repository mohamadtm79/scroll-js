let _div = document.querySelectorAll('#div')
_div.forEach((item)=>{
    item.addEventListener('click',()=>{
        let transparent = getComputedStyle(item).backgroundColor;
        console.log(transparent);
        document.documentElement.style.backgroundColor = transparent
        document.getElementById('o').innerHTML = transparent
    })
})

