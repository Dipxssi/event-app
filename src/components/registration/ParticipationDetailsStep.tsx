import { Event, RegistrationForm } from "@/types";

interface ParticipationDetailsStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}

export default function ParticipationDetailsStep({ formData, onChange, event }: ParticipationDetailsStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">3. Participation Details</h3>
      
      <div className="space-y-4">
        <div>
          <label className="form-label">Preferred Hiking Trail</label>
          <div className="space-y-2">
            {event.trails.map(trail => (
              <label key={trail.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="preferredTrail"
                  value={trail.id}
                  className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  checked={formData.preferredTrail === trail.id}
                  onChange={onChange}
                />
                <span className="text-gray-700">{trail.name} ({trail.difficulty})</span>
              </label>
            ))}
          </div>
        </div>

        {/* ✅ Only show t-shirt size for solo participants */}
        {formData.participationType === 'solo' && (
          <div>
            <label className="form-label">T-shirt Size</label>
            <select
              name="tshirtSize"
              className="form-input text-gray-900"
              value={formData.tshirtSize || ''}
              onChange={onChange}
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
