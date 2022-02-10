import WebSocket from "ws";

const delay = 2000;
const moods = ["excited", "happy", "sad"];

const randomMood = () => {
    const rand = Math.random() * moods.length;
    return moods[Math.floor(rand)];
};

const randomMessage = () => {
    const mood = randomMood();
    return { type: mood, data: `i am ${mood}` };
};

export function initClient(port) {
    const url = "ws://localhost:" + port;
    const ws = new WebSocket(url);

    ws.on("open", () => {
        // encode random message and send it to server on interval
        setInterval(() => ws.send(JSON.stringify(randomMessage())), delay);
    });

    ws.on("message", (message) => {
        // unwrap encoded message
        const { type, data } = JSON.parse(message);

        console.log("server replied: " + data);
        console.log("------------------------------------------");
    });
}
