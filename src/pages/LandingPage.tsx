
import { Link } from "react-router-dom";
import { ArrowRight, Star, User, Leaf, Sprout, CloudRain } from "lucide-react";
import { motion } from "framer-motion";


const LandingPage = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-harvest-orange" />,
      title: "Real-time Market Prices",
      description: "Stay updated with the latest market trends and pricing for your crops.",
    },
    {
      icon: <CloudRain className="w-6 h-6 text-neon-green" />,
      title: "Accurate Weather Forecasts",
      description: "Get AI-powered weather updates to plan your farming activities effectively.",
    },
    {
      icon: <Sprout className="w-6 h-6 text-farm-green" />,
      title: "Crop Management Tools",
      description: "Monitor soil health, get pest control alerts, and optimize your yield.",
    },
    {
      icon: <User className="w-6 h-6 text-harvest-orange" />,
      title: "Farmer Community Support",
      description: "Connect with experienced farmers and agricultural experts for guidance.",
    },
  ];

  const reviews = [
    {
      name: "Ramesh Kumar",
      rating: 5,
      comment: "This platform has transformed my farming business. The market prices are always accurate!",
    },
    {
      name: "Suresh Patel",
      rating: 4,
      comment: "Great weather forecasts and crop advice. Helped me increase my yield by 20%.",
    },
    {
      name: "Anita Sharma",
      rating: 5,
      comment: "The community support is amazing. I've learned so much from other farmers.",
    },
  ];

  return (
    <div className="min-h-screen bg-golden-beige text-earth-brown">
      {/* Hero Section */}
      <div className="relative py-24 px-6 text-center bg-gradient-to-br from-farm-green to-dark-earth-brown text-white overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-lg"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full backdrop-blur-lg"
        ></motion.div>

        <h1 className="text-5xl font-extrabold mb-6">
          Krishi Connect
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transform your farming experience with AI-driven insights, real-time updates, and a
          supportive farming community.
        </p>
        <div className="space-x-4">
          <Link
            to="/Auth"
            className="inline-flex items-center px-8 py-4 bg-harvest-orange text-white font-semibold rounded-lg shadow-lg hover:bg-dark-earth-brown transition-all"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/Auth"
            className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-dark-earth-brown transition-all"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-farm-green to-dark-earth-brown text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Farmers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white text-dark-earth-brown rounded-2xl shadow-md"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-harvest-orange" />
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Thousands of Farmers Today!</h2>
        <p className="text-xl mb-8">
          Sign up now and take your farming to the next level with digital solutions.
        </p>
        <div className="space-x-4">
          <Link
            to="/Auth"
            className="inline-flex items-center px-8 py-4 bg-harvest-orange text-white font-semibold rounded-lg shadow-lg hover:bg-dark-earth-brown transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
