using System;

public static class Kata
{
    public static string Solution(string str)
    {
        char[] newString = str.ToCharArray();
        Array.Reverse(newString);
        return new string(newString);
    }
}

// Other Solutions

//Uncomment these two if you want to try this solution:
//using System;
//using System.Linq;

public static class Kata
{
    public static string Solution(string str)
    {
        return new string(str.ToArray().Reverse().ToArray());
    }
}