import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@noordigital.business",
      action: "mailto:info@noordigital.business"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call or WhatsApp",
      content: "+974 7446 4994",
      action: "tel:+97474464994"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Qatar",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Sun - Thu: 9AM - 6PM",
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready To Get More Leads?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward growing your business with expert digital strategies. 
            Let's craft a plan that maximizes your reach, drives more leads, and ensures measurable success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Contact our team today and start achieving your goals. We're here to help you 
                transform your digital presence and grow your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-purple-600">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action} 
                            className="text-purple-600 hover:text-purple-700 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Website Info */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-purple-900 mb-2">Visit Our Website</h4>
                <a 
                  href="https://www.noordigital.business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  www.noordigital.business
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input type="tel" placeholder="+974 XXXX XXXX" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <Input placeholder="e.g., Website Development, Digital Marketing" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project and requirements..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-purple-900 hover:bg-purple-800 text-white">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Don't wait! Contact us now for a free consultation and let's discuss how we can 
              help transform your business with our comprehensive digital solutions.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

