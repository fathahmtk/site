
import React from 'react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Complete online shopping solution with payment integration",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Restaurant POS System",
      description: "Point of sale system for restaurants with inventory management",
      image: "https://via.placeholder.com/400x300",
      technologies: ["ERPNext", "Python", "MySQL"],
      category: "POS Systems"
    },
    {
      id: 3,
      title: "Mobile Delivery App",
      description: "Food delivery application for iOS and Android",
      image: "https://via.placeholder.com/400x300",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      category: "Mobile Apps"
    },
    {
      id: 4,
      title: "Business ERP Solution",
      description: "Custom ERPNext implementation for manufacturing company",
      image: "https://via.placeholder.com/400x300",
      technologies: ["ERPNext", "Python", "PostgreSQL"],
      category: "ERP Systems"
    }
  ]

  const categories = ["All", "Web Development", "POS Systems", "Mobile Apps", "ERP Systems"]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and digital solutions delivered for businesses across Qatar and the GCC region.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join our satisfied clients and let us help you build your next digital solution.
          </p>
          <button className="bg-white text-purple-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
