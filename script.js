gsap.from(".box",{
    x: 1000,
    duration:2,
    delay: 1,
    rotate:360,     
    borderRadius: "25%",
    repeat:-1,
    yoyo:true
})
gsap.to(".box2",{
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius: "25%", 
    backgroundColor: "Skyblue",
    repeat:-1
})