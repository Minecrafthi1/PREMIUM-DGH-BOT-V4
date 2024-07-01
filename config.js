module.exports = {
  bot: {
    token: "", //Bot Token from https://discord.com/developers/applications
    prefix: "/", //Bot Prefix
    owners: "1074763726856654898", //Bot Onwer ID
    maintenance: false,
    mongourl:
      "", //https://mongodb.com/cloud/atlas/register
    invite:
      "https://discord.com/oauth2/authorize?client_id=1256840966447304714&permissions=8&integration_type=0&scope=bot", //Link Invite Bot
    bot_add_description:
      "You've just added me to **{guild}**.\nThank you for adding me to your server",
    bot_remove_description:
      "You got me out on the **{guild}** server, sorry if there's a mistake on me"
  },
  status: {
    stats: "idle", //Status Bot <idle, online, dnd , invisible>
    type: "playing", //Playing Bot <PLAYING, WATCHING , and others>
    name: "music" //Status Playing
  },
  dash: {
    secret: "1HUHrwvessgY5t0raPnT36RLpxtFKmYA", //SECRET Bot
    id: "1256840966447304714", //ID Bot
    url: "" //URL
  },
  server: {
    id: "1255143473007431690", //Server ID
    invite: "https://discord.gg/7Y7nX5mJQb" //Server Support
  },
  image: {
    welcome:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image WelcomeCard
    leave:
      "https://cdn.glitch.com/02e867ae-7c7c-4637-ace7-66ea251fe9d5%2Fwelcome.png?v=1613195262594", //Image LeaveCard
    level:
      "https://cdn.glitch.com/2337366e-e123-49db-827b-3e28e03e7910%2Fimages.jpeg?1623811398590", //Image LevelCard
    help:
      "https://media.discordapp.net/attachments/806082492498706442/900573349577633802/standard_1.gif", //Image Cmd Help.js
    guild_add:
      "https://cdn.discordapp.com/attachments/829696536396955649/856381256379400202/20210621_105311.jpg", //Image Guild Add
    guild_remove: "",
    leaderboard:
      "https://i.pinimg.com/736x/d1/00/7b/d1007b46e6175f49f53712f16e4f6a3c.jpg" //Image Leaderboard Card
  },
  mod: {
    muted_defauld: "Muted", // bot will make Roles muted for members who got muted
    limit_warn: 3, //bot will kick member if it has 3 warns
    limit_muted: 5 //bot will kick member if it has 5 Muted
  },
  logs: {
    boton: "", //Channel ID Bot Online
    botadd: "", //Channel ID Bot Add In Guild
    botdel: "", //Channel ID Bot Remove in Guild
    botreport: "",
    boterror: ""
  },
  giveaway: {
    default: {
      storage: "./data/giveaways.json",
      default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        embedColorEnd: "#FF0000",
        reaction: "882659092559196190"
      }
    }
  }
};

//Don't Delete This Source Creation!
//Made By Sintya & Fc Glitch
//Owner Sintya
//Developer Fc Glitch & Androz2091
//My Github: Sintya4
//My Developer Github: CODE-GLITCH & Androz2091
//Join My Server: dgh-bot.ddns.net/dc
//Is there a problem with our source? ask us!
//Copyright 2021 © DGH BOT V3
