const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    react: "🆗",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.
    ▫️.
    ▫️.
| *DOWNLOAD COMMANDS* |
    ▫️.
    ▫️.
    ▫️.
| *GROUP COMMANDS* |
${menu.group}
| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️
    ▫️
    ▫️
    ▫️
| *SEARCH COMMANDS* |
${menu.search}


🥶ᴅᴀʀᴋ ɴᴏᴠᴀ xᴍᴅ🥶

> DARK-NOVA-XMD MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://github.com/dula9x/DARK-NOVA-XMD-V1-WEB-PAIR/blob/main/images/%E1%B4%85%E1%B4%80%CA%80%E1%B4%8B%20%C9%B4%E1%B4%8F%E1%B4%A0%E1%B4%80%20x%E1%B4%8D%E1%B4%85.png?raw=true",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
