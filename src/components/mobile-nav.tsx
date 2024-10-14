import { ShieldCheck, Sparkles, Copyright } from "lucide-react";
import Link from "next/link";

import { TopBarNav } from "./header";
import { SOCIAL_ICONS } from "@/constants";

const MobileNav = ({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
}) => {
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative">
			{/* Custom Hamburger Icon */}
			<button
				className={`button z-50 relative overflow-hidden rounded-full ${
					isMenuOpen
						? "bg-white text-gray-700"
						: "bg-background/60 custom-bg"
				}`}
				onClick={toggleMenu}
				aria-expanded={isMenuOpen}>
				<svg
					stroke="currentColor"
					fill="none"
					className={`hamburger transition-transform duration-1000 ${
						isMenuOpen ? "rotate-90" : ""
					}`}
					style={{
						transformOrigin: "center",
					}}
					viewBox="-10 -10 120 120"
					width="45">
					<path
						className={`line transition-all duration-1000 ${
							isMenuOpen
								? "stroke-dasharray-[60_105_60_300] stroke-dashoffset-[-90]"
								: "stroke-dasharray-[60_31_60_300]"
						}`}
						strokeWidth="10"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M 20 40 H 80 a 1 1 0 0 1 0 20 H 20 a 1 1 0 0 1 0 -40 H 50 V 110"></path>
				</svg>
			</button>

			{/* Mobile Navigation */}
			<aside
				className={`fixed right-0 bottom-0 z-40 w-full mt-0 custom-bg !border-none flex flex-col items-center text-white transition-opacity duration-1000 ${
					isMenuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				style={{ height: "100vh" }}>
				<figure className="mt-40">
					<p className="uppercase font-bold text-gray-500 mb-10 text-center">
						Ask AI about me{" "}
						<span className="text-orange-500/50 block">
							verify my skills on blockchain
						</span>
					</p>

					<TopBarNav
						href="#ask-ai"
						name="Ask AI About me"
						icon={Sparkles}
						className="mb-4 flex justify-between items-center !text-2xl px-6 py-6"
						iconClassName="h-10 w-10"
					/>
					<TopBarNav
						href="#verify"
						name="verify on blockchain"
						icon={ShieldCheck}
						className="flex justify-between items-center !text-2xl px-6 py-6"
						iconClassName="h-10 w-10 bg-blue-500"
					/>

					<p className="uppercase text-lg font-bold text-gray-500 mt-32 text-center">
						my socials
					</p>
					<ul className="my-12 flex gap-4 justify-center">
						{SOCIAL_ICONS.map(({ name, icon: Icon, href }) => (
							<li
								key={name}
								className="custom-bg p-3 rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300">
								<Link href={href}>
									<Icon className="h-7 w-7 " />
								</Link>
							</li>
						))}
					</ul>

					<p className="text-xs text-gray-600 text-center flex gap-1 justify-center items-center">
						All rights reserved.{" "}
						<span>
							<Copyright className="h-4 w-4" />
						</span>{" "}
						{new Date().getFullYear()} Munaray
					</p>
				</figure>
			</aside>
		</div>
	);
};

export default MobileNav;
