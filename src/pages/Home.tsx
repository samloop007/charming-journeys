import { motion } from 'framer-motion';
import { ArrowRight, Compass, Map, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import blogsData from '@/data/blogs.json';

const heroImages = [
  require('@/assets/blog-greece.jpg'),
  require('@/assets/blog-iceland.jpg'),
  require('@/assets/blog-japan.jpg'),
  require('@/assets/blog-morocco.jpg'),
  require('@/assets/blog-mountains.jpg'),
  require('@/assets/blog-safari.jpg'),
  require('@/assets/hero-travel.jpg'),
];

const Home = () => {
  const featuredBlogs = blogsData.slice(0, 3);
  const categories = [
    { name: 'Adventure', icon: Compass, count: 12 },
    { name: 'Culture', icon: Map, count: 8 },
    { name: 'Beach', icon: Camera, count: 6 },
    { name: 'Wildlife', icon: Camera, count: 4 },
  ];


  // Infinite slider state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-all duration-1000">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Travel Hero ${idx + 1}`}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              draggable={false}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Discover Your Next
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore breathtaking destinations, travel tips, and inspiring stories from around the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blogs">
                <Button size="lg" className="gap-2">
                  Explore Blogs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-sunset">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-muted-foreground">Our most loved travel adventures</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blogs">
              <Button variant="outline" size="lg" className="gap-2">
                View All Blogs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-muted-foreground">Find your perfect travel inspiration</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-8 rounded-lg border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 text-center cursor-pointer">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} Stories</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of travelers and get inspired by stories from every corner of the globe
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
