document.addEventListener('scroll',function(){
    let scroll = this.documentElement.scrollTop;
    document.getElementsByTagName('section')[0].style.opacity = "1" - scroll / 400
})