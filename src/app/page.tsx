import Link from "next/link";
import Image from "next/image";
import { liveEvents } from "@/lib/eventData";

export default function HomePage() {
  const upcomingEvent = liveEvents[0];

  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning={true}>
      
      {upcomingEvent && (
        <div className="py-12" style={{ backgroundColor: '#F5EBCE' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#D5AB30' }}>
                Next Event
              </h1>
              <p className="text-xl text-gray-700">
                Join us for our upcoming rural impact initiative
              </p>
            </div>

            {/* Event Banner */}
            <div className="max-w-[40rem] mx-auto ">
            
              <Link href="/register" className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    <Image
                      src={upcomingEvent.posterUrl}
                      alt={`${upcomingEvent.name} - ${upcomingEvent.description}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 500px) 100vw, 90vw"
                      priority
                    />
                    
                    {/* UPCOMING EVENT Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                        UPCOMING EVENT
                      </span>
                    </div>
                    
                    {/* Call to action overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white text-black px-12 py-4 rounded-full font-bold text-xl shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 border-4 border-yellow-400">
                        Click to Register →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Event Info */}
            <div className="text-center mt-8">
              <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-2 md:space-y-0 text-gray-700">
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></span>
                  <span className="font-medium">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span>
                  <span className="font-medium">{upcomingEvent.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg></span>
                  <span className="font-medium">Starting from Kshs. 1,200</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/register" 
                  className="btn-primary text-lg px-10 py-4 shadow-lg"
                >
                  Register Now
                </Link>
                <Link 
                  href="/events" 
                  className="btn-outline text-lg px-10 py-4"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mission Section */}
      <div className="py-16" style={{ backgroundColor: '#D5AB30' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              The PA Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start text-left bg-white/15 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <div className="mr-6 mt-1">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5" style={{ color: '#D5AB30' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Possibilities Africa (PA) is a Christian ministry organization dedicated to equipping pastors in rural 
                  African communities with the knowledge, skills, and attitude necessary to conduct holistic transformation 
                  ministries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforming Communities Through Action
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To achieve our mission and promote rural transformation, we conduct engaging events that bring together 
            passionate individuals who believe in making a difference. Through hiking adventures, we build communities, 
            raise awareness, and generate resources that directly impact rural African villages.
          </p>
          
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg></span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Build Community</h3>
              <p className="text-gray-600">Connect with like-minded individuals who share your passion for transformation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone-icon lucide-megaphone"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg></span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Raise Awareness</h3>
              <p className="text-gray-600">Spread the word about rural challenges and transformation opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Generate Impact</h3>
              <p className="text-gray-600">Create resources that directly benefit rural pastors and communities</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-24 h-1 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of changemakers and be part of rural transformation across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link 
              href="/register" 
              className="btn-primary text-lg px-8 py-4"
            >
              Register for Event
            </Link>
        
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 715 652742</span>
            </div>
            <div className="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <span>inquiries@possibilitiesafrica.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
