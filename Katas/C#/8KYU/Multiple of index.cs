using System;
using System.Collections.Generic;

public static class Kata
{
    public static List<int> MultipleOfIndex(List<int> xs)
    {
        List<int> answer = new List<int>();
        for (var i = 1; i < xs.Count; i++)
        {
            if (xs[i] % i == 0)
            {
                answer.Add(xs[i]);
            }
        }
        return answer;
    }
}

//Other Solutions:

//using System;
//using System.Collections.Generic;
//using System.Linq;

//public static class Kata
//{
//    public static List<int> MultipleOfIndex(List<int> xs)
//    {
//        return xs.Skip(1).Where((x, i) => x % (i + 1) == 0).ToList();
//    }
//}