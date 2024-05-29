import java.util.Scanner;

public class Practice6 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a number:");
        int n=sc.nextInt();
        sc.close();
        int i=1;
        while (i<=n) {
            System.out.println(i);
            i++;
        }
    }
}
