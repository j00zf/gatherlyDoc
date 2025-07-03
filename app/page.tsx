"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Star,
  Calendar,
  Mail,
  Clock,
  MapPinIcon as MapPinHouse,
  Heart,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GatherlyEventsLanding() {
  const phoneNumber = "7025648768"
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const handleCall = () => {
    window.open(`tel:+91${phoneNumber}`, "_self")
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your event management services`, "_blank")
  }
  const handlebeavertech = () => {
    // Opens Beaver Tech in a new tab
    window.open("https://beavertech.in", "_blank")
  }
  const stats = [
    { number: "10+", label: "Events", icon: Calendar },
    { number: "10+", label: "Happy Clients", icon: Heart },
    { number: "6+", label: "Location Served", icon: MapPinHouse },
    { number: "2+", label: "Business Events", icon: Building2 },
  ]

  const services = [
    {
      title: "Corporate Events",
      description: "Professional conferences and business meetings",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Wedding Planning",
      description: "Complete wedding coordination services",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Events",
      description: "Birthday parties and celebrations",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const testimonials = [
  {
    name: "Sr. Merin Abraham MLF",
    role: "Principal, Little Flower Vidyanikethan",
    content: "The summer camp for students was exceptionally well-organized and engaging.",
    rating: 5
  },
  {
    name: "Aney Sunny",
    role: "Depeauty Branch Manager",
    content: "They made my son's birthday celebration truly memorable and stress-free.",
    rating: 5
  },
  {
    name: "Alexander Kuthiraveli",
    role: "Teacher",
    content: "The wedding decoration and coordination were flawless — a beautiful experience.",
    rating: 5
  }
]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="https://assets.gatherlyevents.co.in/BM/logo-nobg.png"
            alt="Gatherly Events"
            width={90}
            height={30}
            className="object-contain"
          />
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-purple-600">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-purple-600">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-purple-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button onClick={handleCall} variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
            <Button onClick={handleWhatsApp} size="sm" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

       <div className="container mx-auto px-6 relative z-10 text-center text-white">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Plan Your Event
    <span className="block text-purple-300">With a Personal Touch</span>
  </h1>
  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
    Let our professional team handle every detail without losing the true essence of your event.
  </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleCall} size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Phone className="h-5 w-5 mr-2" />
              Call
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="text-purple-600 border-white hover:bg-white hover:text-purple-700"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index}>
                  <IconComponent className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive event management solutions for all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://assets.gatherlyevents.co.in/gallery/Grgal1.jpg",
              "https://assets.gatherlyevents.co.in/gallery/Grgal2.jpg",
              "https://assets.gatherlyevents.co.in/gallery/Grgal3.jpg",
              "https://assets.gatherlyevents.co.in/gallery/Grgal4.jpg",
              "https://assets.gatherlyevents.co.in/gallery/Grgal1.jpg",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch for a free consultation</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>+91 {phoneNumber}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6" />
              <span>info@gatherlyevents.co.in</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6" />
              <span>Mon - Sat: 9AM - 8PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="text-purple-600 bg-white hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call
            </Button>
            <Button onClick={handleWhatsApp} size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://assets.gatherlyevents.co.in/BM/logo-nobg.png"
                alt="Gatherly Events"
                width={150}
                height={60}
                className="object-contain bg-white p-2 rounded mb-4"
              />
              <p className="text-gray-400">Creating unforgettable experiences through exceptional event management.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#services" className="block text-gray-400 hover:text-white">
                  Services
                </Link>
                <Link href="#gallery" className="block text-gray-400 hover:text-white">
                  Gallery
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: +91 {phoneNumber}</p>
                <p>Email: info@gatherlyevents.co.in</p>
                <p>Mon - Sat: 9AM - 8PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <a onClick={handlebeavertech}>
              <p>&copy; 2025 Designed and Administred by Beaver Tech. All rights reserved.</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
