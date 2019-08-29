using System;
using System.Linq;

public class JohnMeeting
{
    public static string Meeting(string str)
    {
        return String.Join("", str.ToUpper().Split(";").Select(s =>
        {
            var data = s.Split(":");
            return new { first = data[0], last = data[1] };
        })
        .OrderBy(o => o.last).ThenBy(o => o.first).Select(s => $"({s.last}, {s.first})"));
    }
}