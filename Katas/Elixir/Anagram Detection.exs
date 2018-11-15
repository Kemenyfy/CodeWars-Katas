defmodule Anagram do
    def anagram?(a, b) do
        String.downcase(a) |> String.codepoints |> 
        Enum.sort == String.downcase(b) |> 
        String.codepoints |> Enum.sort
  end 
end