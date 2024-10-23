"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Download, ShieldCheck, Sparkles } from "lucide-react";

import MobileNav from "./navbar/mobile-nav";
import TopBarNav from "./navbar/topbar-nav";
import { useAudioStore } from "@/store/use-audio-store";
import MunarayLogoIcon from "./munaray-logo-icon";

const Header = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { playClickSound } = useAudioStore();

	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<figure className="flex justify-between items-center my-8 mx-auto c-space">
				{isTabletAndAbove ? (
					<Fragment>
						<Link
							href="/"
							onClick={playClickSound}
							className="flex justify-center items-center gap-1.5">
							<MunarayLogoIcon className="text-orange-500" />
							<div className="text-white font-bold text-2xl hover:text-neutral-400 transition-colors">
								munaray
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
							onClick={playClickSound}
							className="flex justify-center items-center gap-1.5 z-50">
							<MunarayLogoIcon className="text-orange-500" />
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
