"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Download, ShieldCheck, Sparkles } from "lucide-react";
import MobileNav from "./mobile-nav";

interface TopBarProps {
	href: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	name: string;
	className?: string;
	iconClassName?: string;
}

export const TopBarNav = ({
	href,
	icon: Icon,
	name,
	className,
	iconClassName,
}: TopBarProps) => {
	return (
		<Link
			href={href}
			className={`flex gap-3 items-center justify-center custom-bg !bg-background/50 py-2 px-3 lg:py-3 lg:px-5 text-sm rounded-full uppercase ${className}`}>
			{name}
			<Icon
				className={`w-5 h-5 lg:w-6 lg:h-6 bg-orange-700 rounded-full p-1 ${iconClassName}`}
			/>
		</Link>
	);
};

const Header = () => {
	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });
	const [isLoaded, setIsLoaded] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 1000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-full mx-auto">
				<figure className="flex justify-between items-center my-6 mx-auto c-space">
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
									className={`transition-all duration-500 ${
										isLoaded
											? "opacity-100"
											: "opacity-0 animate-pulse"
									} hover:animate-pulse`}
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
									height={60}
									width={60}
									className={`transition-all duration-500 ${
										isLoaded
											? "opacity-100"
											: "opacity-0 animate-pulse"
									} hover:animate-pulse`}
								/>
							</Link>
							<TopBarNav
								href="#cv"
								name="Download CV"
								icon={Download}
								className={`!text-base !px-4 ${
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
			</div>
		</header>
	);
};

export default Header;
