import React, { Component } from "react";
import Nav from "./home.jsx";
import ItemContainer from "./itemContainer.jsx";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Anime",
      items: [],
      query: ''
    };
  }

  changeType = type => {
    this.setState({ type });
  };

  getFilteredItems = () => {
    const { items, query } = this.state;
    return items.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
  }

  updateQuery = (val) => {
    this.setState({ query: val })
  }

  getAnime = async () => {
    try {
      const res = await fetch("/api/anime");
      const animes = await res.json();

      console.log(animes);

      this.setState({
        fetchedChars: true,
        items: animes
      });
    } catch (e) {
      console.error('something went wrong', e);
    }
  };

  getManga = async () => {
    try {
      const res = await fetch("/api/manga");
      const mangas = await res.json();

      console.log(mangas);

      this.setState({
        fetchedChars: true,
        items: mangas
      });
    } catch (e) {
      console.error('something went wrong', e);
    }
  };

  componentDidMount() {
    this.getAnime();
  }

  componentDidUpdate(_, { type: prevType}) {
    const { type } = this.state;

    if (prevType !== type) {
      switch(type) {
        case 'Manga':
          this.getManga();
          break;
        case 'Anime':
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
        <Nav getByName={ this.updateQuery } updateType={this.changeType} />
        <ItemContainer items={this.getFilteredItems()} type={type} />
      </div>
    );
  }
}

export default MainContainer;
