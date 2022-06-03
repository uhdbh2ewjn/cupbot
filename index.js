require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client({ intents: 32767 });

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  }

});