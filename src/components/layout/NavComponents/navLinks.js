// components/navLinks.js
import {
  ChartBarIcon,
  CreditCardIcon,
  BoltIcon,
  BuildingOffice2Icon,
  PlayCircleIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";

export const navLinks = [
  {
    label: "Products",
    isDropdown: true,
    dropdownContent: [
      {
        title: "PM-AI-Tool",
        href: "https://pm-ai-tool.vercel.app/dashboard/projects",
        description: "Forecast project delays with high accuracy.",
        icon: ChartBarIcon,
      },
       {
        title: "Students-AI",
        href: "",
        description: "Forecast project delays with high accuracy.",
        icon: AcademicCapIcon,
      },
    ],
  },
  {
    label: "Pricing",
    isDropdown: true,
    dropdownContent: [
      {
        title: "Basic Plan",
        href: "/pricing#basic",
        description: "Perfect for small teams getting started.",
        icon: CreditCardIcon,
      },
      {
        title: "Pro Plan",
        href: "/pricing#pro",
        description: "For growing teams that need advanced features.",
        icon: BoltIcon,
      },
      {
        title: "Enterprise",
        href: "/contact-sales",
        description: "Tailored solutions for large-scale organizations.",
        icon: BuildingOffice2Icon,
      },
    ],
  },
  {
    label: "Demo",
    isDropdown: true,
    dropdownContent: [
      {
        title: "Product Demo Video",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description: "Watch a guided tour of our AI platform.",
        icon: PlayCircleIcon,
      },
      {
        title: "Live Project Showcase",
        href: "/live-demo",
        description: "Explore a live, interactive project powered by our AI.",
        icon: ComputerDesktopIcon,
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "See how our clients achieve results.",
        icon: DocumentTextIcon,
      },
    ],
  },
];
