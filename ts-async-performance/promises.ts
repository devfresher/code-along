export async function fetchData1(): Promise<string> {
	return new Promise((resolve) => setTimeout(() => resolve('Data 1 fetched'), 1000));
}

export async function fetchData2(): Promise<string> {
	return new Promise((resolve) => setTimeout(() => resolve('Data 2 fetched'), 1000));
}

export async function fetchData3(): Promise<string> {
	return new Promise((resolve) => setTimeout(() => resolve('Data 3 fetched'), 1000));
}
