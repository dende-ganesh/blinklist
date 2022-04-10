import * as React from "react";
import Headers from "../../organisms/Headers/Headers";
import Template from "../../template";
import Footer from "../../organisms/Footer/Footer";
import BookDetailGrid from "../../organisms/BookDetailGrid/BookDetailGrid";

export default function BookDetailsPage() {
  return (
    <Template
      header={<Headers></Headers>}
      content={<BookDetailGrid />}
      footer={<Footer></Footer>}
    ></Template>
  );
}
