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

		filledWords.forEach((word) => {
			word.style.color = "transparent";
			word.style.display = "inline-block";
			word.style.whiteSpace = "pre-wrap";
		});

		if (triggerOnScroll) {
			gsap.to(filledWords, {
				color: "inherit",
				duration: 1.5,
				stagger: 0.1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: textElement,
					scrub: false,
					start: "top 80%",
					end: "top 50%",
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

		// filledWords.forEach((word) => {
		// 	word.style.position = "relative"; // Prevents background bleed
		// 	word.style.backgroundImage =
		// 		"linear-gradient(to left, rgb(255, 255, 255) 50%, rgba(30, 30, 30, 0.8) 50%)";
		// 	word.style.backgroundSize = "200% 100%";
		// 	word.style.color = "inherit"; // Maintain your original colors
		// 	word.style.backgroundClip = "text"; // No need for webkit prefix
		// 	word.style.display = "inline-block";
		// 	word.style.whiteSpace = "pre-wrap";
		// });
	}, []);

	return <div ref={textRef}>{children}</div>;
};

export default TextReveal;
