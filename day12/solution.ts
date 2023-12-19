type ToInt<T> = T extends `${infer N extends number}` ? N : never

type FilterArrayToObject<T, I> = {
	[K in keyof T  as T[K] extends I ? K : never]: T[K];
}

type FindSanta<T> = ToInt<keyof FilterArrayToObject<T, '🎅🏼'>>;