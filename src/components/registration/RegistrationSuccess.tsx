import { useRouter } from "next/navigation";
import { RegistrationForm } from "@/types";

interface RegistrationSuccessProps {
  formData: Partial<RegistrationForm>;
  isDonationOnly: boolean;
}

export default function RegistrationSuccess({ formData, isDonationOnly }: RegistrationSuccessProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {isDonationOnly ? 'Donation Submitted!' : 'Registration Successful!'}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {isDonationOnly 
              ? `Thank you ${formData.donorName} for your generous donation to support our cause!`
              : `Thank you ${formData.fullName} for registering for #Ushago!`
            }
          </p>
        </div>

        {!isDonationOnly && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
             See you on November 29th!
            </h2>
            <p className="text-blue-700 mb-4">
              We will confirm your registration through email shortly.
            </p>
          </div>
        )}

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 mb-2">Questions or need help?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 715 652742</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>inquiries@possibilitiesafrica.org</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => router.push('/')}
            className="btn-primary text-lg px-8 py-3"
          >
            Back to Homepage
          </button>
          
          <p className="text-sm text-gray-500">
            You can close this page now. Check your email for confirmation details.
          </p>
        </div>
      </div>
    </div>
  );
}
