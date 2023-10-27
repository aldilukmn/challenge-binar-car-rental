class App {
  constructor() {
    this.form = document.querySelector(".card.border-0.shadow-sm");
    this.getDriver = document.getElementById("select-driver");
    this.getDate = document.getElementsByName("date")[0];
    this.getTime = document.getElementById("select-time");
    this.getPassenger = document.getElementById("select-passenger");
    this.btnDate = document.getElementById("search-btn");
  }

  filter = () => {
    let selectedDate = new Date(this.getDate.value);
    const getYear = selectedDate.getFullYear();
    const getMonth = selectedDate.getMonth() + 1;
    const getDate = selectedDate.getDate();
    const getHour = parseInt(this.getTime.value);
    const getPassanger = parseInt(this.getPassenger.value);

    const noItem = document.getElementsByClassName("text-center")[0];
    if (noItem) {
      noItem.remove();
    }

    const removeCard = document.querySelectorAll(".col-sm-4.mb-3");

    if(removeCard.length > 0) {
      const remCard = Array.from(removeCard);
      remCard.forEach((item) => {
        item.remove();
      });
    }


    if(selectedDate) {
      Car.filteredCars = Car.list.filter((car) => {
        const getAvailableAt = new Date(car.availableAt);
        const getYearCar = getAvailableAt.getFullYear();
        const getMonthCar = getAvailableAt.getMonth() + 1;
        const getDateCar = getAvailableAt.getDate();
        const getHourCar = getAvailableAt.getHours();
        if(getYearCar === getYear && getMonthCar === getMonth && getDateCar === getDate && getHourCar === getHour) {
          return car;
        }
      })
      this.runFiltered();
    } else {
      Car.list;
      this.run();
      console.log('test');
    }
  }

  runFiltered() {
    if(Car.filteredCars.length > 0) {
        Car.filteredCars.forEach((car) => {
        car.createCard();
        })
    } else {
      Car.noItem();
    }
    
  }

  async init() {
    await this.load();

    this.form.onchange = () => {
      if (this.getDriver.value !== '' && this.getDate.value !== '' && this.getTime.value !== '') {
        this.btnDate.removeAttribute("disabled");
        this.btnDate.onclick = this.filter;
      } else {
        this.btnDate.setAttribute("disabled", true);
      }
    }
  }

  run = () => {
    const seeDates = [];
    const seeHours = [];
    Car.list.forEach((car) => {
      const getDate = new Date(car.availableAt);
      seeDates.push(getDate.getDate());
      seeHours.push(getDate.getHours());
    });
    console.log("Jam =>", seeHours);
    console.log("Tanggal =>", seeDates);
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
}
