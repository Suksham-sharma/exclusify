import { config } from "dotenv";
import TelegramBot from "node-telegram-bot-api";

config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, {
  polling: false,
});
const CHANNEL_USERNAME =
  process.env.TELEGRAM_CHANNEL_USERNAME || "-1002309413812";

export async function generateInviteLink() {
  try {
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

    const invite = await bot.createChatInviteLink(CHANNEL_USERNAME, {
      expire_date: expirationTime,
      member_limit: 1,
      creates_join_request: false,
    });

    if (!invite) throw new Error("Error while creating Invite Link");

    console.log(
      `Generated link: ${invite.invite_link} at ${new Date().toISOString()}`
    );

    return {
      link: invite.invite_link,
      expiresAt: new Date(expirationTime * 1000).toISOString(),
    };
  } catch (error) {
    console.error("Error generating invite link:", error);
    return {
      message: "Failed to generate Invite Link",
    };
  }
}
