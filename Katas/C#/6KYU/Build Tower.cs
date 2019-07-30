using System;

public class BuildTower
{
    public static string[] TowerBuilder(int nFloors)
    {

        var stories = new string[nFloors];
        int width = nFloors + nFloors - 1;

        for (int i = 1; i <= nFloors; i++)
        {
            var s = new String('*', i + (i - 1)).CenterTheString(width);
            stories[i - 1] = s;
        }

        return stories;
    }
}

public static class StringExtensions
{
    public static string CenterTheString(this string stringToCenter, int totalLength)
    {
        return stringToCenter.PadLeft(((totalLength - stringToCenter.Length) / 2) + stringToCenter.Length).PadRight(totalLength);
    }
}