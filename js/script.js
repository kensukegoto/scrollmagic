// Gnavi

var controller = new ScrollMagic.Controller();

var sceneGnavi = new ScrollMagic.Scene({
  triggerElement: "#gnavi",
  triggerHook: 0,
  offset: 48 // Gnaviを通り過ぎたらスタート
})
.addIndicators({name: "ScrollMagic"}) 
.setPin('#gnavi')
.addTo(controller);

let scPos = 0;
const gnavi = document.querySelector("#gnavi");

window.addEventListener("scroll",()=>{

  const [
    sticky,y,visible
  ] = [
    sceneGnavi.progress(),
    window.pageYOffset,
    gnavi.classList.contains("on")
  ];

  if(sticky){
    
    if(y < scPos){
      if(!visible){
        gnavi.classList.add("on");
      }
    }else{
      if(visible){
        gnavi.classList.remove("on");
      }
    }
  } else {
    gnavi.classList.remove("on");
  }
  scPos = y;
});

// parallax

var tween = new TimelineMax ()
.add([
  TweenMax.to("#sec1 .sec__inner", 1, {backgroundPosition: "0 100%", ease: Linear.easeNone})
]);

var scenePllax = new ScrollMagic.Scene({
  triggerElement: "#sec1",
  triggerHook: .5,
  duration: () => {
    const sec1 = document.querySelector("#sec1");
    return sec1.clientHeight;
  }
})
.setTween(tween)
.addIndicators({name :"pllax"})
.addTo(controller);



