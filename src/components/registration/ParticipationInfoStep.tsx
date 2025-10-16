import { Event, RegistrationForm } from "@/types";

interface ParticipantInfoStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}

export default function ParticipantInfoStep({ formData, onChange, event }: ParticipantInfoStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">2. Participant Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            className="form-input text-gray-900"
            value={formData.fullName || ''}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="form-label">Gender</label>
          <select
            name="gender"
            required
            className="form-input text-gray-900"
            value={formData.gender || ''}
            onChange={onChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="form-label">Participant Category</label>
          <select
            name="participantTier"
            required
            className="form-input text-gray-900"
            value={formData.participantTier || ''}
            onChange={onChange}
          >
            <option value="">Select Category</option>
            {event.pricingTiers.map((tier) => (
              <option key={tier.id} value={tier.id}>
                {tier.name} - Kshs. {tier.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            placeholder="+254..."
            className="form-input text-gray-900"
            value={formData.phoneNumber || ''}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            required
            className="form-input text-gray-900"
            value={formData.emailAddress || ''}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="form-label">How did you hear about this hike?</label>
          <select
            name="howDidYouHear"
            required
            className="form-input text-gray-900"
            value={formData.howDidYouHear || ''}
            onChange={onChange}
          >
            <option value="">Select Option</option>
            <option value="Friend">Friend</option>
            <option value="Church">Church</option>
            <option value="Website">Website</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Social media">Social media</option>
            <option value="Other">Other</option> 
          </select>
        </div>

      </div>
    </div>
  );
}
