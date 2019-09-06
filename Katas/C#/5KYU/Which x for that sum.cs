using System;

public class S
{
    public static double Solve(double m)
    {
        var a = Math.Sqrt(4 * m + 1);
        return (2 * m + 1 - a) / (2 * m);
    }
}