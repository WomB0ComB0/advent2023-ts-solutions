// Deep Read Only 🌟
type SantaListProtector<T extends Record<string, unknown>> = {
	readonly [K in keyof T]: 
		T[K] extends Record<string, any>
			? T[K] extends (...args: Array<unknown>) => unknown
				? T[K] 
				: SantaListProtector<T[K]> 
			: T[K]
};

// @ts-ignore
type test_0_actual = SantaListProtector<{
  //   ^?
  hacksore: () => 'naughty';
  trash: string;
  elliot: {
    penny: boolean;
    candace: {
      address: {
        street: {
          name: 'candy cane way';
          num: number;
        };
        k: 'hello';
      };
      children: [
        'harry',
        {
          saying: ['hey'];
        },
      ];
    };
  };
}>;
// @ts-ignore
type test_0_expected = {
  readonly hacksore: () => 'naughty';
  readonly trash: string;
  readonly elliot: {
    readonly penny: boolean;
    readonly candace: {
      readonly address: {
        readonly street: {
          readonly name: 'candy cane way';
          readonly num: number;
        };
        readonly k: 'hello';
      };
      readonly children: readonly [
        'harry',
        {
          readonly saying: readonly ['hey'];
        },
      ];
    };
  };
};
// type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;