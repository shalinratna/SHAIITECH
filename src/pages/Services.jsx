import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import {
  RocketLaunchIcon,
  CpuChipIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  CogIcon,
  PuzzlePieceIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  LightBulbIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

export function Services() {
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

  const mainServices = [
    {
      icon: <RocketLaunchIcon className="w-12 h-12" />,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of your business processes, systems, and customer experiences.',
      features: [
        'Legacy System Modernization',
        'Business Process Automation',
        'Digital Strategy Consulting',
        'Change Management Support',
        'ROI Measurement & Analytics',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      pricing: 'Custom Quote',
    },
    {
      icon: <CpuChipIcon className="w-12 h-12" />,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes and gain predictive insights.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'ML Pipeline Automation',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'AWS SageMaker', 'OpenAI'],
      pricing: 'From $25K',
    },
    {
      icon: <CloudIcon className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure and migration services.',
      features: [
        'Cloud Migration Strategy',
        'Multi-Cloud Architecture',
        'Serverless Applications',
        'Cloud Security & Compliance',
        '24/7 Monitoring & Support',
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
      pricing: 'From $15K',
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'Progressive Web Apps',
        'App Store Optimization',
        'Mobile Backend Services',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'From $20K',
    },
    {
      icon: <CodeBracketIcon className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      features: [
        'Full-Stack Web Applications',
        'E-commerce Platforms',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
      pricing: 'From $10K',
    },
    {
      icon: <ChartBarIcon className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Warehouse Design',
        'Business Intelligence Dashboards',
        'Real-time Analytics',
        'Data Pipeline Development',
        'Custom Reporting Solutions',
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark'],
      pricing: 'From $18K',
    },
  ];

  const additionalServices = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits, penetration testing, and security implementation.',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Team Augmentation',
      description: 'Scale your development team with our experienced engineers and specialists.',
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Technology Consulting',
      description: 'Strategic technology guidance and architecture consulting for complex projects.',
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: 'DevOps & Infrastructure',
      description: 'CI/CD pipeline setup, infrastructure as code, and deployment automation.',
    },
    {
      icon: <PuzzlePieceIcon className="w-8 h-8" />,
      title: 'System Integration',
      description: 'Seamlessly connect disparate systems and applications across your organization.',
    },
    {
      icon: <CommandLineIcon className="w-8 h-8" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs designed for scalability, security, and performance.',
    },
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions for patient management, telemedicine, and medical data analytics.',
      projects: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical IoT Solutions'],
    },
    {
      name: 'Financial Services',
      description: 'Secure fintech solutions including payment processing, fraud detection, and compliance.',
      projects: ['Digital Banking Platforms', 'Trading Systems', 'Blockchain Solutions'],
    },
    {
      name: 'E-commerce & Retail',
      description: 'Scalable e-commerce platforms, inventory management, and customer analytics.',
      projects: ['Multi-vendor Marketplaces', 'Inventory Management', 'Recommendation Engines'],
    },
    {
      name: 'Manufacturing',
      description: 'IoT solutions, predictive maintenance, and supply chain optimization.',
      projects: ['Smart Factory Solutions', 'Predictive Maintenance', 'Supply Chain Analytics'],
    },
    {
      name: 'Education',
      description: 'Learning management systems, virtual classrooms, and educational analytics.',
      projects: ['Learning Platforms', 'Student Management Systems', 'Virtual Reality Training'],
    },
    {
      name: 'Real Estate',
      description: 'Property management platforms, virtual tours, and market analytics.',
      projects: ['Property Platforms', 'Virtual Tour Solutions', 'Market Analysis Tools'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, goals, and constraints to create a comprehensive project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the system architecture and user experience based on best practices.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance throughout the process.',
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Seamless deployment with comprehensive monitoring and support during launch.',
    },
    {
      step: '05',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and optimization to ensure long-term success.',
    },
  ];

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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Comprehensive technology solutions designed to accelerate your business
              growth and digital transformation journey.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <Button size="lg">
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Core <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship services that help businesses transform, innovate,
              and achieve sustainable growth in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-primary-500 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircleIcon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-sm text-gray-500">Starting from</span>
                        <div className="text-xl font-bold text-primary-500">{service.pricing}</div>
                      </div>
                      <Link to="/contact">
                        <Button size="sm">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs
              and ensure comprehensive digital success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Industry <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge across multiple industries, enabling us to
              deliver solutions that meet specific regulatory and business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Recent Projects:</h4>
                    <ul className="space-y-2">
                      {industry.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center space-x-2">
                          <CheckCircleIcon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery,
              from initial concept to ongoing support and optimization.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg relative z-10">
                    <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Technology <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry best practices
              to deliver solutions that are scalable, secure, and future-ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <div className="space-y-2">
                  {['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <GlobeAltIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
                <div className="space-y-2">
                  {['Node.js', 'Python', 'Java', '.NET', 'Go', 'PostgreSQL'].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CogIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CloudIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our comprehensive technology services can
              accelerate your growth and digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-gray-100 w-full sm:w-auto border-white"
                >
                  Get Free Consultation
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-500 w-full sm:w-auto"
                >
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}