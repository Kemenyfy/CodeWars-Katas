using System;

public static class Kata
{
  public static string Disemvowel(string str)
  {
      var temp = str;
      var vowels = new string[] 
      {
         "a","A","e","E","u","U","i","I","o","O",
      };

      foreach(var letter in vowels)
      {
          if (str.Contains(letter))
          {
              temp = str.Replace(letter, string.Empty);
          }

          str = temp;
       } 

       return str;
  }
  
}