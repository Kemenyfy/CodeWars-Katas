using System;

public class Kata
{
    public static string HowMuchILoveYou(int nb_petals)
    {
        string[] phrases = new string[6] { "I love you", "a little", "a lot", "passionately", "madly", "not at all" };

        return phrases[(nb_petals - 1) % phrases.Length];
    }
}

//Other Solutions:

//using System;

//public class Kata
//{
//    public static string HowMuchILoveYou(int nb_petals)
//    {
//        return new string[] { "I love you", "a little", "a lot", "passionately", "madly", "not at all" }[(nb_petals - 1) % 6];
//    }
//}

//using System;

//public class Kata
//{
//    public static string HowMuchILoveYou(int nb_petals)
//    {
//        switch (nb_petals % 6)
//        {
//            case 5:
//                return "madly";
//            case 1:
//                return "I love you";
//            case 2:
//                return "a little";
//            case 3:
//                return "a lot";
//            case 4:
//                return "passionately";
//            case 0:
//                return "not at all";
//        }
//        return "null";
//    }
//}