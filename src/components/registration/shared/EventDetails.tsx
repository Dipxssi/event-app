import { Event } from "@/types";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="bg-yellow-50 p-6 border-b border-yellow-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.name}</h2>
      <p className="text-gray-950 text-2xl mb-4">{event.description}</p>
      
      <div className="space-y-1 text-gray-800 text-xl">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </div>
  );
}
