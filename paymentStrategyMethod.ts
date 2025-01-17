interface PayBalance{
    pay(amount:number) :void
}


class CreditCardPayment implements PayBalance {
   public pay(amount): void {
        console.log(`پرداخت ${amount} تومان با کارت اعتباری`);
    }
}


class PayPalPayments implements PayBalance {
    public pay(amount): void {
        console.log(`پرداخت ${amount} دلار با پی پال از طریق ایمیل`);
    }
}


class PerfectMoneyPayment implements PayBalance{
  
    public pay(amount) {
      console.log(`پرداخت ${amount} دلار با پرفکت مانی از طریق حساب`);
    }
  }
  

  class CashPayment implements PayBalance {
   public pay(amount) {
      console.log(`پرداخت ${amount} تومن به صورت نقدی`);
    }
  }


  class PaymentContext {
    public paymentStrategy : PayBalance

    setPaymentStrategy(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    makePayment(amount) {
      this.paymentStrategy.pay(amount);
    }
  }
  

  const payments = new PaymentContext()
  const credit = new CreditCardPayment()
  payments.setPaymentStrategy(credit)
  payments.makePayment(200)