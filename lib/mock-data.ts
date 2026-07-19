// lib/mock-data.ts

export const featuredArtisans = [
    {
        id: "artisan-1",
        name: "Emeka Okafor",
        specialty: "Master Electrician",
        rating: 4.9,
        reviewCount: 248,
        location: "Lekki, Lagos",
        jobsCompleted: 412,
        hourlyRate: 25,
        available: true,
        verified: true,
        skills: [
            "Wiring",
            "Solar Installation",
            "Generator Repairs",
            "Smart Home Setup",
        ],
    },
    {
        id: "artisan-2",
        name: "Aisha Bello",
        specialty: "Professional Plumber",
        rating: 4.8,
        reviewCount: 186,
        location: "Ajah, Lagos",
        jobsCompleted: 367,
        hourlyRate: 22,
        available: true,
        verified: true,
        skills: [
            "Pipe Installation",
            "Leak Repairs",
            "Bathroom Fittings",
            "Drain Cleaning",
        ],
    },
    {
        id: "artisan-3",
        name: "Samuel Adeyemi",
        specialty: "AC Technician",
        rating: 4.7,
        reviewCount: 132,
        location: "Ikeja, Lagos",
        jobsCompleted: 291,
        hourlyRate: 28,
        available: false,
        verified: true,
        skills: [
            "AC Installation",
            "Gas Refilling",
            "Maintenance",
            "Ventilation",
        ],
    },
    {
        id: "artisan-4",
        name: "Chinedu Eze",
        specialty: "Furniture Carpenter",
        rating: 5.0,
        reviewCount: 319,
        location: "Yaba, Lagos",
        jobsCompleted: 528,
        hourlyRate: 30,
        available: true,
        verified: true,
        skills: [
            "Custom Furniture",
            "Wardrobes",
            "Kitchen Cabinets",
            "Wood Finishing",
        ],
    },
    {
        id: "artisan-5",
        name: "Fatima Musa",
        specialty: "Professional Painter",
        rating: 4.8,
        reviewCount: 165,
        location: "Surulere, Lagos",
        jobsCompleted: 240,
        hourlyRate: 20,
        available: true,
        verified: true,
        skills: [
            "Interior Painting",
            "Exterior Painting",
            "Wall Design",
            "Texture Finish",
        ],
    },
    {
        id: "artisan-6",
        name: "David Johnson",
        specialty: "Generator Technician",
        rating: 4.9,
        reviewCount: 276,
        location: "Victoria Island, Lagos",
        jobsCompleted: 446,
        hourlyRate: 32,
        available: false,
        verified: true,
        skills: [
            "Generator Servicing",
            "Engine Repairs",
            "Installation",
            "Maintenance",
        ],
    },
    {
        id: "artisan-7",
        name: "Blessing Nwosu",
        specialty: "Home Cleaning Expert",
        rating: 4.8,
        reviewCount: 198,
        location: "Ikoyi, Lagos",
        jobsCompleted: 355,
        hourlyRate: 18,
        available: true,
        verified: true,
        skills: [
            "Deep Cleaning",
            "Office Cleaning",
            "Post Construction",
            "Laundry",
        ],
    },
    {
        id: "artisan-8",
        name: "Ibrahim Garba",
        specialty: "Professional Tiler",
        rating: 4.9,
        reviewCount: 154,
        location: "Festac, Lagos",
        jobsCompleted: 279,
        hourlyRate: 24,
        available: true,
        verified: false,
        skills: [
            "Wall Tiling",
            "Floor Tiling",
            "Marble",
            "Granite",
        ],
    },
];

// lib/mock-data.ts

export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Find Artisans",
        href: "/artisans",
    },
    {
        label: "How It Works",
        href: "/how-it-works",
    },
];

