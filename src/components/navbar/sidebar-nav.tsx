"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { SIDEBAR_NAVs, SOCIAL_ICONS } from "@/constants";
import { useAudioStore } from "@/store/use-audio-store";

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
	const { playClickSound, playHoverSound } = useAudioStore();

	const handleScrollTo = (event: React.SyntheticEvent) => {
		event.preventDefault();
		playClickSound();

		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

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
						<span>{name}</span>
					</div>
				</motion.div>
			</Link>
		</div>
	);
};

const SideBarNav = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [activeSection, setActiveSection] = useState("#home");
	const { playClickSound, playHoverSound } = useAudioStore();
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

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!isMounted) return null;

	return (
		<section className="c-space">
			{isTabletAndAbove ? (
				<Fragment>
					<div
						className={`fixed top-[30vh] -left-14 z-50 flex flex-col glass !shadow-glass-inset gap-4 justify-between items-center max-w-16 pl-10 pr-7 py-3 rounded-xl transform hover:-left-4 hover:cursor-pointer duration-1000`}>
						{SIDEBAR_NAVs.map(({ name, icon, href }) => (
							<SidebarLink
								key={name}
								href={href}
								icon={icon}
								isActive={activeSection === href}
							/>
						))}
					</div>
					<ul
						className={`fixed top-[22vh] -right-12 z-50 flex flex-col glass !shadow-glass-inset gap-4 justify-between items-center max-w-16 pr-5 pl-2 py-3 rounded-xl transform hover:-right-4 hover:cursor-pointer duration-1000`}>
						{SOCIAL_ICONS.map(({ name, icon: Icon, href }) => (
							<li
								key={name}
								className="glass !shadow-glass-inset p-1.5 rounded-full flex justify-center items-center hover:!shadow-glass-sm transition-all duration-1000">
								<Link
									href={href}
									onClick={playClickSound}
									onMouseEnter={playHoverSound}>
									<Icon className="h-4 w-4 " />
								</Link>
							</li>
						))}
					</ul>
				</Fragment>
			) : null}
		</section>
	);
};

export default SideBarNav;
