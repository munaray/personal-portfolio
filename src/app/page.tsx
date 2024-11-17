import Hero from "./(sections)/hero";
import About from "./(sections)/about";

export default function Home() {
	return (
		<main>
			<Hero />
			<div style={{ height: "10vh" }}></div>
			<About />
		</main>
	);
}
