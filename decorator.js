class Car {
    getDescription() {
      return "Basic Car";
    }
  
    getCost() {
      return 20000; 
    }
  }
  
  
  class CarDecorator {
    constructor(car) {
      this.car = car;
    }
  
    getDescription() {
      return this.car.getDescription();
    }
  
    getCost() {
      return this.car.getCost();
    }
  }
  
  
  class SpecialPaint extends CarDecorator {
    getDescription() {
      return `${this.car.getDescription()} with special paint`;
    }
  
    getCost() {
      return this.car.getCost() + 1500; 
    }
  }
  
  
  class AlloyWheels extends CarDecorator {
    getDescription() {
      return `${this.car.getDescription()} with alloy wheels`;
    }
  
    getCost() {
      return this.car.getCost() + 1200;
    }
  }
  
  
  class AdvancedAudioSystem extends CarDecorator {
    getDescription() {
      return `${this.car.getDescription()} with advanced audio system`;
    }
  
    getCost() {
      return this.car.getCost() + 800;
    }
  }
  
  
  let myCar = new Car(); 
  console.log(myCar.getDescription()); 
  console.log(`Cost: $${myCar.getCost()}`);
  
  myCar = new SpecialPaint(myCar); 
  console.log(myCar.getDescription()); 
  console.log(`Cost: $${myCar.getCost()}`);
  
  myCar = new AlloyWheels(myCar);
  console.log(myCar.getDescription());
  console.log(`Cost: $${myCar.getCost()}`);
  
  myCar = new AdvancedAudioSystem(myCar);
  console.log(myCar.getDescription());
  console.log(`Cost: $${myCar.getCost()}`);
  