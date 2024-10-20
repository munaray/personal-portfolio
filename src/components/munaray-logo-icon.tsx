import { SVGProps, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function MunarayLogoIcon(props: SVGProps<SVGSVGElement>) {
	const container = useRef<SVGSVGElement>(null);
	const p1Ref = useRef<SVGPathElement>(null);
	const p2Ref = useRef<SVGPathElement>(null);
	const p3Ref = useRef<SVGPathElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { duration: 1, ease: "power3.inOut" },
			});

			gsap.delayedCall(3, () => {
				tl.fromTo(
					p1Ref.current,
					{ opacity: 0, yPercent: "+=45", rotate: 360 },
					{ opacity: 1, yPercent: 0, rotate: 0, duration: 1.5 }
				)
					.fromTo(
						p2Ref.current,
						{ opacity: 0, xPercent: "-=30", rotate: 360 },
						{ opacity: 1, xPercent: 0, rotate: 0, duration: 1.5 },
						"<"
					)
					.fromTo(
						p3Ref.current,
						{
							opacity: 0,
							xPercent: "+=30",
							yPercent: "-=25",
							rotate: 360,
						},
						{
							opacity: 1,
							xPercent: 0,
							yPercent: 0,
							rotate: 0,
							duration: 1.5,
						},
						"<"
					);
			});

			// Hover Effect
			const hoverAnimation = gsap.timeline({ paused: true });
			hoverAnimation.to(p1Ref.current, {
				yPercent: 45,
				rotate: 360,
				duration: 0.5,
			});
			hoverAnimation.to(
				p2Ref.current,
				{ xPercent: -30, rotate: 360, duration: 0.5 },
				"<"
			);
			hoverAnimation.to(
				p3Ref.current,
				{
					xPercent: 30,
					yPercent: -25,
					rotate: 360,
					duration: 0.5,
				},
				"<"
			);

			const currentContainer = container.current;

			currentContainer?.addEventListener("mouseenter", () =>
				hoverAnimation.play()
			);
			currentContainer?.addEventListener("mouseleave", () =>
				hoverAnimation.reverse()
			);

			return () => {
				currentContainer?.removeEventListener("mouseenter", () =>
					hoverAnimation.play()
				);
				currentContainer?.removeEventListener("mouseleave", () =>
					hoverAnimation.reverse()
				);
			};
		},
		{ scope: container }
	);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			fill="none"
			height={50}
			width={50}
			ref={container}
			viewBox="0 0 1000 1000"
			aria-labelledby="munaray-logo-icon">
			<title id="munaray-logo-icon">Munaray</title>

			<g fill="currentColor">
				<path
					// className="transition-transform translate-y-[45%]"
					ref={p1Ref}
					d="M465 816.3a67.6 67.6 0 0056.3 29l51.6.3 36 1.2a73.3 73.3 0 0014-1h1.2l-.1-.1a65.5 65.5 0 0042.2-25.6l223.3-312.6-120.2-7.5a30.3 30.3 0 00-26.5 11.9L572.9 831.4a6.8 6.8 0 01-12-.2L401.2 511.4c-5.9-14.3-15.9-19.3-26.5-19L254.3 495z"></path>
				<path
					// className="transition-transform translate-x-[-30%]"
					ref={p2Ref}
					d="M213.5 349.4a65.5 65.5 0 00-51.7 34.4l-24.4 44-17.9 30.3a70.8 70.8 0 00-5.7 12.5l-.6 1h.2a63.8 63.8 0 002.8 48.5l170 341 62.8-99.3a29.3 29.3 0 002-28.4L155.3 437.7a7.6 7.6 0 016.7-11.9l354.4 17.6c9.7-.7 18.7-6.9 23.5-16.1l53.8-104.5z"></path>
				<path
					// className="transition-transform translate-y-[-25%] translate-x-[30%]"
					ref={p3Ref}
					d="M727.6 330c7.6-20 4-44-9.5-63.2L688 224.2l-20.2-30.4a74.7 74.7 0 00-9-11l-.7-1v.2a66.4 66.4 0 00-45.7-20l-385.6-2 64.5 103.3c5.7 9.2 15.5 15 25.3 15l357.8-41.8a7.2 7.2 0 017.2 10.5L512.3 563.8a30.9 30.9 0 004.8 29l72.9 97.5z"></path>
			</g>
		</svg>
	);
}

export default MunarayLogoIcon;
