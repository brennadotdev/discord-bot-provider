import * as discordbot from "@pulumi/discordbot";

const random = new discordbot.Random("my-random", { length: 24 });

export const output = random.result;