import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Our Office',
      details: ['123 Innovation Drive', 'Tech Valley, CA 94043', 'United States'],
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST'],
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      details: ['hello@shaiitech.com', 'support@shaiitech.com'],
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Response Time',
      details: ['< 2 hours during business hours', '< 24 hours on weekends'],
    },
  ];

  const services = [
    'Digital Transformation',
    'AI & Machine Learning',
    'Cloud Solutions',
    'Mobile Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'Consulting',
    'Other',
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+',
    'Need consultation',
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold font-display mb-4">
                  Thank You for Reaching Out!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  We've received your message and will get back to you within 2 business hours.
                  Our team is excited to learn more about your project and discuss how we can help.
                </p>
                <div className="bg-primary-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-primary-700">
                    <strong>Next Steps:</strong> One of our solution architects will review your
                    requirements and schedule a discovery call to discuss your project in detail.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and explore how we can bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card padding="lg">
                  <h2 className="text-2xl font-bold font-display mb-6">
                    Start Your Project
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          {...register('firstName', { required: 'First name is required' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <div className="flex items-center mt-2 text-red-600">
                            <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{errors.firstName.message}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          {...register('lastName', { required: 'Last name is required' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <div className="flex items-center mt-2 text-red-600">
                            <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{errors.lastName.message}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <div className="flex items-center mt-2 text-red-600">
                            <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{errors.email.message}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          {...register('jobTitle')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="CEO, CTO, etc."
                        />
                      </div>
                    </div>

                    {/* Project Information */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <div className="flex items-center mt-2 text-red-600">
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          <span className="text-sm">{errors.service.message}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        {...register('timeline')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        {...register('description', { required: 'Project description is required' })}
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                          errors.description ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please describe your project requirements, goals, and any specific features you need. The more details you provide, the better we can understand and assist with your project."
                      />
                      {errors.description && (
                        <div className="flex items-center mt-2 text-red-600">
                          <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                          <span className="text-sm">{errors.description.message}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        {...register('agreement', { required: 'You must agree to the terms' })}
                        className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <div className="flex-1">
                        <label className="text-sm text-gray-600">
                          I agree to the{' '}
                          <a href="#" className="text-primary-500 hover:text-primary-600 underline">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-primary-500 hover:text-primary-600 underline">
                            Privacy Policy
                          </a>
                          . I understand that SHAIITECH will use my information to respond to my inquiry.
                        </label>
                        {errors.agreement && (
                          <div className="flex items-center mt-2 text-red-600">
                            <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                            <span className="text-sm">{errors.agreement.message}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Send Message
                          <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                        </div>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card>
                  <h3 className="text-xl font-bold font-display mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-primary-500 flex-shrink-0 mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold font-display mb-4">
                    Why Choose SHAIITECH?
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Free initial consultation',
                      'No-obligation project estimate',
                      'Dedicated project manager',
                      'Agile development process',
                      '24/7 support availability',
                      'Transparent communication',
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      Urgent Project?
                    </h3>
                    <p className="text-primary-700 text-sm mb-4">
                      Need to get started immediately? Call us directly for
                      expedited project initiation.
                    </p>
                    <a
                      href="tel:+1-555-123-4567"
                      className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services,
              process, and how we can help your business succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on complexity and scope. Simple websites take 4-8 weeks, while complex enterprise solutions can take 3-12 months. We provide detailed timelines during our initial consultation.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes! We offer comprehensive maintenance and support packages including bug fixes, updates, security monitoring, and feature enhancements. Support is available 24/7 for critical issues.',
              },
              {
                q: 'Can you work with our existing team?',
                a: 'Absolutely. We excel at team augmentation and can integrate seamlessly with your existing development team, providing additional expertise and resources as needed.',
              },
              {
                q: 'What is your development process?',
                a: 'We follow an agile methodology with regular sprints, continuous testing, and frequent client communication. You\'ll have visibility into progress through our project management tools.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes, we understand the importance of confidentiality. We\'re happy to sign NDAs and have strict internal policies to protect your intellectual property and sensitive information.',
              },
              {
                q: 'What technologies do you specialize in?',
                a: 'We work with modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, and more. Our team stays current with the latest industry trends and best practices.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}