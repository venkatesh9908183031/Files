
import java.util.*;
public class Prcatice2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try{
            System.out.println("-----Try------");
            System.out.println("Enter a Number");
            int n=sc.nextInt();
            for(int i=0;i<n;i++)
            {
                System.out.print(i);

            }
        }
        catch(InputMismatchException ex)
        {
            System.out.println("-----catch-----");
            System.out.println("Invalid Input");
        }
        catch(Exception ex)
        {
            System.out.println("-------catch-------");
        }
        finally
        {
            System.out.println("-----finally-----");
        }
    }
}
