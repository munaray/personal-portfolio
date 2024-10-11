import Image from "next/image";
import Hero from "./(hero-section)/page";

export default function Home() {
	return (
		<main className="relative">
			<div className="w-full">
				<Hero />
			</div>
		</main>
	);
}
