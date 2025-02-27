gsap.from(".page1 .box",{
	opacity:0,
	scale:0,
	duration:1,
	delay:1,
	repeat:2,
	borderRadius:"25%",
	roteate:360,
	yoyo:true
})
gsap.from(".page2 h1",{
	opacity:0,
	duration:2,
	delay:1,
	scale:0,
	x:-500,
	scrollTrigger:".page2 h1"

})
gsap.from(".page2 h2",{
	opacity:0,
	duration:2,
	delay:1,
	scale:0,
	y:-500,
	scrollTrigger:".page2 h2"

})
gsap.from(".page3 .box",{
	opacity:0,
	duration:2,
	delay:1,
	scale:0,
	width:"100%",
	scrollTrigger:{
		trigger:".page3 .box",
		scroller:"body",
		markers:true,
		start:"top 60%",
		end:"top 30%",
		scrub:true

	}

})