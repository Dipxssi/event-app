import { Event } from "@/types";

export const liveEvents: Event[] = [
  {
    id: "ushago-hike-2025",
    name: "#Ushago!",
    description: "#Hike4UshagoTransformation",
    date: "November 29th, 2025",
    location: "Ngong Road Forest Sanctuary",
    posterUrl: "/ushago.png",
   
    pricingTiers: [
      {
        id: "adults",
        name: "Adults",
        price: 2000
      },
      {
        id: "students",
        name: "Students", 
        price: 1200
      }
    ],
    isLive: true,
    isPast: false,
    trails: [
      {
        id: "5km-easy",
        name: "5km ",
        distance: "5km",
        difficulty: "Easy"
      },
      {
        id: "10km-moderate", 
        name: "10km Advanced",
        distance: "10km",
        difficulty: "Moderate"
      }
    ]
  }
];

export const pastEvents: Event[] = [];
