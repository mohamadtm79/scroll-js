document.addEventListener('scroll',function(){
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    document.getElementsByTagName('section')[0].style.backgroundPosition = '-' + scroll + 'px'
})