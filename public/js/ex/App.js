class App {
  constructor() {
    this.init();
  }

  async init() {
    await this.load();
    CarEx.run();
  }

  async load() {
    const cars = await CarEx.listCars();
    CarEx.init(cars);
  }
}

// class App {
//     async init() {
//       const form = document.querySelector(".card.border-0.shadow-sm");
//       const btn = document.getElementById("search-btn");
//       const date = document.getElementsByName("date")[0];
//       const time = document.getElementById("select-time");

//       form.addEventListener("change", async () => {
//         const selectedDate = new Date(date.value);
//         const selectedTime = parseInt(time.value);
//         const combineDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime, 0, 0);

//         if (selectedDate !== "") {
//           btn.removeAttribute("disabled");
//         } else {
//           btn.setAttribute("disabled", true);
//         }

//         btn.onclick = async() => {
//           console.log(combineDateTime);
//           await this.load((car) => {
//               const availableCar = new Date(car.availableAt);
//               console.log(availableCar.getTime())
//               return availableCar.getTime() == combineDateTime.getTime()
//           });
//         }
//       });
//     }

//     run = () => {
//       CarEx.list.forEach((car) => {
//         car.createCard();
//       });
//     };

//     async load(prop) {
//       const cars = await CarEx.listCars(prop);
//       CarEx.init(cars);
//     }
//   }
