using System;
using System.Collections.Generic;

public class Kata
{
    public static IEnumerable<int[]> cartesianNeighbor(int x, int y)
    {
        for (int dx = -1; dx <= 1; dx++)
            for (int dy = -1; dy <= 1; dy++)
                if (dx != 0 || dy != 0)
                    yield return new int[] { x + dx, y + dy };
    }
}