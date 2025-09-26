import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  LightBulbIcon,
  TrophyIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  GlobeAmericasIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export function About() {
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

  const values = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies to create groundbreaking solutions.',
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the growth and satisfaction of our clients.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring reliability, security, and performance.',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Collaborative Spirit',
      description: 'We believe in transparent communication and work as an extension of your team.',
    },
    {
      icon: <GlobeAmericasIcon className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference in businesses and communities worldwide.',
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'We stay ahead of technology trends and continuously evolve our skills and methodologies.',
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in technology innovation. Former VP of Engineering at Google.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Team Leadership'],
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'AI/ML expert and full-stack architect. PhD in Computer Science from MIT.',
      expertise: ['Artificial Intelligence', 'Cloud Architecture', 'System Design'],
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Engineering',
      bio: 'Engineering excellence advocate with expertise in scalable systems and DevOps.',
      expertise: ['DevOps', 'Microservices', 'Performance Optimization'],
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Award-winning UX/UI designer focused on creating intuitive and beautiful user experiences.',
      expertise: ['User Experience', 'Design Systems', 'Product Strategy'],
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      bio: 'Data science pioneer specializing in machine learning and business intelligence.',
      expertise: ['Machine Learning', 'Data Analytics', 'Business Intelligence'],
    },
    {
      name: 'Lisa Zhang',
      role: 'VP of Client Success',
      bio: 'Client relationship expert ensuring exceptional service delivery and satisfaction.',
      expertise: ['Client Relations', 'Project Management', 'Strategic Consulting'],
    },
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'Started with a vision to democratize cutting-edge technology' },
    { year: '2017', title: 'First Enterprise Client', description: 'Secured Fortune 500 company as our first major client' },
    { year: '2019', title: 'AI Division Launch', description: 'Expanded into artificial intelligence and machine learning' },
    { year: '2021', title: '100+ Projects', description: 'Reached milestone of 100 successful project deliveries' },
    { year: '2023', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific' },
    { year: '2024', title: 'Industry Recognition', description: 'Named "Technology Partner of the Year" by TechAwards' },
  ];

  const stats = [
    { number: '9+', label: 'Years of Excellence' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '25+', label: 'Expert Engineers' },
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
              About <span className="gradient-text">SHAIITECH</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              We are a team of passionate technologists, designers, and strategists
              united by a single mission: turning ambitious dreams into transformative
              digital realities.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2015 by a group of former Silicon Valley engineers,
                  SHAIITECH was born from a simple yet powerful belief: that
                  cutting-edge technology should be accessible to businesses of all sizes.
                </p>
                <p>
                  What started as a small consulting firm has evolved into a full-service
                  technology partner, helping organizations across industries harness
                  the power of digital innovation to achieve extraordinary results.
                </p>
                <p>
                  Today, we're proud to have delivered over 500 successful projects,
                  partnering with everyone from ambitious startups to Fortune 500
                  enterprises. Our track record speaks for itself: 99.9% client
                  satisfaction, zero security breaches, and countless success stories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <RocketLaunchIcon className="w-16 h-16 text-primary-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To become the world's most trusted technology partner, empowering
                organizations to achieve their boldest ambitions through innovative
                digital solutions.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to cutting-edge technology by creating solutions
                that are powerful, scalable, and accessible, enabling our clients to
                focus on what they do best while we handle the technology that drives
                their success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we
              approach every project and client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience
              from top technology companies and prestigious institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-12 h-12 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary-500 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here are the key
              milestones that have shaped SHAIITECH's evolution.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <Card>
                      <div className="text-2xl font-bold text-primary-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
              and technology organizations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { award: 'Technology Partner of the Year', org: 'TechAwards 2024', icon: <TrophyIcon className="w-8 h-8" /> },
              { award: 'Best AI Implementation', org: 'Innovation Summit 2023', icon: <TrophyIcon className="w-8 h-8" /> },
              { award: 'Enterprise Solution Excellence', org: 'Cloud Excellence Awards 2023', icon: <TrophyIcon className="w-8 h-8" /> },
              { award: 'Top 50 Tech Companies', org: 'Business Journal 2022', icon: <TrophyIcon className="w-8 h-8" /> },
            ].map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {recognition.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{recognition.award}</h3>
                  <p className="text-gray-600 text-sm">{recognition.org}</p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Work with the Best?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join the hundreds of companies that trust SHAIITECH to deliver
              exceptional technology solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-gray-100 w-full sm:w-auto border-white"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-500 w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}