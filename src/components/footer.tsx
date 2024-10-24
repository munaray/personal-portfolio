"use client";

import { Copyright, Pause, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { useAudioStore } from "@/store/use-audio-store";

const Footer = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { isMuted, toggleMute } = useAudioStore();
	// const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<section className="c-space">
			<div className="fixed bottom-8 z-50 w-[92%] mx-auto">
				<div className="flex justify-between items-center">
					<p className="text-xs hidden md:flex text-gray-600 text-center gap-1 justify-center items-center">
						All rights reserved.{" "}
						<span>
							<Copyright className="h-4 w-4" />
						</span>{" "}
						{new Date().getFullYear()} Munaray
					</p>
					{/* Audio Button */}
					<figure className="mx-0">
						<div className="flex items-center space-x-4">
							<p className="text-sm text-gray-600 hidden md:flex items-center">
								<motion.span
									className="mr-2"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									key={`sound-${isMuted}`}>
									SOUND
								</motion.span>
								<motion.span
									className="text-orange-500"
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									key={`status-${isMuted}`}>
									{isMuted ? "OFF" : "ON"}
								</motion.span>
							</p>
							{/* Footer Buttons for menu-items and pause-play button */}
							<figure className="w-full h-full flex justify-between items-center">
								<div className="md:hidden">Menus</div>
								<div
									className={`h-10 w-10 rounded-full border border-orange-500 flex justify-center items-center ${
										isMuted ? "" : "animate-pulse-rotate"
									}`}>
									<div
										className="relative w-8 h-8 rounded-full glass !shadow-glass-inset cursor-pointer flex items-center justify-center"
										onClick={toggleMute}>
										{isMuted ? (
											<Play className="h-4 w-4" />
										) : (
											<Pause className="h-4 w-4" />
										)}
									</div>
								</div>
							</figure>
						</div>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Footer;
