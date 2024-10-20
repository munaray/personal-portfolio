"use client";

import React, { Fragment, useEffect, useState } from "react";

import { useAudioStore } from "@/store/use-audio-store";
import Intro from "./intro";

const BGMusicLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const playBackgroundMusic = useAudioStore(
		(state) => state.playBackgroundMusic
	);

	const backgroundMusic = useAudioStore((state) => state.backgroundMusic);
	const [showIntro, setShowIntro] = useState(true);

	const handleExplore = () => {
		setShowIntro(false);
		playBackgroundMusic();
	};

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				backgroundMusic?.pause();
			} else {
				if (!backgroundMusic?.playing()) {
					backgroundMusic?.play();
				}
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, [backgroundMusic]);

	return (
		<Fragment>
			{showIntro && <Intro onExplore={handleExplore} />}
			{!showIntro && <div>{children}</div>}
		</Fragment>
	);
};

export default BGMusicLayout;
