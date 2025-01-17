interface Vehicle {
    ready():void;
}



class MotorCycle implements Vehicle{
    ready(): void {
        console.log('موتور سیکلت آماده شد برای مسافت‌های زیر ‌۳۰ کیلومتر')
    }
}


class Car implements Vehicle {
    ready(): void {
        console.log('خودرو آماده شد برای مسافت‌های بالای ‌۳۰ کیلومتر')
    }
}


class Bycicle implements Vehicle {
    ready(): void {
        console.log('دوچرخه آماده شد برای مسافت‌های زیر ۱۰ کیلومتر')
    }
}


class Bus implements Vehicle {
    ready(): void {
        console.log('اتوبوس آماده شد برای مسافت‌های بالای ‌۲۰۰ کیلومتر')
    }
}


abstract class TransportationVehicle {
    
    abstract findeSiutableVehicle(distance:number):any;
}



class TransportationFactory extends TransportationVehicle {
    
    
    findeSiutableVehicle(distance:number): any {
        if(distance >= 0 && distance < 10){
            let bic = new Bycicle()
            return bic.ready()
        }
        else if(distance >=10 && distance < 30){
            let motor = new MotorCycle()
            return motor.ready()
        }
        else if (distance >= 30 && distance < 200){
            let car = new Car()
            return car.ready()
        }
        else if (distance >= 200){
            let bus = new Bus()
            return bus.ready()
        }
    }
}


const transport = new TransportationFactory()

const trasport1 = transport.findeSiutableVehicle(150)
const trasport2 = transport.findeSiutableVehicle(10)
const trasport3 = transport.findeSiutableVehicle(5)
const trasport4 = transport.findeSiutableVehicle(32)
const trasport5 = transport.findeSiutableVehicle(350)


