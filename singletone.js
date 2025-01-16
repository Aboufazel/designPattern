class PrinterManager {
    constructor() {
      if (PrinterManager.instance) {
        return PrinterManager.instance;
      }
  
      this.isPrinting = false; 
      this.printQueue = []; 
      PrinterManager.instance = this;
  
      return this;
    }
  
    addPrintJob(job) {
      console.log(`file added for print: ${job}`);
      this.printQueue.push(job);
      this.processQueue();
    }
  
    processQueue() {
      if (this.isPrinting) return;
  
      if (this.printQueue.length > 0) {
        const job = this.printQueue.shift();
        this.isPrinting = true;
        console.log(`Printing: ${job}`);
        setTimeout(() => {
          console.log(`Finished printing: ${job}`);
          this.isPrinting = false;
          this.processQueue(); 
        }, 3000);
      }
    }
  }
  
  
  const printer1 = new PrinterManager();
  const printer2 = new PrinterManager();
  
  printer1.addPrintJob("Document 1");
  printer2.addPrintJob("Document 2");
  printer1.addPrintJob("Document 3");
  