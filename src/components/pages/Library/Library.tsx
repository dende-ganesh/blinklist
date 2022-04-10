import * as React from "react";
import { Outlet } from "react-router-dom";
import MyLibrary from "../../atoms/MyLibrary/MyLibrary";
import MyLibraryToggle from "../../molecules/MyLibraryToggle/MyLibraryToggle";
import Footer from "../../organisms/Footer/Footer";
import Template from "../../template";
import Headers from "../../organisms/Headers/Headers";

export default function Library() {
  const [active, setActive] = React.useState("finished");

  return (
    <Template
      header={<Headers></Headers>}
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
