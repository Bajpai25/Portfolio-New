/* eslint-disable react/no-unescaped-entities */
import { images } from "../data/data";

const Skills = () => {
  console.log(images); // To verify if the images array is loading correctly

  return (
    <div name="skills" className="w-full h-auto py-24  bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-2xl fonr-bold font-sans">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={image.link} alt={image.title} />
              <p className="my-4">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
