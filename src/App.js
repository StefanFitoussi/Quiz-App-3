import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import Cards from "./components/pages/Cards";
import Create from "./components/pages/Create";
import Profile from "./components/pages/Profile";

function App() {
  const [page, setPage] = useState("home");

  const cards = [
    {
      isBookmarked: true,
      question: "Wie viel KG kann Chris Bankdrücken",
      answer: "150 Kg",
      tag: ["strongman", "gains", "Powerlifting"],
    },
    {
      isBookmarked: true,
      question: "Welcher ist der höchste Berg der Welt?",
      answer: "Mt. Everest",
      tag: ["mountain", "climbing", "nature"],
    },
    {
      isBookmarked: false,
      question: "Welches ist das größte Meer der Welt?",
      answer: "Pazifik",
      tag: ["ocean", "sealife", "nature"],
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {page === "home" ? (
          <Cards data={cards} showOnlyBookmarked={false} />
        ) : (
          ""
        )}
        {page === "bookmarks" ? (
          <Cards data={cards} showOnlyBookmarked={true} />
        ) : (
          ""
        )}
        {page === "create-cards" ? <Create /> : ""}
        {page === "profile" ? <Profile /> : ""}
        <Create />
        <Profile />
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
