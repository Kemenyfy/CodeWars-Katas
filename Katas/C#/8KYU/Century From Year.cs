public static class Kata
{
    public static int CenturyFromYear(int year)
    {
        return (year / 100) + ((year % 100 == 0) ? 0 : 1);
    }
}

//Other Solutions:

//public static class Kata
//{
//    public static int CenturyFromYear(int year) => (year - 1) / 100 + 1;
//}

//public static class Kata
//{
//    public static int CenturyFromYear(int year)
//    {
//        return (year - 1) / 100 + 1;
//    }
//}