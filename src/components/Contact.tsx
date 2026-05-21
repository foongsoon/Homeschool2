'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title text-gradient">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="card-gradient hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.phone')}</h3>
                  <a
                    href="tel:+60124251556"
                    className="text-yellow-500 font-semibold hover:text-yellow-600 transition"
                  >
                    +60 12-425 1556
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card-gradient hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.whatsapp')}</h3>
                  <a
                    href="https://wa.me/60124251556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 font-semibold hover:text-green-600 transition"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-gradient hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.email')}</h3>
                  <a
                    href="mailto:LOVE@sun.edu.my"
                    className="text-blue-500 font-semibold hover:text-blue-600 transition"
                  >
                    LOVE@sun.edu.my
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card-gradient hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.address')}</h3>
                  <p className="text-gray-600 mb-3">
                    No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia
                  </p>
                  <a
                    href="https://maps.google.com/maps?ll=2.996279,101.445392&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=17369959600029876247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold hover:text-red-600 transition inline-flex items-center gap-2"
                  >
                    {t('cta.tour')} →
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/sunrisecenters/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/SunriseResourceCentre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://ai.sun.edu.my"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition"
                title="AI Assistant"
              >
                🤖
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition"
                  placeholder="+60 12-425 1556"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  ✓ {t('contact.form.success')}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '⏳ Sending...' : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=2.996279,101.445392&hl=en&z=16&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sunrise Education Location"
          />
        </div>
      </div>
    </section>
  );
}
