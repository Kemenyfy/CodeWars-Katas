using System;

public class Kata
{
    public static int SumMix(object[] x)
    {
        var answer = 0;
        for (var i = 0; i < x.Length; i++)
        {
            answer += Convert.ToInt32(x[i]);
        }
        return answer;
    }
}

//Other Solutions:

//using static System.Convert;
//using System.Linq;

//class Kata
//{
//    public static int SumMix(object[] x) => x.Sum(ToInt32);
//}