"use client"
import React from "react"
import { useState } from "react"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterData {
  newsletter: {
    title: string
    description: string
    placeholder: string
  }
  sections: FooterSection[]
  copyright: string
  brandName: string
}

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission logic here
    setEmail("")
  }

  const footerData : FooterData = {
  "newsletter": {
    "title": "Subscribe for Updates",
    "description": "Stay updated with the latest news in cryptocurrency.",
    "placeholder": "Enter your email"
  },
  "sections": [
    {
      "title": "Company",
      "links": [
        { "label": "Company Details", "href": "/company" },
        { "label": "Mission", "href": "/mission" },
        { "label": "Values", "href": "/values" }
      ]
    },
    {
      "title": "Resources",
      "links": [
        { "label": "About Us", "href": "/about" },
        { "label": "FAQs", "href": "/faqs" },
        { "label": "Support Center", "href": "/support" },
        { "label": "Contact Us", "href": "/contact" }
      ]
    },
    {
      "title": "Legal",
      "links": [{ "label": "Privacy Policy", "href": "/privacy" }, { "label": "Terms of Service", "href": "/terms" }]
    },
    {
      "title": "Connect",
      "links": [
        { "label": "Instagram", "href": "https://instagram.com" },
        { "label": "Facebook", "href": "https://facebook.com" },
        { "label": "LinkedIn", "href": "https://linkedin.com" },
        { "label": "Twitter/X", "href": "https://twitter.com" }
      ]
    }
  ],
  "copyright": "© 2025 Licdora. All Rights Reserved.",
  "brandName": "Bulipe Exchange"
}


  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Newsletter section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-2">{footerData.brandName}</h2>
            <h3 className="text-lg font-semibold mb-3">{footerData.newsletter.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{footerData.newsletter.description}</p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder={footerData.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                required
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>

          {/* Footer sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
