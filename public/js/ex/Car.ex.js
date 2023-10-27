const binarCar =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class CarEx {
  static selectedByYear = null;

  static list = [];

  static init(cars) {
    this.list = cars.map((item) => new this(item));
  }

  constructor(props) {
    const {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

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

  createCard() {
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
    img.src = this.image;
    h5.innerText = this.model;
    h6.innerText = "Rp " + this.rentPerDay.toLocaleString("id-ID") + " / hari";
    h6.classList.add("fw-semibold");
    p.innerText = this.desc ? this.desc : "Tidak ada deskripsi.";
    p.classList.add("my-4");
    ul.classList.add("list-item-none", "px-0");
    a.innerText = "Pilih Mobil";
    a.classList.add("btn", "btn-success", "w-92", "mx-auto");

    const li1 = this.createListItem("fa-user-group", this.capacity + " orang");
    const li2 = this.createListItem("fa-gear", this.transmission);
    const li3 = this.createListItem(
      "fa-calendar-days",
      "Tahun " + this.availableAt
    );

    ul.append(li1, li2, li3);
    cardBody.append(h5, h6, p, ul);
    card.classList.add("shadow-sm", "height-card");
    card.append(img, cardBody, a);
    columnDiv.appendChild(card);
  }

  static noItem() {
    const h5 = document.createElement("h5");
    h5.innerText = "Mobil tidak ditemukan";
    h5.classList.add("text-center");
    document.querySelector(".row").appendChild(h5);
  }

  static populateCars(cars) {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );

      return {
        ...car,
        availableAt,
      };
    });
  }

  static async listCars(filter) {
    let cars;
    let cachedCarsString = sessionStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
    } else {
      const res = await fetch(binarCar);
      const body = await res.json();
      cars = this.populateCars(body);
      sessionStorage.setItem("CARS", JSON.stringify(cars));
    }

    return cars;
  }

  static run() {
    const form = document.querySelector(".card.border-0.shadow-sm");
    const btn = document.getElementById("search-btn");
    const date = document.getElementsByName("date")[0];
    const time = document.getElementById("select-time");
    let getData;
    form.addEventListener("change",  () => {
      const selectedDate = new Date(date.value);
      const selectedTime = parseInt(time.value);
      getData = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime,
        0,
        0
      );
    });

    btn.addEventListener("click", () => {
      // console.log(getData);
      const year = date.value.split("-");
      this.selectedByYear = parseInt(year[0]);


      this.renderFilter()
      // if (this.selectedByYear) {
      // } else {
      //   this.noItem();
      // }
    });

    // btn.addEventListener("click", () => {
    //   const selectedYear = parseInt(date.value.split("-")[0]);
    //   this.selectedByYear = parseInt(selectedYear);

    //   const noItem = document.getElementsByClassName("text-center")[0];
    //   if (noItem) {
    //     noItem.remove();
    //   }

    //   if (this.selectedByYear) {
    //     this.list.forEach((car) => {
    //       if (car.year == this.selectedByYear) {
    //         car.createCard();
    //       }
    //     });
    //   } else {
    //     this.noItem();
    //   }
    // });
  }

  static filtered(data) {
    const filtered = data.filter((item) => {
        return item.year === this.selectedByYear;
    })
    return filtered
  }

  static renderFilter() {
    const filteredData = this.filtered(this.list);
    filteredData.forEach((item) => {
      item.createCard();
    })
  }
}

// class FilterCar extends CarEx {
//   constructor(url) {
//     super(url);
//     this.selectedByYear = null;
//     this.selectedByPassenger = null;
//     this.formFilter();
//   }

//   formFilter() {
//     const form = document.querySelector(".card.border-0.shadow-sm");
//     const btn = document.getElementById("search-btn");
//     const tgl = document.getElementsByName("date")[0];
//     const selectDriver = document.getElementById("select-driver");
//     const selectTime = document.getElementById("select-time");
//     const selectPassenger = document.getElementById("select-passenger");

//     form.addEventListener("change", () => {
//       if (
//         tgl.value !== "" &&
//         selectDriver.value !== "" &&
//         selectPassenger.value !== "" &&
//         selectTime.value !== ""
//       ) {
//         btn.removeAttribute("disabled");
//       } else {
//         btn.setAttribute("disabled", true);
//       }
//     });

//     btn.addEventListener("click", () => {
//       const getYear = tgl.value.split("-");
//       this.selectedByYear = getYear[0];
//       this.selectedByPassenger = selectPassenger.value;
//       this.renderFilteredData();
//     });
//   }

//   removeNoItem() {
//     const noItem = document.getElementsByClassName("text-center")[0];
//     if (noItem) {
//       noItem.remove();
//     }
//   }

//   filterByYear(data) {
//     if (this.selectedByYear) {
//       const filtered = data.filter((item) => {
//         return (
//           item.year === parseInt(this.selectedByYear) &&
//           item.capacity === parseInt(this.selectedByPassenger)
//         );
//       });
//       return filtered;
//     }
//   }

//   async renderFilteredData() {
//     const noItem = document.getElementsByClassName("text-center")[0];
//     if (noItem) {
//       noItem.remove();
//     }

//     const removeCard = document.querySelectorAll(".col-sm-4.mb-3");
//     if (removeCard) {
//       const remCard = Array.from(removeCard);
//       remCard.forEach((item) => {
//         item.remove();
//       });
//     }

//     try {
//       const result = await this.fetchData();
//       const filteredData = this.filterByYear(result);
//       if (filteredData && filteredData.length > 0) {
//         filteredData.map((item) => {
//           this.createCard(item);
//         });
//       } else {
//         this.noItem();
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// const car = new FilterCar(urlApiCar);
// car.renderFilter();
