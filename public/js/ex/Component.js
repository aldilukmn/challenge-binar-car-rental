class Component {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    try {
        const res = await fetch(this.url);
        const result = await res.json();
        return result;
    } catch(error) {
        console.log(`Please recheck your URL API!`);
    }
  }

  createListItem() {
    throw new Error("Cannot be implemented directly!");
  }

  createCard() {
    throw new Error("Cannot be implemented directly!");
  }

  render() {
    throw new Error("Cannot be implemented directly!");
  }
}