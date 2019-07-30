using System;

public class LoveDetector
{
    public static bool lovefunc(int flower1, int flower2)
    { 
       if ((flower1 + flower2) % 2 == 0) 
         return false;
       else
         return true;
    }
}