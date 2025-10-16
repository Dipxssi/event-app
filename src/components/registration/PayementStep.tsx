import { RegistrationForm } from "@/types";

interface PaymentStepProps {
  formData: Partial<RegistrationForm>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function PaymentStep({ formData, onChange }: PaymentStepProps) {

  const getTeamTotalCost = () => {
    if (formData.participationType === 'team') {
      const adultPrice = 2000;
      const studentPrice = 1200;
      const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
      const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);
      return (actualAdultCount * adultPrice) + (actualStudentCount * studentPrice);
    }
    return formData.registrationFee || 0;
  };

  const totalAmount = getTeamTotalCost();

  
  const getActualCounts = () => {
    const actualAdultCount = Number(formData.adultCount) === 10 ? (Number(formData.customAdultCount) || 0) : (Number(formData.adultCount) || 0);
    const actualStudentCount = Number(formData.studentCount) === 10 ? (Number(formData.customStudentCount) || 0) : (Number(formData.studentCount) || 0);
    return { actualAdultCount, actualStudentCount };
  };

  const { actualAdultCount, actualStudentCount } = getActualCounts();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-950">4. Registration & Payment</h3>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold mb-2 text-gray-700">
          {formData.participationType === 'team' ? 'Total Team Registration Fee' : 'Registration Fee'}
        </h4>
        <p className="text-lg font-bold" style={{ color: '#D5AB30' }}>
          Kshs. {totalAmount?.toLocaleString()}
        </p>
       
        {formData.participationType === 'team' && (actualAdultCount > 0 || actualStudentCount > 0) && (
          <div className="text-xs text-gray-600 mt-2">
            {actualAdultCount > 0 && (
              <div>
                Adults: {actualAdultCount} × 
                Kshs. 2,000 = Kshs. {(actualAdultCount * 2000).toLocaleString()}
              </div>
            )}
            {actualStudentCount > 0 && (
              <div>
                Students: {actualStudentCount} × 
                Kshs. 1,200 = Kshs. {(actualStudentCount * 1200).toLocaleString()}
              </div>
            )}
          </div>
        )}
        <p className="text-sm text-gray-700 mt-1">
          Choose your preferred payment method below
        </p>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="form-label">Payment Method</label>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="mpesa"
              className="mr-3 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              checked={formData.paymentMethod === 'mpesa'}
              onChange={onChange}
            />
            <div>
              <span className="text-gray-700 font-medium">M-Pesa</span>
              <p className="text-sm text-gray-600">Pay using M-Pesa mobile money</p>
            </div>
          </label>
          
          <label className="flex items-center cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              checked={formData.paymentMethod === 'bank'}
              onChange={onChange}
            />
            <div>
              <span className="text-gray-700 font-medium">Bank Transfer</span>
              <p className="text-sm text-gray-600">Pay via bank transfer (ABSA Bank)</p>
            </div>
          </label>
        </div>
      </div>

      {/* Dynamic Payment Info */}
      {formData.paymentMethod && (
        <div className="mb-6">
          {formData.paymentMethod === 'mpesa' ? (
            <div>
              <div className="bg-yellow-100 p-4 rounded-lg mb-4 text-gray-900">
                <h4 className="font-semibold mb-2">M-Pesa Payment Information</h4>
                <p><strong>Paybill No.:</strong> 303030</p>
                <p><strong>Account Number:</strong> 2046221209</p>
                <p><strong>Account Name:</strong> Possibilities Africa</p>
                <p><strong>Amount:</strong> Kshs. {totalAmount?.toLocaleString()}</p>
              </div>

              <div>
                <label className="form-label">M-Pesa Confirmation Message</label>
                <textarea
                  name="mpesaTransaction"
                  required
                  placeholder="Paste your complete M-Pesa confirmation message here..."

                  className="form-input text-gray-900 min-h-[120px] resize-y"
                  value={formData.mpesaTransaction || ''}
                  onChange={onChange}
                  rows={5}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-blue-100 p-4 rounded-lg mb-4 text-gray-900">
                <h4 className="font-semibold mb-2">ABSA Bank Payment Information</h4>
                <p><strong>Bank Name:</strong> ABSA Bank Kenya</p>
                <p><strong>Account Name:</strong> Possibilities Africa</p>
                <p><strong>Account Number:</strong>  2046221209</p>
                <p><strong>Amount to Transfer:</strong> Kshs. {totalAmount?.toLocaleString()}</p>
              </div>

              <div>
                <label className="form-label">Bank Transfer Confirmation Message</label>
                <textarea
                  name="bankTransactionMessage"
                  required
                  placeholder="Paste your bank transfer confirmation message or provide transfer details here..."

                  className="form-input text-gray-900 min-h-[120px] resize-y"
                  value={formData.bankTransactionMessage || ''}
                  onChange={onChange}
                  rows={5}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
