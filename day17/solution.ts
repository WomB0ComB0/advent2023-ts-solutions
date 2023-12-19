type Graph = {
  '👊🏻' : '🖐🏾',
  '🖐🏾' : '✌🏽',
  '✌🏽' : '👊🏻' 
};

type RockPaperScissors = keyof Graph;

// @ts-ignore
type WhoWins<
  Opponent extends RockPaperScissors,
  You extends RockPaperScissors
  > = Opponent extends You
  ? 'draw' 
  : Opponent extends Graph[You] 
    ? 'lose' 
    : 'win';

// @ts-ignore
type test_0_actual = WhoWins<'👊🏻', '🖐🏾'>;
// @ts-ignore
type test_0_expected = 'win';

// Alternative ___________________________________

type CycleNext<T, List extends string[], Start = List[0]> =
  List extends [infer First, ...infer Rest extends string[]]
    ? First extends T
      ? Rest extends [] ? Start : Rest[0]
      : CycleNext<T, Rest, Start>
    : never;

// @ts-ignore
type WhoWins<Op, Me> = Op extends Me ? 'draw' : Op extends CycleNext<Me, ['👊🏻', '🖐🏾', '✌🏽']> ? 'lose' : 'win';

// Alternative ___________________________________

type IsDraw<A extends RockPaperScissors, B extends RockPaperScissors> =  A extends B ? true : never;

type IsWin <A extends RockPaperScissors, B extends RockPaperScissors> =
  | (A extends '👊🏻' ? (B extends '🖐🏾' ? true : never) : never)
  | (A extends '🖐🏾' ? (B extends '✌🏽' ? true : never) : never)
  | (A extends '✌🏽' ? (B extends '👊🏻' ? true : never) : never);

// @ts-ignore
type WhoWins<A extends RockPaperScissors, B extends RockPaperScissors> =
  true extends IsDraw<A, B>
    ? 'draw'
    : true extends IsWin<A, B>
      ? 'win'
      : 'lose';