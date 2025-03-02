import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const EMAILJS_SERVICE_ID = 'service_b72k6bi';
const EMAILJS_TEMPLATE_ID = 'template_gx6ymac';
const EMAILJS_PUBLIC_KEY = 'jFpB1m3tkne8zl-FD';

function ContactUs() {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Krishi Connect Team'
            };

            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                setShowSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setShowSuccess(false), 3000);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqItems = [
        {
            question: 'How can I list my crops on the marketplace?',
            answer: 'Go to the Marketplace page and click "List New Crop". Fill in the details and submit the form.'
        },
        {
            question: 'How accurate is the weather information?',
            answer: 'Our weather data comes directly from OpenWeatherMap API and is updated every 15 minutes.'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We currently accept UPI, credit/debit cards, and net banking for transactions.'
        },
        {
            question: 'How do I contact a seller?',
            answer: 'You can contact sellers directly through the messaging system available on each crop listing.'
        }
    ];

    const SuccessNotification = () => (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 ${
                isDarkMode ? 'bg-muted-olive text-light-gray' : 'bg-muted-green text-earth-brown'
            }`}
        >
            <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
            <span>Message sent successfully!</span>
        </motion.div>
    );

    return (
        <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-dark-earth-brown text-light-gray' : 'bg-golden-beige text-earth-brown'}`}>
            <AnimatePresence>
                {showSuccess && <SuccessNotification />}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto">
                <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`}>Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full px-4 py-2 rounded-md border ${
                                        isDarkMode 
                                            ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                                            : 'bg-muted-green border-golden-beige text-earth-brown'
                                    }`}
                                    required
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full px-4 py-2 rounded-md border ${
                                        isDarkMode 
                                            ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                                            : 'bg-muted-green border-golden-beige text-earth-brown'
                                    }`}
                                    required
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`w-full px-4 py-2 rounded-md border ${
                                        isDarkMode 
                                            ? 'bg-muted-olive border-dark-earth-brown text-light-gray' 
                                            : 'bg-muted-green border-golden-beige text-earth-brown'
                                    }`}
                                    rows={5}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                                    isDarkMode 
                                        ? 'bg-neon-green hover:bg-muted-olive text-dark-earth-brown' 
                                        : 'bg-farm-green hover:bg-muted-green text-white'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`}>Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Mail className={`w-6 h-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                                <div>
                                    <p className={`font-medium ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Email</p>
                                    <p className={isDarkMode ? 'text-light-gray' : 'text-earth-brown'}>support@krishiconnect.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className={`w-6 h-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                                <div>
                                    <p className={`font-medium ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Phone</p>
                                    <p className={isDarkMode ? 'text-light-gray' : 'text-earth-brown'}>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                                <div>
                                    <p className={`font-medium ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>Address</p>
                                    <p className={isDarkMode ? 'text-light-gray' : 'text-earth-brown'}>123 Farm Street, Agri-Tech Park, Bengaluru, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                    <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`}>Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`rounded-lg shadow-md ${
                                    isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-4 text-left flex justify-between items-center"
                                >
                                    <span className={`font-medium ${isDarkMode ? 'text-light-gray' : 'text-earth-brown'}`}>{faq.question}</span>
                                    {openFAQ === index ? (
                                        <ChevronUp className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                                    ) : (
                                        <ChevronDown className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="p-4 pt-0 text-sm"
                                        >
                                            <p className={isDarkMode ? 'text-light-gray' : 'text-earth-brown'}>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;