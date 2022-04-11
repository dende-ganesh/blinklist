import * as React from "react";
import { books } from "../db";
import BookGrid from "../organisms/BookGrid/BookGrid";
import Headers from "../organisms/Headers/Headers";
import Template from "../template";
import Footer from "../organisms/Footer/Footer";
import TrendingGrid from "../organisms/TrendingGrid/TrendingGrid";
import FullBanner from "../molecules/FullBanner/FullBanner";
import { SearchBox } from "../molecules/SearchBox/SearchBox";

export interface IEntrepreneurProps {}

export default function Entrepreneur(props: IEntrepreneurProps) {
  const [exploreClick, setExploreClick] = React.useState(false);
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
          <FullBanner />
          <SearchBox />
          <TrendingGrid />
        </>
      }
      footer={<Footer></Footer>}
    ></Template>
  );
}
