
import React from 'react';
import Image from 'next/image';
import { Cloud, Activity, Heart, Leaf, ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import AllergySignupForm from '@/components/allergy-signup-form';
import ContactForm from '@/components/contact-form';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--healthy-beige-light)]">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Healthy Weather Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[var(--healthy-teal-dark)]">
                Healthy Weather
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-[var(--healthy-teal)] transition-colors">About</a>
              <a href="#technology" className="text-gray-700 hover:text-[var(--healthy-teal)] transition-colors">Technology</a>
              <a href="#product" className="text-gray-700 hover:text-[var(--healthy-teal)] transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-[var(--healthy-teal)] transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg parallax-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--healthy-beige)]/20"></div>
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/logo.png"
                alt="Healthy Weather Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--healthy-teal-dark)] mb-4">
              Healthy Weather
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              Weather-driven health insights for a better tomorrow
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform weather and environmental data into personalized health solutions. 
              Our advanced machine learning technology helps you make informed decisions 
              about your wellbeing based on environmental conditions.
            </p>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-[var(--healthy-teal)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--healthy-teal-dark)] transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </a>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[var(--healthy-teal)]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--healthy-teal-dark)] mb-6">
              About Healthy Weather
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Healthy Weather, our mission is to revolutionize personal health management 
                by transforming complex weather and environmental data into actionable health insights. 
                We believe that understanding the relationship between environmental conditions 
                and personal wellbeing is key to living healthier, more informed lives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our innovative approach combines real-time weather forecasting, comprehensive 
                environmental data analysis, and cutting-edge machine learning algorithms to 
                provide personalized health recommendations tailored to your unique needs and 
                sensitivities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-[var(--healthy-beige-light)]">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--healthy-teal-dark)] mb-6">
              Our Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by advanced algorithms and comprehensive data analysis, 
              our platform delivers precise health insights when you need them most.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--healthy-teal-dark)] mb-3">
                  Weather Forecasting
                </h3>
                <p className="text-gray-600">
                  Real-time weather data and predictive modeling for accurate environmental insights.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--healthy-teal-dark)] mb-3">
                  Environmental Data
                </h3>
                <p className="text-gray-600">
                  Comprehensive pollen counts, air quality metrics, and environmental monitoring.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--healthy-teal-dark)] mb-3">
                  Proprietary Modeling
                </h3>
                <p className="text-gray-600">
                  Advanced machine learning algorithms that correlate environmental factors with health outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--healthy-teal-dark)] mb-3">
                  Risk Scoring
                </h3>
                <p className="text-gray-600">
                  Personalized health risk assessments based on individual sensitivities and conditions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--healthy-teal-dark)] mb-6">
              Featured Product
            </h2>
            <div className="inline-flex items-center gap-2 bg-[var(--healthy-teal)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Coming Soon
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--healthy-teal-dark)]">
                  Allergy Tracker App
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Take control of your allergies with our comprehensive tracking and forecasting app. 
                  Monitor your symptoms, track environmental triggers, and receive personalized 
                  alerts to help you plan your days with confidence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Daily Symptom Diary</h4>
                      <p className="text-gray-600">Track your allergy symptoms and identify patterns over time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Smart Alerts</h4>
                      <p className="text-gray-600">Receive personalized notifications when conditions may trigger your allergies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--healthy-teal)] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Personalized Forecasts</h4>
                      <p className="text-gray-600">Get tailored predictions based on your specific allergy triggers and location.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-[var(--healthy-beige-light)] p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-[var(--healthy-teal-dark)] mb-4 text-center">
                  Get Early Access
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Be among the first to experience the future of allergy management. 
                  Sign up now for exclusive early access and updates.
                </p>
                <AllergySignupForm />
                <p className="text-xs text-gray-500 text-center mt-4">
                  By signing up, you'll receive updates about our launch and early access opportunities.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--healthy-beige-light)]">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--healthy-teal-dark)] mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our technology or interested in partnerships? 
              We'd love to hear from you. Reach out and let's discuss how we can 
              help improve health outcomes together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--healthy-teal-dark)] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Healthy Weather Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Healthy Weather</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            
            <p className="text-white/70 text-sm">
              © 2024 Healthy Weather. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-2">
              Weather-driven health insights for a better tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
