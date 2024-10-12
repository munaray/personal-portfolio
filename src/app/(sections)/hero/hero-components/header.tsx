import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div className="max-w-full mx-auto">
				<figure className="flex justify-between items-center py-5 mx-auto c-space">
					<Link
						href="/"
						className="flex justify-center items-center gap-1.5">
						<Image
							src={"/logo.png"}
							alt="logo png"
							height={50}
							width={50}
						/>
						<p className="text-white font-bold text-2xl hover:text-neutral-400 transition-colors">
							mun
							<span className="text-orange-500">a</span>
							ray
						</p>
					</Link>
				</figure>
			</div>
		</header>
	);
};

export default Header;
