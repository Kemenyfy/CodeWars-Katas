using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static Dictionary<char, int> Count(string str)
  {
    return str.GroupBy(c => c).ToDictionary(g => g.Key, g => g.Count());
  }
}