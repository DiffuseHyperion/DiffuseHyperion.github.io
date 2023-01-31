var controller = new ScrollMagic.Controller();

		// define movement of panels
var wipeAnimation = new TimelineMax()
	// animate to second panel
	.to("#panel-container", 1, {x: "-25%"})
	// animate to third panel
	.to("#panel-container", 1, {x: "-50%", delay: 2})
	// animate to forth panel
	.to("#panel-container", 1, {x: "-75%" , delay: 2});

new ScrollMagic.Scene({
	triggerElement: "#pin-container",
	triggerHook: "onLeave",
	duration: "400%"
})
.setPin("#pin-container")
.setTween(wipeAnimation)
.addTo(controller);