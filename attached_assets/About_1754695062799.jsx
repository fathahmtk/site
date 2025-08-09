import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "100+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Globe className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <CheckCircle className="h-8 w-8" />, number: "100%", label: "Customer Satisfaction" }
  ]

  const values = [
    {
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs and work tirelessly to exceed their expectations with unlimited revisions until 100% satisfaction."
    },
    {
      title: "Qatar Market Expertise",
      description: "Deep understanding of the Qatar and GCC business landscape, including VAT compliance and local business requirements."
    },
    {
      title: "End-to-End Solutions",
      description: "From initial concept to final deployment, we handle every aspect of your digital transformation journey."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and best practices to ensure your solutions are future-proof and scalable."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Noor Digital Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Noor Digital Solutions, customer satisfaction is not just a goal—it's the foundation 
                of everything we do. We are committed to delivering the highest quality websites and 
                online solutions that not only meet but exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We strive to help businesses establish a professional online presence, grow their reach, 
                and achieve lasting success. As a Qatar-registered business, we understand the local 
                market and provide tailored solutions for the GCC region.
              </p>
            </div>

            {/* Founder Info */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Abdul Fathah</h3>
              <p className="text-purple-700 font-medium mb-2">Founder, Noor Digital Solutions W.L.L.</p>
              <p className="text-gray-600">
                "Let's grow together! Our mission is to empower businesses with innovative digital 
                solutions that drive real results and sustainable growth."
              </p>
            </div>
          </div>

          {/* Right Content - Stats and Values */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="space-y-2">
                    <div className="text-purple-600 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

