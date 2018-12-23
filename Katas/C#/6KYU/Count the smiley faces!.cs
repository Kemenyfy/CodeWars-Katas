using System.Text.RegularExpressions;
using System.Linq;

public static class Kata
{
  public static int CountSmileys(string[] smileys) 
  {
     return smileys.Count(s => Regex.IsMatch(s, @"^[:;]{1}[~-]{0,1}[\)D]{1}$"));
  }
  
}