import { Event, RegistrationForm } from "@/types";

interface ParticipationTypeStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}

export default function ParticipationTypeStep({ formData, onChange}: ParticipationTypeStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">1. Participation Type</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          Choose how you&apos;d like to participate in this hiking event.
        </p>
      </div>

      <div className="space-y-4">
        {/* Solo Participation */}
        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <input
            type="radio"
            name="participationType"
            value="solo"
            className="mr-4 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            checked={formData.participationType === 'solo'}
            onChange={onChange}
          />
          <div>
            <span className="text-gray-700 font-medium">Solo Participation</span>
            <p className="text-sm text-gray-600">Register as an individual participant for this hiking event.</p>
          </div>
        </label>

        {/* Team Participation */}
        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <input
            type="radio"
            name="participationType"
            value="team"
            className="mr-4 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            checked={formData.participationType === 'team'}
            onChange={onChange}
          />
          <div>
            <span className="text-gray-700 font-medium">Team Participation</span>
            <p className="text-sm text-gray-600">Register as a team leader and bring multiple participants.</p>
          </div>
        </label>

        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <input
            type="radio"
            name="participationType"
            value="sponsor"
            className="mr-4 mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
            checked={formData.participationType === 'sponsor'}
            onChange={onChange}
          />
          <div>
            <span className="text-gray-700 font-medium">Sponsoring Someone Else</span>
            <p className="text-sm text-gray-600">Pay for another person to participate in this hiking event.</p>
          </div>
        </label>

        {/* Donation */}
        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50">
          <input
            type="radio"
            name="participationType"
            value="donation"
            className="mr-4 mt-1 w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500 focus:ring-2"
            checked={formData.participationType === 'donation'}
            onChange={onChange}
          />
          <div>
            <span className="text-gray-700 font-medium">Donation Only</span>
            <p className="text-sm text-gray-600">Make a donation to support the cause without participating.</p>
          </div>
        </label>
      </div>
    </div>
  );
}
