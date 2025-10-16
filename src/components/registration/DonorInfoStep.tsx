import { RegistrationForm } from "@/types";

interface DonorInfoStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function DonorInfoStep({ formData, onChange }: DonorInfoStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">2. Donor Information</h3>
      
      <div className="bg-orange-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          Thank you for choosing to support our cause! Please provide your name for our records.
        </p>
      </div>

      <div className="max-w-md">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="donorName"
          required
          className="form-input text-gray-900"
          placeholder="Enter your full name"
          value={formData.donorName || ''}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
