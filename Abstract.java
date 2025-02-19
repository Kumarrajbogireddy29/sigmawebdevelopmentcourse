abstract class Shape
{
    abstract void area();
}
class Rectangle extends Shape
 {
    int l,b;
    void area()
{  
    System.out.println("Area of Rectangle is"+(l*b));
} 
}
class Square extends Shape
 {
     int a; 
     void area()
    {
      System.out.println("Area of Square is"+(a*a));
   }
}
 class Circle extends Shape 
{
    int r;
    void area()
{
    System.out.println("Area of Circle is"+(3.14*r*r));
}
}
  class  Abstract
 {
    public static void main(String args[])
     {
         Rectangle r1=new Rectangle();
          r1.l=10;r1.b=20;
          r1.area();
          Square s1=new Square();
          s1.a=30;
         s1.area();
        Circle c1=new Circle();
        c1.r=10;
        c1.area();
}
}

          
 


