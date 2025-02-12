import { data } from "../data/data.js";


const Work = () => {
    
  const project = data;
  return (
    <div name='work' className='w-full h-auto md:h-screen text-gray-300 bg-[#0a192f] md:pt-[650px] pt-[180px]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6 font-bold text-xl font-sans'> Check out some of my recent work</p>
        </div>



<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12  ">
          
          
      {project.map((item, index) => (
      <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="  shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div  bg-no-repeat
               bg-cover bg-center "
  >
  
    <div className=" opacity-0 hover:opacity-100 md:w-[450px] h-[250px] ">
      <button className='text-white text-lg p-2 h-auto w-auto mt-4 font-semibold rounded-md bg-blue-500'>
      <span >
        {item.name}
      </span>
      </button>
      <div className="pt-8 text-center ">
        
        <a href={item.github} target="_blank" rel="noreferrer">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        
        <a href={item.live} target="_blank" rel="noreferrer">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
