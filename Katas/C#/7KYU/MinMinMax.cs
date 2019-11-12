using System.Linq;

public class Kata
{
    public static int[] MinMinMax(int[] array)
    {
        int smallest = array.Min();
        int largest = array.Max();
        int minimumAbsent = smallest;
        while (array.Contains(minimumAbsent))
            minimumAbsent++;
        return new int[] { smallest, minimumAbsent, largest };
    }
}

//Other Solutions:

//using System.Linq;

//public class Kata
//{
//    public static int[] MinMinMax(int[] array)
//    {
//        int[] answers = new int[3];
//        int smallest = array.Min();
//        int largest = array.Max();
//        int minimumAbsent = smallest;
//        while (array.Contains(minimumAbsent))
//            minimumAbsent++;
//        answers[0] = smallest;
//        answers[1] = minimumAbsent;
//        answers[2] = largest;
//        return answers;
//    }
//}

//using System.Linq;

//public class Kata
//{
//    public static int[] MinMinMax(int[] array)
//    {
//        int min = array.Min(), max = array.Max();
//        int minAbs = Enumerable.Range(min, max - min).Where(i => !array.Contains(i)).Min();
//        return new int[] { min, minAbs, max };
//    }
//}