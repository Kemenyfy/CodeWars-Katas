using System.Text.RegularExpressions;

public class Kata
{
  public static string BreakCamelCase(string str) => new Regex("([A-Z])").Replace(str, " $1");

}