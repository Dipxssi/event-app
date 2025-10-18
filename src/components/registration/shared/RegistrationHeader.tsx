import { Event } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface RegistrationHeaderProps {
  event: Event;
  isDonationOnly: boolean;
  onClose: () => void;
}

export default function RegistrationHeader({  isDonationOnly, onClose }: RegistrationHeaderProps) {
  return (
    <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: '#D5AB30' }}>
      <div>
        <h1 className="text-2xl font-bold text-white">
          {isDonationOnly ? 'Donation Form' : 'Hike Registration Form'}
        </h1>
      </div>
   
      <button 
        onClick={onClose} 
        className="text-white hover:text-gray-200 p-1"
        suppressHydrationWarning={true}
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
