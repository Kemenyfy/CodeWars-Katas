class GapInPrimes 
{
    public static long[] Gap(int g, long m, long n) 
    {
        long[] p = { 0, 0 };
        for (long i = m; i < n; i++)
        {
            if (IsPrime(i))
            {
                p[0] = p[1];
                p[1] = i;
                if (p[1] - p[0] == g) return p;
            }
        }
        return null;
    }
    
    private static bool IsPrime(long n)
    {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for(int i = 5; i * i <= n; i += 6)
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        return true;
    }
}