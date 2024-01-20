import axios from 'axios';

const OPENAI_API_KEY = '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'; // Replace with your actual API key
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

// Function to call OpenAI's API
const callOpenAI = async (payload) => {
    try {
        const response = await axios.create({
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });
        const params = {
            prompt: "How are you?",
            model: "text-davinci-003",
            max_tokens: 10,
            temperature: 0,
          };
        response
        await axios.post("https://api.openai.com/v1/completions", params)
        .then((result) => {
            console.log(result)
            console.log(result.data.choices[0].text);
            return result.data.choices[0].text
        })
        .catch((err) => {
            console.log(err);
        });
    }
    catch(e) {
        console.log(e)
    }
}
export { callOpenAI };