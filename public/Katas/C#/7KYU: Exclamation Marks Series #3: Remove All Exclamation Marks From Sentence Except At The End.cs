using System;

public class KataSeries3
{
  public static string Remove(string s)
  {
    var bangCount = 0;
    foreach(var ch in s)
    {
      if (ch == '!')
      {
        bangCount++;
      }
      else
      {
        bangCount = 0;
      }
    }
    return $"{s.Replace("!", String.Empty)}{new String('!', bangCount)}";
  }
}