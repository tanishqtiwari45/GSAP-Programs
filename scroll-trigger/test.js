gsap.to("#page2",{
	transform:"translateX(-100%)",
	scrollTrigger:{
		trigger: "#page2",
		scroller:"body",
		start:"top 0%",
		end:"top -150%",
		scrub:2,
		pin:true


	}
})