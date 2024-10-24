import { useAudioStore } from "@/store/use-audio-store";
import Link from "next/link";

interface TopBarProps {
	href: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	name: string;
	className?: string;
	iconClassName?: string;
}

const TopBarNav = ({
	href,
	icon: Icon,
	name,
	className,
	iconClassName,
}: TopBarProps) => {
	const { playClickSound } = useAudioStore();
	return (
		<Link
			href={href}
			onClick={playClickSound}
			className={`flex gap-3 items-center justify-center glass !shadow-glass-inset !bg-background/50 py-2 px-3 lg:px-4 text-sm rounded-full uppercase ${className}`}>
			{name}
			<Icon
				className={`w-5 h-5 lg:w-6 lg:h-6 bg-orange-700 rounded-full p-1 ${iconClassName}`}
			/>
		</Link>
	);
};

export default TopBarNav;
