import * as React from "react";
import Headers from "../organisms/Headers/Headers";
import Template from "../template";
import Footer from "../organisms/Footer/Footer";
import BookDetailGrid from "../organisms/BookDetailGrid/BookDetailGrid";

export default function BookDetailsPage() {
  const [exploreClick, setExploreClick] = React.useState(false);
  function handleChange() {
    setExploreClick(!exploreClick);
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
