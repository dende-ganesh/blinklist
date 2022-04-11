import * as React from "react";
import { books } from "../db";
import BookGrid from "../organisms/BookGrid/BookGrid";
import Headers from "../organisms/Headers/Headers";
import Template from "../template";
import MyLibrary from "../atoms/MyLibrary/MyLibrary";
import Footer from "../organisms/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import MyLibraryToggle from "../molecules/MyLibraryToggle/MyLibraryToggle";

export interface ILibraryProps {}

export default function Library(props: ILibraryProps) {
  const [exploreClick, setExploreClick] = React.useState(false);
  const [active, setActive] = React.useState("finished");
  function handleChange() {
    setExploreClick((exploreClick) => !exploreClick);
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
            setActive={(active) => setActive(active)}
          ></MyLibraryToggle>
          <Outlet />
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
