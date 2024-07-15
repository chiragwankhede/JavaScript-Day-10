console.log("Hello Chirag");

// How to create a class in JS - 

class Teacher {
    constructor (name,channel,likes = 0){
        this.name = name;
        this.channel = channel;
        this.videolikes = likes;
    }


    intro (){
        console.log(`Hi, I am ${this.name} and I love ${this.channel}`);
    }

    like(){
        this.videolikes ++;
        return `your like are ${this.videolikes}`;
    }
};

//  To create a object of teacher class - 

const userName = new Teacher("Chirag","Coding"); 

//  we just need to create a class once, and we can create many object which are independent to each other.

// const Teacher1= new Teacher("Chirag","food"); 
// const Teacher2= new Teacher("Chirag","Animal"); 


// Teacher1.intro();
// Teacher2.intro();


// Inheritance in class - 

class ytTeacher extends Teacher  {
    constructor(name,channel,likes = 0,sub){
        super(name,channel,likes);
        this.sub = sub;
}

subCount (){
    return `${this.name} has ${this.sub} subscriber `
}

//  Static function is used as a factory function to perfrom some default tasks - 

static paidCourse (){
    console.log(this.name);
    return new ytTeacher ("Chirag Wankhede","Teaching",69,"400k");
};

}

const newTeacher = new ytTeacher ("Chirag Wankhede","Teaching",69,"4 Million");


// Getters and setters are methods used to control access to the properties of a class.

class Teachernew {
    constructor(name, channel, likes = 0) {
      this.name = name;
      this.channel = channel;
      this._videoLikes = 0;
    }
  
    intro() {
      return `Hey, it's ${this.name}! Welcome to ${this.channel}!`;
    }
  
    like() {
      this._videoLikes++;
      return `Like this video! Current likes: ${this._videoLikes}`;
    }
  
    get videoLikes() {
      return this._videoLikes;
    }
  
    set videoLikes(likes) {
      if (likes < 0) throw new Error("Must be more than 0");
      else this._videoLikes = likes;
    }
  }
  
  const roadsidecoder = new Teachernew("Piyush", "RoadsideCoder");