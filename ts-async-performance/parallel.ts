import { fetchData1, fetchData2, fetchData3 } from './promises';

async function parallelExecution() {
	console.time('Parallel Execution');
	const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
	console.timeEnd('Parallel Execution');
	console.log({ data1, data2, data3 });
}

parallelExecution();

// OUTPUT:
// Parallel Execution: 1.003s
// {
//   data1: 'Data 1 fetched',
//   data2: 'Data 2 fetched',
//   data3: 'Data 3 fetched'
// }
