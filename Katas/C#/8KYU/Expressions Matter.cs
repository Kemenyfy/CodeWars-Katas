using System.Linq;

public class Kata
{
    public static int ExpressionsMatter(int a, int b, int c)
    {
        int[] answers = new int[] { a * (b + c), a * b * c, a + b + c, (a + b) * c };
        return answers.Max();
    }
}