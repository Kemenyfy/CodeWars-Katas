using System.Collections.Generic;

public static class Kata
{
    public static int[] CountBy(int x, int n)
    {
        var myList = new List<int>();

        for (var i = 1; i <= n; i++)
        {
            myList.Add(x * i);
        }

        var array = myList.ToArray();

        return array;
    }
}