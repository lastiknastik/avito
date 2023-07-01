import React from "react";
import Header from "../../components/header";
import ContainerMain from "../../components/container-main";
import Footer from "../../components/footer";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        {/* TODO: get rid of ContainerMain: move it to local styled components */}
        <ContainerMain />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
