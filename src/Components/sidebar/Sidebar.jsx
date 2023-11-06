import Button from "./toggleButton/Button"
import Links from "./links/Links"
import "./sidebar.scss"
import { useState } from "react"
import { motion } from "framer-motion"

const Sidebar = () => {

   const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            zIndex: 100,
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            zIndex: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 40
            }
        }
    }


 

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
        <Button setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar