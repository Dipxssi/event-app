import { Metadata } from "next";
import EventCard from "@/components/events/EventCard";
import { liveEvents } from "@/lib/eventData";

export const metadata: Metadata = {
  title: "Live Events",
  description: "Current hiking events",
};

export default function LiveEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="py-12" style={{ backgroundColor: '#D5AB30' }} >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Live Events
          </h1>
          <p className="text-white/90">
            Click on an event to register
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
