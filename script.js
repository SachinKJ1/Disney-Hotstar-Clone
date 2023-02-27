document.addEventListener("click", e =>{
    let handle;
    if(e.target.matches(".handle")){
        handle = e.target;
    }else{
        handle = e.target.closest(".handle");

    }
    if(handle != null) onHandleClick(handle)
})

function onHandleClick(handle){
    const slider = handle.closest(".containerCarousel").querySelector(".slider");
    let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    if(handle.classList.contains("left-handle")){
        if(sliderIndex <= 0) sliderIndex =3;
        slider.style.setProperty("--slider-index",sliderIndex - 1);
    }
    if(handle.classList.contains("right-handle")){
        if(sliderIndex >= 2) sliderIndex =-1;
        slider.style.setProperty("--slider-index",sliderIndex + 1);
    }
}
// change content of button on video carousel

const addToWatchList = document.querySelectorAll(".addToWAtchlist");
var comment = "✅ REMOVE FROM WATCHLIST"
var comment1 = "➕ ADD TO WATCHLIST"
for(let i =0;i<addToWatchList.length;i++){
    addToWatchList[i].addEventListener('click',function(){
        if(addToWatchList[i].textContent == comment){
            addToWatchList[i].textContent = comment1;
        }else{
        addToWatchList[i].textContent = comment;
        }
})
}

// change content of video on onVideoHTML

/*  const videoLink = document.querySelectorAll('.sliderWatchNowlink');
for(let i = 0;i < videoLink.length;i++){
    videoLink[i].addEventListener('click',function(){
        document.querySelector(".videoTitle").innerHTML =;
    })
}   */

//  
var videoWatchlist = "✅<br>WATCHLIST";
var videoRemovelist = "➕<br>WATCHLIST";
const onVideoWatchlistbtn = document.querySelector('.onVideoWatchlistbtn');
onVideoWatchlistbtn.addEventListener('click',function(){
    if(onVideoWatchlistbtn.innerHTML != videoWatchlist){
    onVideoWatchlistbtn.innerHTML = videoWatchlist;
    }else{
        onVideoWatchlistbtn.innerHTML = videoRemovelist;
    }
})

// 

/* const videoLink = document.querySelectorAll('.sliderWatchNowlink');
for(let i = 0;i < videoLink.length;i++){
    videoLink[i].addEventListener('click',function(e){
        e.preventDefault();
        const videoDes = videoLink[i].textContent;
        localStorage.setItem('videoContent',videoDes);
        window.location.href = "onVIdeoPlay.html"
    })}

    const videoContent = localStorage.getItem('videoContent')
    document.querySelector(".videoTitle").textContent = videoContent;
    console.log(videoContent); */
