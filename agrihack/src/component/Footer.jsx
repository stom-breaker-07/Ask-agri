import React from 'react';
import {  Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AgroTech</h3>
            <p className="text-green-200">Empowering farmers with modern technology solutions for sustainable agriculture.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-green-200 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-green-200 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-green-200">Email: info@agrotech.com</p>
            <p className="text-green-200">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} AgroTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}