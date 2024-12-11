import { StaticImageData } from "next/image";
import alice from "../../public/team-1.webp";
import keli from "../../public/team-2.webp";
import nena from "../../public/team-4.webp";
import smith from "../../public/team-1.webp";
import james from "../../public/team-2.webp";
import anto from "../../public/team-4.webp";

export type reviewProps = {
    name: string;
    role: string;
    company: string;
    profileImage: StaticImageData;
    testimonial: string;
    index: number;
};

export const reviewDetails: reviewProps[] = [
    {
        name: "Alice Murphy",
        role: "Product Designer",
        company: "Google",
        profileImage: alice,
        testimonial: "The attention to detail and user-centric approach has transformed our product experience. Working with this team has been incredibly valuable for our design process.",
        index: 0
    },
    {
        name: "Kevin Smith",
        role: "Senior Developer",
        company: "Microsoft",
        profileImage: smith,
        testimonial: "The technical expertise and innovative solutions provided exceeded our expectations. Their code quality and performance optimizations made a significant impact.",
        index: 1
    },
    {
        name: "Elena Rodriguez",
        role: "Marketing Director",
        company: "Adobe",
        profileImage: nena,
        testimonial: "Outstanding creativity and professionalism! They didn't just meet our requirements, they brought fresh ideas that helped us stand out in the market.",
        index: 2
    },
    {
        name: "James Chen",
        role: "CEO",
        company: "TechStart Inc.",
        profileImage: james,
        testimonial: "A game-changing partnership that helped us scale our startup. Their strategic insights and technical implementation were crucial to our success.",
        index: 3
    },
    {
        name: "Kelly Williams",
        role: "UX Researcher",
        company: "Netflix",
        profileImage: keli,
        testimonial: "The user experience improvements were remarkable. Our user satisfaction scores increased by 40% after implementing their recommendations.",
        index: 4
    },
    {
        name: "Antonio Ferrari",
        role: "Technical Lead",
        company: "Amazon",
        profileImage: anto,
        testimonial: "Exceptional problem-solving skills and attention to detail. They delivered a robust solution that continues to exceed our performance metrics.",
        index: 5
    }
];