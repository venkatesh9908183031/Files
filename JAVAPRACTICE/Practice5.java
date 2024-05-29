import java.util.*;
public class Practice5 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a Number:");
        int n=sc.nextInt();
        sc.close();
        int i=1;
        do{
            System.out.println(i);
            i++;
        }
        while(i<=n);
    }
}
