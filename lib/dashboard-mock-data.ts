// lib/dashboard-mock-data.ts

export interface DashboardJob {
  id: string;
  title: string;
  category: string;
  status: "pending" | "in-progress" | "completed" | "cancelled";
  artisan: {
    name: string;
    specialty: string;
    rating: number;
    avatar?: string;
  };
  date: string;
  time: string;
  location: string;
  price: number;
  description: string;
}

export interface DashboardBooking {
  id: string;
  service: string;
  artisan: {
    name: string;
    specialty: string;
    rating: number;
    reviewCount: number;
    avatar?: string;
  };
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled" | "in-progress";
  price: number;
  location: string;
  notes?: string;
}

export interface DashboardMessage {
  id: string;
  sender: {
    name: string;
    avatar?: string;
    isArtisan: boolean;
    online: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  status: "sent" | "delivered" | "read";
  type: "text" | "image" | "voice";
}

export interface DashboardPayment {
  id: string;
  description: string;
  artisan: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "refunded" | "failed";
  method: string;
  invoiceId: string;
}

export interface DashboardNotification {
  id: string;
  type: "booking" | "payment" | "review" | "system" | "promotion" | "message";
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  icon?: string;
}

export interface DashboardReview {
  id: string;
  artisan: {
    name: string;
    specialty: string;
    avatar?: string;
  };
  service: string;
  rating: number;
  comment: string;
  date: string;
  photos?: string[];
  response?: string;
}

export interface ArtisanProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  reviewCount: number;
  jobsCompleted: number;
  yearsExperience: number;
  location: string;
  distance: string;
  hourlyRate: number;
  available: boolean;
  verified: boolean;
  responseTime: string;
  skills: string[];
  certifications: string[];
  languages: string[];
  gallery: string[];
  availability: { day: string; hours: string }[];
  reviews: {
    id: string;
    customer: string;
    rating: number;
    comment: string;
    date: string;
    service: string;
  }[];
}

export interface TrackingStep {
  id: string;
  label: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  time?: string;
}

// ─── Dashboard Overview Stats ───────────────────────────────────
export const dashboardStats = {
  activeJobs: 3,
  completedJobs: 24,
  totalSpent: 142500,
  savedArtisans: 8,
  upcomingBookings: 2,
  averageRating: 4.8,
};

// ─── Recent Jobs ────────────────────────────────────────────────
export const recentJobs: DashboardJob[] = [
  {
    id: "job-1",
    title: "Kitchen Sink Repair",
    category: "Plumbing",
    status: "in-progress",
    artisan: {
      name: "Aisha Bello",
      specialty: "Professional Plumber",
      rating: 4.8,
    },
    date: "Today",
    time: "2:00 PM",
    location: "12 Akin Adesola St, Lekki",
    price: 15000,
    description: "Fix leaking kitchen sink and replace damaged pipes",
  },
  {
    id: "job-2",
    title: "Living Room Painting",
    category: "Painting",
    status: "pending",
    artisan: {
      name: "Fatima Musa",
      specialty: "Professional Painter",
      rating: 4.8,
    },
    date: "Tomorrow",
    time: "9:00 AM",
    location: "5 Admiralty Way, Lekki Phase 1",
    price: 45000,
    description: "Complete interior painting of living room and dining area",
  },
  {
    id: "job-3",
    title: "AC Installation",
    category: "AC Repair",
    status: "completed",
    artisan: {
      name: "Samuel Adeyemi",
      specialty: "AC Technician",
      rating: 4.7,
    },
    date: "Jul 15, 2026",
    time: "10:00 AM",
    location: "8 Banana Island Rd, Ikoyi",
    price: 35000,
    description: "Install 2HP split unit AC in master bedroom",
  },
  {
    id: "job-4",
    title: "Electrical Wiring Fix",
    category: "Electrical",
    status: "completed",
    artisan: {
      name: "Emeka Okafor",
      specialty: "Master Electrician",
      rating: 4.9,
    },
    date: "Jul 10, 2026",
    time: "11:00 AM",
    location: "12 Akin Adesola St, Lekki",
    price: 22000,
    description: "Rewire faulty sockets in 3 rooms and replace breaker panel",
  },
];

