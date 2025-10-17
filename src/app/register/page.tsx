"use client";

import { liveEvents } from "@/lib/eventData";
import { useState} from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { RegistrationForm } from "@/types";
import RegistrationHeader from "@/components/registration/shared/RegistrationHeader";
import EventDetails from "@/components/registration/shared/EventDetails";
import ParticipationTypeStep from "@/components/registration/ParticipationTypeStep";
import ParticipantInfoStep from "@/components/registration/ParticipationInfoStep";
import TeamInfoStep from "@/components/registration/TeamInfoStep";
import SponsorInfoStep from "@/components/registration/SponsorInfoStep"; 
import DonorInfoStep from "@/components/registration/DonorInfoStep";
import ParticipationDetailsStep from "@/components/registration/ParticipationDetailsStep";
import PaymentStep from "@/components/registration/PayementStep";
import DonationPaymentStep from "@/components/registration/DonationPaymentStep";
import ConsentStep from "@/components/registration/ConsentStep";
import NavigationButtons from "@/components/registration/shared/NavigationButtons";
import RegistrationSuccess from "@/components/registration/RegistrationSuccess";

export default function RegisterPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ event?: string } >
}) {
  const router = useRouter();
  
  const { event: eventId }= use(searchParams);
  const upcomingEvent = eventId 
    ? liveEvents.find(e => e.id === eventId) || liveEvents[0]
    : liveEvents[0];

  const [formData, setFormData] = useState<Partial<RegistrationForm>>({
    participationType: undefined,
    sponsorshipType: undefined,
    teamSize: undefined,
    customTeamSize: undefined,
    participantTier: upcomingEvent?.pricingTiers[0]?.id,
    registrationFee: upcomingEvent?.pricingTiers[0]?.price,
    hasConsent: false,
    date: new Date().toISOString().split('T')[0],
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const isDonationOnly = formData.participationType === 'donation';
  const isSponsorOnly = formData.participationType === 'sponsor';
  
  // ✅ Updated total steps calculation
  const totalSteps = isDonationOnly ? 3 : 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to submit registration. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
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
    } else if (isSponsorOnly) {
      // ✅ Sponsor flow: 1->2->3->4
      switch (currentStep) {
            case 1: return <ParticipationTypeStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
      case 2: return <SponsorInfoStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
      case 3: return <ParticipationDetailsStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />; 
      case 4: return <PaymentStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
      case 5: return <ConsentStep formData={formData} onChange={handleInputChange} />;
      default: return null;
      }
    } else {
      // Regular flow: 1->2->3->4->5
      switch (currentStep) {
        case 1: return <ParticipationTypeStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 2: 
          return formData.participationType === 'team' 
            ? <TeamInfoStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />
            : <ParticipantInfoStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 3: return <ParticipationDetailsStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 4: return <PaymentStep formData={formData} onChange={handleInputChange} event={upcomingEvent} />;
        case 5: return <ConsentStep formData={formData} onChange={handleInputChange} />;
        default: return null;
      }
    }
  };

  if (isSubmitted) {
   return <RegistrationSuccess formData={formData} isDonationOnly={isDonationOnly} />
  }

  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning={true}>
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
            isSponsorOnly={isSponsorOnly} 
            isSubmitting={isSubmitting}
            onPrevious={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            onNext={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
