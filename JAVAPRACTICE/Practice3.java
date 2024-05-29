class student
{
    public student()
    {
        System.out.println("<-------- Hey! Hey! Empty Constructor Invoked!---------->");
    }
    public student(String department)
    {
        System.out.println("---------Hoo! Parametarised Constructor Invoked!");
    }
}
public class Practice3 {
    public static void main(String[] args) {
        student s1=new student();
        student s2=new student("ECE");
    }    
}
