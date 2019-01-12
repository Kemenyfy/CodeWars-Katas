using System;
using System.Linq;

class MorseCodeDecoder
{
    public static string Decode(string morseCode)
    {
        var decodedCode = morseCode
          .Trim()
          .Replace("   ", " W ")
          .Split(' ')
          .Select(w => w == "W" ? " " : MorseCode.Get(w));
        return string.Join("", decodedCode);
    }
}