var controller = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
	// animate hint to scroll down
	.fromTo("#panel1 #hint", {opacity: "1"}, {opacity: "0", duration: "0.1"}, 0)
	.fromTo("#panel1 .card", {opacity: "0"}, {opacity: "1", duration: "0.25"}, 0)
	// animate intro
	.fromTo("#panel1 h1", {y: "-20%", opacity: "0"}, {y: "0", opacity: "1", duration: "1"}, 0)
	.fromTo("#panel1 h2", {y: "-20%", opacity: "0"}, {y: "0", opacity: "1", duration: "1"}, 0.25)
	.fromTo("#panel1 h3", {y: "-20%", opacity: "0"}, {y: "0", opacity: "1", duration: "1"}, 0.50)

	// animate to second panel
	.to("#panel-container", {x: "-25%", duration: "0.5"}, 1.5)

	// animate java language
	.fromTo("#language1", {x: "-100%", scale: "0", opacity: "0"}, {opacity: "100", x: "0", scale: "1.5", duration: "0.5"}, 2)
	.to("#language1", {opacity: "0", x: "100%", scale: "0", duration: "0.5"}, 2.5)
	
	// animate python language
	.fromTo("#language2", {x: "-100%", scale: "0", opacity: "0"}, {opacity: "100", x: "0", scale: "1.5", duration: "0.5"}, 2.5)
	.to("#language2", {opacity: "0", x: "100%", scale: "0", duration: "0.5"}, 3)
	
	// animate to third panel
	.to("#panel-container", {x: "-50%", duration: "0.5"}, 3.5)

	// animate to forth panel
	.to("#panel-container", {x: "-75%"}, 5);

new ScrollMagic.Scene({
	triggerElement: "#pin-container",
	triggerHook: "onLeave",
	duration: "400%"
})
.setPin("#pin-container")
.setTween(wipeAnimation)
.addTo(controller);