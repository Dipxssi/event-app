"use client";

import { liveEvents } from "@/lib/eventData";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RegistrationForm } from "@/types";
import RegistrationHeader from "@/components/registration/shared/RegistrationHeader";
import EventDetails from "@/components/registration/shared/EventDetails";
import ParticipationTypeStep from "@/components/registration/ParticipationTypeStep";
import ParticipantInfoStep from "@/components/registration/ParticipationInfoStep";
import TeamInfoStep from "@/components/registration/TeamInfoStep"; 
import DonorInfoStep from "@/components/registration/DonorInfoStep";
import ParticipationDetailsStep from "@/components/registration/ParticipationDetailsStep";
import PaymentStep from "@/components/registration/PayementStep"; 
import DonationPaymentStep from "@/components/registration/DonationPaymentStep";
import ConsentStep from "@/components/registration/ConsentStep";
import NavigationButtons from "@/components/registration/shared/NavigationButtons";
import RegistrationSuccess from "@/components/registration/RegistrationSuccess"; 

export default function RegisterPage() {
  const router = useRouter();
  const upcomingEvent = liveEvents[0];

  const [formData, setFormData] = useState<Partial<RegistrationForm>>({
    participationType: undefined,
    sponsorshipType: undefined,
    teamSize: undefined,
    customTeamSize: undefined,
    participantTier: upcomingEvent?.pricingTiers[0]?.id,
    registrationFee: upcomingEvent?.pricingTiers[0]?.price,
    hasConsent: false,
    date: new Date().toISOString().split('T')[0],
    // ✅ Initialize team-specific fields
    adultCount: 0,
    studentCount: 0,
    tshirtSizeS: 0,
    tshirtSizeM: 0,
    tshirtSizeL: 0,
    tshirtSizeXL: 0,
    tshirtSizeXXL: 0,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const isDonationOnly = formData.participationType === 'donation';
  const totalSteps = isDonationOnly ? 3 : 5;

  // Update price when participant tier changes (for solo)
  useEffect(() => {
    if (upcomingEvent && !isDonationOnly && formData.participationType === 'solo') {
      const selectedTier = upcomingEvent.pricingTiers.find(tier => tier.id === formData.participantTier);
      if (selectedTier) {
        setFormData(prev => ({ ...prev, registrationFee: selectedTier.price }));
      }
    }
  }, [formData.participantTier, upcomingEvent, isDonationOnly, formData.participationType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    router.push('/');
  };

  const renderCurrentStep = () => {
    if (isDonationOnly) {
      // Donation flow: 1->2->3
      switch (currentStep) {
        case 1: return <ParticipationTypeStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 2: return <DonorInfoStep formData={formData} onChange={handleInputChange} />;
        case 3: return <DonationPaymentStep formData={formData} onChange={handleInputChange} />;
        default: return null;
      }
    } else {
      // Regular flow: 1->2->3->4->5
      switch (currentStep) {
        case 1: return <ParticipationTypeStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 2: 
          // ✅ Use TeamInfoStep for teams, ParticipantInfoStep for solo
          return formData.participationType === 'team' 
            ? <TeamInfoStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />
            : <ParticipantInfoStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 3: return <ParticipationDetailsStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 4: return <PaymentStep formData={formData} onChange={handleInputChange} />;
        case 5: return <ConsentStep formData={formData} onChange={handleInputChange} />;
        default: return null;
      }
    }
  };

  if (!upcomingEvent) return <div>Loading...</div>;

  if (isSubmitted) {
    return <RegistrationSuccess formData={formData} isDonationOnly={isDonationOnly} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white w-full min-h-screen">
        <RegistrationHeader 
          event={upcomingEvent} 
          isDonationOnly={isDonationOnly} 
          onClose={handleClose} 
        />
        
        <EventDetails event={upcomingEvent} />

        <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto">
          {renderCurrentStep()}
          
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            formData={formData}
            isDonationOnly={isDonationOnly}
            onPrevious={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            onNext={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
