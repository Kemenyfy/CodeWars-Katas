using System.Collections.Generic;

 public class ConnectFour
        {
            public static string WhoIsWinner(List<string> piecesPositionList)
            {
                long[] board = { 0L, 0L };
                byte[] height = {0, 7, 14, 21, 28, 35, 42};
                foreach (var pos in piecesPositionList)
                {
                    board[pos.Split('_')[1] == "Red" ? 0 : 1] ^= 1L << height[pos.Split('_')[0][0] - 65]++;
                    if (haswon(board[0]))
                        return "Red";
                    if (haswon(board[1]))
                        return "Yellow";
                }
                return "Draw";
            }

            private static bool haswon(long board)
            {
                var y = board & (board >> 6);
                if ((y & (y >> 2*6)) != 0) // check \ diagonal
                    return true;
                y = board & (board >> 7);
                if ((y & (y >> 2*7)) != 0) // check horizontal
                    return true;
                y = board & (board >> 8);
                if ((y & (y >> 2*8)) != 0) // check / diagonal
                    return true;
                y = board & (board >> 1);
                if ((y & (y >> 2)) != 0) // check vertical
                    return true;
                return false;
            }
        }