//template or blueeprint
class Student {
  // s1 = {sname:"",id:101,display:function(){},print:function(){}}
  sname = "Kabir";
  id = 101;

  display() {
    console.log(this.sname, this.id);
  }

  print() {
    this.display();
  }
}

var s1 = new Student();

var s2 = new Student();
s2.sname = "Raj";
s2.id = 102;

var s4 = new Student();
s4.sname = "Chris";
s4.id = 104;

var s3 = new Student();
s3.sname = "Alina";
s3.id = 103;

console.log(s1);
s1.print();
s1.printName();

console.log(s2);
s2.print();

console.log(s3);
s3.print();

console.log(s4);
s4.print();
