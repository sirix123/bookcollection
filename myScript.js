// collect info in a form then paste into paragraph
// hello .... how are you?
// input name
// replace ... with input

function Hero(name, level){
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('Stefan',1);

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }

hero1.greet();
Object.getPrototypeOf(hero1);