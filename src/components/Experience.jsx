import { motion } from 'framer-motion';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { experienceData } from '../data/data';

const Experience = () => {
  return (
    <div name='experience' className="bg-[#0a192f] h-auto py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-6 inline border-b-4 border-pink-600 "
        >
          Experience
        </motion.h2>

        {/* Timeline for larger screens */}
        <div className="hidden sm:block py-16">
          <Timeline position="alternate" className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2" />
            {experienceData.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <TimelineDot color="primary" />
                  </motion.div>
                  {index < experienceData.length - 1 && (
                    <TimelineConnector className="bg-blue-500" />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    } w-full  bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm`}
                    style={{
                      transformOrigin: index % 2 === 0 ? 'left' : 'right',
                    }}
                  >
                    <Typography variant="h6" className="text-pink-300 mb-2 text-left">
                      {experience.role}
                    </Typography>
                    <Typography variant="subtitle1" className="text-blue-300 mb-2 text-left">
                      {experience.company} - {experience.duration}
                    </Typography>
                    <Typography variant="body2" className="text-gray-400 mb-4 text-left">
                      {experience.location}
                    </Typography>
                    <ul className="list-disc text-left text-sm text-gray-300">
                      {experience.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="mb-2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Content only for smaller screens */}
        <div className="block sm:hidden py-16">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-white bg-opacity-10 p-6 rounded-lg shadow-lg mb-6 backdrop-filter backdrop-blur-sm"
            >
              <Typography variant="h6" className="text-pink-300 mb-2 text-left">
                {experience.role}
              </Typography>
              <Typography variant="subtitle1" className="text-blue-300 mb-2 text-left">
                {experience.company} - {experience.duration}
              </Typography>
              <Typography variant="body2" className="text-gray-400 mb-4 text-left">
                {experience.location}
              </Typography>
              <ul className="list-disc text-left text-sm text-gray-300">
                {experience.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
