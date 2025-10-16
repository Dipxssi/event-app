import { Event } from "@/types";

export const liveEvents: Event[] = [
  {
    id: "ushago-hike-2025",
    name: "#Ushago!",
    description: "A Hike for Rural Impact",
    date: "November 29th, 2025",
    location: "Ngong Road Forest Sanctuary",
    posterUrl: "/poster.png", 
    pricingTiers: [
      {
        id: "professionals",
        name: "Professionals",
        price: 2000
      },
      {
        id: "students",
        name: "University & College Students", 
        price: 1200
      },
      {
        id: "church-members",
        name: "Urban Church Members",
        price: 2000
      },
      {
        id: "fitness-groups",
        name: "Fitness & Hiking Group Members",
        price: 2000
      },
      {
        id: "family-package",
        name: "Family Package (4 people)",
        price: 5000
      },
      {
        id: "church-fellowship",
        name: "Church Fellowship Group (5 people)",
        price: 10000
      },
      {
        id: "corporate-team",
        name: "Corporate Team Package (6 people)",
        price: 12000
      }
    ],
     
    isLive: true,
    isPast: false,
    trails: [
      {
        id: "5km-moderate",
        name: "5km Moderate",
        distance: "5km",
        difficulty: "Moderate"
      },
      {
        id: "10km-advanced", 
        name: "10km Advanced",
        distance: "10km",
        difficulty: "Advanced"
      }
    ]
  }
];

// export const pastEvents: Event[] = [
//   // Will add past events later
// ];
