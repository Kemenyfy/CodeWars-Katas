using System;
using System.Linq;

public static class Kata
{
    public static int WordsToMarks(string str) => str.ToCharArray().Select(c => System.Convert.ToInt32(c) - 96).Sum();
}