import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Events",
  description: "Previous hiking events",
};

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <div className="bg-gray-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Past Events
          </h1>
        </div>
      </div>

      {/* Past events will go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-gray-500">
          <p>Past events coming later...</p>
        </div>
      </div>
    </div>
  );
}
