import { Event, RegistrationForm } from "@/types";

interface TeamInfoStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  event: Event;
}


const getInputValue = (value: string | number | boolean | undefined): string | number => {
  if (typeof value === 'boolean') return 0;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return value;
  return '';
};

export default function TeamInfoStep({ formData, onChange, event }: TeamInfoStepProps) {

  const adultPrice = event.pricingTiers.find(t => t.id === 'adults')?.price || 2000;
  const studentPrice = event.pricingTiers.find(t => t.id === 'students')?.price || 1200;

  const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
  const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);

  const calculatedTotalCost = (actualAdultCount * adultPrice) + (actualStudentCount * studentPrice);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">2. Team Information</h3>

      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          You are registering as a team leader. Please provide the team details below.
        </p>
      </div>
      
      <div className="mb-6">
        <label className="form-label">Team Size *</label>
        <select
          name="teamSize"
          required
          className="form-input text-gray-900"
          value={formData.teamSize || ''}
          onChange={onChange}
        >
          <option value="">Select team size</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="custom">Custom (More than 5)</option>
        </select>
      </div>

      {/* Custom team size input */}
      {formData.teamSize === 'custom' && (
        <div className="mb-6">
          <label className="form-label">Custom Team Size *</label>
          <input
            type="number"
            name="customTeamSize"
            min="6"
            max="50"
            required
            className="form-input text-gray-900"
            placeholder="Enter exact number of team members"
            value={formData.customTeamSize || ''}
            onChange={onChange}
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="form-label">Team Leader Name (Your Name)</label>
          <input
            type="text"
            name="teamLeaderName"
            required
            className="form-input text-gray-900"
            placeholder="Enter team leader's full name"
            value={formData.teamLeaderName || ''}
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


      <div className="mb-6">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Team Composition</h4>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700">
            Specify how many adults and students are in your team. You can mix both categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-3">
              Adults (Kshs. {event.pricingTiers.find(t => t.id === 'adults')?.price.toLocaleString()})
            </h5>
            <div>
              <label className="form-label">Number of Adults</label>
              <select
                name="adultCount"
                className="form-input text-gray-900"
                value={formData.adultCount || 0}
                onChange={onChange}
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>
                    {i === 10 ? '10+ (specify below)' : i}
                  </option>
                ))}
              </select>

              {Number(formData.adultCount) === 10 && (
                <div className="mt-2">
                  <label className="form-label text-sm">Exact number of adults</label>
                  <input
                    type="number"
                    name="customAdultCount"
                    min="10"
                    max="50"
                    placeholder="Enter exact number"
                    className="form-input text-gray-900"
                    value={getInputValue(formData.customAdultCount)}
                    onChange={onChange}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Students */}
          <div className="border rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-3">
              Students (Kshs. {event.pricingTiers.find(t => t.id === 'students')?.price.toLocaleString()})
            </h5>
            <div>
              <label className="form-label">Number of Students</label>
              <select
                name="studentCount"
                className="form-input text-gray-900"
                value={formData.studentCount || 0}
                onChange={onChange}
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>
                    {i === 10 ? '10+ (specify below)' : i}
                  </option>
                ))}
              </select>

              {Number(formData.studentCount) === 10 && (
                <div className="mt-2">
                  <label className="form-label text-sm">Exact number of students</label>
                  <input
                    type="number"
                    name="customStudentCount"
                    min="10"
                    max="50"
                    placeholder="Enter exact number"
                    className="form-input text-gray-900"
                    value={getInputValue(formData.customStudentCount)}
                    onChange={onChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>


        {calculatedTotalCost > 0 && (
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">Total Registration Cost</p>
              <p className="text-2xl font-bold" style={{ color: '#D5AB30' }}>
                Kshs. {calculatedTotalCost.toLocaleString()}
              </p>
              <div className="text-xs text-gray-600 mt-2">
                {actualAdultCount > 0 && (
                  <span>
                    Adults: {actualAdultCount} ×
                    Kshs. {event.pricingTiers.find(t => t.id === 'adults')?.price.toLocaleString()}
                    {actualStudentCount > 0 && ' + '}
                  </span>
                )}
                {actualStudentCount > 0 && (
                  <span>
                    Students: {actualStudentCount} ×
                    Kshs. {event.pricingTiers.find(t => t.id === 'students')?.price.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* T-shirt Size Distribution */}
      <div>
        <h4 className="text-md font-semibold mb-4 text-gray-700">T-shirt Size Distribution</h4>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700">
            Enter how many people need each t-shirt size. The total should match your team size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} className="text-center">
              <label className="form-label">Size {size}</label>
              <input
                type="number"
                name={`tshirtSize${size}`}
                min="0"
                max="50"
                className="form-input text-center text-gray-900"
                placeholder="0"
                value={getInputValue(formData[`tshirtSize${size}` as keyof RegistrationForm])}
                onChange={onChange}
              />
            </div>
          ))}
        </div>

       {/* Show total t-shirt count with clearer messaging */}
{(() => {
  const totalShirts = 
    (Number(formData.tshirtSizeS) || 0) + 
    (Number(formData.tshirtSizeM) || 0) + 
    (Number(formData.tshirtSizeL) || 0) + 
    (Number(formData.tshirtSizeXL) || 0) + 
    (Number(formData.tshirtSizeXXL) || 0);
  
  const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
  const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);
  const totalPeople = actualAdultCount + actualStudentCount;
  
  if (totalPeople > 0) {
    const isMatching = totalShirts === totalPeople;
    
    return (
      <div className={`mt-3 p-3 rounded text-sm ${
        isMatching
          ? 'bg-green-100 text-green-700 border border-green-200' 
          : 'bg-red-100 text-red-700 border border-red-200'
      }`}>
        <div className="flex items-center justify-center mb-2">
          {isMatching ? (
            <span className="text-green-600 mr-2">✅</span>
          ) : (
            <span className="text-red-600 mr-2">❌</span>
          )}
          <span className="font-medium">
            T-shirt total: {totalShirts} / Team size: {totalPeople}
          </span>
        </div>
        
        {!isMatching && (
          <div className="text-center">
            <p className="font-medium">⚠️ T-shirt count must match team size exactly</p>
            <p className="text-xs mt-1">
              {totalShirts > totalPeople 
                ? `Remove ${totalShirts - totalPeople} t-shirt(s)`
                : `Add ${totalPeople - totalShirts} more t-shirt(s)`
              }
            </p>
          </div>
        )}
        
        {isMatching && (
          <p className="text-center text-xs">
            Perfect! T-shirt count matches your team size.
          </p>
        )}
      </div>
    );
  }
  return null;
})()}

        
      </div>
    </div>
  );
}
