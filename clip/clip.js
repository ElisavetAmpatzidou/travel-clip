import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import initParams from "./initParams";

export const clip = new HTMLClip({
  html: `
  <div class="container">
    <div class="container1">
      <video autoplay muted>
        <source src="assets/boots.mp4" type="video/mp4">
      </video>
    </div>
    <div class="container2">
      <video autoplay muted>
        <source src="assets/girl-car.mp4" type="video/mp4">
      </video>
    </div>
    <div class="container3">
      <div class="lr-bg-wrapper lr-bg-wrapper-0">
        <video autoplay muted>
          <source src="assets/clothes.mp4" type="video/mp4">
        </video>
      </div>
      <div class="lr-bg-wrapper lr-bg-wrapper-1">
        <video autoplay muted>
          <source src="assets/clothes.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="text1">
      <div class="title">{{ initParams.title1 }}</div>
      <div class="subtitle">{{ initParams.subtitle1 }}</div>
    </div>
    <div class="container4">
      <div class="lr-bg-wrapper lr-bg-wrapper-0">
        <div class="bg bg-0"></div>
      </div>
      <div class="lr-bg-wrapper lr-bg-wrapper-1">
        <div class="bg bg-1"></div>
      </div>
    </div>
    <div class="container5">
    <div class="ud-bg-wrapper ud-bg-wrapper-0">
      <div class="bg bg-0"><div class="text2">
      <div class="title">COLLECT</div>
      <div class="subtitle">MOMENTS</div>
    </div></div>
    </div>
    <div class="ud-bg-wrapper ud-bg-wrapper-1">
      <div class="bg bg-1"><div class="text2">
      <div class="title">{{ initParams.title2 }}</div>
      <div class="subtitle">{{ initParams.subtitle2 }}</div>
    </div></div>
    </div>
  </div>
  <div class="container6">
      <video autoplay muted>
        <source src="assets/girl-camera.mp4" type="video/mp4">
      </video>
    </div>
    <div class="container7">
    <video autoplay muted>
      <source src="assets/girl-car.mp4" type="video/mp4">
    </video>
  </div>
  <div class="text2 mask">
      <div class="title">{{ initParams.title2 }}</div>
      <div class="subtitle">{{ initParams.subtitle2 }}</div>
  </div>
  <div class="container8"></div>
<div class="container9">
<video autoplay muted>
  <source src="assets/woman-caravan.mp4" type="video/mp4">
</video>
</div>
<div class="container10">
<video autoplay muted>
  <source src="assets/travel-with-friends.mp4" type="video/mp4">
</video>
</div>
<div class="container11"></div>
<div class="container12">
<video autoplay muted>
  <source src="assets/ballons.mp4" type="video/mp4">
</video>
</div>
<div class="container13"></div>
<div class="text3">{{ initParams.text3}}</div>
<div class="container14"></div>
<div class="container15"></div>
<div class="container16">
<video autoplay muted>
  <source src="assets/map.mp4" type="video/mp4">
</video>
<div class="borderText text4">
<div id="root">
  <div class="looper" mc-for="key,item" mc-of="initParams.text4">
      <span>{{ item }}</span>
  </div>
</div>
</div>
</div>
<div class="container17"></div>
<div class="container18">
<video autoplay muted>
  <source src="assets/woman-road.mp4" type="video/mp4">
</video>
</div>
<div class="borderText text4 mask">
<div id="root">
  <div class="looper" mc-for="key,item" mc-of="initParams.text4">
      <span>{{ item }}</span>
  </div>
</div>
</div>
<div class="container19"></div>
<div class="container21">
      <div class="lr-bg-wrapper lr-bg-wrapper-0">
        <video autoplay muted>
          <source src="assets/girl-with-map-car.mp4" type="video/mp4">
        </video>
      </div>
      <div class="lr-bg-wrapper lr-bg-wrapper-1">
        <video autoplay muted >
          <source src="assets/girl-with-map-car.mp4" type="video/mp4">
        </video>
      </div>
</div>
<div class="container20">
      <div class="lr-wrapper-0">
        <video autoplay muted >
          <source src="assets/woman-caravan.mp4" type="video/mp4">
        </video>
      </div>
      <div class="lr-wrapper-1">
        <video autoplay muted>
          <source src="assets/woman-caravan.mp4" type="video/mp4">
        </video>
      </div>
</div>
<div class="container22">
  <div class="lr-bg-wrapper lr-bg-wrapper-0">
  <div class="bg bg-0">
  <video autoplay muted>
  <source src="assets/girl-with-map-car.mp4" type="video/mp4">
</video>
<div class="title5a">{{initParams.title5a}}</div>
</div>
  </div>
  <div class="lr-bg-wrapper lr-bg-wrapper-1">
  <div class="bg bg-1">
  <video autoplay muted>
    <source src="assets/girl-with-map-car.mp4" type="video/mp4">
  </video>
  <div class="title5b">{{initParams.title5b}}</div>
  </div>
  </div>
</div>
<div class="container23">
      <div class="lr-bg-wrapper lr-bg-wrapper-0">
        <div class="bg bg-0"></div>
      </div>
      <div class="lr-bg-wrapper lr-bg-wrapper-1">
      <div class="bg bg-1"></div>
      </div>
</div>
<div class="text5">
  <div class="title5a">{{initParams.title5a}}</div>
  <div class="title5b">{{initParams.title5b}}</div>
</div>
<div class="container24">
  <div class="diag diag-0"></div>
  <div class="diag diag-1"></div>
</div>
<div class="container25">
  <div class="lr-con l-con"></div>
  <div class="lr-con r-con"></div>
</div>
<div class="container26">
  <div class="borderText text6">
    <div id="root">
      <div class="looper" mc-for="key,item" mc-of="initParams.text6">
          <span>{{ item }}</span>
      </div>
    </div>
  </div>
</div>
<div class="container27"></div>
<div class="borderText text6 mask">
  <div id="root">
    <div class="looper" mc-for="key,item" mc-of="initParams.text6">
        <span>{{ item }}</span>
    </div>
  </div>
</div>
<div class="container28"></div>
<div class="container29">
  <div class="lr-con l-con"></div>
  <div class="lr-con r-con"></div>
</div>
<div class="container30">
  <div class="bg half-l"><div class="text7 text7left">{{initParams.text7}}</div></div>
  <div class="bg half-r"><div class="text7 text7right">{{initParams.text7}}</div></div>
</div>
<div class="container31"></div>
<div class="text7 mask">{{initParams.text7}}</div>
<div class="container32"></div>
<div class="container33">
  <div class="bg half-l"></div>
  <div class="bg half-r"></div>
</div>
<div class="container34">
  <div class="lr-con l-con">
    <video autoplay muted>
      <source src="assets/girl-camera.mp4" type="video/mp4">
    </video>
    <div class="text8 text8left">{{initParams.text8}}</div>
  </div>
  <div class="lr-con r-con">
    <video autoplay muted>
      <source src="assets/girl-camera.mp4" type="video/mp4">
    </video>
    <div class="text8 text8right">{{initParams.text8}}</div>
  </div>
</div>
<div class="container35">
<video autoplay muted>
  <source src="assets/woman-road.mp4" type="video/mp4">
</video>
</div>
<div class="text8 mask">{{initParams.text8}}</div>
<div class="container36">
<video autoplay muted>
  <source src="assets/travel-with-friends.mp4" type="video/mp4">
</video>
</div>
<div class="container37">
  <div class="lr-con l-con"></div>
  <div class="lr-con r-con"></div>
</div>
</div>
   `,
  css: `
  .container{
    width:800px;
    height:450px;
    position:relative;
    background:white;
  }
  .container1,.container2{
    width:800px;
    height:450px;
    position:absolute;
    top:100%;
  }
  .container3,.container4,.container5,.container20,.container21,.container22,.container23{
    width: 800px;
    height: 450px;
    display:flex;
    overflow: hidden;
    position:absolute;
  }
  .container6,.container7, .container8, .container9, .container10, .container11{
    width:800px;
    height:450px;
    position:absolute;
    left:-100%;
    clip-path: polygon(82% 0, 82% 0, 59% 46%, 30% 100%, 0 100%, 0 0);
  }
  .container12,.container13,.container14,.container15{
    width:800px;
    height:450px;
    position:absolute;
    left:-100%;
  }
  .container16,.container35,.container36{
    width:800px;
    height:450px;
    position:absolute;
    clip-path: polygon(0 18%, 100% 18%, 100% 18%, 0 18%);
  }
  .container17,.container18,.container19,.container26,.container27,.container28{
    width:800px;
    height:450px;
    position:absolute;
    top:-100%;
  }
  .container24,.container25,.container29,.container30,.container31,.container32,.container33,.container34,.container37{
    width:800px;
    height:450px;
    position:absolute;
  }
  .container8,.container11{
    background:url("assets/woman-mountain.png");
    background-size: cover;
  }
  .container13{
    background:url("assets/friends-road.png");
    background-size: cover;
  }
  .container14{
    background:url("assets/inside-caravan.png");
    background-size: cover;
  }
  .container15{
    background:url("assets/caravan-dog.png");
    background-size: cover;
  }
  .container17{
    background:url("assets/mountain-breath.jpg");
    background-size: cover;
  }
  .container19{
    background:url("assets/photo.jpg");
    background-size: cover;
  }
  .container26{
    background:url("assets/fire.png");
    background-size: cover;
  }
  .container27{
    background:url("assets/caravan-friends.jpg");
    background-size: cover;
  }
  .container28{
    background:url("assets/photo.jpg");
    background-size: cover;
  }
  .container31{
    background:url("assets/road-trip.jpg");
    background-size: cover;
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0);
  }
  .container32{
    background:url("assets/friends.jpg");
    background-size: cover;
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0);
  }
  .lr-bg-wrapper,.ud-bg-wrapper{
    width:800px;
    height:450px;
    display:flex;
    position: absolute;
    overflow: hidden;
  }
  .lr-bg-wrapper-0{
    right: 400px;
  }
  .lr-bg-wrapper-1{
    left: 400px;
  }
  .ud-bg-wrapper-0{
    bottom: 225px;
  }
  .ud-bg-wrapper-1{
    top: 225px;
  }
  .container3 .lr-bg-wrapper-0 video,.container3 .lr-bg-wrapper-1 video,.container21 .lr-bg-wrapper-0 video,.container21 .lr-bg-wrapper-1 video{
    width: 800px;
    height: 450px;
    object-fit: cover;
    position: absolute;
    top:100%;
  }
  .container20 .lr-wrapper-0 video,.container20 .lr-wrapper-1 video{
    width: 800px;
    height: 450px;
    object-fit: cover;
    position: absolute;
    top:-100%;
  }
  .container20 .lr-wrapper-0 video{
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
  }
  .container20 .lr-wrapper-1 video{
    clip-path: polygon(100% 0, 50% 0, 50% 100%, 100% 100%);
  }
  .container34 video{
    position: absolute;
  }
  .bg{
    width: 800px;
    height: 450px;
    position: absolute;
  }
  .container4 .bg{
    background:url(assets/girl-map.jpg);
    background-size: cover;
  }
  .container5 .bg{
    background:url(assets/girl-road.jpg);
    background-size: cover;
  }
  .container23 .bg{
    background:url(assets/friends-nature.png);
    background-size: cover;
  }
  .container30 .bg{
    background:url(assets/caravan-dog.png);
    background-size: cover;
  }
  .container33 .bg{
    background:url(assets/girl-map.jpg);
    background-size: cover;
  }
  .container3 .lr-bg-wrapper-0 video,.container21 .lr-bg-wrapper-0 video{
    left:400px;
  }
  .container3 .lr-bg-wrapper-1 video,.container21 .lr-bg-wrapper-1 video{
    right:400px;
  }
  .container4 .lr-bg-wrapper .bg-0{
    top:-100%;
    left:400px;
  }
  .container4 .lr-bg-wrapper .bg-1{
    top:100%;
    right:400px;
  }
  .container5 .ud-bg-wrapper-0 .bg-0{
    top:225px;
    left:100%;
  }
  .container5 .ud-bg-wrapper-1 .bg-1{
    bottom:225px;
    left:-100%;
  }
  .container22 .lr-bg-wrapper-0 .bg-0{
    left:800px;
  }
  .container22 .lr-bg-wrapper-1 .bg-1{
    right:800px;
  }
  .container23 .lr-bg-wrapper-0 .bg-0{
    left:800px;
  }
  .container23 .lr-bg-wrapper-1 .bg-1{
    right:800px;
  }
  .container24 .diag{
    width:800px;
    height:450px;
    position:absolute;
    background:url("assets/girl-flowers.png");
    clip-path: polygon(100% 0, 100% 0, 0 100%, 0 100%);
  }
  .container24 .diag-0{
    background-size: cover;
  }
  .container24 .diag-1{
    background-size: contain;
    background-position:50px 30px;
  
  }
  .lr-con{
    width:800px;
    height:450px;
    position:absolute;
  }
  .container25 .lr-con{
    background:url("assets/girl-guitar.png");
    background-size: cover;
  }
  .container29 .lr-con{
    background:url("assets/caravan-road.png");
    background-size: cover;
  }
  .container37 .lr-con{
    background:url("assets/mountain-breath.jpg");
    background-size: cover;
  }
  .l-con{
    clip-path: polygon(13% 0, 13% 0, 13% 100%, 13% 100%);
  }
  .r-con{
    clip-path: polygon(87% 0, 87% 0, 87% 100%, 87% 100%);
  }
  .half-l{
    left:-400px;
    clip-path: polygon(0 0, 10% 0, 10% 100%, 0% 100%);
  }
  .half-r{
    left:400px;
    clip-path: polygon(100% 0, 90% 0, 90% 100%, 100% 100%);
  }
  video{
    object-fit: cover;
    width:800px;
    height:450px;
  }
  .text1{
    position:absolute;
    top:90%;
    left:50%;
    transform:translate(-50%,-50%);
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight:bold;
    text-align:center;
    color:white;
  }
  .text1 .title{
    letter-spacing: 30px;
    font-size:80px;
    text-decoration: underline;
  }
 .text1 .subtitle{
   letter-spacing: 20px;
 }
 .text2{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight:bold;
  text-align:center;
  color:white;
 }
 .text2 .title{
  letter-spacing: 30px;
  font-size:80px;
  }
  .text2 .subtitle{
  letter-spacing: 20px;
  background: rgba(102, 107, 115,0.4);
  }
 .text3 {
  position:absolute;
  top:50%;
  left:-50%;
  transform:translate(-50%,-50%);
  font-family: 'Source Sans Pro', sans-serif;
  text-align:center;
  color:white;
  font-size:20px;
  font-weight:900;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  letter-spacing: 7px;
 }
 .borderText{
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:80%;
  left:50%;
  transform:translate(-50%,-50%);
  color:white;
  font-size:20px;
  background: rgba(102, 107, 115,0.3);
  text-align:center;
 }
 .text4{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight:900;
  letter-spacing:7px;
  padding:10px;
 }
 .text2.mask,.text4.mask,.text6.mask{
  opacity:0;
}
.title5a{
  position:absolute;
  top:50%;
  right:50%;
  transform:translateY(-50%);
  font-family: 'Source Sans Pro', sans-serif;
  color:white;
  font-size:20px;
  font-weight:200;
}
.title5b{
  position:absolute;
  top:50%;
  left:51%;
  transform:translateY(-50%);
  font-family: 'Source Sans Pro', sans-serif;
  color:white;
  font-size:20px;
  font-weight:900;
}
.text5{
  position:absolute;
  width:800px;
  height:450px;
  opacity:0;
}
.text6{
  border-radius:50%;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight:400;
  letter-spacing:5px;
  padding:20px;
 }
 .text7{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  font-family: 'Yanone Kaffeesatz', sans-serif;
  letter-spacing:7px;
  color:white;
  font-size:27px;
  font-weight:300;
  padding-left:7px;
  border-bottom:2px solid white;
 }
 .text7left{
   left:20%;
 }
 .text7right{
  right:20%;
 }
.text7.mask,.text8.mask{
  opacity:0;
  left:50%;
  transform:translate(-50%,-50%);
}
.text8{
  position:absolute;
  top:50%;
  transform:translateY(-50%);

  background: white;
  color: black;
  mix-blend-mode: screen;

  font-size:27px;
  letter-spacing:10px;
  padding:2px 0px 0px 10px;

  
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight:900;
}
.text8left{
  left:70%;
}
.text8right{
  right:70%;
}
  `,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;900&family=Yanone+Kaffeesatz:wght@200;300;400&display=swap",
    },
  ],
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: initParams[0].value,
});

