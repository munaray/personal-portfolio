"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
	children: React.ReactNode;
	triggerOnScroll?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
	children,
	triggerOnScroll,
}) => {
	const textRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const textElement = textRef.current;
		if (!textElement) return;

		// Select all direct child elements within the container
		const paragraphs = Array.from(textElement.children).filter(
			(child) => child.textContent?.trim() !== ""
		) as HTMLElement[];

		const splitText = new SplitType(paragraphs, {
			types: "words",
		});

		const filledWords = splitText.words
			? (Array.from(splitText.words).filter(
					(line) => line.textContent?.trim() !== ""
			  ) as HTMLElement[])
			: [];

		const matchMedia = gsap.matchMedia();

		matchMedia.add("(min-width: 768px)", () => {
			// For medium screens and above
			if (triggerOnScroll) {
				gsap.to(filledWords, {
					backgroundPosition: "-100% 0%",
					duration: 1.7,
					stagger: 2,
					ease: "linear",
					scrollTrigger: {
						trigger: textElement,
						scrub: 1.7,
						start: "top top",
						end: "bottom+=110% top",
						markers: false,
					},
				});
			} else {
				gsap.to(filledWords, {
					color: "inherit",
					duration: 1.5,
					stagger: 0.1,
					delay: 2,
					ease: "power1.out",
				});
			}
		});

		matchMedia.add("(max-width: 767px)", () => {
			// For smaller screens
			if (triggerOnScroll) {
				gsap.to(filledWords, {
					backgroundPosition: "-100% 0%",
					duration: 1.7,
					stagger: 2,
					ease: "linear",
					scrollTrigger: {
						trigger: textElement,
						scrub: 1.7,
						start: "top-=110% top",
						end: "bottom+=150% top",
						markers: false,
					},
				});
			} else {
				gsap.to(filledWords, {
					color: "inherit",
					duration: 1.5,
					stagger: 0.1,
					delay: 2,
					ease: "power1.out",
				});
			}
		});

		// Styling adjustments
		filledWords.forEach((word) => {
			word.style.background =
				"linear-gradient(to left, rgb(255, 255, 255) 50%, rgb(30, 30, 30) 50%)";
			word.style.backgroundSize = "200% 100%";
			word.style.color = "transparent";
			word.style.backgroundClip = "text";
			word.style.display = "inline-block";
			word.style.whiteSpace = "pre-wrap";
		});

		return () => matchMedia.revert(); // Clean up on unmount
	}, []);

	return <div ref={textRef}>{children}</div>;
};

export default TextReveal;
