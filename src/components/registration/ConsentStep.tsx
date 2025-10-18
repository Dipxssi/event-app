import { RegistrationForm } from "@/types";

interface ConsentStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function ConsentStep({ formData, onChange }: ConsentStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">5. Emergency Contact & Consent</h3>
      
      {/* Emergency Contacts */}
      <div className="mb-8">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Emergency Contact Information</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700">
            Please provide emergency contact details .
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Emergency Contact Name</label>
            <input
              type="text"
              name="emergencyContactName"
              required
              className="form-input text-gray-900"
              value={formData.emergencyContactName || ''}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label">Emergency Contact Phone</label>
            <input
              type="tel"
              name="emergencyContactPhone"
              required
              className="form-input text-gray-900"
              value={formData.emergencyContactPhone || ''}
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Important Reminders</h4>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg></span>
              <span><strong>Wear comfortable shoes</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt-icon lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg></span>
              <span><strong>Dress comfortably</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg></span>
              <span><strong>Carry enough drinking water</strong> </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Liability Waiver */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Liability Waiver & Consent</h4>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700">
            I understand that hiking may involve some physical challenges. I choose to participate voluntarily and take responsibility for my own safety and wellbeing. I confirm that I am fit to take part and acknowledge that the organizers are not liable for unforeseen incidents beyond their control.
          </p>
        </div>
      </div>

      
      <div className="space-y-4">
        <label className="flex items-start text-gray-900">
          <input
            type="checkbox"
            name="hasConsent"
            required
            className="mr-2 mt-1 "
            checked={formData.hasConsent || false}
            onChange={onChange}
          />
          <span>I agree to the terms and conditions above and acknowledge that I have read the important reminders</span>
        </label>
      </div>
    </div>
  );
}
