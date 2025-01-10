import React from "react";
import { motion } from "framer-motion";
import picture9 from "./picture-9.jpg"; // First journey image
import picture10 from "./picture-10.jpg"; // Second journey image
import picture11 from "./picture-11.jpg"; // Third journey image
import picture4 from "./picture-4.jpg"; // Third journey image
import picture24 from "./picture-24.jpg"; // Third journey image
import picture64 from "./picture-64.jpg"; // Third journey image


const Journey = () => {
  return (
    <section id="journey" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* First Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">
  <motion.div
    className="md:w-[35%]"
    nitial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
      Syeda Sidra: <span className="text-blue-600">A Journey of Triumph and Inspiration</span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Syeda Sidra embarked on her extraordinary journey in Thai Kwon-Do in 2004. With an unwavering passion for
      martial arts, she began her training at a young age, displaying remarkable focus and determination. From her
      first training session, it was evident that Sidra was destined for greatness. A photograph capturing her
      initial days in Thai Kwon-Do reflects her fierce dedication and the spark of a champion in the making.
    </p>
  </motion.div>

  <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src={picture9}
      alt="Syeda Sidra Training"
      className="rounded-lg shadow-lg border-4 border-blue-500 "
    />
  </motion.div>
</div>













<div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">

      <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={picture4}
            alt="Syeda Sidra Training"
            className="rounded-lg shadow-lg border-4 border-blue-500 "
          />
        </motion.div>
        <motion.div
    className="md:w-[35%]"
          
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            <span className="text-blue-600">The Beginning of a Champion's Journey</span>
          </h2>
        
          <p className="text-lg text-gray-700 leading-relaxed mb-4 ">
            Her journey to excellence began at school-level competitions, where she showcased exceptional talent and an
            unrelenting competitive spirit. One of her most defining moments was her first school-level victory, where
            she earned her first medal. This milestone signified the start of her ascent in the sport and fueled her
            ambition for future successes.
          </p>
        </motion.div>  
       
      </div>










      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">
      <motion.div
    className="md:w-[35%]"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
      <span className="text-blue-600">From Local Competitions to Olympic Glory</span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      As Sidra progressed through local and district competitions, her talent became undeniable. She dominated the
      regional and national stages, where her skill, discipline, and resilience earned her recognition as a
      top-tier athlete. Her remarkable journey culminated in her crowning achievement—becoming an Olympic Champion.
    </p>
  </motion.div>

  <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src={picture9}
      alt="Syeda Sidra Victory"
      className="rounded-lg shadow-lg border-4 border-blue-500  ml-auto"
    />
  </motion.div>
</div>



      {/* Second Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">
  <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="relative w-full pb-[100%]">
      <img
        src={picture11}
        alt="Syeda Sidra Victory"
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-4 border-blue-500 object-cover"
      />
    </div>
  </motion.div>
  <motion.div
    className="md:w-[35%]"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
      <span className="text-blue-600">National Victory and Trophy Achievement</span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Sidra’s achievements began to shine on the national stage, where she participated in various competitions representing Pakistan. Her exceptional performance earned her first position at the national level, securing her a well-deserved trophy. This victory not only showcased her talent and hard work but also marked a significant milestone in her journey, reflecting her determination to achieve excellence.
    </p>
  </motion.div>
</div>


      {/* Third Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">
  <motion.div
    className="md:w-[35%]"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
      <span className="text-blue-600">National Excellence at the 13th South Asian Games</span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Sidra’s achievements were not confined to school or district levels; she excelled nationally by showcasing her exceptional talent. Her remarkable performance earned her a gold medal at the 13-South Asian Games 2019, where she proudly represented Pakistan. Draped in the national flag, this victory highlighted her dedication and determination to compete with excellence.
    </p>
  </motion.div>
  <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src={picture24}
      alt="Syeda Sidra Ambassador"
      className="rounded-lg shadow-lg border-4 border-blue-500  ml-auto"
    />
  </motion.div>
</div>



      



<div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20 justify-between">
  <motion.div
    className="md:w-[50%] t-8 md:mt-4 relative flex justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="relative w-full pb-[100%]">
      <img
        src={picture64}
        alt="Syeda Sidra Victory"
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-4 border-blue-500 object-cover"
      />
    </div>
  </motion.div>
  <motion.div
    className="md:w-[35%]"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
      <span className="text-blue-600">Celebrating Success and Team Spirit</span>
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      Syeda Sidra, a renowned Thai Kwon-Do champion, is seen here in a powerful image with fellow athletes after a major competition. This photo captures Sidra standing proudly among a group of accomplished athletes, celebrating their collective achievements. Known for her dedication and discipline, Sidra’s success in Thai Kwon-Do has made her an inspiration to many. Her journey from local competitions to national and international championships reflects her commitment to the sport. This image highlights not only her individual triumphs but also the camaraderie and support she shares with her fellow athletes, symbolizing the strength of teamwork and shared goals in the world of sports.
    </p>
  </motion.div>
</div>






    </section>
  );
};

export default Journey;
