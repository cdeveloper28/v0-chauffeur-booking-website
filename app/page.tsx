'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Counter } from '@/components/ui/counter'
import {
  Plane,
  Briefcase,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Star,
  Car,
  Shield,
  Clock,
  ChevronRight,
  Plus,
  Minus,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [vehicle, setVehicle] = useState('')
  const [tripType, setTripType] = useState('One-way')
  const [fullName, setFullName] = useState('')
  const [Additional, setAdditional] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [numLuggage, setNumLuggage] = useState('0')
  const [flightNumber, setFlightNumber] = useState('')
  const [arrivalDeparture, setArrivalDeparture] = useState('Arrival')
  const [terminal, setTerminal] = useState('')
  const [vehicleType, setVehicleType] = useState('Executive Sedan')
  const [specialRequirements, setSpecialRequirements] = useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = useState('Pay Later')
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  const services = [
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Seamless airport pickups and drop-offs with real-time flight tracking',
    },
    {
      icon: Briefcase,
      title: 'Corporate Rides',
      description: 'Executive transportation for business meetings and conferences',
    },
    {
      icon: Sparkles,
      title: 'Event Transportation',
      description: 'Professional transport for weddings, galas, and special occasions',
    },
    {
      icon: MapPin,
      title: 'City Tours',
      description: 'Guided premium tours of the city with knowledgeable drivers',
    },
  ]

  const fleet = [
    {
      name: 'Mercedes-Benz S-Class',
      description: 'Flagship executive sedan for VIP travel',
      specs: '3 Passengers, Rear Executive Seating, WiFi, Refreshments',
      image: '/sclas.png',
      hourlyRate: '$150/hr',
      dailyRate: '$900/day',
      hourlyRange: '$120–$250/hr',
      dailyRange: '$700–$1,400+',
    },
    {
      name: 'Mercedes-Maybach',
      description: 'Ultra-luxury sedan for heads of state and celebrities',
      specs: '3 Passengers, Extended Legroom, Privacy Package, Premium Amenities',
      image: '/benx.png',
      hourlyRate: '$200–$300/hr',
      dailyRate: '$1,200–$1,800/day',
      hourlyRange: '$150–$300+/hr',
      dailyRange: '$900–$1,800+',
    },
    {
      name: 'Rolls-Royce Phantom',
      description: 'The ultimate statement in handcrafted luxury',
      specs: '3 Passengers, Starlight Headliner, Bespoke Interior, Chauffeur Spec',
      image: '/royce.png',
      hourlyRate: '$250–$400/hr',
      dailyRate: '$1,200–$2,000/day',
      hourlyRange: '$180–$400+/hr',
      dailyRange: '$1,000–$1,800+',
    },
    {
      name: 'Cadillac Escalade ESV',
      description: 'Spacious luxury SUV for groups and security details',
      specs: '6 Passengers, Rear Entertainment, Premium Audio, Extra Luggage Space',
      image: '/escalade.png',
      hourlyRate: '$130–$200/hr',
      dailyRate: '$900–$1,300/day',
      hourlyRange: '$120–$200/hr',
      dailyRange: '$800–$1,300+',
    },
    {
      name: 'Mercedes-Benz V-Class',
      description: 'Discreet luxury MPV for families and small groups',
      specs: '6 Passengers, Conference Seating, WiFi, Power Outlets',
      image: '/vclass1.png',
      hourlyRate: '$100–$180/hr',
      dailyRate: '$800–$1,200/day',
      hourlyRange: '$100–$180/hr',
      dailyRange: '$700–$1,200+',
    },
    {
      name: 'Mercedes-Benz Sprinter',
      description: 'Executive sprinter for roadshows, events, and VIP teams',
      specs: '8–12 Passengers, Lounge Seating, Ambient Lighting, Workspaces',
      image: '/sprinter.png',
      hourlyRate: '$150–$225/hr',
      dailyRate: '$1,000–$1,500/day',
      hourlyRange: '$125–$225/hr',
      dailyRange: '$800–$1,500+',
    },
    {
      name: 'Luxury Mini Coach',
      description: 'Premium coach solution for larger corporate and event groups',
      specs: '16–24 Passengers, Luggage Bay, PA System, Climate Control',
      image: '/vclass.png',
      hourlyRate: '$200–$300/hr',
      dailyRate: '$1,200–$1,800/day',
      hourlyRange: '$150–$300/hr',
      dailyRange: '$1,000–$1,800+',
    },
  ]

  const testimonials = [
    {
      name: 'Jennifer Mitchell',
      role: 'CEO, Tech Solutions',
      quote: 'Exceptional service every single time. The drivers are professional and the vehicles immaculate.',
      rating: 7,
    },
    {
      name: 'Robert Chen',
      role: 'Executive Director',
      quote: 'I have used Elite Chauffeur for over a year. Punctuality and professionalism are unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Thompson',
      role: 'Event Planner',
      quote: 'Perfect for my clients. They always arrive on time and the experience is completely seamless.',
      rating: 8,
    },
  ]

  const amenities = [
    {
      title: 'Premium Climate Control',
      description: 'Individually adjustable temperature zones for maximum comfort',
    },
    {
      title: 'Entertainment Systems',
      description: 'Integrated premium audio, satellite TV, and streaming capabilities',
    },
    {
      title: 'WiFi Connectivity',
      description: 'High-speed WiFi to stay connected throughout your journey',
    },
    {
      title: 'Professional Refreshments',
      description: 'Complimentary beverages, snacks, and premium amenities on board',
    },
    {
      title: 'Mobile Office',
      description: 'Work-ready environment with charging ports and workspace',
    },
    {
      title: 'Safety Features',
      description: 'Advanced safety systems, premium insurance, and 24/7 monitoring',
    },
  ]

  const events = [
    {
      title: 'Party Night Transportation',
    
      description: 'arrive in style to your party night with our premium mercedes benz sprinter',
      image: '/party.jpg',
    },
    {
      title: 'Gala Night Transportation',
    
      description: 'Arrive in style at exclusive galas with our premium limousine service',
      image: '/gala.jpg',
    },
    {
      title: 'Wedding Day Elegance',
   
      description: 'Make your special day unforgettable with coordinated luxury transportation for your wedding party',
      image: '/wedding.jpg',
    },
    {
      title: 'Corporate Conferences',

      description: 'Executive transportation for major business conferences and corporate events',
      image: '/conference.jpg',
    },
    {
      title: 'VIP Airport Transfers',
    
      description: 'Premium airport transfers with meet-and-greet service for valued clients',
      image: '/airport.jpg',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Request Your Ride',
      description: 'Enter your pickup location, destination, date, and vehicle preference through our platform',
    },
    {
      step: '02',
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmation with your driver details and vehicle information',
    },
    {
      step: '03',
      title: 'Real-Time Tracking',
      description: 'Monitor your driver location in real-time and receive timely arrival notifications',
    },
    {
      step: '04',
      title: 'Premium Experience',
      description: 'Enjoy a seamless, professional journey with white-glove service from pickup to destination',
    },
  ]

  const packages = [
    {
      name: 'Essential',
      price: '$89',
      description: 'Perfect for single journeys',
      features: ['Luxury Sedan', 'Professional Driver', 'Real-time Tracking', 'Basic Insurance'],
    },
    {
      name: 'Executive',
      price: '$149',
      description: 'Ideal for business travelers',
      features: ['Premium Vehicle', 'WiFi & Entertainment', 'Premium Beverages', 'Priority Booking', 'Extended Insurance'],
    },
    {
      name: 'Concierge',
      price: 'Custom',
      description: 'Complete luxury solution',
      features: ['Any Vehicle', 'Dedicated Driver', 'Bespoke Itineraries', '24/7 Concierge', 'VIP Amenities'],
    },
  ]

  const faqs = [
    {
      question: 'How do I book a chauffeur?',
      answer:
        'Simply visit our booking page, enter your journey details, select your preferred vehicle, and confirm. We will send you confirmation and driver details via email.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We offer free cancellation up to 2 hours before your scheduled pickup. Cancellations within 2 hours may incur a fee.',
    },
    {
      question: 'Are your drivers trained?',
      answer:
        'All our drivers are highly trained professionals with extensive experience in luxury transportation. They undergo rigorous background checks and regular training updates.',
    },
    {
      question: 'Do you offer corporate rates?',
      answer:
        'Yes, we offer competitive corporate packages for businesses requiring regular transportation services. Contact our corporate team for custom quotes.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, bank transfers, and corporate invoicing. Payment can be made before or after your journey.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full min-h-[85vh] flex items-center overflow-hidden bg-background"
        >
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/backgroundvid.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                 
<div className='w-full h-36'></div>
                  <h1 className="hero-title text-foreground">
                    Luxury Beyond
                    <br />
                    <span className="text-primary"> Expectations </span>
                  </h1>
                </div>

                <p className="text- text-muted-foreground leading-relaxed max-w-xl font-light md:text-xl">
                  <span className='font-bold'>Experience</span> the epitome of private transportation. Elite drivers, immaculate vehicles, and unwavering punctuality <span className='font-bold'>for discerning clients.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-10 rounded">
                  <Link href="#booking" className="cta-button">
                    Book Your Ride
                  </Link>   
                         
                  <a href="#services" className="cta-button-secondary">
                    Explore Services
                  </a>   
                </div>

                {/* Star Rating Stats with User Avatars */}
                <div className="mt-8 p-4 bg-secondary/30 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-primary fill-primary" />
                          ))}
                        </div>
                        <span className="text-lg font-bold text-foreground">4.9</span>
                        <span className="text-xs text-muted-foreground">(2,847)</span>
                      </div>
                    </div>
                    <div className="flex -space-x-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-background flex items-center justify-center text-white text-xs font-semibold">JD</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 border-2 border-background flex items-center justify-center text-white text-xs font-semibold">RC</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-background flex items-center justify-center text-white text-xs font-semibold">ST</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 border-2 border-background flex items-center justify-center text-white text-xs font-semibold">MJ</div>
                      <div className="w-8 h-8 rounded-full bg-border border-2 border-background flex items-center justify-center text-muted-foreground text-xs font-semibold">+50</div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {[
                      { stars: 5, percentage: 78 },
                      { stars: 4, percentage: 15 },
                      { stars: 3, percentage: 5 },
                      { stars: 2, percentage: 1 },
                      { stars: 1, percentage: 1 }
                    ].map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-2">
                        <div className="flex items-center gap-1 w-12">
                          <span className="text-xs text-muted-foreground">{rating.stars}</span>
                          <Star size={10} className="text-primary fill-primary" />
                        </div>
                        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-8 text-right">{rating.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

               
                <div className="border-t border-border pt-10 mt-8">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-2xl font-bold text-primary">500+</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase mt-2">
                        Premium Rides
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">24/7</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase mt-2">
                        Available
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">96%</p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase mt-2">
                        Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block relative">

             
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-secondary/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-semibold tracking-widest text-xs uppercase">
                    Our Story
                  </p>
                  <h2 className="section-title text-foreground leading-tight">
                    Redefining Luxury
                    <br />
                    Transportation
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/40" />
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    With over <Counter value={15} suffix="+" duration={1500} className="font-semibold text-foreground" /> years of excellence, Elite Chauffeur has set the standard for premium transportation services. We believe luxury is not just about the vehicle—it's about the complete experience.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Our fleet of meticulously maintained vehicles, combined with our rigorously trained chauffeurs, ensures every journey is distinguished by professionalism, discretion, and uncompromising attention to detail.
                  </p>
                </div>

                {/* Core Values */}
                <div className="space-y-4 pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground tracking-widest uppercase">
                    Our Core Values
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-1 bg-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Integrity</p>
                        <p className="text-xs text-muted-foreground">Transparent and honest service</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1 bg-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Excellence</p>
                        <p className="text-xs text-muted-foreground">Uncompromising quality standards</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1 bg-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Discretion</p>
                        <p className="text-xs text-muted-foreground">Your privacy is our priority</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1 bg-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Reliability</p>
                        <p className="text-xs text-muted-foreground">On-time, every time service</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="#booking" className="inline-block pt-4">
                  <span className="text-sm font-semibold text-primary tracking-widest uppercase hover:text-primary/80 transition-colors flex items-center gap-2 group">
                    Experience the Difference
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Visual Elements */}
              <div className="relative hidden lg:block">
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background border border-border p-6 rounded-sm hover:border-primary/50 transition-colors duration-300">
                      <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                      <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Available</p>
                    </div>
                    <div className="bg-background border border-border p-6 rounded-sm hover:border-primary/50 transition-colors duration-300">
                      <p className="text-3xl font-bold text-primary mb-2">
                        <Counter value={15} suffix="+" duration={1500} />
                      </p>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                        Years in Business
                      </p>
                    </div>
                    <div className="bg-background border border-border p-6 rounded-sm hover:border-primary/50 transition-colors duration-300">
                      <p className="text-3xl font-bold text-primary mb-2">
                        <Counter value={10} suffix="+" duration={1000} />
                      </p>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                        Premium Vehicles
                      </p>
                    </div>
                    <div className="bg-background border border-border p-6 rounded-sm hover:border-primary/50 transition-colors duration-300">
                      <p className="text-3xl font-bold text-primary mb-2">
                        <Counter value={97} suffix="%" duration={1500} />
                      </p>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
                        On-Time Rating
                      </p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="pt-4 space-y-2">
                    <div className="h-12 w-1 bg-gradient-to-b from-primary to-primary/20" />
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">
                      Trusted by executives, celebrities, and discerning travelers worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-20">
              <h2 className="section-title mb-4 text-foreground">Services</h2>
              <div className="accent-line" />
            </div>

            <div className="space-y-0 divide-y divide-border">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="service-card group flex items-start justify-between py-12 md:py-16"
                  >
                    <div className="flex-1 pr-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon size={32} className="text-primary flex-shrink-0" />
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-display">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="hidden md:flex items-center flex-shrink-0">
                      <ArrowRight size={24} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Events Carousel Section */}
        <section className="py-32 bg-primary/5 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Places You Need Us</h2>
              <div className="accent-line" />
              <p className="text-lg text-muted-foreground mt-6 max-w-3xl leading-relaxed">
                Discover premium transportation solutions for your special moments
              </p>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                  >
                    <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
                            {event.date}
                          </p>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {event.description}
                        </p>
                        <button className="mt-6 w-full py-2 px-4 border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-2 mt-8">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="py-32 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-20">
              <h2 className="section-title mb-4 text-foreground">Our Fleet</h2>
              <div className="accent-line" />
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
                Meticulously maintained vehicles representing the pinnacle of luxury and comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fleet.map((vehicle, index) => (
                <div key={index} className="group">
                  <div className="relative h-80 overflow-hidden bg-secondary/50 border border-border mb-6">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground font-display">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {vehicle.description}
                    </p>
                    <div className="pt-4 border-t border-border/50 space-y-3">
                      <p className="text-xs font-semibold text-primary tracking-widest uppercase">
                        {vehicle.specs}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Hourly</span>
                          <span className="text-sm font-semibold text-foreground">{vehicle.hourlyRate}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Daily</span>
                          <span className="text-sm font-semibold text-foreground">{vehicle.dailyRate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="section-title mb-4 text-foreground">Reserve Your Ride</h2>
                <div className="accent-line mb-8" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Book instantly with our streamlined reservation system. Secure, fast, and transparent pricing.
                </p>

                <form className="space-y-8">
                  {/* Trip Information Section */}
                  <div className="pb-8 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-6 tracking-wider">TRIP INFORMATION</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          TRIP TYPE
                        </label>
                        <select value={tripType} onChange={(e) => setTripType(e.target.value)} className="w-full px-0 py-3 bg-background text-white border-b border-border focus:border-primary outline-none transition-colors text-foreground ">
                          <option className="hover:bg-black/80">One-way</option>
                          <option className="hover:bg-black/80">Round Trip</option>
                          <option className="hover:bg-black/80">Hourly Booking</option>
                          <option className="hover:bg-black/80">Airport Transfer</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          PICKUP LOCATION
                        </label>
                        <input
                          type="text"
                          placeholder="Address or landmark"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          DROP-OFF LOCATION
                        </label>
                        <input
                          type="text"
                          placeholder="Address or landmark"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                            DATE
                          </label>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                            TIME
                          </label>
                          <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground"
                          />
                        </div>
                      </div>

                      {/* Conditional Airport Transfer Fields */}
                      {tripType === 'Airport Transfer' && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                              FLIGHT NUMBER
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., AA1234"
                              value={flightNumber}
                              onChange={(e) => setFlightNumber(e.target.value)}
                              className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                                ARRIVAL/DEPARTURE
                              </label>
                              <select value={arrivalDeparture} onChange={(e) => setArrivalDeparture(e.target.value)} className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground">
                                <option>Arrival</option>
                                <option>Departure</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                                TERMINAL
                              </label>
                              <input
                                type="text"
                                placeholder="e.g., 1 or A"
                                value={terminal}
                                onChange={(e) => setTerminal(e.target.value)}
                                className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Passenger Information Section */}
                  <div className="pb-8 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-6 tracking-wider">PASSENGER INFORMATION</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                            NUMBER OF PASSENGERS
                          </label>
                          <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground">
                            <option>1</option>
                            <option>2</option>
                            <option>3-4</option>
                            <option>5-6</option>
                            <option>7+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                            NUMBER OF LUGGAGE
                          </label>
                          <select value={numLuggage} onChange={(e) => setNumLuggage(e.target.value)} className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle & Special Requirements Section */}
                  <div className="pb-8 border-b border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-6 tracking-wider">VEHICLE & PREFERENCES</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          VEHICLE TYPE
                        </label>
                        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground">
                          <option>Mercedes-Benz S-Class</option>
                          <option>Mercedes-Maybach</option>
                          <option>Rolls-Royce Phantom</option>
                          <option>Cadillac Escalade ESV</option>
                          <option>Mercedes-Benz V-Class</option>
                          <option>Mercedes-Benz Sprinter</option>
                          <option>Luxury Mini Coach</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide">
                          SPECIAL REQUIREMENTS
                        </label>
                        <div className="space-y-3 pt-2">
                          {['Child seat', 'Wheelchair access', 'Extra luggage space', 'WiFi & Power'].map((req) => (
                            <label key={req} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={specialRequirements.includes(req)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSpecialRequirements([...specialRequirements, req])
                                  } else {
                                    setSpecialRequirements(specialRequirements.filter(r => r !== req))
                                  }
                                }}
                                className="w-4 h-4 rounded border-border"
                              />
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-6 tracking-wider">PAYMENT METHOD</h3>
                    
                    <div>
                      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground">
                        <option>Pay Later</option>
                        
                        <option>Invoice</option>
                      </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-3 tracking-wide mt-4">
                          ADDITIONAL INFO
                        </label>
                        <input
                          type="text"
                          placeholder="additional information for driver"
                          value={Additional}
                          onChange={(e) => setAdditional(e.target.value)}
                          className="w-full px-0 py-3 bg-background border-b border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    <div className="pt-8">
                      <button type="submit" className="cta-button w-full">
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
                    Security
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Verified Drivers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All drivers undergo comprehensive background checks and professional training
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
                    Reliability
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Punctuality Guaranteed</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time tracking and GPS monitoring ensure you arrive exactly on time, every time
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
                    Comfort
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Premium Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every vehicle is meticulously maintained with premium amenities, WiFi, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-32 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Uncompromising Comfort</h2>
              <div className="accent-line" />
              <p className="text-lg text-muted-foreground mt-6 max-w-3xl leading-relaxed">
                Every journey is designed to exceed expectations. Our vehicles feature premium amenities crafted for discerning travelers who understand the value of refined travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="border border-border p-8 hover:border-primary/50 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{amenity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Seamless Experience</h2>
              <div className="accent-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="space-y-4">
                  <p className="text-5xl font-bold text-primary/20 font-serif">{item.step}</p>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:flex pt-8">
                      <ChevronRight size={24} className="text-primary/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-32 bg-secondary border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title mb-4 text-foreground">The Elite Difference</h2>
                <div className="accent-line mb-8" />
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In the world of luxury transportation, excellence is the only acceptable standard. We don't just move people from point A to point B—we craft experiences that reflect your status and values.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Vetted Excellence</h4>
                        <p className="text-sm text-muted-foreground">Every driver undergoes rigorous screening, training, and continuous professional development</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Immaculate Fleet</h4>
                        <p className="text-sm text-muted-foreground">Premium vehicles maintained to the highest standards with regular detailing and mechanical care</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Unwavering Discretion</h4>
                        <p className="text-sm text-muted-foreground">Your privacy is paramount. We maintain confidentiality in all interactions and bookings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background border border-border p-8">
                  <p className="text-3xl font-bold text-primary mb-2">
                    <Counter value={15} suffix="+" duration={1500} />
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Years of Excellence</p>
                </div>
                <div className="bg-background border border-border p-8">
                  <p className="text-3xl font-bold text-primary mb-2">
                    <Counter value={1000} suffix="+" prefix="" duration={2000} />
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Satisfied Clients</p>
                </div>
                <div className="bg-background border border-border p-8">
                  <p className="text-3xl font-bold text-primary mb-2">
                    <Counter value={10} suffix="+" duration={1000} />
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Premium Vehicles</p>
                </div>
                <div className="bg-background border border-border p-8">
                  <p className="text-3xl font-bold text-primary mb-2">
                    <Counter value={97} suffix="%" duration={1500} />
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">On-Time Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Solutions Section */}
        <section className="py-32 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Corporate & Enterprise Solutions</h2>
              <div className="accent-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Account Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated account managers ensure your transportation program runs seamlessly with personalized service and exclusive attention.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Flexible Billing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Customized billing solutions, monthly statements, and transparent pricing tailored to your organization's budget and needs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Executive Programs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  VIP treatment, priority dispatch, dedicated driver preferences, and bespoke amenities for your executive team.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Multi-Location Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Consistent, premium service across multiple cities with unified booking, management, and reporting systems.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Event Coordination</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive transportation planning for conferences, galas, incentive events, and corporate gatherings.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Compliance & Reporting</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Detailed analytics, expense tracking, driver performance metrics, and compliance documentation at your fingertips.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-12">
              <p className="text-center text-muted-foreground mb-6">
                Ready to elevate your corporate transportation program?
              </p>
              <div className="flex justify-center">
                <a href="#booking" className="cta-button">
                  Request Enterprise Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Trusted by Discerning Clients</h2>
              <div className="accent-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-6 flex flex-col">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-16">
              <h2 className="section-title mb-4 text-foreground">Questions?</h2>
              <div className="accent-line" />
            </div>

            <div className="space-y-0 divide-y divide-border">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-0 py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
                  >
                    <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <Minus size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <Plus size={20} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="pb-6 animate-in fade-in duration-300">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground border-t border-primary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-primary-foreground/70">
              Ready to Experience
            </p>
            <h2 className="section-title text-primary-foreground mb-8">Premium Luxury Transport</h2>
            <Link href="#booking" className="cta-button bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Reserve Your Journey
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
