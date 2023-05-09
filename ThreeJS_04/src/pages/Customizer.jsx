import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import {
  EditorTabs,
  FilterTabs,
  DecalTypes,
  ShoesTab,
} from "../config/constants";
import { slideAnimation } from "../config/motion";
import {
  ColorPicker,
  Tab,
  CustomButton,
  FilePicker,
} from "../components";

export default function Customizer() {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    metallic: false,
    stylishShirt: false,
    wireframe: false,
  });

  const handleShowEditors = (tabname) => {
    if (tabname === activeEditorTab) {
      setActiveEditorTab("");
    } else {
      setActiveEditorTab(tabname);
    }
  };

  // show tab content depending on active tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "aipicker":
        return (
          <div className="aipicker-container"><p>Work In Progress... Try again later please😉🙇</p></div>
        );
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return <></>;
    }
  };

  // handle submit
  // const handleSubmit = async (type) => {
  //   if (!prompt) return alert("Please enter a prompt");

  //   try {
  //     // call our backend
  //     setGeneratingImg(true);
  //     const response = await fetch('https://endearing-bublanina-15ddf7.netlify.app/.netlify/functions/api/dalle', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ prompt }),
  //     });
  //     const data = await response.json();
  //     if (data.photo){
  //       handleDecals(type, `data:image/png;base64,${data.photo}`);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setGeneratingImg(false);
  //     setActiveEditorTab("");
  //   }
  // };

  // hande shoe change
  const handleShoeChange = (shoe) => {
    state.shoe = shoe;
  };

  // handle active filter tab
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      case "metallic":
        state.isMetallic = !activeFilterTab[tabName];
        break;
      case "wireframe":
        state.isWireframe = !activeFilterTab[tabName];
        break;
      default:
        state.isFullTexture = false;
        break;
    }
    setActiveFilterTab((prev) => ({ ...prev, [tabName]: !prev[tabName] }));
  };

  // handle decals
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="customss"
            className="absolute top-12 left-[10%] z-10"
            {...slideAnimation("top")}
          >
            {snap.showTooltip && (
              <div className="tooltip-container">
                <p>{snap.tooltip}</p>
              </div>
            )}
          </motion.div>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleShowEditors(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute top-5 right-5 z-20" {...slideAnimation("right")}>
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
            <Tab
              tab={{
                name: "download",
                icon: download,
                tooltip: "Download your amazing shoe design",
              }}
              handleClick={() => downloadCanvasToImage()}
            />
          </motion.div>
          <motion.div
            key="shoes"
            className="absolute top-0 right-0 z-10"
            {...slideAnimation("right")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {ShoesTab.map((tab, index) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleShoeChange(index + 1)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
