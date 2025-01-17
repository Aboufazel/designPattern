class news {
    public subscribers : User[]
    public constructor (){
        this.subscribers = []
    }

    public newSubscribe (user:any){
         this.subscribers.push(user)
    }

    public unSubscribe (user:any){
       this.subscribers = this.subscribers.filter(info=> info !== user)
    }

    public publishNews(news:string) {
        this.notifySubscribers(news)
    }
    
    private notifySubscribers(news: string) {
        this.subscribers.forEach((subscriber) => {
            subscriber.receive(news , subscriber.name);
        });
    }
}


class User {
    public name : string

    public constructor(name){
        this.name = name
    }
  
    public receive(news:string , name:string) {
      console.log(`${this.name} received news: ${news}`);
    }
  }

   const newsChannel = new news()
  const abbas = new User('abbas')
  const nader = new User('nader')
  
  newsChannel.newSubscribe(abbas)
  newsChannel.newSubscribe(nader)

  newsChannel.publishNews('salaaaaaaam sallllllllam')

  

