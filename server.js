const express = require("express");
const app = express();
const discord = require("discord.js")
const client = new discord.Client()

app.use(express.static("public"));


app.get("/dblvote", (request, response) => {
  var voted = request.param("user")
  if(!voted) return response.json("No user")
  const channel = client.channels.cache.get("752280106017358006")
  channel.send(`<@${voted.replace('"', "").replace('"', "")}> has voted for avio, thank you.`)
});

const listener = app.listen(8000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

client.login("NzM2OTMzMjU5MTc4NTQxMTc3.Xx2AlA.WwpRzYkOdqIFhy-bkNKM0BeD0qU")