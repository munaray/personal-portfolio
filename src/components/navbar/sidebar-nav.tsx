"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { SIDEBAR_NAVs } from "@/constants";

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	name?: string;
}

const SidebarLink = ({ href, icon: Icon, name }: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "#about");

	return (
		<div
			className={`${
				isActive
					? "border h-10 w-10 rounded-full p-1 flex items-center justify-center"
					: ""
			} `}>
			<Link
				href={href}
				className={`flex items-center justify-center h-10 w-10 rounded-full glass !shadow-glass-1-inset ${
					isActive ? "!bg-orange-600 h-8 w-8 rounded-full" : ""
				}`}>
				<div>
					<Icon className="w-4 h-4" />

					<span className={`font-medium text-gray-700`}>{name}</span>
				</div>
			</Link>
		</div>
	);
};

const SideBarNav = () => {
	const [isMounted, setIsMounted] = useState(false);

	const isTabletAndAbove = useMediaQuery({ query: "(min-width: 768px)" });

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return (
		<section className="relative c-space top-0 left-0 right-0 z-50">
			{isTabletAndAbove ? (
				<div className="mt-52 flex flex-col glass !shadow-glass-inset gap-4 justify-between items-center max-w-16 py-3 rounded-xl">
					{" "}
					{SIDEBAR_NAVs.map(({ name, icon, href }) => (
						<SidebarLink key={name} href={href} icon={icon} />
					))}
				</div>
			) : null}
		</section>
	);
};

export default SideBarNav;
