let progress = document.getElementsByClassName('progress-bar')[0];

document.addEventListener('scroll',function(){
    let _scroll = this.documentElement.scrollTop;

    let _scrollHeihht = this.documentElement.scrollHeight - this.documentElement.clientHeight;

    let _scrolld = (_scroll/_scrollHeihht) * 100;

    progress.style.width = `${_scrolld}%`
    document.getElementsByTagName('p')[0].style.opacity = `${_scrolld}%`
})



// window.onscroll = function() {myFunction()};
// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }