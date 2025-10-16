import { Event, RegistrationForm } from "@/types";

interface ParticipationTypeStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}

export default function ParticipationTypeStep({ formData, onChange }: ParticipationTypeStepProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">1. Participation Type</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          Choose how you&apos;d like to participate in this hiking event.
        </p>
      </div>

      {/* Main Participation Type Selection */}
      <div className="space-y-4 mb-6">
        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="participationType"
            value="solo"
            className="mr-4 mt-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            checked={formData.participationType === 'solo'}
            onChange={onChange}
          />
          <div>
            <span className="text-lg font-medium text-gray-800">Solo Participation</span>
            <p className="text-sm text-gray-600 mt-1">
              Register as an individual participant for this hiking event.
            </p>
          </div>
        </label>

        <label className="flex items-start cursor-pointer p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <input
            type="radio"
            name="participationType"
            value="team"
            className="mr-4 mt-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            checked={formData.participationType === 'team'}
            onChange={onChange}
          />
          <div>
            <span className="text-lg font-medium text-gray-800">Team Participation</span>
            <p className="text-sm text-gray-600 mt-1">
              Register as part of a team.
            </p>
          </div>
        </label>

        <label className="flex items-start cursor-pointer p-4 border-2 border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
          <input
            type="radio"
            name="participationType"
            value="donation"
            className="mr-4 mt-1 w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
            checked={formData.participationType === 'donation'}
            onChange={onChange}
          />
          <div>
            <span className="text-lg font-medium text-gray-800">Donation Only</span>
            <p className="text-sm text-gray-600 mt-1">
              I won&apos;t participate but like to donate to support the cause.
            </p>
          </div>
        </label>
      </div>

  
      {formData.participationType === 'solo' && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-md font-semibold mb-4 text-gray-700">Who are you sponsoring?</h4>
          
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <p className="text-sm text-gray-700">
              Are you registering and paying for yourself, or sponsoring someone else to participate?
            </p>
          </div>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
              <input
                type="radio"
                name="sponsorshipType"
                value="sponsor_myself"
                className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                checked={formData.sponsorshipType === 'sponsor_myself'}
                onChange={onChange}
              />
              <div>
                <span className="text-gray-700 font-medium">I am sponsoring myself</span>
                <p className="text-sm text-gray-600">I will participate and pay for my own registration</p>
              </div>
            </label>
            
            <label className="flex items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
              <input
                type="radio"
                name="sponsorshipType"
                value="sponsor_someone_else"
                className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                checked={formData.sponsorshipType === 'sponsor_someone_else'}
                onChange={onChange}
              />
              <div>
                <span className="text-gray-700 font-medium">I am sponsoring someone else</span>
                <p className="text-sm text-gray-600">I will pay for another person to participate</p>
              </div>
            </label>
          </div>
        </div>
      )}

      
      {formData.participationType === 'team' && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-md font-semibold mb-4 text-gray-700">Team Size</h4>
          
          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <p className="text-sm text-gray-700">
              How many people will be in your team? 
            </p>
          </div>

          <div className="space-y-4">
            
            <div>
              <label className="form-label">Number of team members</label>
              <select
                name="teamSize"
                className="form-input text-gray-900"
                value={formData.teamSize || ''}
                onChange={onChange}
              >
                <option value="">Select team size</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people </option>
                <option value="5">5 people </option>
                <option value="6">6 people </option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="9">9 people</option>
                <option value="10">10 people</option>
                <option value="custom">Other (specify below)</option>
              </select>
            </div>

            
            {formData.teamSize === 'custom' && (
              <div>
                <label className="form-label">Custom team size</label>
                <input
                  type="number"
                  name="customTeamSize"
                  min="11"
                  max="50"
                  className="form-input text-gray-900"
                  placeholder="Enter number of people (11-50)"
                  value={formData.customTeamSize || ''}
                  onChange={onChange}
                />
                <p className="text-xs text-gray-500 mt-1">
                  For teams larger than 10 people, please specify the exact number.
                </p>
              </div>
            )}

           
            {(formData.teamSize && formData.teamSize !== 'custom') && (
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Team Size:</strong> {formData.teamSize} people
                </p>
                <p className="text-sm text-gray-600">
                  You&apos;ll proceed to register details for the team lead, and payment information will be calculated based on your team size.
                </p>
              </div>
            )}

            {(formData.teamSize === 'custom' && formData.customTeamSize) && (
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Team Size:</strong> {formData.customTeamSize} people
                </p>
                <p className="text-sm text-gray-600">
                  You&apos;ll proceed to register details for the team lead, and payment information will be calculated based on your team size.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
