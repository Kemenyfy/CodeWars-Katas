public class Kata
{
    public static int[] Encode(string str, int n)
    {
        var key = n.ToString().ToCharArray();
        var number = 0;
        int[] result = new int[str.Length];
        for (var i = 0; i < str.Length; i++)
        {
            result[i] = ((int)str[i] - 96) + int.Parse(key[number].ToString());
            number++;
            if (number >= key.Length) { number = 0; }
        }
        return result;
    }
}