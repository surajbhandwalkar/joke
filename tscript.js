const jokes = [
    "your life does not get better by chance; it gets better by change",
    "one small thought in the morning can change",
    " मत सोच इतना जिंदगी के बारे मे देबे वाले ने कुछ तो सोचा होगा तेरे  बारे मे 💯🥰",

    "1 रुपये चा चिंगम भाऊ आमचा बाजीराव सिंगम🙋💪😎😁",
    "चीन नंतर कोरोना इटली कडे वळला ",
    "पोरींना अजून भाऊचा गेम च नाही कळला..💯",
    " उपर छत, नीचे साया,भाग कोरोना हमारा भाऊ आया",

    "भाऊ ची पाहिली जशी अदा त्यावर राणू मंडल फिदा❤🔥🔥🔥😂🤣",
    "हर खुशी में कुछ उदासी है    मन ग्रहण की पूर्णमासी ",
    
    "लाख करो गुज़ारिशें लाखों दो हवाले,बदल ही जाते हैं,आखिर बदल जाने वा"

    // Add more emojis 
  ];
const generateBtn = document.getElementById("jokeGenerateBtn");
const joke = document.querySelector(".joke");
// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*jokes.length);
}
// generate random color 
generateBtn.addEventListener("click" , () => {
    joke.textContent = jokes[generateRandomNumber()];
})
















