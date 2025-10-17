import { RegistrationForm } from "@/types";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  formData: Partial<RegistrationForm>;
  isDonationOnly: boolean;
  isSponsorOnly: boolean; 
  isSubmitting?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  formData,
  isDonationOnly,
  isSponsorOnly, 
  isSubmitting = false,
  onPrevious,
  onNext,
  onSubmit
}: NavigationButtonsProps) {

  // Helper function to validate t-shirt count for teams
  const validateTshirtCount = () => {
    if (formData.participationType !== 'team') return true;

    const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
    const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);
    const totalPeople = actualAdultCount + actualStudentCount;

    const totalShirts = 
      (Number(formData.tshirtSizeS) || 0) + 
      (Number(formData.tshirtSizeM) || 0) + 
      (Number(formData.tshirtSizeL) || 0) + 
      (Number(formData.tshirtSizeXL) || 0) + 
      (Number(formData.tshirtSizeXXL) || 0);

    console.log('T-shirt validation:', { totalPeople, totalShirts, actualAdultCount, actualStudentCount });
    return totalShirts === totalPeople;
  };

  const isStepValid = () => {
    // Debugging
    console.log('=== VALIDATION DEBUG ===');
    console.log('currentStep:', currentStep);
    console.log('participationType:', formData.participationType);
    console.log('isDonationOnly:', isDonationOnly);
    console.log('isSponsorOnly:', isSponsorOnly);

    switch (currentStep) {
      case 1:
        // Step 1: Just selecting participation type is enough
        if (formData.participationType === 'donation') {
          console.log('✅ Donation selected');
          return true;
        }
        if (formData.participationType === 'solo') {
          console.log('✅ Solo selected');
          return true;
        }
        if (formData.participationType === 'team') {
          console.log('✅ Team selected');
          return true;
        }
        if (formData.participationType === 'sponsor') {
          console.log('✅ Sponsor selected');
          return true;
        }
        console.log('❌ No participation type selected');
        return false;
        
      case 2:
        console.log('=== STEP 2 VALIDATION ===');
        
        if (isDonationOnly) {
          console.log('Donation validation');
          const result = !!formData.donorName;
          console.log('🎯 DONATION RESULT:', result);
          return result;
        } 
        
        if (isSponsorOnly) {
          console.log('Sponsor validation');
          const result = !!(
            formData.sponsorName &&
            formData.sponsorPhone &&
            formData.sponsorEmail &&
            formData.participantName &&
            formData.participantGender &&
            formData.participantPhone &&
            formData.participantEmail &&
            formData.participantTier &&
            formData.participantTshirtSize &&
            formData.relationshipToParticipant &&
            formData.howDidYouHear
          );
          console.log('🎯 SPONSOR RESULT:', result);
          return result;
        }
        
        // Team or Solo registration
        if (formData.participationType === 'team') {
          console.log('=== TEAM VALIDATION DEBUG ===');
          console.log('Full formData:', formData);
          
          // ✅ FIXED: Ensure boolean results
          const hasTeamSize = !!(formData.teamSize && formData.teamSize !== '');
          console.log('1. hasTeamSize:', hasTeamSize, '(teamSize:', formData.teamSize, ')');
          
          const hasCustomSize = formData.teamSize !== 'custom' || !!(formData.customTeamSize && formData.customTeamSize > 0);
          console.log('2. hasCustomSize:', hasCustomSize, '(customTeamSize:', formData.customTeamSize, ')');
          
          const hasTeamLeaderName = !!formData.teamLeaderName;
          console.log('3. hasTeamLeaderName:', hasTeamLeaderName, '(teamLeaderName:', formData.teamLeaderName, ')');
          
          const hasGender = !!formData.gender;
          console.log('4. hasGender:', hasGender, '(gender:', formData.gender, ')');
          
          const hasPhone = !!formData.phoneNumber;
          console.log('5. hasPhone:', hasPhone, '(phoneNumber:', formData.phoneNumber, ')');
          
          const hasEmail = !!formData.emailAddress;
          console.log('6. hasEmail:', hasEmail, '(emailAddress:', formData.emailAddress, ')');
          
          const hasHowDidYouHear = !!formData.howDidYouHear;
          console.log('7. hasHowDidYouHear:', hasHowDidYouHear, '(howDidYouHear:', formData.howDidYouHear, ')');
          
          const hasParticipants = (Number(formData.adultCount) > 0 || Number(formData.studentCount) > 0);
          console.log('8. hasParticipants:', hasParticipants, '(adultCount:', formData.adultCount, 'studentCount:', formData.studentCount, ')');
          
          const tshirtValid = validateTshirtCount();
          console.log('9. tshirtValid:', tshirtValid);
          
          // ✅ FIXED: Proper boolean calculation and return
          const finalResult = !!(
            hasTeamSize &&
            hasCustomSize &&
            hasTeamLeaderName &&
            hasGender &&
            hasPhone &&
            hasEmail &&
            hasHowDidYouHear &&
            hasParticipants &&
            tshirtValid
          );
          
          console.log('🎯 FINAL TEAM VALIDATION RESULT:', finalResult);
          return finalResult;
        }

        // Solo registration
        if (formData.participationType === 'solo') {
          console.log('=== SOLO VALIDATION DEBUG ===');
          const soloResult = !!(
            formData.fullName &&
            formData.gender &&
            formData.phoneNumber &&
            formData.emailAddress &&
            formData.howDidYouHear
          );
          console.log('🎯 FINAL SOLO VALIDATION RESULT:', soloResult);
          return soloResult;
        }

        return false;
        
      case 3:
        if (isDonationOnly) {
          const result = !!(formData.paymentMethod && 
                 ((formData.paymentMethod === 'mpesa' && formData.mpesaTransaction) ||
                  (formData.paymentMethod === 'bank' && formData.bankTransactionMessage)));
          console.log('🎯 DONATION PAYMENT RESULT:', result);
          return result;
        } else {
          // Participation details step (trail selection)
          const result = !!formData.preferredTrail;
          console.log('🎯 TRAIL SELECTION RESULT:', result, 'preferredTrail:', formData.preferredTrail);
          return result;
        }
        
      case 4:
        // Payment validation for both sponsor and regular flow
        const paymentResult = !!(formData.paymentMethod && 
               ((formData.paymentMethod === 'mpesa' && formData.mpesaTransaction) ||
                (formData.paymentMethod === 'bank' && formData.bankTransactionMessage)));
        console.log('🎯 PAYMENT RESULT:', paymentResult);
        return paymentResult;
        
      case 5:
        // Consent validation
        const consentResult = !!(formData.emergencyContactName && 
               formData.emergencyContactPhone && 
               formData.hasConsent);
        console.log('🎯 CONSENT RESULT:', consentResult);
        return consentResult;

      default:
        return true;
    }
  };

  return (
    <div className="flex justify-between mt-8 pt-6 border-t">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: currentStep === 1 ? '#9CA3AF' : '#D5AB30' }}
      >
        Previous
      </button>

      <span className="text-sm text-gray-500 self-center">
        Step {currentStep} of {totalSteps}
      </span>

      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!isStepValid()}
          className="btn-primary disabled:opacity-50"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="btn-primary disabled:opacity-50"
          disabled={!isStepValid() || isSubmitting}
          onClick={onSubmit}
        >
          {isSubmitting 
            ? 'Submitting...' 
            : (isDonationOnly ? 'Submit Donation' : 'Submit Registration')
          }
        </button>
      )}
    </div>
  );
}