// ─── Bookings ───────────────────────────────────────────────────
export const bookings: DashboardBooking[] = [
  {
    id: "booking-1",
    service: "Kitchen Sink Repair",
    artisan: {
      name: "Aisha Bello",
      specialty: "Professional Plumber",
      rating: 4.8,
      reviewCount: 186,
    },
    date: "Jul 20, 2026",
    time: "2:00 PM",
    status: "in-progress",
    price: 15000,
    location: "12 Akin Adesola St, Lekki",
    notes: "Please bring extra washers",
  },
  {
    id: "booking-2",
    service: "Living Room Painting",
    artisan: {
      name: "Fatima Musa",
      specialty: "Professional Painter",
      rating: 4.8,
      reviewCount: 165,
    },
    date: "Jul 21, 2026",
    time: "9:00 AM",
    status: "upcoming",
    price: 45000,
    location: "5 Admiralty Way, Lekki Phase 1",
  },
  {
    id: "booking-3",
    service: "Generator Servicing",
    artisan: {
      name: "David Johnson",
      specialty: "Generator Technician",
      rating: 4.9,
      reviewCount: 276,
    },
    date: "Jul 25, 2026",
    time: "10:00 AM",
    status: "upcoming",
    price: 18000,
    location: "12 Akin Adesola St, Lekki",
  },
  {
    id: "booking-4",
    service: "AC Installation",
    artisan: {
      name: "Samuel Adeyemi",
      specialty: "AC Technician",
      rating: 4.7,
      reviewCount: 132,
    },
    date: "Jul 15, 2026",
    time: "10:00 AM",
    status: "completed",
    price: 35000,
    location: "8 Banana Island Rd, Ikoyi",
  },
  {
    id: "booking-5",
    service: "Electrical Wiring Fix",
    artisan: {
      name: "Emeka Okafor",
      specialty: "Master Electrician",
      rating: 4.9,
      reviewCount: 248,
    },
    date: "Jul 10, 2026",
    time: "11:00 AM",
    status: "completed",
    price: 22000,
    location: "12 Akin Adesola St, Lekki",
  },
  {
    id: "booking-6",
    service: "Deep Home Cleaning",
    artisan: {
      name: "Blessing Nwosu",
      specialty: "Home Cleaning Expert",
      rating: 4.8,
      reviewCount: 198,
    },
    date: "Jul 5, 2026",
    time: "8:00 AM",
    status: "cancelled",
    price: 20000,
    location: "12 Akin Adesola St, Lekki",
    notes: "Cancelled due to schedule conflict",
  },
];

