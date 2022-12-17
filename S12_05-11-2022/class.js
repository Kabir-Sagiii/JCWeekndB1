class Product {
  pname = "Iphone14";
  bname = "Apple";
  price = 1500;

  display() {
    console.log(this.pname, this.bname, this.price);
  }

  print() {
    this.display();
  }
}

var p1 = new Product();
p1.display();

p1.pname = "IPhone 14Pro";
p1.display();
