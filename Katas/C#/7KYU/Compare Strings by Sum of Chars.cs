using System;
using System.Linq;

public static class Kata
{
    public static bool Compare(string s1, string s2)
    {
        return CalculateSum(s1) == CalculateSum(s2);
    }

    private static int CalculateSum(string s)
    {
        var sum = 0;
        if (s != null && s.All(char.IsLetter))
            sum = s.Sum(x => (int)Char.ToUpper(x));

        return sum;
    }
    
}