import Link from "next/link";
import Image from "next/image";
import { liveEvents } from "@/lib/eventData";

export default function HomePage() {
  const upcomingEvent = liveEvents[0];

  return (
    <div className="min-h-screen bg-white">

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


            <div className="max-w-5xl mx-auto">
              <Link href="/events" className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    <Image
                      src={upcomingEvent.posterUrl}
                      alt={`${upcomingEvent.name} - ${upcomingEvent.description}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 90vw"
                      priority
                    />


                    <div className="absolute top-6 left-6">
                      <span className="bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                        UPCOMING EVENT
                      </span>
                    </div>


                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white text-black px-12 py-4 rounded-full font-bold text-xl shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 border-4 border-yellow-400">
                        Click to Register
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>


            <div className="text-center mt-8">
              <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-2 md:space-y-0 text-gray-700">
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  </span>
                  <span className="font-medium">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  </span>
                  <span className="font-medium">{upcomingEvent.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  </span>
                  <span className="font-medium">Starting from Kshs. 1,200</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
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

      {/* Mission Section - NOW BELOW EVENT */}
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

      {/* Bridge Section - How Events Support Mission */}
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


          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Build Community</h3>
              <p className="text-gray-600">Connect with like-minded individuals who share your passion for transformation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Raise Awareness</h3>
              <p className="text-gray-600">Spread the word about rural challenges and transformation opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                </span>
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
              href="/events"
              className="btn-primary text-lg px-8 py-4"
            >
              View All Events
            </Link>
            <Link
              href="/events/past"
              className="btn-outline text-lg px-8 py-4 !border-white !text-white hover:!bg-white hover:!text-gray-800"
            >
              Past Impact
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
              <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>inquiries@possibilitiesafrica.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
