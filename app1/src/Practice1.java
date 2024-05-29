import java.util.Scanner;

abstract class AArithmatic
{
    public void sum(int x,int y)
    {
        System.out.println(x+y);
    }
    public void sub(int x,int y)
    {
        System.out.println(x-y);
    }
}
class Demo extends AArithmatic
{
   public void mul(int x,int y)
   {
        System.out.println(x*y);
   }
   public void div(int x,int y)
   {
    System.out.println(x/y);
   }
}

public class Practice1
{
    public static void main(String[] arg)
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("");
        int num1=sc.nextInt();
        System.out.print("");
        int num2=sc.nextInt();
        sc. close();
        Demo s1=new Demo();
        s1.sum(num1, num2);
        s1.sub(num1, num2);
        s1.mul(num1, num2);
        s1.div(num1, num2);        
    }
}