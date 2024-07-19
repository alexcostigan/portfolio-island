import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants'

const About = () => {
    return (
        <section className="max-container px-4 md:px-8 lg:px-12 py-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Hello, I'm <span className="text-blue-500 font-semibold">Alex Costigan</span>
            </h1>
            <div className="mt-6 text-center text-gray-700">
                <p className="text-lg md:text-xl">I am a software developer based in Manchester, specialising in front-end development.</p>
            </div>
            <div className="py-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
                    My Skills
                </h3>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {skills.map((skill) => (
                        <div className="relative w-24 h-24 bg-gray-200 rounded-xl shadow-md flex items-center justify-center">
                            <div className="absolute inset-0 bg-white rounded-xl" />
                            <div className="relative z-10 flex items-center justify-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-2/3 h-2/3 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='text-2xl md:text-3xl font-semibold text-center text-gray-800'>Work Experience</h3>
                <div className='mt-6 text-center text-gray-600'>
                    <p className='text-lg md:text-xl'>
                        I've collaborated with various companies, honing my skills and working with amazing teams. Here's a glimpse into my journey:
                    </p>
                </div>

                <div className='mt-12'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg, color: '#fff' }}
                                icon={
                                    <div
                                        className={`flex items-center justify-center w-full h-full rounded-full`}
                                        style={{ backgroundColor: experience.iconBg }}
                                    >
                                        {/* Optional: Add icon or logo */}
                                    </div>
                                }
                                contentStyle={{
                                    borderLeft: `4px solid ${experience.iconBg}`,
                                    boxShadow: "none",
                                    borderRadius: '8px',
                                }}
                                contentArrowStyle={{ borderRight: `7px solid ${experience.iconBg}` }}
                            >
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-base font-medium text-gray-700'>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='mt-4 list-disc pl-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-gray-600 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default About