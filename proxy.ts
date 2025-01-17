interface Database {
  fetchData(): string | null;
}


class MainDataBase implements Database {
  fetchData(): any {
    return [
      {id:'01' , name:'Abbas' , gender:'Male' , role:'admin'},
      {id:'02' , name:'Nader' , gender:'Male' , role:'user'},
      {id:'03' , name:'Ali' , gender:'Male' , role:'guest'},
    ];
  }
}

type UserRole = "admin" | "user" | "guest";


class User {
  constructor(public username: string, public role: UserRole) {}
}


class DatabaseProxy implements Database {
  private database: MainDataBase;

  constructor(private user: User) {
    this.database = new MainDataBase();
  }

  fetchData(): string | null {
    if (this.user.role === "admin") {
      
      console.log("Access granted.");
      return this.database.fetchData();
    } else {
      
      console.log("Access denied: You do not have the required permissions.");
      return null;
    }
  }
}


const adminUser = new User("Alice", "admin");
const guestUser = new User("Bob", "guest"); 
const adminProxy = new DatabaseProxy(adminUser);
console.log(adminProxy.fetchData()); 
const guestProxy = new DatabaseProxy(guestUser);
console.log(guestProxy.fetchData());
