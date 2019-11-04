using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static string High(string s)
    {
        var words = s.Split();

        var wordLength = new List<int>();

        foreach (string word in words)
        {
            int wordScore = 0;

            foreach (char x in word)
                wordScore += (int)x - 96;

            wordLength.Add(wordScore);
        }
        return words[wordLength.IndexOf(wordLength.Max())];
    }
}

// Other Solution

//using System;
//using System.Linq;

//public class Kata
//{
//    public static string High(string s)
//    {
//        return s.Split(' ').OrderBy(a => a.Select(b => b - 96).Sum()).Last();
//    }
//}