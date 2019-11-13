namespace Converter
{
    public class Converter
    {
        public string dnaToRna(string dna) 
        {
            return dna.Replace("T", "U");
        }
    }
}

//Same Solution:

//namespace Converter
//{
//    public class Converter
//    {
//        public string dnaToRna(string dna) => return dna.Replace("T", "U");
//    }
//}