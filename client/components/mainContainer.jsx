import React, { Component } from "react";
import Nav from "./home.jsx";
import ItemContainer from "./itemContainer.jsx";
import DisplayModel from "./detailsModel";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Anime",
      items: [],
      query: ""
    };
  }

  changeType = type => {
    this.setState({ type });
  };

  getFilteredItems = () => {
    const { items, query } = this.state;
    return items.filter(el =>
      el.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  updateQuery = val => {
    this.setState({ query: val });
  };

  getAnime = async () => {
    try {
      const res = await fetch("/api/anime");
      const animes = await res.json();

      this.setState({
        fetchedChars: true,
        items: animes
      });
    } catch (e) {
      console.error("something went wrong", e);
    }
  };

  getManga = async () => {
    try {
      const res = await fetch("/api/manga");
      const mangas = await res.json();

      this.setState({
        fetchedChars: true,
        items: mangas
      });
    } catch (e) {
      console.error("something went wrong", e);
    }
  };

  componentDidMount() {
    this.getAnime();
  }

  componentDidUpdate(_, { type: prevType }) {
    const { type } = this.state;

    if (prevType !== type) {
      switch (type) {
        case "Manga":
          this.getManga();
          break;
        case "Anime":
        default:
          this.getAnime();
          break;
      }
    }
  }

  render() {
    const { type, items } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 0 }}>Anime World</h1>
        <Nav getByName={this.updateQuery} updateType={this.changeType} />
        <ItemContainer
          type={type}
          items={this.getFilteredItems()}
        />

        <footer
          style={{
            textAlign: "center",
            bottom: 0,
            position: "fixed",
            width: "100%",
            left: 0,
            borderTop: "1px solid"
          }}
        >
          <h3>Jordan Corp &copy;</h3>
        </footer>
      </div>
    );
  }
}

export default MainContainer;
