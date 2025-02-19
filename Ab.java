import java.util.Scanner;
class Ab
{
 public static void main(String args[])
{
  double s1,s2,s3,s4,s5,avg;
  Scanner sc=new  Scanner(System.in);
  System.out.println("enter the value of 5 bikers");
  s1=sc.nextDouble();
  s2=sc.nextDouble();
  s3=sc.nextDouble();
  s4=sc.nextDouble();
  s5=sc.nextDouble();   
  avg=(s1+s2+s3+s4+s5)/(5.0);
  System.out.println("the Average : "+avg);
  if(s1>avg)
{
   System.out.println("Racer1 is qualified");
}
if(s2>avg)
{
   System.out.println("Racer2 is qualified");
}
if(s3>avg)
{
   System.out.println("Racer3 is qualified");
}
if(s4>avg)
{
   System.out.println("Racer4 is qualified");
}
if(s5>avg)
{
   System.out.println("Racer5 is qualified");
}
}
}
         