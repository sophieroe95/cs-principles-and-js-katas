// class Person {
//     public name: string;
//     private height: number;
//     protected gender: string;

//     constructor(name: string, height: number, gender: string) {
//         this.name = name;
//         this.height = height;
//         this.gender = gender;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

//public means any object can modify the class - can be modified anywhere
//private means no object can edit the class - can only be accessed within class was defined in

//anything that inherits from class is protected - coach can access properties which are in the class person, children class can access

//ts sets everything as public

//js doesn't have public,private,protected, is question of scoping

// class Coach extends Person {
//     likesCode: Boolean;
//     constructor(name: string, height: number, gender: string, likesCode: true) {
//         super(name, height, gender)
//         this.likesCode = likesCode;
//     }
// }

// const sam = new Coach('Sam', 180, 'male', true);

// const andy = new Person('andy', 150, 'male')