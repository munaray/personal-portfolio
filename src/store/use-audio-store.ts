import { create } from "zustand";
import { Howl } from "howler";

interface AudioState {
	isMuted: boolean;
	toggleMute: () => void;
	playClickSound: () => void;
	playHoverSound: () => void;
	playBackgroundMusic: () => void;
	backgroundMusic: Howl | null;
}

export const useAudioStore = create<AudioState>((set) => ({
	isMuted: false,
	backgroundMusic: null,
	toggleMute: () => {
		set((state) => {
			const newMuteState = !state.isMuted;
			if (state.backgroundMusic) {
				if (newMuteState) {
					state.backgroundMusic.pause(); // Pause when muted
				} else {
					state.backgroundMusic.play(); // Resume when unmuted
				}
			}
			return { isMuted: newMuteState };
		});
	},
	playClickSound: () => {
		const clickSound = new Howl({
			src: ["/click.mp3"],
			volume: 0.5,
		});
		clickSound.play();
	},
	playHoverSound: () => {
		const hoverSound = new Howl({
			src: ["/hover.mp3"],
			volume: 0.5,
		});
		hoverSound.play();
	},
	playBackgroundMusic: () => {
		set((state) => {
			if (!state.backgroundMusic) {
				const bgMusic = new Howl({
					src: ["/bg-music.webm"],
					volume: 0.5,
					loop: true,
				});
				bgMusic.play();
				return { backgroundMusic: bgMusic };
			} else if (!state.backgroundMusic.playing()) {
				state.backgroundMusic.play();
			}
			return {};
		});
	},
}));
