import { ChevronRight, Check, Phone, Mail, Globe, MapPin } from "lucide-react"
import ImageWithFallback from "./components/ImageWithFallback"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-teal-50/30 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold">SB</div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">SkillBridge DSG</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              About
            </a>
            <a href="#vision" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Vision & Mission
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </a>
          </nav>
          {/* <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button> */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20 md:py-28">
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl text-center md:text-left">
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-500 font-heading leading-tight">
                  Connecting Caring Hands with Global Opportunities
                </h1>
                <p className="mb-8 text-lg text-gray-600 md:text-xl leading-relaxed">
                  SkillBridge DSG empowers Indian nurses to build fulfilling careers in Germany. From training to
                  relocation, we stand by your side.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3.5 text-base font-medium text-white shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Start Your Career Today
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-100 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-teal-100 rounded-full opacity-70"></div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] border-4 border-white">
                    <ImageWithFallback 
                      src="/nursecaring.png" 
                      fallbackSrc="https://images.unsplash.com/photo-1584516150909-4cf8618415cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Nurse portrait" 
                      className="object-contain w-full h-[400px] bg-center bg-no-repeat"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">What We Offer</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">Our Services</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded"></div>
              <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl">
                We provide comprehensive support for nurses looking to build their careers in Germany
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Language Training</h3>
                <p className="text-gray-600">
                  Comprehensive German language courses tailored specifically for healthcare professionals, from beginner to advanced levels.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Qualification Recognition</h3>
                <p className="text-gray-600">
                  Expert guidance through the complex process of getting your nursing qualifications recognized in Germany.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Job Placement</h3>
                <p className="text-gray-600">
                  Direct connections with leading German healthcare institutions seeking qualified nursing professionals.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Visa & Immigration</h3>
                <p className="text-gray-600">
                  Complete assistance with visa applications, work permits, and all necessary documentation for legal employment.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Relocation Support</h3>
                <p className="text-gray-600">
                  Practical help with finding accommodation, setting up bank accounts, and navigating daily life in Germany.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Ongoing Mentorship</h3>
                <p className="text-gray-600">
                  Continuous professional development and personal support even after you've started your new position.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">Our Mission</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">About Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Large feature image */}
              <div className="lg:col-span-4 order-1 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full transform transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="/nurseinhospital.png" 
                    fallbackSrc="https://images.unsplash.com/photo-1592671963132-33b6edfc4023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Nurses in a hospital setting" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-8 space-y-8 order-2 lg:order-2">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                    <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Connecting Talent</h3>
                    <p className="text-gray-600">
                      SkillBridge DSG is a Germany-based talent bridge connecting skilled Indian nursing professionals with
                      healthcare institutions in the German-speaking region.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                    <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Approach</h3>
                    <p className="text-gray-600">
                      We exist to make the complex journey of international placement simple, transparent, and truly human —
                      combining cultural sensitivity with professional standards.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                    <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14Z"></path><path d="M7 22V11"></path></svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Complete Support</h3>
                    <p className="text-gray-600">
                      From language training and qualification recognition to relocation and integration, we stand beside
                      our candidates at every step.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                    <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Trusted Partner</h3>
                    <p className="text-gray-600">
                      For hospitals and care homes, we are more than a recruitment agency — we are a trusted partner
                      delivering committed, compassionate, and qualified nursing staff ready to make a difference.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Additional image and information */}
              <div className="lg:col-span-8 order-3 lg:order-3">
                <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 border border-gray-100">
                  <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
                    <ImageWithFallback 
                      src="/hospital.png" 
                      fallbackSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="German hospital" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-blue-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Core Belief</h3>
                    <p className="text-gray-600">
                      At our core, we believe great care begins with empowered caregivers — and we're here to build those
                      bridges, one journey at a time.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Second additional image */}
              <div className="lg:col-span-4 order-4 lg:order-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full transform transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="/hos.png" 
                    fallbackSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Nurse helping a patient" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a href="#contact" className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Join Our Journey
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="vision" className="bg-gray-50 py-20 md:py-28 relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 opacity-70 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-50 opacity-70 rounded-tr-full"></div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">Our Purpose</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">
                Our Vision & Mission
              </h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded"></div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-teal-50 rounded-bl-full opacity-50"></div>
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>``
                <h3 className="mb-4 text-xl font-bold text-teal-700 relative z-10">Vision</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  To become a trusted bridge between passionate caregivers and world-class healthcare systems — creating
                  life-changing journeys and delivering better care worldwide.
                </p>
                <div className="mt-6 relative z-10">
                  <ImageWithFallback 
                    src="/mision.png" 
                    fallbackSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Vision image" 
                    className="rounded-lg w-full h-40 object-cover shadow-md"
                  />
                </div>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-teal-50 rounded-bl-full opacity-50"></div>
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-100 to-teal-50 text-teal-600 relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.071 4.929a10 10 0 1 0 .203 14.204"/><path d="M16 8h6V2"/></svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-teal-700 relative z-10">Mission</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  Our mission is to connect aspiring Indian nursing professionals with rewarding careers in Germany,
                  Austria, and Switzerland — while supporting healthcare providers with skilled and dedicated talent.
                </p>
                <div className="mt-6 relative z-10">
                  <ImageWithFallback 
                    src="/vision.png" 
                    fallbackSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Mission image" 
                    className="rounded-lg w-full h-40 object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="bg-gray-50 py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">Our Advantages</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded"></div>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="h-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
                  <ImageWithFallback 
                    src="/nurse.png" 
                    fallbackSrc="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Team members working together" 
                    className="object-cover w-full h-full min-h-[500px]"
                  />
                </div>
                <div className="rounded-xl bg-white p-10 shadow-xl border border-gray-100">
                  <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Specialized Expertise in German Market</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">100% Legal & Transparent Process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Strong Employer Network in Germany</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Personalized Support at Every Step</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 lg:col-span-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <Check className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Based in Germany with Local Support in India</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-teal-700 mb-3">Our Commitment to Excellence</h4>
                      <p className="text-gray-600">We pride ourselves on maintaining the highest standards of professional conduct, ensuring each candidate receives personalized attention and care throughout their journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500"></div>
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-tl-full"></div>
          
          <div className="container relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white border border-white/30 rounded-full">Join Us Today</div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl text-white leading-tight font-heading">Ready to Begin Your Journey to Germany?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
                Join hundreds of Indian nurses who are shaping their future in Germany with SkillBridge DSG. Your new career path is just one step away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-medium text-teal-700 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                >
                  Contact Us Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl bg-transparent border-2 border-white px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
                >
                  Explore Our Services
                </a>
              </div>
              <div className="mt-12 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Nurses Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Partner Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">Get In Touch</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">
                Contact Us
              </h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-600 to-teal-500 rounded"></div>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Reach Out To Us</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">Phone (Germany)</h3>
                        <p className="text-gray-600">+49 15755933850</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">Phone (India)</h3>
                        <p className="text-gray-600">+91 7823841717</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">Email</h3>
                        <p className="text-gray-600">contact@skillbridge-dsg.de</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <Globe className="h-5 w-5 flex-shrink-0 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">Website</h3>
                        <p className="text-gray-600">www.skillbridge-dsg.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal-600"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg mb-1">Social Media</h3>
                        <p className="text-gray-600">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="h-full rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-[400px] relative">
                      <div className="absolute inset-0 bg-teal-100/30 flex flex-col items-center justify-center p-8 z-10">
                        <div className="bg-white/95 p-8 rounded-xl shadow-lg max-w-md">
                          <div className="flex items-start gap-5 mb-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                              <MapPin className="h-5 w-5 flex-shrink-0 text-teal-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 text-lg mb-1">Address</h3>
                              <p className="text-gray-600">Europaring 2, 65824 Schwalbach am Taunus, Germany</p>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-teal-700 mb-2">Office Hours</h4>
                            <p className="text-gray-600 text-sm">Monday - Friday: 9 AM - 5 PM (CET)<br/>Saturday: By appointment only</p>
                          </div>
                        </div>
                      </div>
                      <ImageWithFallback 
                        src="landscape-placeholder-svgrepo-com.svg" 
                        fallbackSrc="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Office location map" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-50 opacity-70 rounded-tr-full"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold">SB</div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">SkillBridge DSG</span>
              </div>
              <p className="text-gray-600 mb-6">Connecting caring hands with global opportunities since 2018.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-600 hover:text-teal-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About Us</a></li>
                <li><a href="#vision" className="text-gray-600 hover:text-teal-600 transition-colors">Vision & Mission</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Our Services</a></li>
                <li><a href="#why-us" className="text-gray-600 hover:text-teal-600 transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-600" />
                  <div>
                    <p className="text-gray-600">+49 15755933850</p>
                    <p className="text-gray-600">+91 7823841717</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-600" />
                  <p className="text-gray-600">contact@skillbridge-dsg.de</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-600" />
                  <p className="text-gray-600">Europaring 2, 65824 Schwalbach am Taunus, Germany</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Working Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM (CET)</p>
                <p className="text-gray-600">Saturday: By appointment</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-teal-700 mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-sm text-gray-600 mb-3">Coming soon!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">SkillBridge DSG © {new Date().getFullYear()}. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
