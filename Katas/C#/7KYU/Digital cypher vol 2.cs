public class Kata
{
    public static string Decode(int[] code, int n)
    {
        var key = n.ToString().ToCharArray();
        var number = 0;
        char[] result = new char[code.Length];
        for (var i = 0; i < code.Length; i++)
        {
            result[i] = (char)(code[i]+96- int.Parse(key[number].ToString()));
            number++;
            if (number >= key.Length) { number = 0; }
        }
        return new string(result);
    }
}