import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation,
  headTextAnimation,
} from "../config/motion";

export default function Home() {
  const snap = useSnapshot(state);

  const headTextStyle = {
    color: snap.color,
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <div className="flex items-center gap-52 xl:gap-80">
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
              <a
                href="https://twitter.com/Osebest7"
                className="text-xl font-semibold text-red-600 p-2 glassmorphism rounded-lg border hover:shadow-lg transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Me
              </a>
            </div>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text" style={headTextStyle}>
                LET'S <br className="xl:block hidden" /> POLISH.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shoe skin with our brand-new 3D
                customization tool. <strong>Unleash your imagination </strong>{" "}
                and define your own style.
              </p>
              <p className="font-semibold text-red-600">
                Don't Forget to drag and rotate to see it's full glory
              </p>
              <CustomButton
                type="filled"
                title="Polish it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
