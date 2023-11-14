import { Bot, webhookCallback } from 'grammy';

const bot = new Bot(Bun.env.BOT_TOKEN!);

bot.command('start', (ctx) => ctx.reply(`Running with Bun v${Bun.version}!`));

export default {
	fetch: (req: Request) => {
		return webhookCallback(bot, 'std/http')(req);
	}
};
