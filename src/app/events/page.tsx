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
      {/* Header with your gold color */}
      <div className="py-12" style={{ backgroundColor: '#D5AB30' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Live Events
          </h1>
          <p className="text-white/90">
            Click on an event to register
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {liveEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Live Events</h3>
            <p className="text-gray-500">Check back soon for upcoming hiking events!</p>
          </div>
        )}
      </div>
    </div>
  );
}
