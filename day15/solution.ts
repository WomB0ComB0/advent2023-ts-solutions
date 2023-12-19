type BoxToys<
  T, N extends number,
  $acc extends any[] = []> 
  = N extends $acc['length'] 
  ? $acc 
  : BoxToys<T, N, [...$acc, T]>;

//  The type checks if the length of the accumulator array $acc is equal to the specified number N. If it is, the type returns the accumulator array $acc.

// If the lengths are not equal, the type makes a recursive call to BoxToys with the same element type T, the same number N, and an updated accumulator [...$acc, T]. This means it appends the current element type T to the accumulator array and continues the recursion.