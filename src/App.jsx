import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import JumboTron from "./components/JumboTron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";

function App() {
  const webgiviewer = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiviewer.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <JumboTron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiviewer} />
    </div>
  );
}

export default App;
