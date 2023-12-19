/**
 * @typeParam T - the array to search
 * @typeParam Item - the item to count
 * @typeParam $acc - the accumulator array
*/
// @ts-ignore
type Count<T, Item, $acc extends any[] = []> = T extends [infer Head, ...infer Tail] ? Head extends Item ? Count<Tail, Item, [...$acc, Head]> : Count<Tail, Item, $acc> : $acc['length'];

// Alternative ______________________________________

/**
 * @typeParam T - the array to search
 * @typeParam TToy - the item to count
 * @typeParam TAccum - the accumulator array
*/
// @ts-ignore
type Find<T, TToy, TAccum extends unknown[] = []> =
  T extends [infer TFirst, ...infer TRest]
    ? TFirst extends TToy
      ? Find<TRest, TToy, [TFirst, ...TAccum]>
      : Find<TRest, TToy, TAccum>
    : TAccum;

/**
 * @typeParam T - the array to search
 * @typeParam TToy - the item to count
*/
// @ts-ignore
type Count<T extends string[], TToy extends string> = Find<T, TToy>['length'];

// Alternative ______________________________________

/**
 * @typeParam T - the array to search
 * @typeParam K - the item to count
*/
// @ts-ignore
type Count<T extends unknown[], K extends unknown> = T extends [infer First, ...infer Rest]
  ? T[number] extends K
    ? T["length"]
    : Count<First extends K ? [...Rest, First] : Rest, K>
  : T["length"];