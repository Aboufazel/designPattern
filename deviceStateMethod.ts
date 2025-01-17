interface DeviceState {
    turnOn(): void;
    turnOff(): void;
    wait(): void;
  }
  
  
  class OnState implements DeviceState {
    private device: SmartDevice;
  
    constructor(device: SmartDevice) {
      this.device = device;
    }
  
    turnOn(): void {
      console.log("The device is already ON.");
    }
  
    turnOff(): void {
      console.log("Turning the device OFF...");
      this.device.setState(this.device.getOffState());
    }
  
    wait(): void {
      console.log("Putting the device in WAITING mode...");
      this.device.setState(this.device.getWaitingState());
    }
  }
  

  class OffState implements DeviceState {
    private device: SmartDevice;
  
    constructor(device: SmartDevice) {
      this.device = device;
    }
  
    turnOn(): void {
      console.log("Turning the device ON...");
      this.device.setState(this.device.getOnState());
    }
  
    turnOff(): void {
      console.log("The device is already OFF.");
    }
  
    wait(): void {
      console.log("The device is OFF. Cannot put it in WAITING mode.");
    }
  }
  

  class WaitingState implements DeviceState {
    private device: SmartDevice;
  
    constructor(device: SmartDevice) {
      this.device = device;
    }
  
    turnOn(): void {
      console.log("Turning the device ON from WAITING mode...");
      this.device.setState(this.device.getOnState());
    }
  
    turnOff(): void {
      console.log("Turning the device OFF from WAITING mode...");
      this.device.setState(this.device.getOffState());
    }
  
    wait(): void {
      console.log("The device is already in WAITING mode.");
    }
  }
  
  
  class SmartDevice {
    private onState: DeviceState;
    private offState: DeviceState;
    private waitingState: DeviceState;
    private currentState: DeviceState;
  
    constructor() {
      this.onState = new OnState(this);
      this.offState = new OffState(this);
      this.waitingState = new WaitingState(this);
  
      
      this.currentState = this.offState;
    }
  
    setState(state: DeviceState): void {
      this.currentState = state;
    }
  
    getOnState(): DeviceState {
      return this.onState;
    }
  
    getOffState(): DeviceState {
      return this.offState;
    }
  
    getWaitingState(): DeviceState {
      return this.waitingState;
    }
  
    turnOn(): void {
      this.currentState.turnOn();
    }
  
    turnOff(): void {
      this.currentState.turnOff();
    }
  
    wait(): void {
      this.currentState.wait();
    }
  }
  

  function main() {
    const smartDevice = new SmartDevice();
  
    console.log("\nInitial state: OFF");
    smartDevice.turnOn();
  
    console.log("\nCurrent state: ON");
    smartDevice.wait();
  
    console.log("\nCurrent state: WAITING");
    smartDevice.turnOff();
  
    console.log("\nCurrent state: OFF");
    smartDevice.wait();
  }
  
  main();
  