using System;

public class Kata
{
    public static int AdjacentElementsProduct(int[] array)
    {
        var maxProduct = array[0] * array[1];

        for (int i = 1, j = 2; j < array.Length; i++, j++)
        {
            maxProduct = Math.Max(array[i] * array[j], maxProduct);
        }
        return maxProduct;
    }
}