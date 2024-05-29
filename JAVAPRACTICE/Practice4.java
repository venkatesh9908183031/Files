import java.io.*;
public class Practice4 {

    public static void main(String[] args) throws IOException{
        String fpath="D:/Hunter.txt";
        File file=new File(fpath);
        file.createNewFile();
        if(file.exists())
        {
            System.out.println("File got Created Successfully");

        }
        else
        {
            System.out.println("Failed to Create File!");
        }
    }
}

