interface State {
    insertMoney(): void;
    selectItem(): void;
    dispenseItem(): void;
    refill(): void;
  }
  

  class ReadyForSaleState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertMoney(): void {
      console.log("Money inserted. You can now select an item.");
      this.vendingMachine.setState(this.vendingMachine.getSellingState());
    }
  
    selectItem(): void {
      console.log("Please insert money before selecting an item.");
    }
  
    dispenseItem(): void {
      console.log("Please insert money and select an item first.");
    }
  
    refill(): void {
      console.log("The machine is already ready for sale.");
    }
  }
  
  
  class SellingState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertMoney(): void {
      console.log("Money is already inserted. Select an item.");
    }
  
    selectItem(): void {
      console.log("Item selected. Dispensing item...");
      this.vendingMachine.setState(this.vendingMachine.getOutOfStockState());
    }
  
    dispenseItem(): void {
      console.log("Dispensing item...");
    }
  
    refill(): void {
      console.log("Cannot refill while in the selling state.");
    }
  }
  
  
  class OutOfStockState implements State {
    constructor(private vendingMachine: VendingMachine) {}
  
    insertMoney(): void {
      console.log("The machine is out of stock. Please wait for a refill.");
    }
  
    selectItem(): void {
      console.log("The machine is out of stock. Cannot select an item.");
    }
  
    dispenseItem(): void {
      console.log("The machine is out of stock. Cannot dispense items.");
    }
  
    refill(): void {
      console.log("Refilling the machine...");
      this.vendingMachine.setState(this.vendingMachine.getReadyForSaleState());
    }
  }
  
  
  class VendingMachine {
    private readyForSaleState: State;
    private sellingState: State;
    private outOfStockState: State;
  
    private currentState: State;
  
    constructor() {
      this.readyForSaleState = new ReadyForSaleState(this);
      this.sellingState = new SellingState(this);
      this.outOfStockState = new OutOfStockState(this);
  
      this.currentState = this.readyForSaleState; // وضعیت اولیه
    }
  
    setState(state: State): void {
      this.currentState = state;
    }
  
    getReadyForSaleState(): State {
      return this.readyForSaleState;
    }
  
    getSellingState(): State {
      return this.sellingState;
    }
  
    getOutOfStockState(): State {
      return this.outOfStockState;
    }
  
    insertMoney(): void {
      this.currentState.insertMoney();
    }
  
    selectItem(): void {
      this.currentState.selectItem();
    }
  
    dispenseItem(): void {
      this.currentState.dispenseItem();
    }
  
    refill(): void {
      this.currentState.refill();
    }
  }
  
  
  const vendingMachine = new VendingMachine();
  
  console.log("Initial state: Ready for sale");
  vendingMachine.insertMoney();
  vendingMachine.selectItem();
  vendingMachine.dispenseItem();
  
  console.log("Machine is now out of stock:");
  vendingMachine.insertMoney();
  vendingMachine.refill();
  
  console.log("Refilling the machine:");
  vendingMachine.refill();
  vendingMachine.insertMoney();
  vendingMachine.selectItem();
  