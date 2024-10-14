import { IconType } from "react-icons";
import {
	FaGithub,
	FaXTwitter,
	FaLinkedin,
	FaInstagram,
	FaTelegram,
	FaDev,
} from "react-icons/fa6";

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

export const SIDE_NAVs = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Services",
		href: "#services",
	},
	{
		id: 5,
		name: "Contact",
		href: "#contact",
	},
];
