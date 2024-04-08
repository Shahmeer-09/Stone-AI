
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.OPEN_AI_SECRET);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const summarize = async (req, res )=> {
  const {data}= req.body;
  const prompt = `(summarize the provided text in 100 words):" ${data}"  `
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
   res.status(200).json({text});
}
const Chat = async (req, res, next )=> {
  const {data}= req.body;
  const prompt = `(respond like a friendlly chatbot who gives 3-5 liner answers, and your name is stone):" ${data}"  `
  try {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
     res.status(200).json({text});
  } catch (error) {
    next(error)
  }
}
const JsCode = async (req, res ,next )=> {
  const {data}= req.body;
  const prompt = `(you are a javascript code generator and gives the ocde for the provided data):" ${data}"  `
  try {
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
     res.status(200).json({text});
  } catch (error) {
    next(error)
  }
}
const extractor = async (req, res , next )=> {
  const {data}= req.body;
  const prompt = `(Give the main key point from the provided text and organize them in bullets):" ${data}"  `

    
try {

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    const text = response.text();
    res.status(200).json({text});
  
} catch (error) {
     
  next(error)

}
}
module.exports={summarize, extractor, Chat, JsCode}