import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='flex flex-col min-h-screen px-4 md:px-8 lg:px-12 py-8 bg-[url("path_to_your_background_image.jpg")] bg-cover bg-center'>
      <div className='flex flex-col flex-grow'>
        <h1 className='text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-12 md:mt-16 lg:mt-24 mb-4'>
          My{" "}
          <span className='text-blue-500 font-semibold'>Projects</span>
        </h1>

        <p className='text-gray-600 mt-2 text-center leading-relaxed mb-12'>
          Here are a few of my personal projects. I update them regularly to showcase my best work.
          <br />
          I enjoy experimenting with new ideas in these projects to gain more experience. I hope you find them interesting!
        </p>

        <div className='flex flex-wrap justify-center gap-12'>
          {projects.map((project) => (
            <div className='bg-white rounded-lg shadow-lg overflow-hidden lg:w-[350px] w-full' key={project.name}>
              <div className='relative w-full h-48'>
                <div className={`absolute inset-0 bg-${project.theme} rounded-lg`} />
                <div className='relative w-full h-full flex items-center justify-center'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-24 h-24 object-contain'
                  />
                </div>
              </div>

              <div className='p-6'>
                <h4 className='text-xl font-semibold text-gray-800'>
                  {project.name}
                </h4>
                <p className='mt-2 text-gray-600'>{project.description}</p>
                <div className='mt-4 flex items-center gap-2'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 font-semibold hover:underline'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;