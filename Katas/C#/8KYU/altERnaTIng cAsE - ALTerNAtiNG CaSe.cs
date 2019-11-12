using System.Linq;

namespace Extensions
{
    public static class StringExt
    {
        public static string ToAlternatingCase(this string s)
        {
            return string.Concat(s.Select(c => char.IsUpper(c) ? char.ToLower(c) : char.ToUpper(c)));
        }
    }
}

//Other Solutions:

//using System;
//using System.Linq;

//namespace Extensions
//{
//    public static class StringExt
//    {
//        public static string ToAlternatingCase(this string Input)
//        {
//            return String.Join("", Input.ToCharArray().Select(character => Char.IsLower(character) ? Char.ToUpper(character) : Char.ToLower(character)));
//        }
//    }
//}

//using System.Text;

//namespace Extensions
//{
//    public static class StringExt
//    {
//        public static string ToAlternatingCase(this string s)
//        {
//            StringBuilder sb = new StringBuilder(s);
//            for (int i = 0; i < sb.Length; i++)
//            {
//                if (char.IsLower(sb[i]))
//                    sb[i] = char.ToUpper(sb[i]);
//                else
//                    sb[i] = char.ToLower(sb[i]);
//            }
//            return sb.ToString();
//        }
//    }
//}

//using System;

//namespace Extensions
//{
//    public static class StringExt
//    {
//        public static string ToAlternatingCase(this string s)
//        {
//            string answer = "";
//            for (var i = 0; i < s.Length; i++)
//            {
//                answer = char.IsUpper(s[i]) ? string.Concat(answer, s.ToLower()[i]) : string.Concat(answer, s.ToUpper()[i]);
//            }
//            return answer;
//        }
//    }
//}