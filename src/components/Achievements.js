import React from "react";
import { motion } from "framer-motion";
import picture99 from "./12-korean.jpg";
import picture98 from "./10-korean.jpg";
import picture97 from "./16-korean.jpg";
import picture96 from "./9-women.jpg";
import picture95 from "./15-punjab.jpg";
import picture94 from "./23-march.jpg";
import picture93 from "./2018-fais.jpg";
import picture92 from "./rawalpindi.jpg";
import picture91 from "./14-august.jpg";
import picture90 from "./18-div.jpg";
import picture89 from "./inter-cen.jpg";
import picture88 from "./anf-sindh.jpg";
import picture87 from "./punjab-games.jpg";
import picture86 from "./jashan-azadi.jpg";
import picture85 from "./tenshinkan.jpg";
import picture80 from "./olympics.jpg";
import picture79 from "./malysia.jpg";
import picture78 from "./kids.jpg";
import picture77 from "./13-asian.jpg";
import picture76 from "./world.jpg";

const nationalAchievements = [
  { title: "12th Korean Ambassador National Taekwondo Championship 2017", image: picture99 },
  { title: "10th Korean Ambassador National Taekwondo Championship 2015", image: picture98 },
  { title: "Korean Ambassador National Taekwondo Championship 2016", image: picture97 },
  { title: "9th National Women Karate Championship 2015", image: picture96 },
  { title: "Punjab Women Judo Championship 2015", image: picture95 },
  { title: "23rd March Pakistan Day Celebration 2018", image: picture94 },
  { title: "Yum-e-Pakistan Inter Punjab Division Karate Championship 2018", image: picture93 },
  { title: "Rawal Sports Festival 2nd Runner-Up Karate 2015", image: picture92 },
  { title: "Independence Day 14 August 2023 (MC Kallar Syedan)", image: picture91 },
  { title: "18th Division Inter Unit Karate Championship 2024", image: picture90 },
  { title: "Inter Cen Karate Championship 2022", image: picture89 },
  { title: "ANF Sindh National Junior Karate Championship 2015", image: picture88 },
  { title: "72nd Punjab Games 2019 Lahore", image: picture87 },
  { title: "Jashan Azadi Sports Competition 2014", image: picture86 },
  { title: "22nd National Tenshinkan Karate Championship 2014 Gujrat", image: picture85 },
];

const internationalAchievements = [
  { title: "Prestigious Title of Olympic Champion", image: picture80 },
  { title: "18th Asian Games Jakarta Palembang 2018 Malaysia", image: picture79 },
  { title: "Tsunami Kids Karate Championship - 13 December 2014", image: picture78 },
  { title: "13th South Asian Games December 2019 Nepal", image: picture77 },
  { title: "2019 Korean Ambassadors Cup Taekwondo World Championship", image: picture76 },
];

const Achievements = () => {
  return (
    <div>
      {/* National Achievements Section */}
      <section id="national" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto px-6 space-y-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center mt-16">National Achievements</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {nationalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <h2 className="text-lg font-bold text-blue-600 mb-2">{achievement.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Achievements Section */}
      <section id="international" className="py-16 bg-gradient-to-r from-gray-200 to-gray-300">
        <div className="container mx-auto px-6 space-y-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-16 mt-14 text-center">International Achievements</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {internationalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <h2 className="text-lg font-bold text-blue-600 mb-2">{achievement.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
