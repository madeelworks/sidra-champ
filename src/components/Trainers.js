import React from "react";
import img111 from "./Trainer-1.jpeg";
import img112 from "./Trainer-2.jpeg";
import img113 from "./Trainer-3.jpeg";
import img114 from "./Trainer-4.jpeg";
import img115 from "./Trainer-5.jpeg";
import img116 from "./Trainer-6.jpeg";

const Trainer = () => {
  return (
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Text Content */}
        <div className="flex flex-col mt-32">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 mt-16">
            SYED OQAIB HUSAIN SHAH (Karate Expert)
          </h2>
          <p className="text-lg text-gray-600 mb-4">
          Syed Oqaib Husain Shah is an exceptional karate trainer who has made a significant impact in the martial arts community. With years of dedication and expertise, he has not only excelled as a trainer but also as a distinguished athlete.          </p>
          <p className="text-lg text-gray-600">
          Syed Oqaib has participated in various national-level tournaments, showcasing his extraordinary skills and discipline. His remarkable performances have earned him numerous medals, making him a celebrated figure in karate. Known for his passion and commitment, he continues to inspire aspiring martial artists through his coaching and achievements. His contributions to karate at the national level have elevated the sport's standard in Pakistan, earning him respect and admiration from peers and students alike.          </p>
          
        </div>

        {/* Right Grid Images */}
        <div className="grid grid-cols-3 gap-4 mt-40 mb-24">
          <img
            src={img111}
            alt="Achievement 1"
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src={img112}
            alt="Achievement 2"
            className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src={img113}
            alt="Achievement 3"
            className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src={img114}
            alt="Achievement 4"
            className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src={img115}
            alt="Achievement 5"
            className="col-span-2 w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>
  );
};

export default Trainer;
