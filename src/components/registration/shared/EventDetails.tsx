import { Event } from "@/types";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="bg-yellow-50 p-6 border-b border-yellow-200">
      <p className="text-gray-950 text-lg sm:text-xl md:text-2xl font-bold  mb-4">{event.description}</p>
      
      <div className="space-y-1 text-gray-800 text-xl">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  );
}
