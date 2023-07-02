import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ArticleCard from "../../components/article-card";
import { useParams } from "react-router-dom";

export default function Adv() {
  const { id } = useParams();

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <ArticleCard articleId={id} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
