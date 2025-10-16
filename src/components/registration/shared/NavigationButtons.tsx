import { RegistrationForm } from "@/types";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  formData: Partial<RegistrationForm>;
  isDonationOnly: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  formData,
  isDonationOnly,
  onPrevious,
  onNext,
  onSubmit
}: NavigationButtonsProps) {

 
  const validateTshirtCount = () => {
    if (formData.participationType !== 'team') return true;

    // Calculate actual team size
    const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
    const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);
    const totalPeople = actualAdultCount + actualStudentCount;

    // Calculate total t-shirts
    const totalShirts = 
      (Number(formData.tshirtSizeS) || 0) + 
      (Number(formData.tshirtSizeM) || 0) + 
      (Number(formData.tshirtSizeL) || 0) + 
      (Number(formData.tshirtSizeXL) || 0) + 
      (Number(formData.tshirtSizeXXL) || 0);

    return totalShirts === totalPeople;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        if (formData.participationType === 'donation') {
          return true;
        }
        if (formData.participationType === 'solo') {
          return formData.sponsorshipType;
        }
        if (formData.participationType === 'team') {
          if (formData.teamSize === 'custom') {
            return formData.customTeamSize && formData.customTeamSize > 0;
          }
          return formData.teamSize && formData.teamSize !== '';
        }
        return false;
      case 2:
        if (isDonationOnly) {
          return formData.donorName;
        } else {
          // ✅ For team registration, also validate t-shirt count
          if (formData.participationType === 'team') {
            return (
              formData.teamLeaderName &&
              formData.gender &&
              formData.phoneNumber &&
              formData.emailAddress &&
              formData.howDidYouHear &&
              (Number(formData.adultCount) > 0 || Number(formData.studentCount) > 0) &&
              validateTshirtCount() // ✅ T-shirt count must match team size
            );
          }
          // For solo registration
          return (
            formData.fullName &&
            formData.gender &&
            formData.phoneNumber &&
            formData.emailAddress &&
            formData.howDidYouHear
          );
        }
      case 3:
        if (isDonationOnly) {
          return formData.paymentMethod && 
                 ((formData.paymentMethod === 'mpesa' && formData.mpesaTransaction) ||
                  (formData.paymentMethod === 'bank' && formData.bankTransactionMessage));
        }
        return true;
      case 4:
        if (!isDonationOnly) {
          return formData.paymentMethod && 
                 ((formData.paymentMethod === 'mpesa' && formData.mpesaTransaction) ||
                  (formData.paymentMethod === 'bank' && formData.bankTransactionMessage));
        }
        return true;
      case 5:
        return formData.emergencyContactName && 
               formData.emergencyContactPhone && 
               formData.hasConsent;
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
          className="btn-primary"
          disabled={
            isDonationOnly ? 
              (!formData.paymentMethod || 
               (formData.paymentMethod === 'mpesa' && !formData.mpesaTransaction) ||
               (formData.paymentMethod === 'bank' && !formData.bankTransactionMessage)) :
              (!formData.hasConsent || 
               !formData.emergencyContactName || 
               !formData.emergencyContactPhone ||
               !formData.paymentMethod ||
               (formData.paymentMethod === 'mpesa' && !formData.mpesaTransaction) ||
               (formData.paymentMethod === 'bank' && !formData.bankTransactionMessage))
          }
          onClick={onSubmit}
        >
          {isDonationOnly ? 'Submit Donation' : 'Submit Registration'}
        </button>
      )}
    </div>
  );
}
