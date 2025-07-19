import React, { useState } from 'react';
import { Menu, Phone, MapPin, Clock, Calendar, Stethoscope, UserPlus, Heart, ChevronRight, ChevronFirst as FirstAid, Brain, Bone, Eye, Bluetooth as Tooth, Baby, Activity, Syringe, Microscope, FileText, CreditCard, AlertCircle, BookOpen, Sun, Moon, Globe2, Lock, ChevronUp, ChevronDown, Download, ExternalLink, CheckCircle, X, Mail, MessageSquare, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [showAppointmentConfirmation, setShowAppointmentConfirmation] = useState(false);
  const [expandedBlogPost, setExpandedBlogPost] = useState<number | null>(null);
  const [showContactConfirmation, setShowContactConfirmation] = useState(false);
  
  // Form state
  const [appointmentForm, setAppointmentForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    department: 'General Medicine'
  });

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const basicServices = [
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: "General Medicine",
      description: "Comprehensive primary healthcare including routine check-ups, vaccinations, and preventive care"
    },
    {
      icon: <FirstAid className="h-8 w-8 text-blue-600" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams and fully equipped trauma units"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Cardiology",
      description: "Advanced cardiac care including ECG, stress tests, and heart disease management"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Neurology",
      description: "Specialized care for neurological disorders with advanced diagnostic capabilities"
    },
    {
      icon: <Bone className="h-8 w-8 text-blue-600" />,
      title: "Orthopedics",
      description: "Treatment for bone and joint conditions, sports injuries, and rehabilitation services"
    },
    {
      icon: <Baby className="h-8 w-8 text-blue-600" />,
      title: "Pediatrics",
      description: "Comprehensive children's healthcare from newborns to adolescents"
    }
  ];

  const additionalServices = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Ophthalmology",
      description: "Complete eye care including vision tests, cataract surgery, and retinal treatments"
    },
    {
      icon: <Tooth className="h-8 w-8 text-blue-600" />,
      title: "Dental Care",
      description: "Full dental services including cleanings, fillings, crowns, and oral surgery"
    },
    {
      icon: <Syringe className="h-8 w-8 text-blue-600" />,
      title: "Vaccination Services",
      description: "Comprehensive immunization programs for all ages including travel vaccines"
    },
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: "Laboratory Services",
      description: "Advanced diagnostic testing including blood work, imaging, and pathology"
    },
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: "Physical Therapy",
      description: "Rehabilitation services for injury recovery and mobility improvement"
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Mental Health",
      description: "Counseling and psychiatric services for mental wellness and emotional support"
    }
  ];

  const allServices = showAllServices ? [...basicServices, ...additionalServices] : basicServices;

  const patientForms = [
    { name: "New Patient Registration Form", type: "PDF", size: "2.1 MB" },
    { name: "Medical History Questionnaire", type: "PDF", size: "1.8 MB" },
    { name: "Insurance Information Form", type: "PDF", size: "1.2 MB" },
    { name: "Consent for Treatment", type: "PDF", size: "0.9 MB" },
    { name: "HIPAA Privacy Notice", type: "PDF", size: "1.5 MB" },
    { name: "Emergency Contact Form", type: "PDF", size: "0.8 MB" }
  ];

  const insuranceProviders = [
    { name: "Blue Cross Blue Shield", coverage: "Full Coverage", copay: "$25" },
    { name: "Aetna", coverage: "Full Coverage", copay: "$30" },
    { name: "Cigna", coverage: "Full Coverage", copay: "$25" },
    { name: "UnitedHealthcare", coverage: "Full Coverage", copay: "$35" },
    { name: "Medicare", coverage: "Accepted", copay: "Varies" },
    { name: "Medicaid", coverage: "Accepted", copay: "$0-$15" }
  ];

  const healthResources = [
    {
      category: "Preventive Care",
      articles: [
        "Annual Physical Exam Checklist",
        "Vaccination Schedule for Adults",
        "Cancer Screening Guidelines",
        "Heart Health Prevention Tips"
      ]
    },
    {
      category: "Chronic Conditions",
      articles: [
        "Managing Diabetes Effectively",
        "Living with Hypertension",
        "Arthritis Pain Management",
        "Asthma Control Strategies"
      ]
    },
    {
      category: "Mental Health",
      articles: [
        "Stress Management Techniques",
        "Understanding Depression",
        "Anxiety Coping Strategies",
        "Sleep Hygiene Guidelines"
      ]
    },
    {
      category: "Nutrition & Fitness",
      articles: [
        "Healthy Eating Guidelines",
        "Exercise for Beginners",
        "Weight Management Tips",
        "Hydration Importance"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Understanding Preventive Care",
      date: "March 15, 2025",
      excerpt: "Learn about the importance of regular check-ups and preventive healthcare measures.",
      fullContent: `
        Preventive care is one of the most important aspects of maintaining good health throughout your life. Regular check-ups and screenings can help detect potential health issues before they become serious problems.

        **Key Components of Preventive Care:**

        • **Annual Physical Exams**: Comprehensive health assessments that include vital signs, blood work, and physical examinations
        • **Vaccinations**: Staying up-to-date with recommended immunizations for your age group
        • **Cancer Screenings**: Regular mammograms, colonoscopies, and other screenings based on your risk factors
        • **Cardiovascular Health**: Blood pressure monitoring, cholesterol checks, and heart health assessments

        **Benefits of Preventive Care:**

        1. **Early Detection**: Many conditions are more treatable when caught early
        2. **Cost Savings**: Preventing illness is often less expensive than treating advanced conditions
        3. **Better Quality of Life**: Maintaining good health helps you stay active and independent
        4. **Peace of Mind**: Regular check-ups provide reassurance about your health status

        **Recommended Schedule:**
        - Ages 18-39: Annual check-ups, vaccinations as needed
        - Ages 40-64: Annual check-ups, increased screening frequency
        - Ages 65+: More frequent monitoring and specialized screenings

        Remember, preventive care is an investment in your future health and well-being.
      `,
      author: "Dr. Sarah Mitchell",
      readTime: "5 min read"
    },
    {
      title: "COVID-19 Updates",
      date: "March 10, 2025",
      excerpt: "Latest information about COVID-19 variants, vaccines, and safety measures.",
      fullContent: `
        As we continue to navigate the evolving landscape of COVID-19, staying informed about the latest developments is crucial for protecting yourself and your community.

        **Current Situation:**

        The latest COVID-19 variants continue to circulate, but vaccination and previous infections have significantly reduced severe outcomes. However, vigilance remains important, especially for vulnerable populations.

        **Updated Vaccine Recommendations:**

        • **Annual Boosters**: Recommended for all adults, especially those over 65 or with underlying conditions
        • **New Formulations**: Updated vaccines target the most current circulating variants
        • **Timing**: Best to receive boosters in fall, before respiratory illness season peaks

        **Safety Measures:**

        1. **Mask Wearing**: Still recommended in healthcare settings and crowded indoor spaces
        2. **Hand Hygiene**: Regular handwashing remains one of the most effective preventive measures
        3. **Ventilation**: Improving indoor air quality reduces transmission risk
        4. **Stay Home When Sick**: Continue to isolate when experiencing symptoms

        **High-Risk Individuals:**
        - Adults 65 and older
        - People with chronic conditions (diabetes, heart disease, lung disease)
        - Immunocompromised individuals
        - Pregnant women

        **Testing Guidelines:**
        - Test if you have symptoms
        - Test before gathering with vulnerable individuals
        - Rapid tests are widely available and effective

        Stay informed through reliable sources and consult with your healthcare provider about the best protection strategies for your individual situation.
      `,
      author: "Dr. Michael Chen",
      readTime: "4 min read"
    },
    {
      title: "Healthy Living Tips",
      date: "March 5, 2025",
      excerpt: "Simple lifestyle changes that can significantly improve your health and well-being.",
      fullContent: `
        Small, consistent changes in your daily routine can lead to significant improvements in your overall health and well-being. Here are evidence-based tips that you can start implementing today.

        **Nutrition Fundamentals:**

        • **Eat the Rainbow**: Include a variety of colorful fruits and vegetables in your diet
        • **Portion Control**: Use smaller plates and listen to your body's hunger cues
        • **Hydration**: Aim for 8 glasses of water daily, more if you're active
        • **Limit Processed Foods**: Choose whole, unprocessed foods whenever possible

        **Physical Activity:**

        1. **Start Small**: Even 10 minutes of daily activity makes a difference
        2. **Find Activities You Enjoy**: Dancing, gardening, walking with friends
        3. **Strength Training**: Include resistance exercises 2-3 times per week
        4. **Daily Movement**: Take stairs, park farther away, stand while working

        **Mental Health:**

        • **Sleep Hygiene**: Aim for 7-9 hours of quality sleep nightly
        • **Stress Management**: Practice deep breathing, meditation, or yoga
        • **Social Connections**: Maintain relationships and seek support when needed
        • **Mindfulness**: Practice being present in the moment

        **Preventive Habits:**

        - Regular hand washing
        - Annual health check-ups
        - Dental care every 6 months
        - Sun protection with SPF 30+
        - Limit alcohol consumption
        - Avoid tobacco products

        **Creating Lasting Change:**

        1. **Set Realistic Goals**: Start with one or two changes at a time
        2. **Track Progress**: Keep a journal or use apps to monitor habits
        3. **Celebrate Small Wins**: Acknowledge your achievements along the way
        4. **Be Patient**: Lasting change takes time and consistency

        Remember, the goal isn't perfection but progress. Every healthy choice you make is a step toward a better quality of life.
      `,
      author: "Dr. Emily Rodriguez",
      readTime: "6 min read"
    }
  ];

  const toggleResource = (resourceType: string) => {
    setActiveResource(activeResource === resourceType ? null : resourceType);
  };

  const toggleBlogPost = (index: number) => {
    setExpandedBlogPost(expandedBlogPost === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!appointmentForm.fullName || !appointmentForm.email || !appointmentForm.phone || !appointmentForm.preferredDate) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show confirmation
    setShowAppointmentConfirmation(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show confirmation
    setShowContactConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowAppointmentConfirmation(false);
    // Reset form
    setAppointmentForm({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      department: 'General Medicine'
    });
  };

  const closeContactConfirmation = () => {
    setShowContactConfirmation(false);
    // Reset contact form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Generate appointment reference number
  const generateAppointmentRef = () => {
    return 'HC' + Date.now().toString().slice(-6);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle navigation clicks
  const handleNavClick = (sectionId: string) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle logo click - scroll to top
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Appointment Confirmation Modal */}
      {showAppointmentConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-green-600">Appointment Scheduled!</h3>
              <p className="opacity-80 mb-6">
                Your appointment has been successfully scheduled. You will receive a confirmation email shortly.
              </p>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-6 text-left`}>
                <h4 className="font-semibold mb-3">Appointment Details:</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Reference:</span> {generateAppointmentRef()}</p>
                  <p><span className="font-medium">Patient:</span> {appointmentForm.fullName}</p>
                  <p><span className="font-medium">Department:</span> {appointmentForm.department}</p>
                  <p><span className="font-medium">Date:</span> {formatDate(appointmentForm.preferredDate)}</p>
                  <p><span className="font-medium">Time:</span> 10:00 AM (Tentative)</p>
                  <p><span className="font-medium">Contact:</span> {appointmentForm.phone}</p>
                </div>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} mb-6`}>
                <p className="text-sm text-blue-600">
                  <strong>Next Steps:</strong> Our staff will contact you within 24 hours to confirm your appointment time and provide any additional instructions.
                </p>
              </div>

              <button
                onClick={closeConfirmation}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Confirmation Modal */}
      {showContactConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-green-600">Message Sent!</h3>
              <p className="opacity-80 mb-6">
                Thank you for contacting us. We have received your message and will respond within 24 hours.
              </p>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-6 text-left`}>
                <h4 className="font-semibold mb-3">Message Details:</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">From:</span> {contactForm.name}</p>
                  <p><span className="font-medium">Email:</span> {contactForm.email}</p>
                  <p><span className="font-medium">Subject:</span> {contactForm.subject}</p>
                  <p><span className="font-medium">Reference:</span> MSG{Date.now().toString().slice(-6)}</p>
                </div>
              </div>

              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} mb-6`}>
                <p className="text-sm text-blue-600">
                  <strong>Next Steps:</strong> Our team will review your message and respond to your inquiry as soon as possible.
                </p>
              </div>

              <button
                onClick={closeContactConfirmation}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm shadow-sm z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Now clickable */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Heart className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="ml-2 text-2xl font-semibold">HealthCare</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('home')} className="hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-blue-600 transition-colors">About Us</button>
              <button onClick={() => handleNavClick('services')} className="hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => handleNavClick('appointments')} className="hover:text-blue-600 transition-colors">Appointments</button>
              <button onClick={() => handleNavClick('resources')} className="hover:text-blue-600 transition-colors">Resources</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

            </div>
            
            {/* Mobile Navigation Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} z-40 pt-20`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('appointments')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Appointments
            </button>
            <button 
              onClick={() => handleNavClick('resources')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Contact
            </button>

          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Health Is Our<br />Top Priority
              </h1>
              <p className="text-lg opacity-80 mb-8">
                Providing quality healthcare services with a team of experienced medical professionals. 
                Your well-being is at the heart of everything we do.
              </p>
              <div className="space-x-4">
                <button 
                  onClick={() => handleNavClick('appointments')}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleNavClick('emergency')}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Emergency Care
                  <AlertCircle className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Medical professionals" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Our Clinic</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              With over 20 years of experience, we provide comprehensive healthcare services
              with state-of-the-art facilities and a team of dedicated professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="opacity-80">
                To provide exceptional healthcare services with compassion and expertise,
                ensuring the well-being of our community.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="opacity-80">
                To be the leading healthcare provider, known for excellence in patient care
                and medical innovation.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc list-inside opacity-80">
                <li>Excellence in Patient Care</li>
                <li>Integrity and Professionalism</li>
                <li>Continuous Innovation</li>
                <li>Compassionate Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              We offer a comprehensive range of medical services with state-of-the-art
              facilities and experienced specialists
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="opacity-80">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAllServices ? 'Show Less Services' : 'View All Services'}
              {showAllServices ? (
                <ChevronUp className="ml-2 h-5 w-5" />
              ) : (
                <ChevronRight className="ml-2 h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section id="appointments" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={appointmentForm.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={appointmentForm.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={appointmentForm.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input 
                    type="date"
                    name="preferredDate"
                    value={appointmentForm.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Department</label>
                  <select 
                    name="department"
                    value={appointmentForm.department}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                    <option>Ophthalmology</option>
                    <option>Dental Care</option>
                    <option>Neurology</option>
                    <option>Mental Health</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Schedule Appointment
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="opacity-80">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="opacity-80">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="opacity-80">Sunday: Emergency Only</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="opacity-80">(555) 123-4567</p>
                  <p className="opacity-80">Emergency: (555) 911-1234</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="opacity-80">123 Healthcare Avenue</p>
                  <p className="opacity-80">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Resources Section */}
      <section id="resources" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Patient Resources</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              Access important information and resources to help you prepare for your visit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Patient Forms */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Forms</h3>
              <p className="opacity-80 mb-4">
                Download and complete necessary forms before your visit to save time
              </p>
              <button 
                onClick={() => toggleResource('forms')}
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                {activeResource === 'forms' ? 'Hide Forms' : 'Download Forms'}
                {activeResource === 'forms' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {activeResource === 'forms' && (
                <div className="mt-4 space-y-3">
                  {patientForms.map((form, index) => (
                    <div key={index} className={`p-3 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center justify-between`}>
                      <div>
                        <p className="font-medium text-sm">{form.name}</p>
                        <p className="text-xs opacity-60">{form.type} • {form.size}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Insurance & Payments */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Insurance & Payments</h3>
              <p className="opacity-80 mb-4">
                Information about accepted insurance providers and payment options
              </p>
              <button 
                onClick={() => toggleResource('insurance')}
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                {activeResource === 'insurance' ? 'Hide Info' : 'Learn More'}
                {activeResource === 'insurance' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {activeResource === 'insurance' && (
                <div className="mt-4 space-y-3">
                  <h4 className="font-semibold text-sm">Accepted Insurance Providers:</h4>
                  {insuranceProviders.map((provider, index) => (
                    <div key={index} className={`p-3 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{provider.name}</p>
                          <p className="text-xs opacity-60">{provider.coverage}</p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {provider.copay}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className={`p-3 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mt-4`}>
                    <h5 className="font-medium text-sm mb-2">Payment Options:</h5>
                    <ul className="text-xs opacity-80 space-y-1">
                      <li>• Cash, Check, Credit/Debit Cards</li>
                      <li>• Payment plans available</li>
                      <li>• Online payment portal</li>
                      <li>• HSA/FSA accepted</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Health Education */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Education</h3>
              <p className="opacity-80 mb-4">
                Access our library of health resources and educational materials
              </p>
              <button 
                onClick={() => toggleResource('education')}
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                {activeResource === 'education' ? 'Hide Resources' : 'Browse Resources'}
                {activeResource === 'education' ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {activeResource === 'education' && (
                <div className="mt-4 space-y-4">
                  {healthResources.map((category, index) => (
                    <div key={index} className={`p-3 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h4 className="font-semibold text-sm mb-2">{category.category}</h4>
                      <ul className="space-y-1">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="flex items-center justify-between">
                            <span className="text-xs opacity-80">{article}</span>
                            <button className="text-blue-600 hover:text-blue-700">
                              <ExternalLink className="h-3 w-3" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              Read what our patients say about their experience with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                text: "Exceptional care and attention to detail. The staff was professional and caring throughout my treatment."
              },
              {
                name: "Sarah Johnson",
                text: "The doctors here are amazing. They took the time to explain everything and made me feel comfortable."
              },
              {
                name: "Michael Brown",
                text: "State-of-the-art facility with a caring team. I couldn't be happier with my experience."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}
              >
                <p className="opacity-80 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information Section */}
      <section id="emergency" className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Emergency Care</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              24/7 Emergency Services Available
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergency Hotline</h3>
              <p className="text-3xl font-bold mb-2">(555) 911-1234</p>
              <p className="opacity-90">Available 24 hours a day, 7 days a week</p>
            </div>
            <div className="bg-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">When to Seek Emergency Care</h3>
              <ul className="list-disc list-inside opacity-90 space-y-2">
                <li>Severe chest pain or difficulty breathing</li>
                <li>Severe injuries or trauma</li>
                <li>Stroke symptoms</li>
                <li>Severe allergic reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Health Updates</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              Stay informed with our latest health tips and medical news
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center justify-between text-sm opacity-60 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="opacity-80 mb-4">{post.excerpt}</p>
                
                {expandedBlogPost === index && (
                  <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="mb-4 text-sm opacity-70">
                      <span className="font-medium">By {post.author}</span>
                    </div>
                    <div className="prose prose-sm max-w-none opacity-90">
                      {post.fullContent.split('\n').map((paragraph, pIndex) => {
                        if (paragraph.trim() === '') return null;
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h4 key={pIndex} className="font-semibold mt-4 mb-2">
                              {paragraph.replace(/\*\*/g, '')}
                            </h4>
                          );
                        }
                        if (paragraph.startsWith('•')) {
                          return (
                            <div key={pIndex} className="ml-4 mb-1">
                              {paragraph}
                            </div>
                          );
                        }
                        if (paragraph.match(/^\d+\./)) {
                          return (
                            <div key={pIndex} className="ml-4 mb-1">
                              {paragraph}
                            </div>
                          );
                        }
                        return (
                          <p key={pIndex} className="mb-3">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => toggleBlogPost(index)}
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  {expandedBlogPost === index ? 'Show Less' : 'Read More'}
                  {expandedBlogPost === index ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronRight className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              Get in touch with us for any questions, concerns, or feedback. We're here to help you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select 
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment Question">Appointment Question</option>
                    <option value="Medical Records">Medical Records</option>
                    <option value="Insurance Question">Insurance Question</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Please describe your inquiry or message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="opacity-80 mb-8">
                  We're here to help you with any questions or concerns. Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-80">Main: (555) 123-4567</p>
                    <p className="opacity-80">Emergency: (555) 911-1234</p>
                    <p className="text-sm opacity-60">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-80">info@healthcare.com</p>
                    <p className="opacity-80">appointments@healthcare.com</p>
                    <p className="text-sm opacity-60">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="opacity-80">123 Healthcare Avenue</p>
                    <p className="opacity-80">New York, NY 10001</p>
                    <p className="text-sm opacity-60">Free parking available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="opacity-80">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="opacity-80">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="opacity-80">Sunday: Emergency Only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Live Chat</h4>
                    <p className="opacity-80">Available on our website</p>
                    <p className="text-sm opacity-60">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                <h4 className="font-semibold mb-3">Need Immediate Assistance?</h4>
                <p className="text-sm opacity-80 mb-4">
                  For urgent medical concerns or emergencies, please call our emergency line or visit our emergency department.
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
                  Call Emergency Line: (555) 911-1234
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900 text-white'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <button 
                onClick={handleLogoClick}
                className="flex items-center mb-4 hover:opacity-80 transition-opacity"
              >
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-semibold">HealthCare</span>
              </button>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and expertise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-white">About Us</button></li>
                <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => handleNavClick('appointments')} className="text-gray-400 hover:text-white">Appointments</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#accessibility" className="text-gray-400 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
              <p className="text-gray-400">24/7 Emergency Line:</p>
              <p className="text-white text-xl">(555) 911-1234</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 HealthCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;