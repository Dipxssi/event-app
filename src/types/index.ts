export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  posterUrl: string;
  pricingTiers: PricingTier[];
  isLive: boolean;
  isPast: boolean;
  trails: Trail[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface Trail {
  id: string;
  name: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
}

export interface RegistrationForm {
  // Participant Information
  fullName: string;
  gender: 'Male' | 'Female';
  age: number;
  idPassportNumber: string;
  phoneNumber: string;
  emailAddress: string;
  emergencyContactName: string;
  emergencyContactPhone: string;

  occupation: 'Student' | 'Employed' | 'Unemployed' | 'Business person';
  howDidYouHear: 'Friend' | 'Church' | 'Website' | 'WhatsApp' | 'Social media';
  
  // Participation Details
  preferredTrail: string;
  transportationOption: 'Own transport' | 'Need transport';
  tshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  
  // Registration
  registrationFee: number;
  participantTier: string;
  mpesaTransaction: string;
  
  // Sponsorship
  sponsorshipOption: 'participate_sponsor' | 'sponsor_only' | 'donate_only';
  
  // Consent
  hasConsent: boolean;
  signature: string;
  date: string;
}
