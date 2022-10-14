let section = document.getElementsByTagName('img')[0]
window.addEventListener('scroll',function(){
    let Y = this.pageYOffset
    console.log(Y);
    section.style.width = (101 + Y / 5) + '%'
})