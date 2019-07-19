var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({});

window.onload = function() {   
  
  tl.set(banner, {visibility: "visible"})

  /*frame one*/ 
  .add("frame1")
  .from(".bagde, .dell_logo, .vendor_logo", .5, {alpha:0, ease:Linear.easeInOut}, "frame1")
  .from(".product1", .5, {y:-100, alpha:0, ease:Linear.easeInOut}, "frame1")
  .to(".bagde, .product1, .dell_logo, .vendor_logo", .3, {alpha:0, ease:Power2.easeInOut}, "frame1+=3")

  /*frame two*/
  .add("frame2","frame1+=3")
  .from(".red-bg, .dell_logo2, .frm-2-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame2+=0.3")
  .from('#tick_01',.3,{alpha:0, x:100, ease:Linear.easeInOut},"frame2+=0.3")
  .from('#tick_txt_01',.3,{alpha:0, x:150, ease:Linear.easeInOut},"frame2+=0.3")
  
  .to(".frm-2-text", .3, {alpha:0, ease:Power2.easeInOut}, "frame2+=2.8")

  /*frame three*/
  .add("frame3","frame2+=2.8")
  .from(".frm-3-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame3+=0.3")
  
  .to('#tick_01, #tick_txt_01',.3,{alpha:0, x:300, ease:Power2.easeInOut}, "frame3+=2.8")
  .to(".red-bg, .dell_logo2, .frm-3-text", .3, {alpha:0, ease:Power2.easeInOut}, "frame3+=2.8")
 
  /*frame four*/
  .add("frame4","frame3+=2.8")
  .from(".product2", .5, {y:-100, alpha:0, ease:Linear.easeInOut}, "frame4")
  .from(".f4-price", .5, {scale:.1, x:-40, y:10, alpha:0, ease:Linear.easeInOut}, "frame4")
  .from(".dell_logo3, .vendor_logo2", .5, {alpha:0, ease:Linear.easeInOut}, "frame4")
  .from(".frm-4-text", .5, {alpha:0,ease:Linear.easeInOut}, "frame4+=0.3")
  .from(".vio1, .vio-txt1", .5, {alpha:0,ease:Linear.easeInOut}, "frame4+=0.6")
  .from('#tick_02',.3,{alpha:0, x:100, ease:Linear.easeInOut},"frame4+=0.3")
  .from('#tick_txt_02',.3,{alpha:0, x:150, ease:Linear.easeInOut},"frame4+=0.3")
  
  .to('#tick_02, #tick_txt_02',.3,{alpha:0, x:300, ease:Power2.easeInOut}, "frame4+=2.8")
  .to(".frm-4-text, .f4-price, .product2, .vio1, .vio-txt1", .3, {alpha:0, ease:Power2.easeInOut}, "frame4+=2.8")

	
/*frame five*/
  .add("frame5","frame4+=2.8")
   .from(".product3", .5, {x:90, alpha:0, ease:Linear.easeInOut}, "frame5")
   .from(".f5-price", .5, {scale:.1, x:-40, y:10, alpha:0, ease:Linear.easeInOut}, "frame5")
  .from(".cta, .dell_logo2", .5, {alpha:0, ease:Linear.easeInOut}, "frame5")
  .from(".frm-5-text", .5, {alpha:0, ease:Linear.easeInOut}, "frame5")
  .from(".vio, .vio-txt", .5, {alpha:0, ease:Linear.easeInOut}, "frame5+=0.6")
  .from(".vendortext", .5, {alpha:0, ease:Linear.easeInOut}, "frame5")


  	/*roll over*/
	  .from("#roll-cta", .5, {alpha:0, x:728, ease:Power4.easeout}, "frame5+=0.3")
	  .from("#rolltext", .5, {alpha:0, ease:Power4.easeout}, "frame5+=0.3")
	  .from("#legal-text", .5, {alpha:0, ease:Power4.easeout}, "frame5+=0.3")
	  
		legal.addEventListener("mouseover",legalHover);
		function legalHover(){
			tl.pause();
			TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
	  }
	  
		legal.addEventListener("mouseout",legalOut);
		function legalOut(){
			tl.play();
			TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
		}

    ;
  // tl.seek("loop")

  var currentDuration = tl.duration();
  console.log(currentDuration);   
};