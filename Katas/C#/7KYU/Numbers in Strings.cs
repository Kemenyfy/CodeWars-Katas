using System;
using System.Text.RegularExpressions;

public static class Kata
{
    public static int Solve(string s)
    {
        int answer = 0;

        foreach (Match n in Regex.Matches(s, @"\d+"))
        {
            answer = Math.Max(answer, int.Parse(n.Value));
        }

        return answer;
    }
}