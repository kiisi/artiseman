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