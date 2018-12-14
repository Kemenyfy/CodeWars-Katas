public class Dinglemouse 
{
  public static string Histogram(int[] results)
  {
    var output = string.Empty;

            for (var index = (results.Length < 100 ? results.Length - 1 : 99); index >= 0 ; index--)
            {
                output += $"{index + 1}|";

                if (results[index] > 0)
                {
                    for (int j = 0; j < results[index]; j++)
                    {
                        output += "#";
                    }
                    output += $" {results[index]}";
                }

                output += "\n";
            }

            return output;
  }  
}