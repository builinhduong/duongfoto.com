"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Instagram } from "lucide-react"
import { OptimizedTextEffect } from "@/components/ui/optimized-text-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <OptimizedTextEffect
            text="CONTACT"
            className="text-4xl font-bold tracking-tight"
            staggerDelay={0.03}
            duration={0.5}
          />
          <OptimizedTextEffect
            text="Get in touch for collaborations, bookings, or inquiries"
            className="text-gray-500 mt-4 max-w-2xl mx-auto"
            staggerDelay={0.01}
            duration={0.3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-medium mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-gray-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-gray-300 rounded-none px-0 py-2 min-h-[120px] resize-none focus-visible:ring-0 focus-visible:border-black"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full border border-gray-300 bg-transparent text-black hover:bg-black hover:text-white transition-colors",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    SENDING
                  </span>
                ) : (
                  <span className="flex items-center">
                    SEND MESSAGE <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm mt-2"
                >
                  Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">contact@duongfoto.com</p>
                  <p className="text-gray-600">bookings@duongfoto.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+84 123 456 789</p>
                  <p className="text-gray-600">+84 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Studio Location</h3>
                  <p className="text-gray-600">123 Photography Street</p>
                  <p className="text-gray-600">District 1, Ho Chi Minh City</p>
                  <p className="text-gray-600">Vietnam</p>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="h-5 w-5 text-gray-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Social Media</h3>
                  <p className="text-gray-600">Instagram: @duongfoto</p>
                  <p className="text-gray-600">Facebook: /duongfotography</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-medium mb-4">Working Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-800">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600">Saturday</p>
                  <p className="text-gray-800">10:00 AM - 4:00 PM</p>
                </div>
                <div className="col-span-2 mt-2">
                  <p className="text-gray-600">Sunday</p>
                  <p className="text-gray-800">Closed (Available for special bookings)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="aspect-[16/9] w-full bg-gray-100 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69877857486698!3d10.777237089362856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5d0cc80!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715613651184!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
