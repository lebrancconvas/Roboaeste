import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs'; 

export const generate = async() => {
	const config = new Configuration({
		apiKey: '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',  
	});
	
	const openai = new OpenAIApi(config); 
	
	const prompt = 'A cat wear the skirt and running on the hill.';  
	const result = await openai.createImage({
		prompt,
		n: 1,
		size: "1024x1024",
		user: "abc" 
	});  
	
	const url: any = result.data.data[0].url; // Type must be changed from 'any' to a type that more closely matches the data returned from the API. 
	const imageResult = await fetch(url);
	const blob = await imageResult.blob(); 
	const buffer = Buffer.from( await blob.arrayBuffer() ); 
	writeFileSync(`./img/${Date.now()}.png`, buffer); 
} 
