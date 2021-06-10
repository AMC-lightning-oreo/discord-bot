const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {
message.react("✔️")

 
function getUserFromMention(mention) {
	if (!mention) return;
//client
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return bot.users.cache.get(mention);
	}
}
 let user = getUserFromMention(args[0]);



try{


  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user}'s avatar'`)
  .setImage((`${user.displayAvatarURL({ dynamic: true })}`));
  message.channel.send(moneyEmbed)

}catch (e){



  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${message.author}'s avatar'`)
  .setImage((`${message.author.displayAvatarURL({ dynamic: true })}`));
  message.channel.send(moneyEmbed)




}

}



module.exports.help = {
name: "avatar",
aliases: ["userimage", "profilepic"]
}
