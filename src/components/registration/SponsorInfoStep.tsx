import { Event, RegistrationForm, PricingTier } from "@/types"; 

interface SponsorInfoStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}

export default function SponsorInfoStep({ formData, onChange, event }: SponsorInfoStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">2. Sponsor & Participant Information</h3>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          Please provide your details as the sponsor and the information of the person you&apos;re sponsoring.
        </p>
      </div>

      {/* Sponsor Information */}
      <div className="mb-8">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Your Information (Sponsor)</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Your Full Name</label>
            <input
              type="text"
              name="sponsorName"
              required
              className="form-input text-gray-900"
              placeholder="Enter your full name"
              value={formData.sponsorName || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Your Phone Number</label>
            <input
              type="tel"
              name="sponsorPhone"
              required
              placeholder="+254..."
              className="form-input text-gray-900"
              value={formData.sponsorPhone || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Your Email Address</label>
            <input
              type="email"
              name="sponsorEmail"
              required
              className="form-input text-gray-900"
              placeholder="your.email@example.com"
              value={formData.sponsorEmail || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Relationship to Participant</label>
            <select
              name="relationshipToParticipant"
              required
              className="form-input text-gray-900"
              value={formData.relationshipToParticipant || ''}
              onChange={onChange}
            >
              <option value="">Select relationship</option>
              <option value="Parent">Parent</option>
              <option value="Spouse">Spouse</option>
              <option value="Sibling">Sibling</option>
              <option value="Friend">Friend</option>
              <option value="Employer">Employer</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Participant Information */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Participant Information (Person You&apos;re Sponsoring)</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label ">Participant&apos;s Full Name</label>
            <input
              type="text"
              name="participantName"
              required
              className="form-input text-gray-900"
              placeholder="Enter participant's full name"
              value={formData.participantName || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Participant&apos;s Gender</label>
            <select
              name="participantGender"
              required
              className="form-input text-gray-900"
              value={formData.participantGender || ''}
              onChange={onChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="form-label">Participant&apos;s Phone Number</label>
            <input
              type="tel"
              name="participantPhone"
              required
              placeholder="+254..."
              className="form-input text-gray-900"
              value={formData.participantPhone || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Participant&apos;s Email Address</label>
            <input
              type="email"
              name="participantEmail"
              required
              className="form-input text-gray-900"
              placeholder="participant.email@example.com"
              value={formData.participantEmail || ''}
              onChange={onChange}
            />
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
              
              {event.pricingTiers.map((tier: PricingTier) => (
                <option key={tier.id} value={tier.id}>
                  {tier.name} - Kshs. {tier.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Participant&apos;s T-shirt Size</label>
            <select
              name="participantTshirtSize"
              required
              className="form-input text-gray-900"
              value={formData.participantTshirtSize || ''}
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
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h4 className="text-md font-semibold mb-4 text-gray-700">Additional Information</h4>
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
