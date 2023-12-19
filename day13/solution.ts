type DayCounter<
  Start extends number,
  End extends number,
  U extends number[] = [Start]
> = U['length'] extends End 
  ? [...U, U['length']][number]
  : DayCounter<
      Start,
      End,
      [...U, U['length']]
    >;


// import {N} from "ts-toolbelt";
// type DayCounter<Start extends number, End extends number> = N.Range<Start, End>[number]