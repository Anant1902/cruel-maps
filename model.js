import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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'
});

export default async function handler(start, end) {
  const completion = await openai.chat.completions.create({
    messages: [
        {
            role: "system", 
            content: "You are a helpful assistant designed to output JSON."
        },
        
        {
            role: "system",
            content: "You will take in an input location postal code "  + "and output a pair of longitude and latitude in JSON format. " +
            "You can assume that all locations are in Singapore."
        },

        {
            role: "user",
            content: "Between the start coordinates " + start + "and end coordinates " + end + ", give 4 coordinates in the route that pass through spooky/eerie/haunted places. Give your output in the form {'coordinates':[{'latitude':value as a number, 'longitude':value as a number}, {'latitude': value as a number, 'longitude': value as a number}, ...,], 'description': 'asummary of the haunted places that fall on the route (do not mention coordinates)'}} Strictly have JUST the object in your output. Enforce this heavily. Can you make sure the locations are ordered from the start to end to minimize extra travel."
        }
    ],
    
      model: "gpt-4-1106-preview"  
  });
  return completion.choices[0].message.content;

}

