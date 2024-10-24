"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";


import { SIDEBAR_NAVs } from "@/constants";
import { useAudioStore } from "@/store/use-audio-store";

gsap.registerPlugin(ScrollToPlugin);

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	name?: string;
	isActive: boolean;
}

const SidebarLink = ({
	href,
	icon: Icon,
	name,
	isActive,
}: SidebarLinkProps) => {
	const router = useRouter();
	const { playClickSound, playHoverSound } = useAudioStore();

	const handleScrollTo = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();

			playClickSound();

			gsap.to(window, {
				duration: 1.5,
				scrollTo: href,
				ease: "power2.inOut",
			});

			router.push(href);
		},
		[playClickSound, href, router]
	);

	return (
		<div
			className={`${
				isActive
					? "border h-10 w-10 rounded-full p-1 flex items-center justify-center"
					: ""
			} `}>
			<Link
				href={href}
				onClick={handleScrollTo}
				onMouseEnter={playHoverSound}>
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					className={`flex items-center justify-center h-10 w-10 rounded-full glass !shadow-glass-inset ${
						isActive ? "!bg-orange-600 h-8 w-8 rounded-full" : ""
					}`}>
					<div>
						<Icon className="w-4 h-4" />

						<span
							className={`font-medium tex	const [isMounted, setIsMounted] = useState(t-gray-700`}>
							{name}
						</span>
					</div>
				</motion.div>
			</Link>
		</div>
	);
};

const SideBarNav = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [activeSection, setActiveSection] = useState("#home");

	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });

	useEffect(() => {
		setIsMounted(true);
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			SIDEBAR_NAVs.forEach(({ href }) => {
				const section = document.querySelector(href);
				if (section) {
					const rect = section.getBoundingClientRect();
					if (
						rect.top <= scrollPosition &&
						rect.bottom >= scrollPosition
					) {
						setActiveSection(href);
					}
				}
			});
		};

		const { hash } = window.location;
		if (hash) {
			setActiveSection(hash);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	if (!isMounted) {
		return null;
	}
	return (
		<section className="c-space">
			{isTabletAndAbove ? (
				<div className="fixed top-[30vh] right-10 left-10 z-50 flex flex-col glass !shadow-glass-inset gap-4 justify-between items-center max-w-16 py-3 rounded-xl">
					{" "}
					{SIDEBAR_NAVs.map(({ name, icon, href }) => (
						<SidebarLink
							key={name}
							href={href}
							icon={icon}
							isActive={activeSection === href}
						/>
					))}
				</div>
			) : null}
		</section>
	);
};

export default SideBarNav;
