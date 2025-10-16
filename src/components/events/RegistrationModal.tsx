"use client";

import { Event, RegistrationForm } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface RegistrationModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ event, isOpen, onClose }: RegistrationModalProps) => {
  const [formData, setFormData] = useState<Partial<RegistrationForm>>({
    participantTier: event.pricingTiers[0]?.id,           
    registrationFee: event.pricingTiers[0]?.price,       
    sponsorshipOption: 'participate_sponsor',
    hasConsent: false,
    date: new Date().toISOString().split('T')[0]
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  
  useEffect(() => {
    const selectedTier = event.pricingTiers.find(tier => tier.id === formData.participantTier);
    if (selectedTier) {
      setFormData(prev => ({ ...prev, registrationFee: selectedTier.price }));
    }
  }, [formData.participantTier, event.pricingTiers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    alert(`Registration submitted! Total fee: Kshs. ${formData.registrationFee?.toLocaleString()}`);
  };

  if (!isOpen) return null;

  const selectedTierName = event.pricingTiers.find(tier => tier.id === formData.participantTier)?.name || '';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: '#D5AB30' }}>
          <div>
            <h2 className="text-2xl font-bold text-white">Hike Registration Form</h2>
            <p className="text-white/90">Event: {event.name}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 p-1"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

       
        <div className="p-6" style={{ backgroundColor: '#F5EBCE' }}>
          <h3 className="font-bold text-lg mb-2 text-gray-950">{event.name}</h3>
          <p className="text-gray-700 mb-1">{event.description}</p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Location:</strong> {event.location}
          </p>
          
          
          <div className="bg-white p-3 rounded-lg">
            <p className="text-gray-800 font-medium">
              Selected: <span className="text-gray-600">{selectedTierName}</span>
            </p>
            <p className="text-gray-800 font-medium">
              Registration Fee: <span style={{ color: '#D5AB30' }} className="font-bold">
                Kshs. {formData.registrationFee?.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        
        <form onSubmit={handleSubmit} className="p-6">
          
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-950">1. Participant Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="form-input text-gray-900"
                    value={formData.fullName || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    required
                    className="form-input text-gray-900"
                    value={formData.gender || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="80"
                    className="form-input text-gray-900"
                    value={formData.age || ''}
                    onChange={handleInputChange}
                  />
                </div>

                
                <div>
                  <label className="form-label">Participant Category</label>
                  <select
                    name="participantTier"
                    required
                    className="form-input text-gray-900"
                    value={formData.participantTier || ''}
                    onChange={handleInputChange}
                  >
                    {event.pricingTiers.map((tier) => (
                      <option key={tier.id} value={tier.id}>
                        {tier.name} - Kshs. {tier.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">ID/Passport Number</label>
                  <input
                    type="text"
                    name="idPassportNumber"
                    required
                    className="form-input text-gray-900"
                    value={formData.idPassportNumber || ''}
                    onChange={handleInputChange}
                  />
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="form-label">Occupation</label>
                  <select
                    name="occupation"
                    required
                    className="form-input text-gray-900"
                    value={formData.occupation || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Occupation</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Business person">Business person</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">How did you hear about this hike?</label>
                  <select
                    name="howDidYouHear"
                    required
                    className="form-input text-gray-900"
                    value={formData.howDidYouHear || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Option</option>
                    <option value="Friend">Friend</option>
                    <option value="Church">Church</option>
                    <option value="Website">Website</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Social media">Social media</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Emergency Contact Name</label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    required
                    className="form-input text-gray-900"
                    value={formData.emergencyContactName || ''}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

         
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-950">2. Participation Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="form-label">Preferred Hiking Trail</label>
                  <div className="space-y-2">
                    {event.trails.map(trail => (
                      <label key={trail.id} className="flex items-center text-gray-900 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredTrail"
                          value={trail.id}
                          className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white-500 focus:ring-2"
                          checked={formData.preferredTrail === trail.id}
                          onChange={handleInputChange}
                        />
                        <span className="text-gray-700">{trail.name} ({trail.difficulty})</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Transportation Option</label>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-900 cursor-pointer">
                      <input
                        type="radio"
                        name="transportationOption"
                        value="Own transport"
                        className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        checked={formData.transportationOption === "Own transport"}
                        onChange={handleInputChange}
                      />
                       <span className="text-gray-700"> Own transport</span>
                    </label>
                    <label className="flex items-center text-gray-900 cursor-pointer">
                      <input
                        type="radio"
                        name="transportationOption"
                        value="Need transport"
                        className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        checked={formData.transportationOption === "Need transport"}
                        onChange={handleInputChange}
                      />
                     <span className="text-gray-700"> Need transport</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="form-label">T-shirt Size</label>
                  <select
                    name="tshirtSize"
                    className="form-input text-gray-900"
                    value={formData.tshirtSize || ''}
                    onChange={handleInputChange}
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
          )}

          
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-950">3. Registration & Payment</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4 text-gray-900">
                <h4 className="font-semibold mb-2">Payment Information</h4>
                <p><strong>Category:</strong> {selectedTierName}</p>
                <p><strong>Registration Fee:</strong> Kshs. {formData.registrationFee?.toLocaleString()}</p>
                <p><strong>Mpesa Paybill No.:</strong> 303030</p>
                <p><strong>Account Number:</strong> 2046221209</p>
              </div>

              <div>
                <label className="form-label">Mpesa Message</label>
                <input
                  type="text"
                  name="mpesaTransaction"
                  required
                  placeholder="Enter M-Pesa message"
                  className="form-input text-gray-900"
                  value={formData.mpesaTransaction || ''}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-gray-600 mt-1">
                  Complete payment first, then enter the transaction code
                </p>
              </div>
            </div>
          )}

         
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-950">4. Sponsorship Option</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-950 ">
                  Can&apos;t join the hike? You can still make a difference! 
                  Sponsor someone else to take part in the hike.
                </p>
              </div>

              <div className="space-y-3 text-gray-950">
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="sponsorshipOption"
                    value="participate_sponsor"
                    className="mr-3 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    checked={formData.sponsorshipOption === 'participate_sponsor'}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-700">I will participate and sponsor myself</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="sponsorshipOption"
                    value="sponsor_only"
                    className="mr-3 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    checked={formData.sponsorshipOption === 'sponsor_only'}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-700">I will sponsor another participant</span>
                </label>
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="sponsorshipOption"
                    value="donate_only"
                    className="mr-3 mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    checked={formData.sponsorshipOption === 'donate_only'}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-700">I will not attend but wish to donate to support the cause</span>
                </label>
              </div>
            </div>
          )}

          
          {currentStep === 5 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-950">5. Consent and Waiver</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  I acknowledge that hiking involves inherent risks, including possible injury. 
                  I agree to participate voluntarily and accept all risks. I release the organizers 
                  from any liability arising from my participation in this event. I confirm that I 
                  am physically fit and able to take part in the hike.
                </p>
              </div>

              <div className="space-y-4 text-gray-950">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="hasConsent"
                    required
                    className="mr-2 mt-1"
                    checked={formData.hasConsent || false}
                    onChange={handleInputChange}
                  />
                  <span>I agree to the terms and conditions above</span>
                </label>

                <div>
                  <label className="form-label">Digital Signature (Full Name)</label>
                  <input
                    type="text"
                    name="signature"
                    required
                    placeholder="Type your full name as signature"
                    className="form-input"
                    value={formData.signature || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-opacity-50"
               style={{ backgroundColor: currentStep === 1 ? '#9CA3AF' : '#D5AB30' }}
            >
              Previous
            </button>

            <span className="text-sm text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={!formData.hasConsent || !formData.mpesaTransaction}
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
