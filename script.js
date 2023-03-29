var images= ['slide-1.jpg','slide-2.jpg','slide-3.jpg'];
var img = document.getElementById('myImg');

var count_index = - 1;
function myImg_change()
{
    count_index++;
    if(count_index >= images.length){
        count_index = 0;
        img.src = images[count_index];
    }else{
        img.src = images[count_index];

    }
    setTimeout('myImg_change()',1000);
}
Window.onload = myImg_change();