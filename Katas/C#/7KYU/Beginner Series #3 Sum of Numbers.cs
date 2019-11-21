  using System;

  public class Sum
  {
    public int GetSum(int a, int b)
    {
      var answer = 0;
      if (a <= b)
      {
        for (var i = a; i <= b; i++)
        {
          answer += i;
        }
      }
      else
      {
        for (var j = b; j <= a; j++)
        {
          answer += j;
        }
      }
      return answer;
     }
  }