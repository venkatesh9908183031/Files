import java.util.Scanner;
abstract class Operations
{
    public void sum(int x,int y)
    {
        System.out.println(x+y);
    }
    public void sub(int x,int y)
    {
        System.out.println(x-y);
    }
    class Demo extends Operations
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
}

public class Practice1 {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("");
        int num1=sc.nextInt();
        System.out.println("");
        int num2=sc.nextInt();
        Demo v=new Demo();
        v.sum(num1,num2);
        v.sub(num1, num2);
        v.mul(num1, num2);
        v.div(num1, num2);
    }

}