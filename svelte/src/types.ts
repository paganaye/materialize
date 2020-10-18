export type OneToTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ResponsiveValueInterface {
	s?: OneToTwelve;
	m?: OneToTwelve;
	l?: OneToTwelve;
	xl?: OneToTwelve;
}
export type ResponsiveValue = OneToTwelve | ResponsiveValueInterface;

