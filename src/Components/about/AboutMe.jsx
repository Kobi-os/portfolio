import { useState } from "react"
import { motion } from "framer-motion"
import "./aboutme.scss"
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress,} from "react-icons/fa"
const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title:  ' Web Development',
        icons: [
          <FaHtml5/> ,
          FaCss3 ,
          FaJs ,
          FaReact ,
          FaWordpress,
        ],
      },
      {
        title: 'Copywriting',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'SEO',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'AI Content',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },

  {
    title: 'Experience',
    info: [
      {
        title: 'Intern at KNAUF IT 2023 - 2024',
      },
      {
        title: 'Freelance Web Developer',
        stage: '2009 - 2010',
      },
    ],
  },
  
  {
    title: 'Services',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'Education / Courses',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const variants = {
  initial: {
      opacity: 0,
      x: -500,
  },
  animate: {
    x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 1,

      },
  },
}

const AboutMe = () => {


  const [activeSkillsIndex, setActiveSkillsIndex] = useState(null);

  const handleSkillsClick = (index) => {
    setActiveSkillsIndex(index);
  };

  // console.log(index)
  return (
   
    <div className="about">
      <motion.div className="info" 
      variants={variants}
      initial="initial" 
      whileInView="animate">
        <motion.div className="text" variants={variants}>
        Hello, Im Wojtek, a passionate Frontend Developer, Copywriter, and Creative Designer with a love for crafting digital experiences. With a deep-rooted fascination for the intersection of technology and creativity, I specialize in breathing life into web interfaces, crafting compelling copy, and bringing visions to reality through the power of AI-generated graphics.
        My journey in the digital realm began with a curiosity-driven exploration of code, and it quickly evolved into a lifelong pursuit of building seamless and visually appealing websites. </motion.div>
        <motion.div variants={variants}>
            <motion.div className="positions" variants={variants}>
                {aboutData.map((item, itemIndex) => {
                    return (
                        <div className={`skills ${activeSkillsIndex === itemIndex ? 'active' : ''}`}
                        key={itemIndex}
                        onClick={() => handleSkillsClick(itemIndex)}   >
                        {item.title}
                        
                        </div>
                    )
                })}
            </motion.div>
            <motion.div className="experiencesChapter" variants={variants}>
                        {activeSkillsIndex !== null && (
                          <div>
                            {aboutData[activeSkillsIndex].info.map((item, itemIndex) => (
                              <div className="experiences" key={itemIndex}>
                                {item.title}
                              
                              </div>
                            ))}
                          </div>
                        )}
            </motion.div>
            
        </motion.div>
      </motion.div>
    </div>

  )
}

export default AboutMe
