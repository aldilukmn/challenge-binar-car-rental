class Car {
  static list = [];

  static filteredCars = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
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

  createListItem(img, text) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const image = document.createElement("img");
    image.src = img;

    li.classList.add("mb-2");
    image.classList.add("me-2");
    p.classList.add("d-inline");
    p.innerText = text;

    li.append(image, p);

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
    h5.innerText = this.model + " / " + this.type;
    h6.innerText = "Rp " + this.rentPerDay.toLocaleString("id-ID") + " / hari";
    h6.classList.add("fw-semibold");
    p.innerText = this.description ? this.description : "Tidak ada deskripsi.";
    p.classList.add("my-4");
    ul.classList.add("list-item-none", "px-0");
    a.innerText = "Pilih Mobil";
    a.classList.add("btn", "btn-success", "w-92", "mx-auto", "rounded-1", "py-2");

    const li1 = this.createListItem("./images/fi_users_icon.png" ,this.capacity + " orang");
    const li2 = this.createListItem("./images/fi_settings.png", this.transmission);
    const li3 = this.createListItem(
      "./images/fi_calendar_icon.png",
      "Tahun " + this.year 
    );

    ul.append(li1, li2, li3);
    cardBody.append(h5, h6, p, ul);
    card.classList.add("shadow-sm", "height-card");
    card.append(img, cardBody, a);
    columnDiv.appendChild(card);
  }

  static noItem() {
    const h5 = document.createElement("h5");
    h5.innerText = "Mobil Favoritmu tidak ditemukan 😞";
    h5.classList.add("text-center");
    document.querySelector(".row").appendChild(h5);
  }
}