const container1appear = new CSSEffect(
  {
    animatedAttrs: {
      top: "0%",
    },
  },
  {
    selector: ".container1",
    duration: 200,
    easing: "easeOutQuint",
  }
);
const text1appear = new CSSEffect(
  {
    animatedAttrs: {
      top: "50%",
    },
  },
  {
    selector: ".text1",
    duration: 200,
    easing: "easeOutQuint",
  }
);
const container1remove = new CSSEffect(
  {
    animatedAttrs: {
      top: "-100%",
    },
  },
  {
    selector: ".container1",
    duration: 200,
    easing: "linear",
  }
);
const container2appear = container1appear.clone(
  {},
  {
    selector: ".container2",
  }
);
const container2remove = container1remove.clone(
  {},
  {
    selector: ".container2",
  }
);
//container3
const container3appear = container1appear.clone(
  {},
  {
    selector: ".container3 .lr-bg-wrapper-0 video,.container3 .lr-bg-wrapper-1 video",
  }
);
const container3removebg0 = new CSSEffect(
  {
    animatedAttrs: {
      top: "100%",
    },
  },
  {
    selector: ".container3 .lr-bg-wrapper-0 video",
    duration: 300,
    easing: "easeInCubic",
  }
);
const container3removebg1 = new CSSEffect(
  {
    animatedAttrs: {
      top: "-100%",
    },
  },
  {
    selector: ".container3 .lr-bg-wrapper-1 video",
    duration: 300,
    easing: "easeInCubic",
  }
);
//container4
const container4appear = new CSSEffect(
  {
    animatedAttrs: {
      top: "0%",
    },
  },
  {
    selector: ".container4 .bg-0, .container4 .bg-1",
    duration: 300,
    easing: "easeInCubic",
  }
);
//container5
const container5appear = new CSSEffect(
  {
    animatedAttrs: {
      left: "0%",
    },
  },
  {
    selector: ".container5 .bg-0,.container5 .bg-1",
    duration: 300,
    easing: "easeInCubic",
  }
);
const text2appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    },
  },
  {
    selector: ".text2.mask",
    duration: 1
  }
);
//container6
const container6appear = new CSSEffect(
  {
    animatedAttrs: {
      left: "0%",
    },
  },
  {
    selector: ".container6",
    duration: 220,
    easing: "linear",
  }
);
const container6change1 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(100% 0, 100% 0, 78% 56%, 60% 100%, 0 100%, 0 0)"
    },
  },
  {
    selector: ".container6",
    duration: 100,
    easing: "linear",
  }
);
const container6change3 = container6change1.clone(
  {
    animatedAttrs: {
      clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0) "
    },
  },
  {}
);
//container7
const container7appear = container6appear.clone(
  {},
  {
    selector: ".container7",
  }
);
const container7change1 = container6change1.clone(
  {},
  {
    selector: ".container7",
  }
);
const container7change3 = container6change3.clone(
  {},
  { selector: ".container7" }
);
//container8
const container8appear = container6appear.clone(
  {},
  {
    selector: ".container8",
  }
);
const container8change1 = container6change1.clone(
  {},
  {
    selector: ".container8",
  }
);
const container8change3 = container6change3.clone(
  {},
  { selector: ".container8" }
);
//container9
const container9appear = container6appear.clone(
  {},
  {
    selector: ".container9",
  }
);
const container9change1 = container6change1.clone(
  {},
  {
    selector: ".container9",
  }
);
const container9change3 = container6change3.clone(
  {},
  { selector: ".container9" }
);
//container10
const container10appear = container6appear.clone(
  {},
  {
    selector: ".container10",
  }
);
const container10change1 = container6change1.clone(
  {},
  {
    selector: ".container10",
  }
);

