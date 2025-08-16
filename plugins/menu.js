module.exports = {
  pattern: "menu",
  alias: ["help", "commands"],
  desc: "Show all commands",
  category: "main",

  function: async (robin, mek, m, { reply }) => {
    try {
      const menuText = `
*🤖 DARK-NOVA-XMD MENU 🤖*
╔════════════════════
║📌 Main Commands
║- .menu / .help   → Show this menu
║- .alive          → Bot status
╚════════════════════
╔════════════════════
║📥 Downloaders
║- .fb <url>       → Facebook video downloader
╚════════════════════
> POWERD by WHITE ALPHA WOLF X TEAM 
( Add more commands here… )
      `;

      await robin.sendMessage(
        mek.key.remoteJid,
        { text: menuText },
        { quoted: mek }
      );
    } catch (err) {
      console.error("[MENU ERROR]", err);
      reply("❌ Error while showing menu.");
    }
  },
};
