using System;
using System.Text.RegularExpressions;

public class Kata
{
    public static bool ValidateUsr(string username)
    {
        Regex rgx = new Regex("^[a-z0-9_]{4,16}$");
        return rgx.IsMatch(username);
    }
}

//Other Solutions:

//using System.Text.RegularExpressions;

//public class Kata
//{
//    public static bool ValidateUsr(string username)
//    {
//        return Regex.IsMatch(username, "^[a-z0-9_]{4,16}$");
//    }
//}

//public class Kata
//{
//    public static bool ValidateUsr(string Username) => System.Text.RegularExpressions.Regex.IsMatch(Username, "^[a-z0-9_]{4,16}$");
//}