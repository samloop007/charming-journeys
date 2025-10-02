import { motion } from 'framer-motion';
import { Compass, Heart, Camera, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Compass,
      title: 'Adventure',
      description: 'We believe every journey is an opportunity to discover something new about the world and ourselves.',
    },
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Our stories are real, unfiltered experiences shared with passion and genuine enthusiasm.',
    },
    {
      icon: Camera,
      title: 'Storytelling',
      description: 'We capture moments that inspire, educate, and ignite the wanderlust in every reader.',
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'Building a global community of travelers who share their experiences and inspire others.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wanderlust Tales</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a community of passionate travelers sharing stories, tips, and inspiration from every corner of the globe
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              Wanderlust Tales was born from a simple idea: everyone has a story to tell, and every journey deserves to be shared. What started as a personal travel blog has grown into a thriving community of adventurers, dreamers, and explorers from around the world.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              We believe that travel is more than just visiting new places—it's about immersing yourself in different cultures, connecting with people, and creating memories that last a lifetime. Through our stories, we aim to inspire you to step out of your comfort zone and discover the beauty our world has to offer.
            </p>
            <p className="text-foreground leading-relaxed">
              Whether you're planning your next adventure or simply dreaming of far-off places, we're here to guide, inspire, and accompany you on your journey. Join our community and let's explore this beautiful world together.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-sunset rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media, subscribe to our newsletter, and become part of our global community of travelers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe Now
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-border bg-background rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Follow Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
