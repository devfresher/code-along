import { fetchData1, fetchData2, fetchData3 } from './promises';

async function sequentialExecution() {
	console.time('Sequential Execution');
	const data1 = await fetchData1();
	const data2 = await fetchData2();
	const data3 = await fetchData3();
	console.timeEnd('Sequential Execution');
	console.log({ data1, data2, data3 });
}

sequentialExecution();


// OUTPUT:
// Sequential Execution: 3.003s
// {
//   data1: 'Data 1 fetched',
//   data2: 'Data 2 fetched',
//   data3: 'Data 3 fetched'
// }