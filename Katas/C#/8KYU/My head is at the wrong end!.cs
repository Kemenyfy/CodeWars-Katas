public class Kata
{
    public static string[] FixTheMeerkat(string[] arr)
    {
        return new string[] { arr[2], arr[1], arr[0] };
    }
}

//Other Solutions

//using System.Linq;

//public class Kata
//{
//    public static string[] FixTheMeerkat(string[] arr)
//    {
//        return arr.Reverse().ToArray();
//    }
//}