public class Kata
{
    public static int SumTriangularNumbers(int n)
    {
        int sum = 0;
        for (int i = 0, j = 1; i < n; i++, j += i + 1)
        {
            sum += j;
        }
        return sum;
    }
}