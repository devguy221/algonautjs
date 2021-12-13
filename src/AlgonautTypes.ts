import algosdk from 'algosdk';


export type AlgonautConfig = {
	BASE_SERVER: string;
	LEDGER: string;
	PORT: string;
	API_TOKEN: any;
	SIGNING_MODE?: 'local' | 'wallet-connect' | 'algosigner';
}

export interface AlgonautStateData {
	key: string;
	value: string | number | bigint;
	address: string; // if we can detect an address, we put it here
}

export interface AlgonautAppState {
	index: number;
	hasState: boolean;
	creatorAddress: string;
	globals: AlgonautStateData[];
	locals: AlgonautStateData[];
}


export type AlgonautError = {
	message: string;
	rawError: Error;
}

export type AlgonautTransactionStatus = {
	status: 'success' | 'fail';
	message: string;
	index?: number;
	error?: Error;
	meta?: any;
}

export type AlgonautWallet = {
	address: string;
	mnemonic: string;
}

export type AlgonautTransactionFields = {
	accounts?: string[],
	applications?: number[],
	assets?: number[],
	reKeyTo?: string,
	note?: string,
	closeRemainderTo?: string,
	manager?: string,
	freeze?: string,
	clawback?: string,
	reserve?: string
}

export type AlgonautAtomicTransaction = {
	transaction: algosdk.Transaction;
	transactionSigner: algosdk.Account | algosdk.LogicSigAccount;
	isLogigSig: boolean;
}