// ─── Messages ───────────────────────────────────────────────────
export const conversations: DashboardMessage[] = [
  {
    id: "conv-1",
    sender: {
      name: "Aisha Bello",
      isArtisan: true,
      online: true,
    },
    lastMessage: "I'm on my way, should be there in 15 minutes",
    timestamp: "2 min ago",
    unread: 2,
    messages: [
      {
        id: "msg-1",
        senderId: "artisan-2",
        text: "Hello! I've confirmed your booking for the kitchen sink repair.",
        timestamp: "1:30 PM",
        isOwn: false,
        status: "read",
        type: "text",
      },
      {
        id: "msg-2",
        senderId: "customer-1",
        text: "Great, thank you! Will you need any specific tools I should have ready?",
        timestamp: "1:32 PM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: "msg-3",
        senderId: "artisan-2",
        text: "No, I'll bring everything needed. Just make sure there's access to the kitchen sink area.",
        timestamp: "1:35 PM",
        isOwn: false,
        status: "read",
        type: "text",
      },
      {
        id: "msg-4",
        senderId: "customer-1",
        text: "Perfect, everything is accessible. See you soon!",
        timestamp: "1:40 PM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: "msg-5",
        senderId: "artisan-2",
        text: "I'm on my way, should be there in 15 minutes",
        timestamp: "1:45 PM",
        isOwn: false,
        status: "delivered",
        type: "text",
      },
    ],
  },
  {
    id: "conv-2",
    sender: {
      name: "Fatima Musa",
      isArtisan: true,
      online: false,
    },
    lastMessage: "I'll bring the color samples tomorrow morning",
    timestamp: "1 hr ago",
    unread: 0,
    messages: [
      {
        id: "msg-6",
        senderId: "artisan-5",
        text: "Hi! Looking forward to the painting job tomorrow.",
        timestamp: "12:00 PM",
        isOwn: false,
        status: "read",
        type: "text",
      },
      {
        id: "msg-7",
        senderId: "customer-1",
        text: "Hi Fatima! Can you bring some color samples?",
        timestamp: "12:05 PM",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: "msg-8",
        senderId: "artisan-5",
        text: "I'll bring the color samples tomorrow morning",
        timestamp: "12:15 PM",
        isOwn: false,
        status: "read",
        type: "text",
      },
    ],
  },
  {
    id: "conv-3",
    sender: {
      name: "Emeka Okafor",
      isArtisan: true,
      online: true,
    },
    lastMessage: "Thank you for the review! Happy to help anytime.",
    timestamp: "2 days ago",
    unread: 0,
    messages: [
      {
        id: "msg-9",
        senderId: "customer-1",
        text: "Hi Emeka, the wiring is working perfectly. Thanks for the great job!",
        timestamp: "Jul 11",
        isOwn: true,
        status: "read",
        type: "text",
      },
      {
        id: "msg-10",
        senderId: "artisan-1",
        text: "Thank you for the review! Happy to help anytime.",
        timestamp: "Jul 11",
        isOwn: false,
        status: "read",
        type: "text",
      },
    ],
  },
  {
    id: "conv-4",
    sender: {
      name: "Samuel Adeyemi",
      isArtisan: true,
      online: false,
    },
    lastMessage: "The AC should be running efficiently now. Let me know if you need any adjustments.",
    timestamp: "5 days ago",
    unread: 0,
    messages: [
      {
        id: "msg-11",
        senderId: "artisan-3",
        text: "The AC should be running efficiently now. Let me know if you need any adjustments.",
        timestamp: "Jul 15",
        isOwn: false,
        status: "read",
        type: "text",
      },
    ],
  },
];

// ─── Payments ───────────────────────────────────────────────────
export const payments: DashboardPayment[] = [
  {
    id: "pay-1",
    description: "Kitchen Sink Repair",
    artisan: "Aisha Bello",
    amount: 15000,
    date: "Jul 20, 2026",
    status: "pending",
    method: "Wallet",
    invoiceId: "INV-2026-0042",
  },
  {
    id: "pay-2",
    description: "AC Installation",
    artisan: "Samuel Adeyemi",
    amount: 35000,
    date: "Jul 15, 2026",
    status: "completed",
    method: "Card •••• 4242",
    invoiceId: "INV-2026-0041",
  },
  {
    id: "pay-3",
    description: "Electrical Wiring Fix",
    artisan: "Emeka Okafor",
    amount: 22000,
    date: "Jul 10, 2026",
    status: "completed",
    method: "Bank Transfer",
    invoiceId: "INV-2026-0040",
  },
  {
    id: "pay-4",
    description: "Deep Home Cleaning",
    artisan: "Blessing Nwosu",
    amount: 20000,
    date: "Jul 5, 2026",
    status: "refunded",
    method: "Wallet",
    invoiceId: "INV-2026-0039",
  },
  {
    id: "pay-5",
    description: "Custom Wardrobe Build",
    artisan: "Chinedu Eze",
    amount: 85000,
    date: "Jun 28, 2026",
    status: "completed",
    method: "Card •••• 4242",
    invoiceId: "INV-2026-0038",
  },
  {
    id: "pay-6",
    description: "Generator Repair",
    artisan: "David Johnson",
    amount: 18000,
    date: "Jun 20, 2026",
    status: "completed",
    method: "Bank Transfer",
    invoiceId: "INV-2026-0037",
  },
];

