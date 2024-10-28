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

export interface TechIconsProps {
	name: string;
	lat: number;
	lng: number;
	icon: string;
	href: string;
	details: string;
	useCases?: string[];
}

export const techIcons: TechIconsProps[] = [
	// Programming Language
	{
		name: "Python",
		lat: 42.546245,
		lng: 1.601554,
		icon: "/icons/python.svg",
		href: "https://www.learnpython.org/",
		details:
			"Python is a versatile, high-level programming language known for its readability and broad use in data science, machine learning, web development, and automation.",
		useCases: [
			"Data analysis and scientific computing",
			"Web development (e.g., Django, Flask, FastAPI)",
			"Machine learning and artificial intelligence",
		],
	},
	{
		name: "JavaScript",
		lat: 23.424076,
		lng: 53.847818,
		icon: "/icons/javascript.svg",
		href: "https://learnjavascript.online/",
		details:
			"JavaScript is a core language of the web, used on both client and server sides. It powers dynamic web applications, interactive websites, and modern frameworks for building robust frontends.",
		useCases: [
			"Client-side web development (e.g., React, Angular)",
			"Server-side programming with Node.js",
			"Building interactive UI/UX for web applications",
		],
	},
	{
		name: "Java",
		lat: 33.93911,
		lng: 67.709953,
		icon: "/icons/java.svg",
		href: "https://www.learnjavaonline.org/",
		details:
			"Java is a powerful, platform-independent language widely used for building enterprise-level applications, Android development, and large-scale systems due to its stability and scalability.",
		useCases: [
			"Enterprise software solutions",
			"Android mobile application development",
			"Backend development for web applications",
		],
	},
	{
		name: "C#",
		lat: 17.060816,
		lng: -61.796428,
		icon: "/icons/csharp.svg",
		href: "https://dotnet.microsoft.com/en-us/learn/csharp",
		details:
			"C# is a language developed by Microsoft, primarily used for building Windows applications, web services, and games using the Unity engine. It’s popular for its integration with .NET.",
		useCases: [
			"Windows desktop applications",
			"Game development with Unity",
			"Enterprise and web services using .NET",
		],
	},
	{
		name: "C++",
		lat: 18.220554,
		lng: -63.068615,
		icon: "/icons/cpp.svg",
		href: "https://www.learncpp.com/",
		details:
			"C++ is a high-performance language with control over system resources, making it ideal for systems programming, game engines, and real-time simulations.",
		useCases: [
			"Game engines and development",
			"Embedded systems and firmware",
			"High-performance applications (e.g., graphics processing)",
		],
	},
	{
		name: "PHP",
		lat: 41.153332,
		lng: 20.168331,
		icon: "/icons/php.svg",
		href: "https://www.learn-php.org/",
		details:
			"PHP is a server-side scripting language mainly used for web development. It’s widely deployed in building content management systems and dynamic websites.",
		useCases: [
			"Web development (e.g., WordPress, Laravel)",
			"Server-side scripting",
			"Building RESTful APIs",
		],
	},
	{
		name: "C",
		lat: 40.069099,
		lng: 45.038189,
		icon: "/icons/c.svg",
		href: "https://www.learn-c.org/",
		details:
			"C is a foundational programming language known for its efficiency and control over system resources, often used in system software, embedded programming, and performance-critical applications.",
		useCases: [
			"Operating systems and kernel development",
			"Embedded and hardware programming",
			"Developing compilers and low-level applications",
		],
	},

	// Frameworks
	{
		name: "React",
		lat: 12.226079,
		lng: -69.060087,
		icon: "/icons/react.svg",
		href: "https://nextjs.org/learn/react-foundations",
		details:
			"React is a JavaScript library developed by Facebook for building dynamic user interfaces. It uses a component-based architecture, allowing developers to build reusable UI components.",
		useCases: [
			"Single-page applications (SPAs)",
			"Dynamic web applications",
			"Mobile applications with React Native",
		],
	},
	{
		name: "Angular",
		lat: -11.202692,
		lng: 17.873887,
		icon: "/icons/angular.svg",
		href: "https://angular.dev/tutorials/learn-angular",
		details:
			"Angular is a TypeScript-based web application framework developed by Google. It is widely used for building scalable and robust enterprise applications.",
		useCases: [
			"Large-scale enterprise applications",
			"Single-page applications (SPAs)",
			"Progressive web applications (PWAs)",
		],
	},
	{
		name: "Vue",
		lat: -38.416097,
		lng: -63.616672,
		icon: "/icons/vue.svg",
		href: "https://vuejs.org/tutorial/#step-1",
		details:
			"Vue is a lightweight, flexible JavaScript framework for building web interfaces and single-page applications. It’s known for its gentle learning curve and flexibility.",
		useCases: [
			"Interactive user interfaces",
			"Single-page applications",
			"Small to medium-sized projects with fast iterations",
		],
	},
	{
		name: "Django",
		lat: -14.270972,
		lng: -170.132217,
		icon: "/icons/django.svg",
		href: "https://learndjango.com/",
		details:
			"Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It's used for backend development and offers a powerful ORM.",
		useCases: [
			"Backend development for web applications",
			"Content management systems (CMS)",
			"Data-heavy applications with complex databases",
		],
	},
	{
		name: "Laravel",
		lat: 47.516231,
		lng: 14.550072,
		icon: "/icons/laravel.svg",
		href: "https://youtube.com/playlist?list=PL3VM-unCzF8hy47mt9-chowaHNjfkuEVz&si=O8sgdYKxulKdeRvI",
		details:
			"Laravel is a PHP web application framework with expressive syntax. It is highly popular for developing robust and scalable web applications.",
		useCases: [
			"Backend development for web applications",
			"E-commerce applications",
			"API development with RESTful services",
		],
	},
	{
		name: "FastAPI",
		lat: -25.274398,
		lng: 133.775136,
		icon: "/icons/fastapi.svg",
		details:
			"FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python-type hints.",
		useCases: [
			"Building RESTful APIs",
			"Data science and machine learning model serving",
			"Real-time backend services",
		],
		href: "",
	},
	{
		name: "Nuxt",
		lat: 12.52111,
		lng: -69.968338,
		icon: "/icons/nuxt.svg",
		details:
			"Nuxt.js is a framework built on top of Vue for server-side rendering (SSR) and static site generation (SSG). It helps developers build performant applications easily.",
		useCases: [
			"Server-side rendered applications",
			"Static site generation",
			"Progressive web apps with Vue",
		],
		href: "",
	},
	{
		name: "Next",
		lat: 60.3385485,
		lng: 20.2712585,
		icon: "/icons/next.svg",
		details:
			"Next.js is a React-based framework for server-side rendering (SSR) and static site generation. It optimizes React applications for better SEO and performance.",
		useCases: [
			"Server-side rendered applications",
			"Static websites and blogs",
			"E-commerce platforms with dynamic content",
		],
		href: "",
	},
	{
		name: "Node.js",
		lat: 40.143105,
		lng: 47.576927,
		icon: "/icons/nodejs.svg",
		details:
			"Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables server-side scripting with JavaScript, making it possible to build backend applications in JS.",
		useCases: [
			"Backend API development",
			"Real-time applications (e.g., chat apps)",
			"Server-side scripting and automation tasks",
		],
		href: "",
	},
	{
		name: "Express",
		lat: 43.915886,
		lng: 17.679076,
		icon: "/icons/express.svg",
		details:
			"Express is a fast, unopinionated, and minimal web framework for Node.js, making it ideal for building RESTful APIs and single-page applications.",
		useCases: [
			"RESTful API development",
			"Web server setup",
			"Microservices architecture",
		],
		href: "",
	},
	{
		name: "NestJS",
		lat: 13.193887,
		lng: -59.543198,
		icon: "/icons/nestjs.png",
		details:
			"NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and incorporates OOP, FP, and FRP principles.",
		useCases: [
			"Enterprise-grade backend applications",
			"GraphQL API development",
			"Microservices and serverless applications",
		],
		href: "",
	},
	{
		name: "Fastify",
		lat: 23.684994,
		lng: 90.356331,
		icon: "/icons/fastify.svg",
		details:
			"Fastify is a fast, low-overhead web framework for Node.js that focuses on speed and low resource usage. Ideal for highly performant RESTful APIs.",
		useCases: [
			"High-performance RESTful APIs",
			"Real-time applications",
			"Microservices and lightweight server-side functions",
		],
		href: "",
	},
	{
		name: "React Native",
		lat: 50.503887,
		lng: 4.469936,
		icon: "/icons/react-native.svg",
		details:
			"React Native is a framework for building native mobile applications using React and JavaScript, enabling cross-platform app development with a single codebase.",
		useCases: [
			"Cross-platform mobile applications",
			"Native-feel apps using JavaScript",
			"Apps that need to run on both iOS and Android",
		],
		href: "",
	},

	// Databases
	{
		name: "MySQL",
		lat: 12.238333,
		lng: -1.561593,
		icon: "/icons/mysql.svg",
		details:
			"MySQL is a widely used open-source relational database management system (RDBMS). Known for its reliability and ease of use, it’s popular for web applications.",
		useCases: [
			"Web application data storage",
			"E-commerce platforms",
			"Content management systems (CMS)",
		],
		href: "",
	},
	{
		name: "PostgreSQL",
		lat: 42.733883,
		lng: 25.48583,
		icon: "/icons/postgresql.svg",
		details:
			"PostgreSQL is a powerful, open-source object-relational database known for its robustness and support for advanced data types. It’s highly extensible and suited for complex applications.",
		useCases: [
			"Data warehousing and analytics",
			"Geospatial data storage (GIS)",
			"Complex, data-heavy applications",
		],
		href: "",
	},
	{
		name: "Oracle",
		lat: 25.930414,
		lng: 50.637772,
		icon: "/icons/oracle.svg",
		details:
			"Oracle Database is a multi-model database management system often used by large enterprises for critical applications due to its high scalability, security, and performance.",
		useCases: [
			"Enterprise-level applications",
			"Data warehousing and business intelligence",
			"Banking and financial systems",
		],
		href: "",
	},
	{
		name: "SQL Server",
		lat: -3.373056,
		lng: 29.918886,
		icon: "/icons/sql-server.svg",
		details:
			"SQL Server is a relational database management system developed by Microsoft. It offers enterprise-grade database solutions, with a strong integration into the Microsoft ecosystem.",
		useCases: [
			"Business intelligence applications",
			"Enterprise resource planning (ERP) systems",
			"Corporate data management",
		],
		href: "",
	},
	{
		name: "MariaDB",
		lat: 9.30769,
		lng: 2.315834,
		icon: "/icons/mariadb.svg",
		details:
			"MariaDB is an open-source relational database management system, a fork of MySQL, with additional features and optimizations. It’s community-driven and compatible with MySQL.",
		useCases: [
			"Web applications with high traffic",
			"Content management systems (CMS)",
			"E-commerce platforms",
		],
		href: "",
	},
	{
		name: "MongoDB",
		lat: 17.9,
		lng: -62.833333,
		icon: "/icons/mongodb.svg",
		details:
			"MongoDB is a NoSQL database designed for storing JSON-like documents. It’s highly scalable and is popular in applications requiring flexibility in data schema design.",
		useCases: [
			"Real-time analytics applications",
			"Content management systems (CMS)",
			"IoT applications and big data",
		],
		href: "",
	},
	{
		name: "Redis",
		lat: 32.321384,
		lng: -64.75737,
		icon: "/icons/redis.svg",
		details:
			"Redis is an in-memory data store often used as a cache or message broker. It provides high-speed data storage and is used to accelerate data retrieval for applications.",
		useCases: [
			"Caching frequently accessed data",
			"Session storage in web applications",
			"Real-time analytics and leaderboard tracking",
		],
		href: "",
	},

	// Linux Distro
	{
		name: "Ubuntu",
		lat: 4.535277,
		lng: 114.727669,
		icon: "/icons/ubuntu.svg",
		details:
			"Ubuntu is a popular, user-friendly Linux distribution based on Debian. It’s widely used for desktop, server, and cloud environments, with excellent support for software and hardware.",
		useCases: [
			"Desktop computing",
			"Cloud and server infrastructure",
			"Development and testing environments",
		],
		href: "",
	},
	{
		name: "Debian",
		lat: -16.290154,
		lng: -63.588653,
		icon: "/icons/debian.svg",
		details:
			"Debian is a stable and reliable Linux distribution known for its security and extensive package repository. It’s widely used for servers and as a base for other distributions.",
		useCases: [
			"Web and application servers",
			"Embedded systems",
			"Foundation for derivative distros like Ubuntu",
		],
		href: "",
	},
	{
		name: "CentOS",
		lat: 12.1783611,
		lng: -68.2385339,
		icon: "/icons/centos.svg",
		details:
			"CentOS is a free, open-source Linux distribution that is community-supported and compatible with Red Hat Enterprise Linux (RHEL). It’s commonly used in enterprise environments.",
		useCases: [
			"Enterprise server environments",
			"Web hosting",
			"Data centers",
		],
		href: "",
	},
	{
		name: "Fedora",
		lat: -14.235004,
		lng: -51.92528,
		icon: "/icons/fedora.svg",
		details:
			"Fedora is a cutting-edge Linux distribution sponsored by Red Hat. It’s known for incorporating the latest features and technologies, making it ideal for developers and innovators.",
		useCases: [
			"Developer workstations",
			"Testing new technologies",
			"Open-source software development",
		],
		href: "",
	},
	{
		name: "Arch Linux",
		lat: 25.03428,
		lng: -77.39628,
		icon: "/icons/arch-linux.svg",
		details:
			"Arch Linux is a lightweight, flexible Linux distribution known for its 'rolling release' model, providing the latest software updates. It requires a hands-on approach and is ideal for advanced users.",
		useCases: [
			"Customized desktop environments",
			"DIY Linux systems",
			"Cutting-edge software access",
		],
		href: "",
	},
	{
		name: "Kali Linux",
		lat: 27.514162,
		lng: 90.433601,
		icon: "/icons/kali-linux.svg",
		details:
			"Kali Linux is a Debian-based distribution designed for digital forensics and penetration testing. It includes numerous tools for security auditing and testing.",
		useCases: [
			"Penetration testing",
			"Digital forensics",
			"Cybersecurity training",
		],
		href: "",
	},

	// ********************************
	{
		name: "Strapi",
		lat: -54.423199,
		lng: 3.413194,
		icon: "/icons/strapi.svg",
		details:
			"Strapi is an open-source, headless CMS designed to create flexible APIs in a quick and customizable way. It supports RESTful and GraphQL APIs.",
		useCases: [
			"Headless content management",
			"API-driven applications",
			"Customizable CMS solutions",
		],
		href: "",
	},
	{
		name: "Sanity.io",
		lat: -22.328474,
		lng: 24.684866,
		icon: "/icons/sanity.svg",
		details:
			"Sanity.io is a headless CMS that provides real-time collaborative editing, structured content management, and powerful customization options.",
		useCases: [
			"Real-time collaborative CMS",
			"Structured content storage",
			"Interactive websites and applications",
		],
		href: "",
	},
	{
		name: "Convex",
		lat: 53.709807,
		lng: 27.953389,
		icon: "/icons/convex.svg",
		details:
			"Convex is a backend platform designed to handle real-time data storage, serverless functions, and live queries, offering seamless integration with frontend frameworks.",
		useCases: [
			"Real-time applications",
			"Serverless backends",
			"Live data management",
		],
		href: "",
	},
	{
		name: "Upstash",
		lat: 17.189877,
		lng: -88.49765,
		icon: "/icons/upstash.svg",
		details:
			"Upstash is a serverless database optimized for low-latency and high scalability, often used for caching and streaming applications.",
		useCases: [
			"Caching solutions",
			"Streaming data applications",
			"Serverless databases",
		],
		href: "",
	},
	{
		name: "Supabase",
		lat: 56.130366,
		lng: -106.346771,
		icon: "/icons/supabase.svg",
		details:
			"Supabase is an open-source alternative to Firebase, providing an instant backend with a PostgreSQL database, authentication, and real-time subscriptions.",
		useCases: [
			"Real-time data apps",
			"Authentication and authorization",
			"Database-backed applications",
		],
		href: "",
	},
	{
		name: "Appwrite",
		lat: -12.164165,
		lng: 96.870956,
		icon: "/icons/appwrite.svg",
		details:
			"Appwrite is a backend-as-a-service (BaaS) for web and mobile developers, offering database, authentication, storage, and function management.",
		useCases: [
			"Backend for web/mobile apps",
			"Data storage and authentication",
			"Cloud function execution",
		],
		href: "",
	},
	{
		name: "TanStack Query",
		lat: -4.038333,
		lng: 21.758664,
		icon: "/icons/tanstack-query.svg",
		details:
			"TanStack Query (formerly React Query) is a data-fetching library for managing server state, focusing on caching, synchronization, and out-of-the-box reactivity.",
		useCases: [
			"Efficient data fetching",
			"Server state management",
			"Caching and synchronization",
		],
		href: "",
	},
	{
		name: "Redux",
		lat: 6.611111,
		lng: 20.939444,
		icon: "/icons/redux.svg",
		details:
			"Redux is a popular JavaScript library for managing application state with a single, centralized store, making state predictable and traceable.",
		useCases: [
			"State management in React apps",
			"Complex, interactive UIs",
			"Data consistency across components",
		],
		href: "",
	},
	{
		name: "Zustand",
		lat: -0.228021,
		lng: 15.827659,
		icon: "/icons/zustand.svg",
		details:
			"Zustand is a minimalistic state management library for React applications, focused on simplicity and performance.",
		useCases: [
			"Lightweight state management",
			"Simple and modular React apps",
			"Small, custom stores",
		],
		href: "",
	},
	{
		name: "ShadCN",
		lat: 46.818188,
		lng: 8.227512,
		icon: "/icons/shadcn.svg",
		details:
			"ShadCN is a UI component library for React and Next.js, designed for rapid and scalable development with a focus on accessibility.",
		useCases: [
			"UI component-driven development",
			"React/Next.js applications",
			"Rapid UI prototyping",
		],
		href: "",
	},
	{
		name: "Expo Router",
		lat: 7.539989,
		lng: -5.54708,
		icon: "/icons/expo-router.svg",
		details:
			"Expo Router is a powerful routing solution for Expo and React Native apps, making navigation simple and organized.",
		useCases: [
			"Navigation in React Native",
			"Expo applications",
			"Multi-page mobile applications",
		],
		href: "",
	},
	{
		name: "TypeScript",
		lat: -21.236736,
		lng: -159.777671,
		icon: "/icons/typescript.svg",
		details:
			"TypeScript is a superset of JavaScript that adds static typing, enhancing code quality, scalability, and developer productivity.",
		useCases: [
			"Type-safe JavaScript applications",
			"Large-scale web applications",
			"Code refactoring and maintenance",
		],
		href: "",
	},
	{
		name: "tRPC",
		lat: -35.675147,
		lng: -71.542969,
		icon: "/icons/trpc.svg",
		details:
			"tRPC allows developers to create fully typesafe APIs without needing an API schema, making it ideal for TypeScript-based applications.",
		useCases: [
			"Type-safe API development",
			"TypeScript projects",
			"Client-server type sharing",
		],
		href: "",
	},
	{
		name: "GraphQL",
		lat: 7.369722,
		lng: 12.354722,
		icon: "/icons/graphql.svg",
		details:
			"GraphQL is a query language for APIs that enables precise data fetching, allowing clients to request only the data they need.",
		useCases: [
			"Optimized API requests",
			"Data-rich applications",
			"Flexible, scalable backends",
		],
		href: "",
	},
	{
		name: "Prisma",
		lat: 35.86166,
		lng: 104.195397,
		icon: "/icons/prisma.svg",
		details:
			"Prisma is an ORM for Node.js and TypeScript that simplifies database access by generating typesafe query builders.",
		useCases: [
			"Type-safe database interactions",
			"Node.js applications",
			"Complex data models and relations",
		],
		href: "",
	},
	{
		name: "Drizzle ORM",
		lat: 4.570868,
		lng: -74.297333,
		icon: "/icons/drizzle-orm.svg",
		details:
			"Drizzle ORM is a lightweight ORM for TypeScript, focusing on simplicity and developer productivity with an intuitive API.",
		useCases: [
			"Type-safe database handling",
			"TypeScript projects",
			"Small-to-medium sized apps",
		],
		href: "",
	},
	{
		name: "NeonDB",
		lat: 9.748917,
		lng: -83.753428,
		icon: "/icons/neondb.svg",
		details:
			"NeonDB is a serverless, scalable Postgres database designed for modern applications needing reliable, cloud-native data storage.",
		useCases: [
			"Cloud-native applications",
			"Serverless architectures",
			"PostgreSQL-compatible storage",
		],
		href: "",
	},

	// DEVops Tools
	{
		name: "Docker",
		lat: 21.521757,
		lng: -77.781167,
		icon: "/icons/docker.svg",
		details:
			"Docker is a platform for developing, shipping, and running applications in containers, enabling consistent environments across development and production.",
		useCases: [
			"Application containerization",
			"Microservices architecture",
			"Simplifying development and deployment",
		],
		href: "",
	},
	{
		name: "Kubernetes",
		lat: 16.002082,
		lng: -24.013197,
		icon: "/icons/kubernetes.svg",
		details:
			"Kubernetes is an open-source platform for automating deployment, scaling, and managing containerized applications across clusters of hosts.",
		useCases: [
			"Container orchestration",
			"Scaling applications",
			"Cloud-native infrastructure",
		],
		href: "",
	},
	{
		name: "Ansible",
		lat: 12.16957,
		lng: -68.99002,
		icon: "/icons/ansible.svg",
		details:
			"Ansible is an open-source automation tool that manages configurations, deployments, and orchestration across servers using simple YAML syntax.",
		useCases: [
			"Automating server configuration",
			"Continuous deployment",
			"Orchestration and provisioning",
		],
		href: "",
	},
	{
		name: "Terraform",
		lat: -10.447525,
		lng: 105.690449,
		icon: "/icons/terraform.svg",
		details:
			"Terraform is an infrastructure as code (IaC) tool that enables users to define and provision infrastructure using a high-level configuration language.",
		useCases: [
			"Infrastructure as Code (IaC)",
			"Automated provisioning",
			"Multi-cloud deployments",
		],
		href: "",
	},
	{
		name: "Jenkins",
		lat: 35.126413,
		lng: 33.429859,
		icon: "/icons/jenkins.svg",
		details:
			"Jenkins is an open-source automation server that facilitates continuous integration and delivery, enabling rapid and reliable software releases.",
		useCases: [
			"Continuous Integration/Continuous Deployment (CI/CD)",
			"Automated testing and building",
			"Pipeline management",
		],
		href: "",
	},
	{
		name: "GitHub Actions",
		lat: 49.817492,
		lng: 15.472962,
		icon: "/icons/github-actions.svg",
		details:
			"GitHub Actions is a CI/CD and automation platform that integrates seamlessly with GitHub repositories, enabling custom workflows for build, test, and deploy.",
		useCases: [
			"Automating GitHub workflows",
			"CI/CD for GitHub projects",
			"Custom automation actions",
		],
		href: "",
	},
	{
		name: "Prometheus",
		lat: 51.165691,
		lng: 10.451526,
		icon: "/icons/prometheus.svg",
		details:
			"Prometheus is an open-source monitoring and alerting toolkit, often used for collecting and storing time-series data on system performance.",
		useCases: [
			"System monitoring and alerting",
			"Time-series data collection",
			"Metrics-based monitoring",
		],
		href: "",
	},
	{
		name: "Grafana",
		lat: 11.825138,
		lng: 42.590275,
		icon: "/icons/grafana.svg",
		details:
			"Grafana is an open-source visualization tool for monitoring and analytics, commonly used with Prometheus to display real-time metrics on dashboards.",
		useCases: [
			"Data visualization",
			"Custom monitoring dashboards",
			"Real-time metrics tracking",
		],
		href: "",
	},
	{
		name: "Elasticsearch",
		lat: 56.26392,
		lng: 9.501785,
		icon: "/icons/elasticsearch.svg",
		details:
			"Elasticsearch is a distributed, open-source search and analytics engine used for logging, search, and data analysis.",
		useCases: [
			"Search functionality",
			"Log and data analysis",
			"Real-time data indexing",
		],
		href: "",
	},
	{
		name: "Logstash",
		lat: 15.414999,
		lng: -61.370976,
		icon: "/icons/logstash.svg",
		details:
			"Logstash is a server-side data processing pipeline that ingests, transforms, and sends data to a 'stash,' often Elasticsearch.",
		useCases: [
			"Data ingestion and transformation",
			"Log management",
			"Centralized data processing",
		],
		href: "",
	},
	{
		name: "Kibana",
		lat: 18.735693,
		lng: -70.162651,
		icon: "/icons/kibana.svg",
		details:
			"Kibana is an open-source data visualization tool that enables users to explore, visualize, and analyze data stored in Elasticsearch.",
		useCases: [
			"Data visualization with Elasticsearch",
			"Log and metric dashboards",
			"Exploratory data analysis",
		],
		href: "",
	},
	{
		name: "Git",
		lat: 28.033886,
		lng: 1.659626,
		icon: "/icons/git.svg",
		details:
			"Git is a distributed version control system that allows developers to track changes in source code during software development.",
		useCases: [
			"Version control",
			"Collaboration on code",
			"Source code history tracking",
		],
		href: "",
	},

	// AI Frameworks
	{
		name: "TensorFlow",
		lat: -1.831239,
		lng: -78.183406,
		icon: "/icons/tensorflow.svg",
		details:
			"TensorFlow is an open-source machine learning framework developed by Google. It supports deep learning and neural network models for various applications.",
		useCases: [
			"Image and speech recognition",
			"Natural language processing (NLP)",
			"Building custom AI models",
		],
		href: "",
	},
	{
		name: "PyTorch",
		lat: 58.595272,
		lng: 25.013607,
		icon: "/icons/pytorch.svg",
		details:
			"PyTorch is an open-source machine learning framework primarily used for deep learning research. Developed by Facebook, it's known for its ease of use and dynamic computation graph.",
		useCases: [
			"Research and experimentation",
			"Computer vision",
			"NLP and reinforcement learning",
		],
		href: "",
	},
	{
		name: "Hugging Face",
		lat: 26.820553,
		lng: 30.802498,
		icon: "/icons/huggingface.svg",
		details:
			"Hugging Face provides tools and libraries focused on natural language processing, including pretrained transformers and large language models.",
		useCases: [
			"Text generation",
			"Language translation",
			"Sentiment analysis and chatbots",
		],
		href: "",
	},
	{
		name: "OpenAI",
		lat: 24.215527,
		lng: -12.885834,
		icon: "/icons/openai.svg",
		details:
			"OpenAI develops powerful AI tools like GPT and DALL-E, providing extensive capabilities in language understanding, generation, and image synthesis.",
		useCases: [
			"Text generation and summarization",
			"Image creation",
			"AI-driven customer service",
		],
		href: "",
	},
	{
		name: "LangChain",
		lat: 15.179384,
		lng: 39.782334,
		icon: "/icons/langchain.svg",
		details:
			"LangChain is a framework that facilitates building applications with large language models, enabling chaining of various prompts and AI tools for robust outputs.",
		useCases: [
			"AI pipelines for text processing",
			"Multi-step AI workflows",
			"Language model integration",
		],
		href: "",
	},
	{
		name: "Keras",
		lat: 40.463667,
		lng: -3.74922,
		icon: "/icons/keras.svg",
		details:
			"Keras is a high-level neural network API, written in Python, that runs on top of TensorFlow, allowing for quick prototyping of deep learning models.",
		useCases: [
			"Rapid deep learning model development",
			"Image classification",
			"Medical and health data modeling",
		],
		href: "",
	},
	{
		name: "Caffe",
		lat: 9.145,
		lng: 40.489673,
		icon: "/icons/caffe.svg",
		details:
			"Caffe is a deep learning framework known for its speed and efficient use of computing resources, making it popular for computer vision tasks.",
		useCases: [
			"Image classification",
			"Object detection",
			"Real-time applications",
		],
		href: "",
	},
	{
		name: "MXNet",
		lat: 61.92411,
		lng: 25.748151,
		icon: "/icons/mxnet.svg",
		details:
			"MXNet is a deep learning framework that supports flexible programming and distributed computing, often used by AWS as the default engine for deep learning.",
		useCases: [
			"Distributed deep learning",
			"Computer vision",
			"NLP applications",
		],
		href: "",
	},
	{
		name: "JAX",
		lat: -16.578193,
		lng: 179.414413,
		icon: "/icons/jax.svg",
		details:
			"JAX is a high-performance library for numerical computing, often used for machine learning research involving transformations and hardware acceleration.",
		useCases: [
			"High-performance computing",
			"Machine learning model training",
			"Mathematical research",
		],
		href: "",
	},
	{
		name: "TFLite",
		lat: -51.796253,
		lng: -59.523613,
		icon: "/icons/tflite.svg",
		details:
			"TensorFlow Lite (TFLite) is a framework for running lightweight machine learning models on mobile and embedded devices.",
		useCases: [
			"Mobile machine learning",
			"Embedded AI applications",
			"On-device inference",
		],
		href: "",
	},
	{
		name: "FastAI",
		lat: 7.425554,
		lng: 150.550812,
		icon: "/icons/fastai.svg",
		details:
			"FastAI is a user-friendly library built on top of PyTorch, designed to simplify complex deep learning applications and tasks.",
		useCases: [
			"Quick AI model prototyping",
			"Image classification",
			"AI education and training",
		],
		href: "",
	},
	{
		name: "AlphaFold",
		lat: 61.892635,
		lng: -6.911806,
		icon: "/icons/alphafold.svg",
		details:
			"DeepMind's AlphaFold is an AI system for predicting protein structures, greatly aiding research in biology and medicine.",
		useCases: [
			"Protein structure prediction",
			"Medical and biological research",
			"Drug discovery",
		],
		href: "",
	},
	{
		name: "MindSpore",
		lat: 46.227638,
		lng: 2.213749,
		icon: "/icons/mindspore.svg",
		details:
			"MindSpore is a deep learning framework by Huawei, focusing on edge AI applications and providing adaptive distributed capabilities.",
		useCases: [
			"Edge AI applications",
			"Cloud-edge collaboration",
			"AI model optimization",
		],
		href: "",
	},
	{
		name: "Gemini AI",
		lat: -0.803689,
		lng: 11.609444,
		icon: "/icons/gemini.svg",
		details:
			"Gemini AI by Google DeepMind is a general-purpose AI framework, enabling the development of multimodal models for various advanced tasks.",
		useCases: [
			"General AI applications",
			"Advanced multimodal models",
			"Cutting-edge AI research",
		],
		href: "",
	},

	// 3D and Graphics designs tools
	{
		name: "Blender",
		lat: 55.378051,
		lng: -3.435973,
		icon: "/icons/blender.svg",
		details:
			"Blender is an open-source 3D modeling, animation, and rendering software widely used for creating animations, visual effects, and game assets.",
		useCases: [
			"3D animation and modeling",
			"Game development",
			"Visual effects",
		],
		href: "",
	},
	{
		name: "Adobe Illustrator",
		lat: 12.262776,
		lng: -61.604171,
		icon: "/icons/illustrator.svg",
		details:
			"Adobe Illustrator is a vector graphics editor ideal for creating logos, icons, and complex illustrations with scalable vector assets.",
		useCases: ["Logo design", "Illustrations", "Typography"],
		href: "",
	},
	{
		name: "Adobe Photoshop",
		lat: 42.315407,
		lng: 43.356892,
		icon: "/icons/photoshop.svg",
		details:
			"Adobe Photoshop is an industry-standard tool for photo editing, graphic design, and digital art, known for its robust tools for image manipulation.",
		useCases: ["Photo editing", "Digital painting", "Graphic design"],
		href: "",
	},
	{
		name: "Cinema 4D",
		lat: 3.933889,
		lng: -53.125782,
		icon: "/icons/cinema4d.svg",
		details:
			"Cinema 4D is a professional 3D software suite used in motion graphics, visual effects, and 3D animation. It's known for its integration with other Adobe products.",
		useCases: [
			"Motion graphics",
			"3D animation",
			"Visual effects in media",
		],
		href: "",
	},
	{
		name: "SketchUp",
		lat: 49.465691,
		lng: -2.585278,
		icon: "/icons/sketchup.svg",
		details:
			"SketchUp is a 3D modeling software ideal for architectural design, landscape architecture, and urban planning.",
		useCases: [
			"Architectural modeling",
			"Interior design",
			"Landscape architecture",
		],
		href: "",
	},
	{
		name: "Autodesk Maya",
		lat: 7.946527,
		lng: -1.023194,
		icon: "/icons/maya.svg",
		details:
			"Autodesk Maya is a 3D animation and modeling software known for its use in film, television, and game development.",
		useCases: [
			"Film and TV animation",
			"Game development",
			"3D modeling and rendering",
		],
		href: "",
	},
	{
		name: "Fusion 360",
		lat: 36.137741,
		lng: -5.345374,
		icon: "/icons/fusion360.svg",
		details:
			"Fusion 360 is a cloud-based 3D CAD, CAM, and CAE tool for product design and manufacturing, used widely in engineering.",
		useCases: [
			"Product design",
			"3D CAD modeling",
			"Manufacturing simulation",
		],
		href: "",
	},
	{
		name: "Figma",
		lat: 71.706936,
		lng: -42.604303,
		icon: "/icons/figma.svg",
		details:
			"Figma is a collaborative interface design tool, popular for UI/UX design and prototyping with real-time team collaboration.",
		useCases: ["UI/UX design", "Prototyping", "Collaborative design work"],
		href: "",
	},
	{
		name: "Adobe XD",
		lat: 13.443182,
		lng: -15.310139,
		icon: "/icons/adobexd.svg",
		details:
			"Adobe XD is a user experience design software for creating wireframes, prototypes, and UI designs with seamless Adobe integration.",
		useCases: ["UI/UX prototyping", "Wireframing", "Design collaboration"],
		href: "",
	},
	{
		name: "Adobe InDesign",
		lat: 9.945587,
		lng: -9.696645,
		icon: "/icons/indesign.svg",
		details:
			"Adobe InDesign is a desktop publishing and typesetting software used for creating posters, brochures, and other print media layouts.",
		useCases: [
			"Print layout design",
			"Magazines and books",
			"Brochure design",
		],
		href: "",
	},
	{
		name: "Audacity",
		lat: 16.995971,
		lng: -62.067641,
		icon: "/icons/audacity.svg",
		details:
			"Audacity is an open-source audio editor and recorder, popular for creating podcasts, editing soundtracks, and producing audio content.",
		useCases: [
			"Audio editing",
			"Podcast production",
			"Sound mixing and mastering",
		],
		href: "",
	},

	// Cloud Services
	{
		name: "AWS",
		lat: 1.650801,
		lng: 10.267895,
		icon: "/icons/aws.svg",
		details:
			"Amazon Web Services (AWS) is a comprehensive cloud platform offering a wide range of computing, storage, and analytics services for businesses of all sizes.",
		useCases: [
			"Cloud storage and computing",
			"Big data processing",
			"Machine learning and AI applications",
		],
		href: "",
	},
	{
		name: "Google Cloud",
		lat: 39.074208,
		lng: 21.824312,
		icon: "/icons/google-cloud.svg",
		details:
			"Google Cloud provides cloud computing services to build, deploy, and scale applications. Known for its robust data analytics and machine learning capabilities.",
		useCases: [
			"Data analytics",
			"Application development",
			"AI and machine learning",
		],
		href: "",
	},
	{
		name: "Microsoft Azure",
		lat: -54.429579,
		lng: -36.587909,
		icon: "/icons/azure.svg",
		details:
			"Microsoft Azure is a cloud platform offering solutions for computing, storage, networking, and AI, with strong integrations for enterprise and hybrid cloud solutions.",
		useCases: [
			"Enterprise applications",
			"Hybrid cloud solutions",
			"AI and machine learning",
		],
		href: "",
	},

	// BlockChain

	{
		name: "Solidity",
		lat: 15.783471,
		lng: -90.230759,
		icon: "/icons/solidity.svg",
		details:
			"Solidity is a high-level programming language for implementing smart contracts on Ethereum and other blockchain platforms.",
		useCases: [
			"Smart contract development",
			"Token creation (ERC-20, ERC-721)",
		],
		href: "",
	},
	{
		name: "Rust",
		lat: 13.444304,
		lng: 144.793731,
		icon: "/icons/rust.svg",
		details:
			"Rust is a powerful systems programming language known for safety and performance, commonly used in blockchain platforms like Solana.",
		useCases: [
			"High-performance blockchain applications",
			"Smart contracts on Solana",
		],
		href: "",
	},
	{
		name: "Truffle",
		lat: 11.803749,
		lng: -15.180413,
		icon: "/icons/truffle.svg",
		details:
			"Truffle is a popular development framework for Ethereum that provides tools for smart contract testing and deployment.",
		useCases: [
			"Smart contract deployment",
			"Testing blockchain applications",
		],
		href: "",
	},
	{
		name: "Hardhat",
		lat: 4.860416,
		lng: -58.93018,
		icon: "/icons/hardhat.svg",
		details:
			"Hardhat is a development environment for Ethereum developers, with a strong emphasis on debugging and testing.",
		useCases: ["Blockchain testing", "Smart contract deployment"],
		href: "",
	},
	{
		name: "Mocha",
		lat: 31.354676,
		lng: 34.308825,
		icon: "/icons/mocha.svg",
		details:
			"Mocha is a JavaScript test framework that allows for asynchronous testing, ideal for blockchain applications.",
		useCases: [
			"Blockchain application testing",
			"Smart contract validation",
		],
		href: "",
	},
	{
		name: "Chai",
		lat: 22.396428,
		lng: 114.109497,
		icon: "/icons/chai.svg",
		details:
			"Chai is an assertion library used with Mocha for testing JavaScript applications, popular in blockchain testing environments.",
		useCases: [
			"Unit testing for smart contracts",
			"Blockchain application testing",
		],
		href: "",
	},
	{
		name: "web3.js",
		lat: -53.08181,
		lng: 73.504158,
		icon: "/icons/web3js.svg",
		details:
			"web3.js is a JavaScript library that interacts with the Ethereum blockchain and enables transactions.",
		useCases: ["Blockchain integration", "DApp development"],
		href: "",
	},
	{
		name: "ethers.js",
		lat: 15.199999,
		lng: -86.241905,
		icon: "/icons/ethersjs.svg",
		details:
			"ethers.js is a library that provides utilities for interacting with the Ethereum blockchain, including wallet support.",
		useCases: ["Ethereum wallet integration", "Smart contract interaction"],
		href: "",
	},
	{
		name: "Ethereum",
		lat: 45.1,
		lng: 15.2,
		icon: "/icons/ethereum.svg",
		details:
			"Ethereum is a decentralized platform that enables the deployment of smart contracts and decentralized applications (DApps).",
		useCases: ["DApp development", "Smart contract deployment"],
		href: "",
	},
	{
		name: "Hyperledger Fabric",
		lat: 18.971187,
		lng: -72.285215,
		icon: "/icons/hyperledger.svg",
		details:
			"Hyperledger Fabric is a permissioned blockchain framework used primarily for enterprise-level applications.",
		useCases: ["Private blockchain solutions", "Supply chain management"],
		href: "",
	},
	{
		name: "Polkadot",
		lat: 47.162494,
		lng: 19.503304,
		icon: "/icons/polkadot.svg",
		details:
			"Polkadot is a blockchain platform that allows multiple blockchains to interoperate, facilitating cross-chain communication.",
		useCases: [
			"Cross-chain interoperability",
			"Decentralized finance (DeFi)",
		],
		href: "",
	},
	{
		name: "Solana",
		lat: -0.789275,
		lng: 113.921327,
		icon: "/icons/solana.svg",
		details:
			"Solana is a high-performance blockchain platform known for its scalability, ideal for decentralized finance and Web3 applications.",
		useCases: ["DeFi applications", "High-speed DApps"],
		href: "",
	},
	{
		name: "MetaMask",
		lat: 53.41291,
		lng: -8.24389,
		icon: "/icons/metamask.svg",
		details:
			"MetaMask is a browser extension wallet that allows users to interact with the Ethereum blockchain and manage their cryptocurrency assets.",
		useCases: ["User wallet management", "Web3 DApp interactions"],
		href: "",
	},
	{
		name: "WalletConnect",
		lat: 31.046051,
		lng: 34.851612,
		icon: "/icons/walletconnect.svg",
		details:
			"WalletConnect is a protocol that allows users to connect their wallets to DApps on various platforms via QR code or deep linking.",
		useCases: ["Mobile wallet connectivity", "DApp interactions"],
		href: "",
	},
	{
		name: "Phantom",
		lat: 54.236107,
		lng: -4.548056,
		icon: "/icons/phantom.svg",
		details:
			"Phantom is a cryptocurrency wallet tailored for the Solana blockchain, allowing users to store, send, and receive assets.",
		useCases: ["Solana wallet management", "NFT and DeFi support"],
		href: "",
	},
	{
		name: "Etherscan",
		lat: 20.593684,
		lng: 78.96288,
		icon: "/icons/etherscan.svg",
		details:
			"Etherscan is a blockchain explorer for Ethereum, allowing users to track transactions, token balances, and smart contract details.",
		useCases: ["Transaction tracking", "Smart contract verification"],
		href: "",
	},
	{
		name: "Dune Analytics",
		lat: -6.343194,
		lng: 71.876519,
		icon: "/icons/dune.svg",
		details:
			"Dune Analytics is a platform for analyzing Ethereum data, enabling users to visualize and share blockchain analytics.",
		useCases: ["Blockchain data analysis", "DeFi metrics tracking"],
		href: "",
	},
	{
		name: "Alchemy",
		lat: 33.223191,
		lng: 43.679291,
		icon: "/icons/alchemy.svg",
		details:
			"Alchemy is a blockchain development platform providing tools and infrastructure for building decentralized applications.",
		useCases: ["DApp development", "Blockchain infrastructure"],
		href: "",
	},
	{
		name: "Infura",
		lat: 32.427908,
		lng: 53.688046,
		icon: "/icons/infura.svg",
		details:
			"Infura provides scalable Ethereum and IPFS infrastructure, allowing developers to connect to the blockchain without hosting full nodes.",
		useCases: ["Blockchain connectivity", "Decentralized storage"],
		href: "",
	},
	{
		name: "Chainlink",
		lat: 64.963051,
		lng: -19.020835,
		icon: "/icons/chainlink.svg",
		details:
			"Chainlink is a decentralized oracle network that allows smart contracts to securely interact with real-world data and external APIs.",
		useCases: ["Smart contract oracles", "Data integration for DeFi"],
		href: "",
	},
];
