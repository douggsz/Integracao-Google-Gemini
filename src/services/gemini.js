import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export async function textResponse(prompt) {
    
    const result = await model.generateContent(prompt);
    
    const response = await result.response;
    const text = response.text();
    return text;
}

export async function imageDescriptionGenerate(imageBuffer) {

    const prompt = "Descreva a seguinte imagem sem falar que é uma descrição";
  
    try {
      const image = {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/png",
        },
      };
      const res = await model.generateContent([prompt, image]);
      return res.response.text() || "Alt-text não disponível.";
    } catch (erro) {
      console.error("Erro ao obter alt-text:", erro.message, erro);
      throw new Error("Erro ao obter o alt-text do Gemini.");
    }
  }