// ─── Notifications ──────────────────────────────────────────────
export const notifications: DashboardNotification[] = [
  {
    id: "notif-1",
    type: "booking",
    title: "Booking Confirmed",
    description:
      "Your booking with Aisha Bello for Kitchen Sink Repair has been confirmed for today at 2:00 PM.",
    timestamp: "10 min ago",
    read: false,
    actionUrl: "/dashboard/customer/bookings",
  },
  {
    id: "notif-2",
    type: "message",
    title: "New Message",
    description: "Aisha Bello sent you a message: \"I'm on my way, should be there in 15 minutes\"",
    timestamp: "15 min ago",
    read: false,
    actionUrl: "/dashboard/customer/messages",
  },
  {
    id: "notif-3",
    type: "payment",
    title: "Payment Processed",
    description: "₦35,000 payment for AC Installation has been successfully processed.",
    timestamp: "2 hours ago",
    read: false,
    actionUrl: "/dashboard/customer/payments",
  },
  {
    id: "notif-4",
    type: "review",
    title: "Leave a Review",
    description: "How was your experience with Emeka Okafor? Share your feedback to help others.",
    timestamp: "1 day ago",
    read: true,
    actionUrl: "/dashboard/customer/reviews",
  },
  {
    id: "notif-5",
    type: "system",
    title: "Profile Update",
    description: "Please complete your profile to get better artisan recommendations.",
    timestamp: "2 days ago",
    read: true,
    actionUrl: "/dashboard/customer/profile",
  },
  {
    id: "notif-6",
    type: "promotion",
    title: "Weekend Special 🎉",
    description: "Get 15% off your next booking this weekend. Use code WEEKEND15 at checkout.",
    timestamp: "3 days ago",
    read: true,
  },
  {
    id: "notif-7",
    type: "booking",
    title: "Artisan En Route",
    description: "Samuel Adeyemi is on the way for your AC Installation. ETA: 20 minutes.",
    timestamp: "5 days ago",
    read: true,
    actionUrl: "/dashboard/customer/tracking/job-3",
  },
  {
    id: "notif-8",
    type: "system",
    title: "Welcome to Artiseman!",
    description:
      "Your account has been verified. Start exploring trusted artisans near you.",
    timestamp: "1 week ago",
    read: true,
  },
];

// ─── Reviews ────────────────────────────────────────────────────
export const reviews: DashboardReview[] = [
  {
    id: "review-1",
    artisan: {
      name: "Emeka Okafor",
      specialty: "Master Electrician",
    },
    service: "Electrical Wiring Fix",
    rating: 5,
    comment:
      "Emeka was professional, punctual, and very knowledgeable. He identified the issue quickly and fixed the wiring in all three rooms efficiently. Highly recommended!",
    date: "Jul 11, 2026",
    response:
      "Thank you for the kind review! It was a pleasure working on your home. Feel free to reach out anytime.",
  },
  {
    id: "review-2",
    artisan: {
      name: "Samuel Adeyemi",
      specialty: "AC Technician",
    },
    service: "AC Installation",
    rating: 4,
    comment:
      "Good installation work. The AC is running perfectly. Took a bit longer than expected but the final result is great.",
    date: "Jul 16, 2026",
  },
  {
    id: "review-3",
    artisan: {
      name: "Chinedu Eze",
      specialty: "Furniture Carpenter",
    },
    service: "Custom Wardrobe Build",
    rating: 5,
    comment:
      "Absolutely stunning craftsmanship! The wardrobe looks even better than what I imagined. Chinedu pays incredible attention to detail and the wood finishing is flawless.",
    date: "Jun 30, 2026",
    response: "I'm glad you love it! Custom work is my passion. Enjoy your new wardrobe!",
  },
];