const container10change3 = container6change3.clone(
  {},
  { selector: ".container10" }
);
//container11
const container11appear = container6appear.clone(
  {},
  {
    selector: ".container11",
  }
);
//container12
const container12appear = new CSSEffect(
  {
    animatedAttrs: {
      left: "0%",
    },
  },
  {
    selector: ".container12",
    duration:500,
    easing:"easeInOutSine"
  }
);
const container12remove = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    },
  },
  {
    selector: ".container12",
    duration:1,
  }
);
//text3
const text3appear = new CSSEffect(
  {
    animatedAttrs: {
      left: "50%",
    },
  },
  {
    selector: ".text3",
    duration:400,
    easing:"easeInOutSine"
  }
);
//container13
const container13appear = container12appear.clone(
  {},
  {
    selector: ".container13",
  }
);
const container13remove = container12remove.clone(
  {},
  {
    selector: ".container13",
  }
);
//container14
const container14appear = container12appear.clone(
  {},
  {
    selector: ".container14",
  }
);
const container14remove = container12remove.clone(
  {},
  {
    selector: ".container14",
  }
);
//container15
const container15appear = container12appear.clone(
  {},
  {
    selector: ".container15",
  }
);
//container16
const container16appear = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    },
  },
  {
    selector: ".container16",
    duration:300,
    easing: "easeInOutQuad",
  }
);
const text4move = new CSSEffect(
  {
    animatedAttrs: {
      top:"50%",
    },
  },
  {
    selector: ".text4",
    duration:300,
    easing: "easeInOutQuad",
  }
);
const text4mask = text2appear.clone(
  {},
  {
    selector: ".text4.mask",
  }
);
const text4bgremove = new CSSEffect(
  {
    animatedAttrs:{
      opacity:0
    },
  },
  {
    selector: ".container16 .text4",
    duration:1
  }
);
const container16remove = new CSSEffect(
  {
    animatedAttrs: {
      top:"100%"
    },
  },
  {
    selector: ".container16",
    duration:500,
    easing: "easeInOutQuad",
  }
);
//container17
const container17appear = new CSSEffect(
  {
    animatedAttrs: {
      top:"0%"
    },
  },
  {
    selector: ".container17",
    duration:400,
    easing: "easeInOutQuad",
  }
);
const container17remove = container16remove.clone(
  {},
  {
    selector: ".container17",
  }
);
//container18
const container18appear = container17appear.clone(
  {},
  {
    selector: ".container18",
  }
);
const container18remove = container16remove.clone(
  {},
  {
    selector: ".container18",
  }
);
//container19
const container19appear = container17appear.clone(
  {},
  {
    selector: ".container19",
  }
);
const container19remove = container16remove.clone(
  {},
  {
    selector: ".container19",
  }
);
//container20
const container20appear = container1appear.clone(
  {},
  {
    selector: ".container20 .lr-wrapper-0 video,.container20 .lr-wrapper-1 video",
    duration:400,
    easing: "easeInOutQuad"
  }
);
//container20remove
const container20removebg0 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(15% 0, 15% 0, 15% 100%, 15% 100%)"
    },
  },
  {
    selector: ".container20 .lr-wrapper-0 video",
    duration:400,
    easing: "easeInOutQuad",
  }
);
const container20removebg1 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(85% 0, 85% 0, 85% 100%, 85% 100%)"
    },
  },
  {
    selector: ".container20 .lr-wrapper-1 video",
    duration:400,
    easing: "easeInOutQuad",
  }
);
//container21 (background for container22 same video)
const container21appear = container3appear.clone(
{},
{
  selector: ".container21 .lr-bg-wrapper-0 video,.container21 .lr-bg-wrapper-1 video",
  duration:1
}
);
//container22
const container22appearbg0 = new CSSEffect(
  {
    animatedAttrs: {
      left: "400px",
    },
  },
  {
    duration: 400,
    easing: "easeInOutQuad",
    selector: ".container22 .lr-bg-wrapper-0 .bg-0",
  }
);
const container22appearbg1 = new CSSEffect(
  {
    animatedAttrs: {
      right: "400px",
    },
  },
  {
    duration: 400,
    easing: "easeInOutQuad",
    selector: ".container22 .lr-bg-wrapper-1 .bg-1",
  }
);
const text5mask = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    duration: 1,
    selector: ".text5",
  }
);
//container23
const container23appearbg0 = container22appearbg0.clone(
  {},
  {
    selector: ".container23 .lr-bg-wrapper-0 .bg-0",
  }
);
const container23appearbg1 = container22appearbg1.clone(
  {},
  {
    selector: ".container23 .lr-bg-wrapper-1 .bg-1",
  }
);
//container24
const container24appearbg0 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(0 0, 100% 0, 0 100%, 0 0)"
    },
  },
  {
    selector: ".container24 .diag-0",
    duration:400,
    easing: "easeInOutQuad",
  }
);
const container24appearbg1 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(100% 100%, 100% 0, 0 100%, 100% 100%)",
      backgroundSize:"cover",
      backgroundPosition:"0px 0px"
    },
  },
  {
    selector: ".container24 .diag-1",
    duration:400,
    easing: "easeInOutQuad",
  }
);
//container25
const container25appearbg0 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(50% 0, 0 0, 0 100%, 50% 100%)"
    },
  },
  {
    selector: ".container25 .l-con",
    duration:400,
    easing: "easeInOutQuad",
  }
);
const container25appearbg1 = new CSSEffect(
  {
    animatedAttrs: {
      clipPath: "polygon(100% 0, 50% 0, 50% 100%, 100% 100%)"
    },
  },
  {
    selector: ".container25 .r-con",
    duration:400,
    easing: "easeInOutQuad",
  }
);
//container26
const container26appear = new CSSEffect(
  {
    animatedAttrs: {
      top:"0%"
    },
  },
  {
    selector: ".container26",
    duration:300,
    easing: "easeInOutQuad",
  }
);
const text6move = text4move.clone(
  {
  },
  {
    selector: ".text6",
  }
);
const text6mask = text2appear.clone(
  {},
  {
    selector: ".text6.mask",
  }
);
const text6bgremove = new CSSEffect(
  {
    animatedAttrs:{
      opacity:0
    },
  },
  {
    selector: ".container26 .text6",
    duration:1
  }
);
//container27
const container27appear = new CSSEffect(
  {
    animatedAttrs: {
      top:"0%"
    },
  },
  {
    selector: ".container27",
    duration:300,
    easing: "easeInOutQuad",
  }
);
//container28
const container28appear = new CSSEffect(
  {
    animatedAttrs: {
      top:"0%"
    },
  },
  {
    selector: ".container28",
    duration:200,
    easing: "easeInOutQuad",
  }
);
//container29
const container29appearbg0 = container25appearbg0.clone(
  {},
  {
    selector: ".container29 .l-con",
  }
);
const container29appearbg1 = container25appearbg1.clone(
  {},
  {
    selector: ".container29 .r-con",
  }
);
//container30
const container30appearbg0 = new CSSEffect(
  {
    animatedAttrs: {
      left:"0px",
      clipPath:"polygon(0 0, 50% 0, 50% 100%, 0% 100%)"
    },
  },
  {
    selector: ".container30 .half-l",
    duration:300,
    easing: "easeInOutQuad",
  }
);
const container30appearbg1 = new CSSEffect(
  {
    animatedAttrs: {
      left:"0px",
      clipPath:"polygon(100% 0, 50% 0, 50% 100%, 100% 100%)"
    },
  },
  {
    selector: ".container30 .half-r",
    duration:300,
    easing: "easeInOutQuad",
  }
);
const text7left = new CSSEffect(
  {
    animatedAttrs: {
      left:"50%",
      transform:{
        translateX:"-50%"
      }
    },
  },
  {
    selector: ".text7left",
    duration:350,
    easing: "easeInOutQuad",
  }
);
const text7right = new CSSEffect(
  {
    animatedAttrs: {
      right:"50%",
      transform:{
        translateX:"50%"
      }
    },
  },
  {
    selector: ".text7right",
    duration:350,
    easing: "easeInOutQuad",
  }
);
const text7mask = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    duration: 1,
    selector: ".text7.mask",
  }
);
const text7lrremove = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    },
  },
  {
    duration: 1,
    selector: ".text7left,.text7right",
  }
);
//container31
const container31appear = new CSSEffect(
  {
    animatedAttrs: {
      clipPath:"polygon(0 0, 100% 0, 100% 0, 0 100%, 0 100%)"
    },
  },
  {
    selector: ".container31",
    duration:200,
    easing: "easeInOutQuad",
  }
);
const container31change = new CSSEffect(
  {
    animatedAttrs: {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)"
    },
  },
  {
    selector: ".container31",
    duration:200,
    easing: "easeInOutQuad",
  }
);
//container32
const container32appear = container31appear.clone(
  {},
  {
    selector:".container32"
  }
);
const container32change = container31change.clone(
  {},
  {
    selector:".container32"
  }
);
//container33
const container33appearbg0 = container30appearbg0.clone(
  {},
  {
    selector:".container33 .half-l"
  }
);
const container33appearbg1 = container30appearbg1.clone(
  {},
  {
    selector:".container33 .half-r"
  }
);
//container34
const container34appearbg0 = container29appearbg0.clone(
  {},
  {
    selector:".container34 .l-con"
  }
);
const container34appearbg1 = container29appearbg1.clone(
  {},
  {
    selector:".container34 .r-con"
  }
);
const text8left = text7left.clone(
  {},
  {
    selector:".text8left"
  }
);
const text8right = text7right.clone(
  {},
  {
    selector:".text8right"
  }
);
const text8mask = text7mask.clone(
  {},
  {
    selector:".text8.mask"
  }
);
const text8lrremove = text7lrremove.clone(
  {},
  {
    selector:".text8left,.text8right"
  }
);
//container35
const container35appear = container16appear.clone(
  {},
  {
    selector:".container35"
  }
);
//container36
const container36appear = container16appear.clone(
  {},
  {
    selector:".container36"
  }
);
//container37
const container37appearbg0 = container25appearbg0.clone(
  {},
  {
    selector:".container37 .l-con"
  }
);
const container37appearbg1 = container25appearbg1.clone(
  {},
  {
    selector:".container37 .r-con"
  }
);
clip.addIncident(container1appear, 0);
clip.addIncident(text1appear, 0);
clip.addIncident(container1remove, 1000);
clip.addIncident(container2appear, 1000);
clip.addIncident(container2remove, 2000);
clip.addIncident(container3appear, 2000);
clip.addIncident(container3removebg0, 3000);
clip.addIncident(container3removebg1, 3000);
clip.addIncident(container4appear, 3000);
clip.addIncident(container5appear, 3600);
clip.addIncident(text2appear, 3900);

