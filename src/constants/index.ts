import { IconType } from "react-icons";
import {
	FaGithub,
	FaXTwitter,
	FaLinkedin,
	FaInstagram,
	FaTelegram,
	FaDev,
} from "react-icons/fa6";

import {
	House,
	Contact,
	BriefcaseBusiness,
	HandPlatter,
	Phone,
	LucideIcon,
} from "lucide-react";

export const SOCIAL_ICONS: { name: string; icon: IconType; href: string }[] = [
	{
		name: "Github",
		icon: FaGithub,
		href: "https://github.com/munaray",
	},
	{
		name: "LinkedIn",
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/munaray/",
	},
	{
		name: "Twitter",
		icon: FaXTwitter,
		href: "https://twitter.com/_munaray",
	},
	{
		name: "Instagram",
		icon: FaInstagram,
		href: "https://instagram.com/_munaray",
	},
	{
		name: "Telegram",
		icon: FaTelegram,
		href: "https://t.me/munaray",
	},
	{
		name: "Dev.to",
		icon: FaDev,
		href: "https://dev.to/munaray",
	},
];

export const SIDEBAR_NAVs: { name: string; icon: LucideIcon; href: string }[] =
	[
		{
			name: "Home",
			href: "#home",
			icon: House,
		},
		{
			name: "About",
			href: "#about",
			icon: Contact,
		},
		{
			name: "Work",
			href: "#work",
			icon: BriefcaseBusiness,
		},
		{
			name: "Services",
			href: "#services",
			icon: HandPlatter,
		},
		{
			name: "Contact",
			href: "#contact",
			icon: Phone,
		},
	];
