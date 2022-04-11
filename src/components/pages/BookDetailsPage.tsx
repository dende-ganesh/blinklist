import * as React from "react";
import { books } from "../db";
import BookGrid from "../organisms/BookGrid/BookGrid";
import Headers from "../organisms/Headers/Headers";
import Template from "../template";
import MyLibrary from "../atoms/MyLibrary/MyLibrary";
import Footer from "../organisms/Footer/Footer";
import BookDetailGrid from "../organisms/BookDetailGrid/BookDetailGrid";

export interface ILibraryProps {}

export default function Library(props: ILibraryProps) {
  const [exploreClick, setExploreClick] = React.useState(false);
  function handleChange() {
    setExploreClick((exploreClick) => !exploreClick);
  }
  return (
    <Template
      header={
        <Headers handleChange={handleChange} clicked={exploreClick}></Headers>
      }
      content={<BookDetailGrid />}
      footer={<Footer></Footer>}
    ></Template>
  );
}
