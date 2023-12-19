type ToNumber<T extends string | number> = T extends `${infer N extends number}` ? N : never;

/**
 * @type FindSantaFromStringTuple
 * @param T a tuple of strings
 * @description takes a tuple of strings T and uses a mapped type to find the index of the first occurrence of the string '🎅🏼' in the tuple. It uses ToNumber to convert the index to a number or never if the string is not found.
*/
type FindSantaFromStringTuple<T extends string[]> = ToNumber<{
  [TCol in keyof T]: T[TCol] extends '🎅🏼' ? TCol : never;
}[any]>

/**
 * @type FindSanta
 * @param T a tuple of string tuples
 * @description takes a 2D array of strings T. It uses another mapped type to iterate over each row (TRow) in the array and, for each row, it uses FindSantaFromStringTuple to find the column index where '🎅🏼' is located. The resulting type is a tuple containing the row number (converted to a number using ToNumber) and the column index where Santa is found. If Santa is not found in a row, it evaluates to never.
*/
// @ts-ignore
type FindSanta<T extends string[][]> = {
  [TRow in keyof  T]: FindSantaFromStringTuple<T[TRow]> extends infer TCol 
    ? TCol extends never 
      ? never 
      : [ToNumber<TRow>, TCol] 
    : never; 
}[number];

// Alternate

// @ts-ignore
type ToInt<T> = T extends `${infer N extends number}` ? N : never;

type FindInArray<Array extends any[], Y, $X extends number = ToInt<keyof Array>> = $X extends number ? Array[$X] extends '🎅🏼' ? [Y, $X] : never : never;

// @ts-ignore
type FindSanta<Matrix extends any[][], $Y extends number = ToInt<keyof Matrix>> = $Y extends number ? FindInArray<Matrix[$Y], $Y> : never;