// lib/mock-data.ts

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    service: string;
    rating: number;
    content: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Chioma Nwosu",
        role: "Homeowner",
        service: "Plumbing",
        rating: 5,
        content:
            "My kitchen pipe burst unexpectedly, and within 30 minutes I was connected with an excellent plumber. The service was professional, affordable, and stress-free.",
    },
    {
        id: "testimonial-2",
        name: "David Adebayo",
        role: "Business Owner",
        service: "Electrical Repairs",
        rating: 5,
        content:
            "Finding trustworthy electricians used to be difficult. This platform made everything easy, from booking to payment. The artisan arrived on time and fixed the issue perfectly.",
    },
    {
        id: "testimonial-3",
        name: "Amina Yusuf",
        role: "Apartment Tenant",
        service: "AC Repair",
        rating: 4.8,
        content:
            "I loved how simple it was to compare ratings before choosing an AC technician. The repair was completed the same day, and the pricing was transparent.",
    },
    {
        id: "testimonial-4",
        name: "Michael Eze",
        role: "Restaurant Manager",
        service: "Generator Repair",
        rating: 5,
        content:
            "Our restaurant couldn't afford downtime when the generator failed. We found a verified technician within minutes, and everything was back up and running quickly.",
    },
];

export interface Category {
    id: string;
    name: string;
    icon: string;
    count: number;
}

export const categories: Category[] = [
    {
        id: "plumbing",
        name: "Plumbing",
        icon: "Wrench",
        count: 248,
    },
    {
        id: "electrical",
        name: "Electrical",
        icon: "Zap",
        count: 193,
    },
    {
        id: "carpentry",
        name: "Carpentry",
        icon: "Hammer",
        count: 165,
    },
    {
        id: "painting",
        name: "Painting",
        icon: "Paintbrush",
        count: 124,
    },
    {
        id: "cleaning",
        name: "Cleaning",
        icon: "Sparkles",
        count: 287,
    },
    {
        id: "ac-repair",
        name: "AC Repair",
        icon: "Thermometer",
        count: 98,
    },
    {
        id: "gardening",
        name: "Gardening",
        icon: "TreePine",
        count: 76,
    },
    {
        id: "home-maintenance",
        name: "Home Maintenance",
        icon: "Home",
        count: 214,
    },
];

// lib/mock-data.ts

export interface FAQItem {
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        question: "How do I book an artisan?",
        answer:
            "Simply search for the service you need, choose a verified artisan based on their ratings and reviews, submit your request, and confirm your booking. The artisan will receive your request and respond promptly.",
    },
    {
        question: "Are all artisans verified?",
        answer:
            "Yes. Every artisan undergoes an identity verification process before joining the platform. We also continuously monitor ratings, reviews, and completed jobs to maintain service quality.",
    },
    {
        question: "How are service prices determined?",
        answer:
            "Prices are provided by individual artisans based on the scope of work. For many services, you'll receive estimates before confirming your booking, ensuring complete transparency with no hidden charges.",
    },
    {
        question: "Can I choose a specific artisan?",
        answer:
            "Absolutely. You can browse artisan profiles, compare ratings, experience, pricing, and customer reviews before selecting the professional you'd like to hire.",
    },
    {
        question: "What happens if I'm not satisfied with the service?",
        answer:
            "If you experience any issues, you can report the job through the platform. Our support team will review the case, mediate between both parties, and work toward a fair resolution.",
    },
    {
        question: "Can I cancel or reschedule a booking?",
        answer:
            "Yes. You can cancel or reschedule a booking before the artisan begins the job. Cancellation policies may vary depending on how close the appointment is to the scheduled time.",
    },
    {
        question: "How do artisans receive payments?",
        answer:
            "Payments are securely processed through the platform. Once a job is completed and confirmed by the customer, the artisan's earnings are credited to their wallet and can be withdrawn to their bank account.",
    },
    {
        question: "How can I become an artisan on the platform?",
        answer:
            "Click on 'Become an Artisan', create an account, complete your profile, upload the required verification documents, and choose your service categories. Once approved, you'll start receiving job requests in your area.",
    },
];

export interface PlatformStat {
    value: string;
    suffix?: string;
    label: string;
    description: string;
}

export const platformStats: PlatformStat[] = [
    {
        value: "10,000",
        suffix: "+",
        label: "Verified Artisans",
        description: "Skilled professionals across multiple service categories.",
    },
    {
        value: "50,000",
        suffix: "+",
        label: "Jobs Completed",
        description: "Successfully completed home and business service requests.",
    },
    {
        value: "4.9",
        label: "Average Rating",
        description: "Based on thousands of verified customer reviews.",
    },
    {
        value: "25",
        suffix: "+",
        label: "Cities Covered",
        description: "Expanding rapidly across major cities nationwide.",
    },
];