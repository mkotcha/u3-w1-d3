import { Component } from "react";

import Jumbo from "./Jumbo";
import MyNav from "./MyNav";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import BookList from "./BookList";
let categoryArr = null;

class EpiBooks extends Component {
  state = {
    category: "scifi",
    filter: "",
  };

  filter = event => {
    event.preventDefault();
    this.setState({ filter: event.target.filter.value });
  };

  render() {
    switch (this.state.category) {
      case "fantasy":
        categoryArr = fantasy;
        break;
      case "history":
        categoryArr = history;
        break;
      case "horror":
        categoryArr = horror;
        break;
      case "romance":
        categoryArr = romance;
        break;
      case "scifi":
        categoryArr = scifi;
        break;

      default:
        categoryArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];
        break;
    }

    categoryArr = categoryArr.filter(elm => elm.title.toLowerCase().includes(this.state.filter.toLowerCase()) >= 1);

    return (
      <>
        <MyNav classIstance={this} />
        <Jumbo classIstance={this} />
        <BookList books={categoryArr} />
      </>
    );
  }
}

export default EpiBooks;
