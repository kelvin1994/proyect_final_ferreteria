var header = document.getElementById('#header');

window.addEventListener('scroll', ()=>{
    var scroll=window.scrollY
    if (scroll>10) {
        header.style.backgroundColor = '#121212'
    } else{
          header.style.backgroundColor = '#FF0009'
    }
})

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