clip.addIncident(container6appear, 4200);
clip.addIncident(container6change1, 4500);
clip.addIncident(container6change3, 4600);

clip.addIncident(container7appear, 4470);
clip.addIncident(container7change1, 4800);
clip.addIncident(container7change3, 4900);

clip.addIncident(container8appear, 4770);
clip.addIncident(container8change1, 5100);
clip.addIncident(container8change3, 5200);

clip.addIncident(container9appear, 5070);
clip.addIncident(container9change1, 5400);
clip.addIncident(container9change3, 5500);

clip.addIncident(container10appear, 5370);
clip.addIncident(container10change1, 5700);
clip.addIncident(container10change3, 5800);
//h teleytaia diagonia
clip.addIncident(container11appear, 5670);

//
clip.addIncident(container12appear, 6000);
clip.addIncident(text3appear, 6000);
// clip.addIncident(container12remove, 6800);
clip.addIncident(container13appear, 6700);
// clip.addIncident(container13remove, 8100);

clip.addIncident(container14appear, 7400);
clip.addIncident(container14remove, 8900);

clip.addIncident(container15appear, 8100);

clip.addIncident(container16appear, 8900);
clip.addIncident(text4move, 8900);
clip.addIncident(text4mask, 9200);
clip.addIncident(text4bgremove, 9201);
clip.addIncident(container16remove, 9300);
clip.addIncident(container17appear, 9300);
clip.addIncident(container17remove, 10200);
clip.addIncident(container18appear, 10200);
clip.addIncident(container18remove, 11100);
clip.addIncident(container19appear, 11100);
clip.addIncident(container19remove, 12000);
clip.addIncident(container20appear, 11900);
clip.addIncident(container21appear, 12300);
clip.addIncident(container20removebg0, 12600);
clip.addIncident(container20removebg1, 12600);
clip.addIncident(container22appearbg0, 12600);
clip.addIncident(container22appearbg1, 12600);
clip.addIncident(text5mask, 13000);
clip.addIncident(container23appearbg0,14000);
clip.addIncident(container23appearbg1,14000);
clip.addIncident(container24appearbg0, 15500); 
clip.addIncident(container24appearbg1, 15500);
clip.addIncident(container25appearbg0, 15800);
clip.addIncident(container25appearbg1, 15800);

