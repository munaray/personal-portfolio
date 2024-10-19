"use client";

import { Copyright, Pause, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useAudioStore } from "@/store/use-audio-store";

const Footer = () => {
	const [isMounted, setIsMounted] = useState(false);
	const { isMuted, toggleMute } = useAudioStore();
	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });

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
						{isTabletAndAbove ? (
							<div className="flex items-center space-x-4">
								<p className="text-sm text-gray-600">
									SOUND{" "}
									<span className="text-orange-500">
										{isMuted ? "OFF" : "ON"}
									</span>
								</p>
								<div
									className={`h-10 w-10 rounded-full border border-orange-500 flex justify-center items-center ${
										isMuted ? "" : "animate-pulse"
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
							</div>
						) : null}
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Footer;