// ─── Artisan Profile Detail ────────────────────────────────────
export const artisanProfiles: ArtisanProfile[] = [
  {
    id: "artisan-1",
    name: "Emeka Okafor",
    specialty: "Master Electrician",
    bio: "Licensed electrician with over 12 years of experience in residential and commercial electrical work. Specialized in solar installations, smart home setups, and complete rewiring projects. Committed to safety and quality workmanship.",
    rating: 4.9,
    reviewCount: 248,
    jobsCompleted: 412,
    yearsExperience: 12,
    location: "Lekki, Lagos",
    distance: "3.2 km",
    hourlyRate: 25,
    available: true,
    verified: true,
    responseTime: "Usually responds within 15 min",
    skills: [
      "Wiring & Rewiring",
      "Solar Installation",
      "Generator Repairs",
      "Smart Home Setup",
      "Panel Upgrades",
      "Lighting Design",
    ],
    certifications: [
      "Certified Electrical Technician (CET)",
      "Solar PV Installer Certification",
      "OSHA Safety Certified",
    ],
    languages: ["English", "Igbo", "Pidgin"],
    gallery: [],
    availability: [
      { day: "Monday", hours: "8:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
      { day: "Friday", hours: "8:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
      { day: "Sunday", hours: "Unavailable" },
    ],
    reviews: [
      {
        id: "r1",
        customer: "Chioma N.",
        rating: 5,
        comment: "Excellent work on the wiring. Very professional and clean.",
        date: "Jul 10, 2026",
        service: "Electrical Wiring",
      },
      {
        id: "r2",
        customer: "David A.",
        rating: 5,
        comment: "Installed solar panels efficiently. Great communication throughout.",
        date: "Jul 3, 2026",
        service: "Solar Installation",
      },
      {
        id: "r3",
        customer: "Amina Y.",
        rating: 4,
        comment: "Good work on the smart home setup. Minor delay but solid result.",
        date: "Jun 25, 2026",
        service: "Smart Home Setup",
      },
    ],
  },
  {
    id: "artisan-2",
    name: "Aisha Bello",
    specialty: "Professional Plumber",
    bio: "Experienced plumber specializing in residential plumbing solutions. From pipe installations to emergency leak repairs, I deliver quality work with transparent pricing. Your satisfaction is my priority.",
    rating: 4.8,
    reviewCount: 186,
    jobsCompleted: 367,
    yearsExperience: 8,
    location: "Ajah, Lagos",
    distance: "5.1 km",
    hourlyRate: 22,
    available: true,
    verified: true,
    responseTime: "Usually responds within 20 min",
    skills: [
      "Pipe Installation",
      "Leak Repairs",
      "Bathroom Fittings",
      "Drain Cleaning",
      "Water Heater Installation",
      "Sewage Systems",
    ],
    certifications: [
      "Licensed Plumbing Technician",
      "Water Safety Certified",
    ],
    languages: ["English", "Hausa", "Yoruba"],
    gallery: [],
    availability: [
      { day: "Monday", hours: "7:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "7:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "7:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "7:00 AM - 5:00 PM" },
      { day: "Friday", hours: "7:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Emergency Only" },
    ],
    reviews: [
      {
        id: "r4",
        customer: "Michael E.",
        rating: 5,
        comment: "Fixed our bathroom leak within an hour. Very efficient!",
        date: "Jul 18, 2026",
        service: "Leak Repair",
      },
      {
        id: "r5",
        customer: "Blessing N.",
        rating: 5,
        comment: "Installed new kitchen pipes perfectly. Clean and professional work.",
        date: "Jul 12, 2026",
        service: "Pipe Installation",
      },
    ],
  },
];

// ─── Tracking Steps ─────────────────────────────────────────────
export const trackingSteps: TrackingStep[] = [
  {
    id: "step-1",
    label: "Request Submitted",
    description: "Your service request has been submitted and confirmed",
    status: "completed",
    time: "1:30 PM",
  },
  {
    id: "step-2",
    label: "Artisan Assigned",
    description: "Aisha Bello has been assigned to your job",
    status: "completed",
    time: "1:35 PM",
  },
  {
    id: "step-3",
    label: "Artisan En Route",
    description: "Aisha is on the way to your location",
    status: "current",
    time: "1:45 PM",
  },
  {
    id: "step-4",
    label: "Work In Progress",
    description: "The artisan has arrived and started working",
    status: "upcoming",
  },
  {
    id: "step-5",
    label: "Job Completed",
    description: "The service has been completed successfully",
    status: "upcoming",
  },
  {
    id: "step-6",
    label: "Payment & Review",
    description: "Make payment and leave a review",
    status: "upcoming",
  },
];

// ─── Recommended Artisans for Dashboard ─────────────────────────
export const recommendedArtisans = [
  {
    id: "artisan-1",
    name: "Emeka Okafor",
    specialty: "Master Electrician",
    rating: 4.9,
    reviewCount: 248,
    location: "Lekki, Lagos",
    distance: "3.2 km",
    hourlyRate: 25,
    available: true,
    verified: true,
    jobsCompleted: 412,
    skills: ["Wiring", "Solar", "Smart Home"],
  },
  {
    id: "artisan-4",
    name: "Chinedu Eze",
    specialty: "Furniture Carpenter",
    rating: 5.0,
    reviewCount: 319,
    location: "Yaba, Lagos",
    distance: "6.8 km",
    hourlyRate: 30,
    available: true,
    verified: true,
    jobsCompleted: 528,
    skills: ["Custom Furniture", "Wardrobes", "Cabinets"],
  },
  {
    id: "artisan-7",
    name: "Blessing Nwosu",
    specialty: "Home Cleaning Expert",
    rating: 4.8,
    reviewCount: 198,
    location: "Ikoyi, Lagos",
    distance: "4.5 km",
    hourlyRate: 18,
    available: true,
    verified: true,
    jobsCompleted: 355,
    skills: ["Deep Cleaning", "Office Cleaning", "Laundry"],
  },
  {
    id: "artisan-8",
    name: "Ibrahim Garba",
    specialty: "Professional Tiler",
    rating: 4.9,
    reviewCount: 154,
    location: "Festac, Lagos",
    distance: "12.3 km",
    hourlyRate: 24,
    available: true,
    verified: false,
    jobsCompleted: 279,
    skills: ["Wall Tiling", "Floor Tiling", "Marble"],
  },
];

// ─── Wallet & Cards ─────────────────────────────────────────────
export const walletBalance = 45000;
export const savedCards = [
  { id: "card-1", type: "Visa", last4: "4242", expiry: "08/27", isDefault: true },
  { id: "card-2", type: "Mastercard", last4: "8888", expiry: "12/26", isDefault: false },
];

// ─── Service Categories for Request ─────────────────────────────
export const serviceCategories = [
  { id: "plumbing", name: "Plumbing", icon: "Wrench" },
  { id: "electrical", name: "Electrical", icon: "Zap" },
  { id: "carpentry", name: "Carpentry", icon: "Hammer" },
  { id: "painting", name: "Painting", icon: "Paintbrush" },
  { id: "cleaning", name: "Cleaning", icon: "Sparkles" },
  { id: "ac-repair", name: "AC Repair", icon: "Thermometer" },
  { id: "gardening", name: "Gardening", icon: "TreePine" },
  { id: "generator", name: "Generator", icon: "Fuel" },
  { id: "tiling", name: "Tiling", icon: "LayoutGrid" },
  { id: "welding", name: "Welding", icon: "Flame" },
  { id: "pest-control", name: "Pest Control", icon: "Bug" },
  { id: "moving", name: "Moving", icon: "Truck" },
];

// ─── Sidebar Navigation ────────────────────────────────────────
export const customerSidebarLinks = [
  { label: "Overview", href: "/dashboard/customer", icon: "LayoutDashboard" },
  { label: "Find Artisan", href: "/dashboard/customer/find-artisan", icon: "Search" },
  { label: "Bookings", href: "/dashboard/customer/bookings", icon: "Calendar" },
  { label: "Messages", href: "/dashboard/customer/messages", icon: "MessageSquare" },
  { label: "Payments", href: "/dashboard/customer/payments", icon: "CreditCard" },
  { label: "Reviews", href: "/dashboard/customer/reviews", icon: "Star" },
  { label: "Notifications", href: "/dashboard/customer/notifications", icon: "Bell" },
  { label: "Profile", href: "/dashboard/customer/profile", icon: "User" },
];

// ─── User Profile ───────────────────────────────────────────────
export const currentUser = {
  name: "Adewale Ogundimu",
  email: "adewale@example.com",
  phone: "+234 801 234 5678",
  location: "Lekki, Lagos",
  joinedDate: "January 2026",
  avatar: null,
};
