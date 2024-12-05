function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  // Adding a method:
  this.clean = function() {
    console.log("Cleaning in progress...")
  }
}

const houseKeeper1 = new HouseKeeper(10, "Mary", ["lobby", "guest rooms"]);
console.log(houseKeeper1.name)

houseKeeper1.clean();