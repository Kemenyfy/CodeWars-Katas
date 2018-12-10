using System;
public class Cockroach
{
    public static int CockroachSpeed(double x)
    {
        var answer = x * (100000.0 / 3600);
        return (int)answer;
    }
}