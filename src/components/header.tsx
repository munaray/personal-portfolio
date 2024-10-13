"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Download, ShieldCheck, Sparkles } from "lucide-react";
import CustomHamburger from "./custom-hamburger";

interface TopBarProps {
	href: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	name: string;
}

const TopBarNav = ({ href, icon: Icon, name }: TopBarProps) => {
	return (
		<Link
			href={href}
			className="flex gap-3 items-center justify-center custom-bg !bg-background/50 py-2 px-3 lg:py-3 lg:px-5 text-sm rounded-full uppercase">
			<Icon className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-700 rounded-full p-1" />
			{name}
		</Link>
	);
};

// const TopBarNav = () => (
// 	<ul className="flex gap-10">
// 		{TOP_NAVs.map(({ name, icon: Icon, href }: TopBarProps) => (
// 			<li key={name}>
// 				<Link
// 					href={href}
// 					className="custom-bg !bg-background/50 py-2 px-3 lg:py-3 lg:px-5 text-xs lg:text-sm rounded-full flex gap-3 items-center justify-center uppercase">
// 					{name}
// 					<Icon className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-700 rounded-full p-1" />
// 				</Link>
// 			</li>
// 		))}
// 	</ul>
// );

const Header = () => {
	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });
	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-full mx-auto">
				<figure className="flex justify-between items-center py-10 mx-auto c-space">
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
								className="flex justify-center items-center gap-1.5">
								<Image
									src={"/logo.png"}
									alt="logo png"
									height={60}
									width={60}
								/>
							</Link>
							<TopBarNav
								href="#cv"
								name="Download CV"
								icon={Download}
							/>
							<CustomHamburger />
						</Fragment>
					)}
				</figure>
			</div>
		</header>
	);
};

export default Header;
