var image = document.getElementsByClassName('image-card');
        $(document).ready(()=>{
                $('.image-card').click(()=>{
                    $('#top-layer').toggleClass("disabled");
                });
            $('.pic-box').click(()=>{
                $('#top-layer').toggleClass("disabled");  
            });
                        
        }); 


var value;
var total_pics;
function inner_gallery(subs,total){
    total_pics=total;
    var j;
    var scrollmenu = document.getElementById('scrollmenu');
    scrollmenu.innerHTML='';
    var slideshow = document.getElementById('slideshow');
    slideshow.src='img/'+subs+1+".jpg";
    for(var i=0; i<total; i++){
        j=i+1;
        var img = document.createElement("img");
        img.src='img/'+subs+j+".jpg";
        img.classList.add("inner-pics");
        img.classList.add("img-fluid");
        img.style.width="200px"
        scrollmenu.appendChild(img);
        
    }

    $('.inner-pics').click((e)=>{
        $('#slideshow').attr("src", e.target.src);
    });
}

