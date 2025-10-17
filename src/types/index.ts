export interface RegistrationForm {
  // Participation
  participationType: 'solo' | 'team' | 'sponsor' | 'donation'; 
  sponsorshipType?: 'myself' | 'someone';
  
  // Solo participant info
  fullName?: string;
  gender?: string;
  phoneNumber?: string;
  emailAddress?: string;
  
  
  sponsorName?: string;
  sponsorPhone?: string;
  sponsorEmail?: string;
  relationshipToParticipant?: string;
  
  
  participantName?: string;
  participantGender?: string;
  participantPhone?: string;
  participantEmail?: string;
  participantTier?: string; 
  participantTshirtSize?: string;
  
  // Team info
  teamLeaderName?: string;
  teamSize?: string;
  customTeamSize?: number;
  adultCount?: number;
  studentCount?: number;
  customAdultCount?: number;
  customStudentCount?: number;
  totalTeamCost?: number;
  
  // T-shirt sizes
  tshirtSize?: string;
  tshirtSizeS?: number;
  tshirtSizeM?: number;
  tshirtSizeL?: number;
  tshirtSizeXL?: number;
  tshirtSizeXXL?: number;
  
  // Participation details
  preferredTrail?: string;
  
  // Payment
  registrationFee?: number;
  paymentMethod?: string;
  mpesaTransaction?: string;
  bankTransactionMessage?: string;
  
  // Donation
  donorName?: string;
  donationAmount?: number;
  
  // Additional info
  howDidYouHear?: string;
  
  // Emergency contact
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  
  // Consent
  hasConsent?: boolean;
  
  // Meta
  date?: string;
}

export interface PricingTier {
  id: string;
  name: string;  
  price: number;
}

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
  trails: {
    id: string;
    name: string;
    distance: string;
    difficulty: string;
  }[];
}