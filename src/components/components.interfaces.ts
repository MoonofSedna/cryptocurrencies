interface ErrorInterface {
	message: string;
}

interface FormInterface {
	saveCurrency: (currency: string) => void;
	saveCryptoCurrency: (cryptoCurrency: string) => void;
}

interface QuoteInterface {
	result: {
		PRICE: string;
		HIGHDAY: string;
		LOWDAY: string;
		CHANGEPCT24HOUR: string;
		LASTUPDATE: string;
		currency: string;
		cryptoCurrency: string;
	} | null;
}

export type { ErrorInterface, FormInterface, QuoteInterface };
