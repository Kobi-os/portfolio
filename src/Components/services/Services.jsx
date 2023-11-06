import "./services.scss"
import { useState  } from "react";
import { motion } from "framer-motion"

const accordion = [
    {
        title: "Web Development",
        info: "Custom Web Design Front-End Development \nBack-End Development \nContent Management Systems"
    },

    {
        title: "Copywriting & SEO",
        info :  "Welcome to our world of words, where we craft compelling, persuasive, and engaging content that captivates your audience and drives results. Our copywriting services are designed to breathe life into your brand, enhance your message, and leave a lasting impression."
    },

    {
        title: "AI Content Creating",
        info: "Unlock the future of content generation with our AI-powered content creation services. We harness the latest advancements in artificial intelligence to produce high-quality, relevant, and engaging content at scale. "
    },
    {
        title: "Branding",
        info: "Logo Design: Create unique and memorable logos for businesses, organizations, or individuals. Logos are a fundamental aspect of branding and play a crucial role in brand recognition. Brand Identity Development: Develop comprehensive brand identities, including logo design, color palettes, typography, and design guidelines. This helps ensure a consistent and cohesive brand image. Brand Strategy: Assist clients in defining their brand's mission, vision, and values. Help create a strategic plan for how the brand will be positioned in the market. "
    }
]

const images = [
    { title: "webDevelopment", image: "web Developmeny.png" },
    { title: "CopyWriting", image: "CopyWriting.png" },
    { title: "ai", image: "ai.png" },
    { title: "branding", image: "branding.png" }
  ];

    

const Services = () => {

    const [selected, setSelected] = useState(null);
   

    const toggle = (itemIndex) => {
        if (selected == itemIndex) {
            setSelected(null);
        }
        else {
        setSelected(itemIndex)
        }
    }

  return (
    <div className="Services">

        <div className="left">
            <div className="accordion">
                {accordion.map ((item, itemIndex) => (

                    <div className="item" key={itemIndex}>
                        <div className="title" key={itemIndex} onClick={() => toggle(itemIndex)}>
                            <h2>{item.title}</h2>
                            <span>{selected == itemIndex ? <img src="/scroll-down.png" width="40px"/> : <img src="/scroll-down.png" width="40px"/>}</span>
                        </div>
                        
                        <div className={selected == itemIndex ? "content show" : "content"}  key={itemIndex} >
                            {item.info}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="right">
        {selected !== null && images[selected] && (
          <motion.div key={selected}>
            <motion.img src={images[selected].image} alt={images[selected].title} height="950px" width="950px"     initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} />
          </motion.div>
        )}
  
        </div>

    </div>
  )
}

export default Services
