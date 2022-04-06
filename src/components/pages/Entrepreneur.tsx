import * as React from "react";

import Headers from "../organisms/Headers/Headers";
import Template from "../template";
import Footer from "../organisms/Footer/Footer";
import TrendingGrid from "../organisms/TrendingGrid/TrendingGrid";
import FullBanner from "../molecules/FullBanner/FullBanner";
import { SearchBox } from "../molecules/SearchBox/SearchBox";

export default function Entrepreneur() {
  const [exploreClick, setExploreClick] = React.useState(false);
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
          <FullBanner />
          <SearchBox />
          <TrendingGrid />
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
