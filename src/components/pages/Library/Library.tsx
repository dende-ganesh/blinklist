import * as React from "react";
import { Outlet } from "react-router-dom";
import MyLibrary from "../../atoms/MyLibrary/MyLibrary";
import MyLibraryToggle from "../../molecules/MyLibraryToggle/MyLibraryToggle";
import Footer from "../../organisms/Footer/Footer";
import Template from "../../template";
import Headers from "../../organisms/Headers/Headers";

export default function Library() {
  const [exploreClick, setExploreClick] = React.useState(false);
  const [active, setActive] = React.useState("finished");
  function handleChange() {
    setExploreClick(!exploreClick);
  }
  return (
    <Template
      header={
        <Headers handleChange={handleChange} clicked={exploreClick}></Headers>
      }
      content={
        <>
          <MyLibrary>My Library</MyLibrary>
          <MyLibraryToggle
            active={active}
            setActive={(a) => setActive(a)}
          ></MyLibraryToggle>
          <Outlet />
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
