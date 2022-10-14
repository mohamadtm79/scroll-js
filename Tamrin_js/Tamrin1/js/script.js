window.addEventListener('scroll',function(){
    // console.log(this.pageYOffset);
    if(this.pageYOffset > 1127){
        // console.log(this.documentElement.scrollTop);
        document.getElementsByTagName('a')[0].style['display'] = 'flex'
    }else{
        document.getElementsByTagName('a')[0].style['display'] = 'none'
    }
})
