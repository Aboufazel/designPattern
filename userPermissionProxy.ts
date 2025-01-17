interface Database {
    fetchData(): string[];
  }
  
  
  class RealDatabase implements Database {
    private data: string[] = [
      "Public Data 1",
      "Public Data 2",
      "Confidential Data 1",
      "Confidential Data 2",
    ];
  
    fetchData(): string[] {
      console.log("Fetching all data from the real database...");
      return this.data;
    }
  }
  
  
  class DatabaseProxy implements Database {
    private realDatabase: RealDatabase;
  
    constructor(private userRole: string) {
      this.realDatabase = new RealDatabase();
    }
  
    fetchData(): string[] {
      if (this.userRole === "admin") {
        console.log("Admin access granted. Fetching all data...");
        return this.realDatabase.fetchData();
      } else if (this.userRole === "user") {
        console.log("User access granted. Fetching public data only...");
        return this.realDatabase
          .fetchData()
          .filter((data) => data.startsWith("Public"));
      } else {
        console.log("Access denied. No data available.");
        return [];
      }
    }
  }
  
  
  function main() {
    console.log("Admin trying to fetch data:");
    const adminDatabase: Database = new DatabaseProxy("admin");
    console.log(adminDatabase.fetchData());
  
    console.log("\nUser trying to fetch data:");
    const userDatabase: Database = new DatabaseProxy("user");
    console.log(userDatabase.fetchData());
  
    console.log("\nUnknown user trying to fetch data:");
    const unknownDatabase: Database = new DatabaseProxy("guest");
    console.log(unknownDatabase.fetchData());
  }
  
  main();
  