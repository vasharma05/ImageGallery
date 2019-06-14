var image = document.getElementsByClassName('image-card');
var next_clicked = false;
var prev_clicked = false;
        $(document).ready(()=>{
                $('.image-card').click(()=>{
                    $('#top-layer').toggleClass("disabled");
                });
            $('.pic-box').click((e)=>{
                var next = $('#next')[0];
                var prev = $('#prev')[0];
                if(e.target === next || e.target === prev){

                }else{
                    $('#top-layer').toggleClass("disabled");
                }
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
    var inner_pics = $('.inner-pics');
    inner_pics.click((e)=>{
        $('#slideshow').attr("src", e.target.src);
    });
    $('#next').click(()=>{
        var src = $('#slideshow')[0].currentSrc;
        
        for(var i=0;i<total_pics;i++){
            if(src == inner_pics[i].src){
                if(i===total_pics-1){
                    i=0;
                }else{
                    i+=1;
                }
                $('#slideshow').attr("src", inner_pics[i].src);
                break;
            }
        
        }
    });

    $('#prev').click(()=>{
        var src = $('#slideshow')[0].currentSrc;
        
        for(var i=0;i<total_pics;i++){
            if(src == inner_pics[i].src){
                if(i===0){
                    i=total_pics-1;
                }else{
                    i-=1;
                }
                $('#slideshow').attr("src", inner_pics[i].src);
                break;
            }
        
        }
    });
}

