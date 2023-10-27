const urlApiCar =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

class Car extends Component {
  createListItem(iconClass, text) {
    const li = document.createElement("li");
    const i = document.createElement("i");
    const p = document.createElement("p");

    li.classList.add("mb-2");
    i.classList.add("fa-solid", iconClass, "me-2");
    p.classList.add("d-inline");
    p.innerText = text;

    li.append(i, p);

    return li;
  }

  createCard(props) {
    const { model, image, rentPerDay, desc, capacity, transmission, year } =
      props;

    const columnDiv = document.createElement("div");
    columnDiv.classList.add("col-sm-4", "mb-3");
    document.querySelector(".row").appendChild(columnDiv);

    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "pb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const img = document.createElement("img");
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    const a = document.createElement("a");

    img.classList.add("card-img-top");
    img.src = image;
    h5.innerText = model;
    h6.innerText = "Rp " + rentPerDay.toLocaleString("id-ID") + " / hari";
    h6.classList.add("fw-semibold");
    p.innerText = desc ? desc : "Tidak ada deskripsi.";
    p.classList.add("my-4");
    ul.classList.add("list-item-none", "px-0");
    a.innerText = "Pilih Mobil";
    a.classList.add("btn", "btn-success", "w-92", "mx-auto");

    const li1 = this.createListItem("fa-user-group", capacity + " orang");
    const li2 = this.createListItem("fa-gear", transmission);
    const li3 = this.createListItem("fa-calendar-days", "Tahun " + year);

    ul.append(li1, li2, li3);
    cardBody.append(h5, h6, p, ul);
    card.classList.add("shadow-sm", "height-card");
    card.append(img, cardBody, a);
    columnDiv.appendChild(card);
  }

  noItem() {
    const h5 = document.createElement("h5");
    h5.innerText = "Mobil tidak ditemukan";
    h5.classList.add("text-center");
    document.querySelector(".row").appendChild(h5);
  }

  async render() {
    const result = await this.fetchData();
    result.map((item) => {
      this.createCard(item);
    });
  }
}

class FilterCar extends Car {
  constructor(url) {
    super(url);
    this.selectedByYear = null;
    this.selectedByPassenger = null;
    this.formFilter();
  }

  formFilter() {
    const form = document.querySelector(".card.border-0.shadow-sm");
    const btn = document.getElementById("search-btn");
    const tgl = document.getElementsByName("date")[0];
    const selectDriver = document.getElementById("select-driver");
    const selectTime = document.getElementById("select-time");
    const selectPassenger = document.getElementById("select-passenger");

    form.addEventListener("change", () => {
      if (
        tgl.value !== "" &&
        selectDriver.value !== "" &&
        selectPassenger.value !== "" &&
        selectTime.value !== ""
      ) {
        btn.removeAttribute("disabled");
      } else {
        btn.setAttribute("disabled", true);
      }
    });

    btn.addEventListener("click", () => {
      const getYear = tgl.value.split("-");
      this.selectedByYear = getYear[0];
      this.selectedByPassenger = selectPassenger.value;
      this.renderFilteredData();
    });
  }

  removeNoItem() {
    const noItem = document.getElementsByClassName("text-center")[0];
    if (noItem) {
      noItem.remove();
    }
  }

  filterByYear(data) {
    if (this.selectedByYear) {
      const filtered = data.filter((item) => {
        return (
          item.year === parseInt(this.selectedByYear) &&
          item.capacity === parseInt(this.selectedByPassenger)
        );
      });
      return filtered;
    }
  }

  async renderFilteredData() {
    const noItem = document.getElementsByClassName("text-center")[0];
    if (noItem) {
      noItem.remove();
    }

    const removeCard = document.querySelectorAll(".col-sm-4.mb-3");
    if (removeCard) {
      const remCard = Array.from(removeCard);
      remCard.forEach((item) => {
        item.remove();
      });
    }

    try {
      const result = await this.fetchData();
      const filteredData = this.filterByYear(result);
      if (filteredData && filteredData.length > 0) {
        filteredData.map((item) => {
          this.createCard(item);
        });
      } else {
        this.noItem();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

const car = new FilterCar(urlApiCar);
console.log(car);
// car.renderFilter();