clip.addIncident(container26appear, 16200);
clip.addIncident(text6move, 16200);
clip.addIncident(text6mask, 16500);
clip.addIncident(text6bgremove, 16501);
clip.addIncident(container27appear, 16900);
clip.addIncident(container28appear, 17300);
clip.addIncident(container29appearbg0, 17500);
clip.addIncident(container29appearbg1, 17500);
clip.addIncident(container30appearbg0, 17900);
clip.addIncident(container30appearbg1, 17900);
clip.addIncident(text7left, 17900);
clip.addIncident(text7right, 17900);
clip.addIncident(text7mask, 18250);
clip.addIncident(text7lrremove, 18251);

clip.addIncident(container31appear, 18400);
clip.addIncident(container31change, 18900);
clip.addIncident(container32appear, 19200);
clip.addIncident(container32change, 19600);
clip.addIncident(container33appearbg0, 19600);
clip.addIncident(container33appearbg1, 19600);

clip.addIncident(container34appearbg0, 19900);
clip.addIncident(container34appearbg1, 19900);
clip.addIncident(text8left, 19900);
clip.addIncident(text8right, 19900);
clip.addIncident(text8mask, 20250);
clip.addIncident(text8lrremove, 20251);

clip.addIncident(container35appear, 20950); 
clip.addIncident(container36appear, 21500);
clip.addIncident(container37appearbg0, 22500);
clip.addIncident(container37appearbg1, 22500);