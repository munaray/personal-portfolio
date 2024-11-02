import Avatar from "@/components/avatar";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";
import TextReveal from "@/components/text-reveal";
import React from "react";

const About = () => {
	return (
		<section id="about" className="relative min-h-screen">
			<div className="background-gradient absolute inset-0 -z-100 max-h-screen" />
			<div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
			<Bounded>
				<div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
					<article>
						<Heading
							size="xl"
							className="col-start-1 font-spaceGrotesk mb-8">
							About Me
						</Heading>
						<TextReveal triggerOnScroll>
							<div className="flex flex-col gap-8">
								<span>
									Hey, I’m Abdulsalam Sa&apos;ad! I’m a
									final-year mechanical engineering student
									and a passionate self-taught developer from
									Nigeria. My journey has taken me from
									hands-on engineering to full-stack web and
									mobile development, blending creativity with
									technical skill to build impactful digital
									experiences.
								</span>
								<span>
									Specializing in both web and mobile
									applications, I love creating user-centered
									designs that are as functional as they are
									visually engaging. Along the way, I’ve
									gained certifications from Huawei ICT
									Academy and ALX Software Engineering,
									equipping me with the skills to deliver
									robust, modern applications.
								</span>
								<span>
									When I’m not coding, you’ll find me
									exploring digital design, crafting brand
									visuals, or tackling new creative projects.
									Join me as I continue to push the boundaries
									in tech and design!
								</span>
							</div>
						</TextReveal>
					</article>

					<Avatar
						image={{
							src: "/munaray.jpeg",
							alt: "munaray image",
							height: 2994,
							width: 2395,
						}}
						className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
					/>
				</div>
			</Bounded>
		</section>
	);
};

export default About;
