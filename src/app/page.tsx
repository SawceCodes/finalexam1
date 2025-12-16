'use client'

import React, { useEffect, useState } from 'react';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Instagram, 
  Facebook, 
  Menu
} from 'lucide-react';

// Import Shadcn Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

// --- FAKE DATABASE (Mock Data) ---
const services = [
  {
    name: "Signature Cut",
    price: "$65",
    description: "Wash, precision cut, and blowout styling.",
    category: "Haircut"
  },
  {
    name: "Full Balayage",
    price: "$180+",
    description: "Hand-painted highlights for a natural, sun-kissed look.",
    category: "Color"
  },
  {
    name: "Gloss & Tone",
    price: "$50",
    description: "Restore shine and vibrancy to dull hair.",
    category: "Treatment"
  },
  {
    name: "Keratin Treatment",
    price: "$250",
    description: "Smoothing treatment to eliminate frizz for 3 months.",
    category: "Treatment"
  },
  {
    name: "Men's Grooming",
    price: "$45",
    description: "Scissor over comb, wash, and hot towel finish.",
    category: "Haircut"
  },
  {
    name: "Bridal Styling",
    price: "$150",
    description: "Consultation and formal up-do for your special day.",
    category: "Styling"
  }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    text: "The best salon in the city! My balayage has never looked this natural.",
    rating: 5
  },
  {
    name: "Mike Ross",
    text: "Great atmosphere and professional staff. Highly recommend the hot towel service.",
    rating: 5
  },
  {
    name: "Emily Chen",
    text: "Finally found a stylist who understands curly hair. I'm never going anywhere else!",
    rating: 4
  }
];

const hours = [
  { day: "Mon - Fri", time: "9:00 AM - 8:00 PM" },
  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
  { day: "Sunday", time: "Closed" }
];

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handler = () => setShowSignIn(true);
    window.addEventListener("open-signin", handler);
    return () => window.removeEventListener("open-signin", handler);
  }, []);

  const closeAll = () => {
    setShowSignIn(false);
    setShowBooking(false);
    setShowAbout(false);
  };

  const handleViewPortfolio = () => {
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* --- SIGN IN / ACCOUNT CREATION MODAL --- */}
      {showSignIn && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-background rounded-xl shadow-2xl w-full max-w-lg border">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Account
                </p>
                <h3 className="text-xl font-bold">Create or sign in</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={closeAll}>
                ✕
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="account-name">Full name</Label>
                <Input id="account-name" placeholder="Alex Taylor" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-email">Email</Label>
                <Input id="account-email" type="email" placeholder="alex@example.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="account-password">Password</Label>
                  <Input id="account-password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-confirm">Confirm</Label>
                  <Input id="account-confirm" type="password" placeholder="••••••••" />
                </div>
              </div>
              <Button className="w-full">Create account / Sign in</Button>
            </div>
          </div>
        </div>
      )}

      {/* --- ABOUT MODAL --- */}
      {showAbout && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-background rounded-xl shadow-2xl w-full max-w-2xl border">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  About the salon
                </p>
                <h3 className="text-xl font-bold">Accounting 343 Salon</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={closeAll}>
                ✕
              </Button>
            </div>
            <div className="p-6 space-y-4 text-muted-foreground">
              <p className="text-base text-foreground">
                Accounting 343 Salon blends artistry with precision to deliver premium hair care,
                color, and styling experiences tailored to each guest.
              </p>
              <p>
                Our team specializes in modern cuts, dimensional color, balayage, keratin smoothing,
                and event-ready styling. We focus on healthy hair first—using high-quality products
                and techniques that protect integrity while achieving your vision.
              </p>
              <p>
                Purpose-driven service is at our core: we listen closely, educate you on at-home
                care, and craft a look that elevates your confidence. Whether it&apos;s a routine
                refresh or a statement transformation, we aim to make every visit relaxing,
                transparent, and exceptional.
              </p>
              <div className="flex justify-end">
                <Button onClick={closeAll}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- BOOKING MODAL --- */}
      {showBooking && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-background rounded-xl shadow-2xl w-full max-w-2xl border">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Booking
                </p>
                <h3 className="text-xl font-bold">Book an appointment</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={closeAll}>
                ✕
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="booking-name">Name</Label>
                  <Input id="booking-name" placeholder="Jordan Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-phone">Phone</Label>
                  <Input id="booking-phone" placeholder="(212) 555-0199" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="booking-email">Email</Label>
                  <Input id="booking-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-service">Service</Label>
                  <Input id="booking-service" placeholder="Balayage, haircut, styling..." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="booking-date">Preferred date</Label>
                  <Input id="booking-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-time">Preferred time</Label>
                  <Input id="booking-time" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="booking-notes">Notes</Label>
                <Textarea id="booking-notes" placeholder="Tell us about your hair goals..." />
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="outline" onClick={closeAll}>Cancel</Button>
                <Button>Confirm booking</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* --- NAVBAR --- */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scissors className="h-6 w-6 text-primary" />
            <span>Accounting 343 Salon</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" onClick={() => setShowBooking(true)}>
              Book Now
            </Button>
            {/* Mobile Menu Icon (Visual Only for this demo) */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge variant="secondary" className="mb-4">New York&apos;s Top Rated</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Refine Your Style.<br /> 
            <span className="text-primary">Reveal Your Confidence.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience premium hair care tailored to your unique look. 
            From precision cuts to artisan coloring, we bring out your best.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => setShowBooking(true)}>
              <Calendar className="h-4 w-4" /> Book Appointment
            </Button>
            <Button variant="outline" size="lg" onClick={handleViewPortfolio}>
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* --- QUICK INFO --- */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Open 6 Days</h3>
            <p className="text-sm text-muted-foreground">Mon-Sat: Late appointments available</p>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Central Location</h3>
            <p className="text-sm text-muted-foreground">123 Fashion Ave, New York, NY</p>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Call or Text</h3>
            <p className="text-sm text-muted-foreground">(212) 555-0199</p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Expert styling for every occasion.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                  <CardDescription>{service.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                   <Button variant="ghost" className="w-full text-xs h-8">More Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <Card key={i} className="bg-background border-none shadow-sm">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 text-primary"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-sm">- {review.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / FOOTER --- */}
      <footer id="contact" className="bg-slate-900 text-slate-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          {/* Left: Contact Info */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-6">
              <Scissors className="h-6 w-6" />
              <span>Accounting 343 Salon</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Elevating beauty through passion and precision. Visit us for a consultation today.
            </p>
            
            <div className="space-y-4">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between max-w-xs text-sm border-b border-slate-800 pb-2">
                  <span>{h.day}</span>
                  <span className="text-slate-300">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="secondary" size="icon"><Instagram className="h-4 w-4" /></Button>
              <Button variant="secondary" size="icon"><Facebook className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Right: Simple Contact Form */}
          <div className="bg-slate-50 text-slate-900 p-6 rounded-lg shadow-xl">
            <h3 className="font-bold text-xl mb-4">Send a Message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium">Name</label>
                  <Input placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Phone</label>
                  <Input placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium">Email</label>
                <Input placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium">Message</label>
                <Textarea placeholder="I'd like to ask about..." />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>

        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2024 Accounting 343 Salon. All rights reserved. Built for Class Project.
        </div>
      </footer>
    </div>
  );
}