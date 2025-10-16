import { Event } from "@/types";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="p-6" style={{ backgroundColor: '#F5EBCE' }}>
      <h2 className="font-bold text-2xl mb-2 text-gray-900">{event.name}</h2>
      <p className="text-gray-900 text-l mb-1">{event.description}</p>
      <p className="text-gray-700 text-l mb-1">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-700 text-l">
        <strong>Location:</strong> {event.location}
      </p>
    </div>
  );
}
