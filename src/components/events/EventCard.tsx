"use client";

import { Event } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();

  // ✅ Navigate to register page instead of opening modal
  const handleRegisterClick = () => {
    router.push(`/register?event=${event.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer max-w-sm mx-auto"
      onClick={handleRegisterClick} // ✅ Navigate on card click
    >
      {/* Event Poster */}
      <div className="relative h-64 w-full">
        <Image
          src={event.posterUrl}
          alt={`${event.name} poster`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        {/* Yellow overlay with event details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1">{event.name}</h3>
            <p className="text-sm opacity-90">{event.description}</p>
            <p className="text-sm opacity-90 mt-1">{event.date}</p>
          </div>
        </div>
      </div>

      {/* Event Info */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-3">
            <strong>Location:</strong> {event.location}
          </p>
          
          {/* Contact info */}
          <div className="text-gray-600 text-sm space-y-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-grey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 715 652742</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-grey-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">inquiries@possibilitiesafrica.org</span>
            </div>
            
            {/* Pricing info simplified */}
            <div className="mt-3 pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                <strong>Pricing:</strong> Starting from Kshs. 1,200
              </p>
              <p className="text-xs text-gray-400">
                Multiple packages available
              </p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button 
          className="btn-primary w-full"
          onClick={handleRegisterClick} // ✅ Also works if user clicks just the button
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
