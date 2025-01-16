import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import r from "./Picture1.jpg";
import img1 from "./certificate-1.jpeg";
import img2 from "./certificate-2.jpeg";
import img3 from "./certificate-3.jpeg";
import img4 from "./certificate-4.jpeg";
import img5 from "./certificate-5.jpeg";
import img6 from "./certificate.jpeg";

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 h-screen flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Image */}
        <motion.img
          src={r}
          alt="Syeda Sidra Medal Moment"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 lg:opacity-0" // Visible behind text on small screens only
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>

        {/* Content */}
        <motion.div
          className="relative z-20 container mx-auto px-4 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center text-center lg:text-left h-full lg:space-x-8"
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div
            className="text-white max-w-2xl lg:w-1/2"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-md">
              Syeda Sidra: From Local Triumphs to Global Glory
            </h1>
            <p className="text-base md:text-lg mb-6 text-gray-300">
              Olympic Champion, National Hero, and an Inspiration for Future Generations.
            </p>
            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              variants={buttonVariants}
            >
              <Link to="/Journey">
                <button className="px-6 py-3 bg-opacity-30 bg-white backdrop-blur-md border border-blue-500 rounded-lg text-base font-semibold text-white hover:bg-opacity-50 transition">
                  Explore Her Journey
                </button>
              </Link>
              <Link to="/achievements">
                <button className="px-6 py-3 bg-opacity-30 bg-white backdrop-blur-md border border-pink-500 rounded-lg text-base font-semibold text-white hover:bg-opacity-50 transition">
                  View Achievements
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image for Large Screens */}
          <motion.div
            className="hidden lg:block lg:w-1/3 lg:max-w-md lg:max-h-[70%]"
            variants={buttonVariants}
          >
            <img
              src={r}
              alt="Syeda Sidra Medal Moment"
              className="rounded-xl shadow-2xl border-4 border-indigo-500 hover:scale-105 transition-transform duration-700 w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* New Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
              Young Olympic Ambassador for Pakistan
            </h2>
            <p className="text-lg text-gray-600 mb-4">
            Syeda Sidra has not only represented Pakistan but has become a symbol of excellence and determination on international platforms. Her journey as a young Olympic ambassador is a testament to her extraordinary talent, unwavering dedication, and passion for sports.            </p>
            <p className="text-lg text-gray-600">
            She has competed in prestigious tournaments across the globe, including countries renowned for their athletic excellence such as France, Germany, Malaysia, Nepal, and South Korea. Her participation in these international events has brought glory to Pakistan and elevated its status in the global sports community.            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 mt-10">
            Representing Pakistan in Global Competitions
            </h2>
            <p className="text-lg text-gray-600">
            <b>France:</b> Participated in European training programs and international championships, demonstrating the skill and finesse of Pakistani athletes on one of the world's biggest sporting stages..            </p>
        
            <p className="text-lg text-gray-600">
            <b> Germany: </b>Competed in high-caliber events where she showcased her resilience and determination against some of the most skilled athletes in the world.            </p>
          
            <p className="text-lg text-gray-600">
            <b> Malaysia: </b>Represented Pakistan in the Asian Games, earning admiration for her dedication and outstanding performances in highly competitive arenas.           </p>
          
            <p className="text-lg text-gray-600">
            <b> Nepal:  </b>Took part in the 13th South Asian Games, where she stood out among athletes from neighboring countries, fostering regional goodwill through sportsmanship.           </p>
          
            <p className="text-lg text-gray-600">
            <b> South Korea:  </b>Engaged in the prestigious Korean Ambassador’s Cup Taekwondo Championship, where her exceptional technique and dedication won accolades.            </p>
          </div>

          {/* Right Grid Images */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src={img1}
              alt="Achievement 1"
              className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src={img2}
              alt="Achievement 2"
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src={img3}
              alt="Achievement 3"
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src={img4}
              alt="Achievement 4"
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
            <img
              src={img5}
              alt="Achievement 5"
              className="col-span-2 w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
