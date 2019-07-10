var image = document.getElementsByClassName('image-card');

        $(document).ready(()=>{
            $('.image-card').click(()=>{
                $('#top-layer').toggleClass("disabled");
            });
                
            
                        
        }); 


var value;
var total_pics;

function inner_gallery(subs,total){
    total_pics = total;
    var indicators = document.getElementById("indicators");
    var slides = document.getElementById("slides");
    indicators.innerHTML = '';
    slides.innerHTML = ''
    for(var i = 0; i<total; i++){
        j = i+1;
        var item = document.createElement("div");
        var img = document.createElement("img");
        if(i == 0){
            item.classList.add("carousel-item");
            item.classList.add("active");
        }else{
            item.classList.add("carousel-item");
        }
        var text = '.' + subs + "caption";
        console.log('img/' + subs + "/" + subs + " (" + j +")" + '.jpg');
        img.src='img/' + subs + "/" + subs + " (" + j +")" + '.jpg'
        console.log(img.src);
        img.alt = $(text)[i].innerText;
        img.classList.add("img-fluid");
        item.appendChild(img);
        var caption = document.createElement("p");
        caption.classList.add("carousel-caption");
        caption.innerText = $(text)[i].innerText;
        item.appendChild(caption);
        slides.appendChild(item);
        var li = document.createElement("li");
        li.setAttribute("data-target", "#carouselExampleIndicators");
        li.setAttribute("data-slide-to",i);
        if(i == 0){
            li.classList.add("active");
        }
        indicators.appendChild(li);
    }
    console.log(indicators);

}

// function inner_gallery(subs,total){
//     total_pics=total;
//     var j;
//     var scrollmenu = document.getElementById('scrollmenu');
//     scrollmenu.innerHTML='';
//     var slideshow = document.getElementById('slideshow');
//     slideshow.src='img/'+subs+1+".jpg";
//     for(var i=0; i<total; i++){
//         j=i+1;
//         var img = document.createElement("img");
//         img.src='img/'+subs+j+".jpg";
//         img.classList.add("inner-pics");
//         img.classList.add("img-fluid");
//         img.style.width="200px"
//         scrollmenu.appendChild(img);
        
//     }
//     var inner_pics = $('.inner-pics');
//     inner_pics.click((e)=>{
//         $('#slideshow').attr("src", e.target.src);
//     });
//     $('#next').click(()=>{
//         var src = $('#slideshow')[0].currentSrc;
        
//         for(var i=0;i<total_pics;i++){
//             if(src == inner_pics[i].src){
//                 if(i===total_pics-1){
//                     i=0;
//                 }else{
//                     i+=1;
//                 }
//                 $('#slideshow').attr("src", inner_pics[i].src);
//                 break;
//             }
        
//         }
//     });

//     $('#prev').click(()=>{
//         var src = $('#slideshow')[0].currentSrc;
        
//         for(var i=0;i<total_pics;i++){
//             if(src == inner_pics[i].src){
//                 if(i===0){
//                     i=total_pics-1;
//                 }else{
//                     i-=1;
//                 }
//                 $('#slideshow').attr("src", inner_pics[i].src);
//                 break;
//             }
        
//         }
//     });
// }

