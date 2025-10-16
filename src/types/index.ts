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
  // Participation and Sponsorship Selection
  participationType: 'solo' | 'team' | 'donation';
  sponsorshipType?: 'sponsor_myself' | 'sponsor_someone_else'; // Only for solo
  teamSize?: string | number; // Only for team
  customTeamSize?: number; // If they choose "Other" for team size
  
  // ✅ Team-specific fields
  teamLeaderName?: string; // Changed from fullName for teams
  adultCount?: number;
  studentCount?: number;
  customAdultCount?: number; // If more than 10 adults
  customStudentCount?: number; // If more than 10 students
  totalTeamCost?: number; // Calculated total
  
  // T-shirt size distribution for teams
  tshirtSizeS?: number;
  tshirtSizeM?: number;
  tshirtSizeL?: number;
  tshirtSizeXL?: number;
  tshirtSizeXXL?: number;
  
  // For donation-only users
  donorName?: string;
  
  // Payment method for ALL types
  paymentMethod?: 'mpesa' | 'bank';
  bankTransactionMessage?: string;
  
  // Simplified participant fields (for solo only)
  fullName?: string;
  gender?: 'Male' | 'Female';
  phoneNumber?: string;
  emailAddress?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  howDidYouHear?: 'Friend' | 'Church' | 'Website' | 'WhatsApp' | 'Social media' | 'Other';
  
  // Participation details
  preferredTrail?: string;
  tshirtSize?: 'S' | 'M' | 'L' | 'XL' | 'XXL'; // For solo only
  
  // Registration & Payment
  registrationFee: number;
  participantTier?: string; // For solo only
  mpesaTransaction?: string;
  
  // Consent
  hasConsent: boolean;
  date: string;
}

