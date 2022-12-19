import { generate } from './generate';

generate()
	.then(() => {
		console.log('Done');
	})
	.catch((err) => {
		console.error(err); 
	})