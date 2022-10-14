let span = document.getElementsByTagName('span')[0]
document.addEventListener('scroll',()=>{
    let m = -10 + document.documentElement.scrollTop/ 60
    console.log(m); 
    span.style.transform = "skewY("+m+"deg)"
})