gsap.from(".page1 .box",{
	duration:2,
	delay:1,
	rotate:360,
	scale:0,
	repeat:1,
	borderRadius:"50%",
	yoyo:true



})
gsap.from(".page2 .box",{
	duration:2,
	delay:1,
	rotate:360,
	scale:0,
	scrollTrigger:".page2 .box"
})


gsap.from(".page3 .box",{
	duration:2,
	delay:1,
	rotate:360,
	scale:0,
	repeat:1,
	borderRadius:"50%",
	yoyo:true,
	scrollTrigger:".page3 .box"
})