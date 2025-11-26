import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
// images
import brand from "/brand.ico";

const Navbar = () => {
  return (
    <div className="h-[100px]">
      <Sidebar />

      <div className="m-auto flex h-full max-w-7xl items-center justify-center gap-2">
        <img
          src={brand}
          alt="Brand logo for Arfelo Reed"
          width={70}
          height={70}
        />
        <motion.span
          className="cursor-default font-bold uppercase" 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
        >
          Loay Zeid
        </motion.span>
      </div>
    </div>
  );
};

export default Navbar;
