"use client";

// import Avatar from "@/components/avatar";
// import Bounded from "@/components/bounded";
// import Heading from "@/components/heading";
// import TextReveal from "@/components/text-reveal";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
// import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About = () => {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			}
		);
		return () => {
			pin.kill();
		};
	});

	return (
		<section id="about" className="scroll-section-outer">
			{/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

			{/* The div below act just as a trigger. As the doc suggests, the trigger and
      the animation should alway be two separated refs */}
			<div ref={triggerRef}>
				<div ref={sectionRef} className="scroll-section-inner">
					<div className="scroll-section">
						<h3>Section 1</h3>
					</div>
					<div className="scroll-section">
						<h3>Section 2</h3>
					</div>
					<div className="scroll-section">
						<h3>Section 3</h3>
					</div>
					<div className="scroll-section">
						<h3>Section 4</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
