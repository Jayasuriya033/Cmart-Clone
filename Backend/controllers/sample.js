// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // const API_KEY = "AIzaSyA87JkvZn1v1f3BuvW_N3gg-mlEeJ4vM-c";

// // const genAI = new GoogleGenerativeAI(API_KEY);

// // async function run() {
// //   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// //   const result = await model.generateContent("Write about Virat Kohli");
// //   const response = await result.response;
// //   const text = response.text();

// //   console.log(text);
// // }

// // run();



// import { GoogleGenerativeAIClient } from '@google/generative-ai';

// const client = new GoogleGenerativeAIClient({
//     apiKey: 'AIzaSyA87JkvZn1v1f3BuvW_N3gg-mlEeJ4vM-c',  // Replace with your actual API key
// });

// async function generateContent() {
//   try {
//     // Create a prompt for Gemini
//     const prompt = "Tell me about the history of cricket.";

//     // Call the appropriate API method
//     const response = await client.chatCompletions.create({
//       model: "gemini",  // Specify the model, such as "gemini" or another available model
//       messages: [{ role: "user", content: prompt }],
//     });

//     // Output the generated content
//     console.log('Generated Content:', response.choices[0].message.content);
//   } catch (error) {
//     console.error('Error generating content:', error);
//   }
// }

// generateContent();
