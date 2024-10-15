"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Download, ShieldCheck, Sparkles } from "lucide-react";
import { gsap } from "gsap";

import MobileNav from "../mobile-nav";
import TopBarNav from "./topbar-nav";

const Header = () => {
	const [isMounted, setIsMounted] = useState(false);

	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	/* Animate logo using gsap */
	const logoRef = useRef(null);

	useEffect(() => {
		setIsMounted(true);
		gsap.fromTo(
			logoRef.current,
			{
				opacity: 0,
				scale: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				ease: "power2.out",
			}
		);
	}, []);

	const handleMouseEnter = () => {
		gsap.to(logoRef.current, {
			rotate: 360,
			duration: 1,
			ease: "power2.out",
		});
	};
	const handleMouseLeave = () => {
		gsap.to(logoRef.current, {
			rotate: 0,
			duration: 1.5,
			ease: "power2.out",
		});
	};

	if (!isMounted) {
		return null; // Avoid rendering during the mismatch between server and client
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<figure className="flex justify-between items-center my-8 mx-auto c-space">
				{isTabletAndAbove ? (
					<Fragment>
						<Link
							href="/"
							className="flex justify-center items-center gap-1.5">
							<Image
								src={"/logo.png"}
								alt="logo png"
								height={50}
								width={50}
								className="cursor-pointer"
								ref={logoRef}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
							<div className="text-white font-bold text-2xl hover:text-neutral-400 transition-colors">
								Munaray
							</div>
						</Link>

						<div className="flex gap-5 lg:gap-10">
							<TopBarNav
								href="#cv"
								name="Download CV"
								icon={Download}
							/>
							<TopBarNav
								href="#ask ai"
								name="ask ai"
								icon={Sparkles}
							/>
							<TopBarNav
								href="#verify"
								name="verify on blockchain"
								icon={ShieldCheck}
							/>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<Link
							href="/"
							className="flex justify-center items-center gap-1.5 z-50">
							<Image
								src={"/logo.png"}
								alt="logo png"
								height={50}
								width={50}
								className="cursor-pointer"
								ref={logoRef}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							/>
						</Link>
						<TopBarNav
							href="#cv"
							name="Download CV"
							icon={Download}
							className={`!text-sm !px-4 ${
								isMenuOpen ? "!hidden" : ""
							}`}
							iconClassName="!w-5 !h-5"
						/>
						<MobileNav
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
						/>
					</Fragment>
				)}
			</figure>
		</header>
	);
};

export default Header;
