import type { Metadata } from "next";
import localFont from "next/font/local";
import BGMusicLayout from "@/components/bg-music-layout";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import SideBarNav from "@/components/navbar/sidebar-nav";
import Footer from "@/components/footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const spaceGrotesk = localFont({
	src: "./fonts/SpaceGrotesk[wght].woff2",
	variable: "--font-space-grotesk",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Munaray Portfolio",
	description: "Abdulsalam Sa'ad(munaray) Modern Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overflow-x-hidden">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-[#020d1c] overflow-x-hidden`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<BGMusicLayout>
						<Header />
						<SideBarNav />
						{children}
						<Footer />
					</BGMusicLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
