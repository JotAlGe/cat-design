var img =  document.getElementById('img');

img.addEventListener('mousemove', function (e){
    var x = e.offsetX /* - (img.offsetWidth / 2) */ ;
    var y = e.offsetY /* - (img.offsetHeight / 2) */;
    
    var translateValue = 'translate(' + (x  / (20)) + 'px,' + (y / (10)) + 'px)';
    img.style.transform = translateValue;
    img.style.transition= 'all .3s ease'
})

