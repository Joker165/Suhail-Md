const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xdacity@gmail.com"
global.location="Lagos,nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Feranmi245/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5";
global.website=process.env.GURL || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5cd34db4564750eee3f0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿✊" 


global.devs = "2348022159244" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348022159244";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022159244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_19_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpaRGZPaFpTT0FlbHdKRGs4Z1pTcmdoSmIwVjZiVWdGUmFiZm1OcEJtKzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NzczMjYwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4NjY2NkU1RkY2MzdEQjZFQ0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDkyMzQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFJMmo1eExxUXhhMmc5cHY0dHdvOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmUwYWM2ZGItNmIwYy00NDJmLWFhODItMmY3Yzg5ZDlkOGZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTU4LFxuICAgICAgNjgsXG4gICAgICA4NyxcbiAgICAgIDE1MyxcbiAgICAgIDE5MCxcbiAgICAgIDE4MSxcbiAgICAgIDQ1LFxuICAgICAgNTcsXG4gICAgICAyMTcsXG4gICAgICAxNzgsXG4gICAgICAyMzksXG4gICAgICA3NyxcbiAgICAgIDIxNyxcbiAgICAgIDg0LFxuICAgICAgMTk1LFxuICAgICAgMjEyLFxuICAgICAgMTMsXG4gICAgICAyMzcsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyMjIsXG4gICAgICAyMjYsXG4gICAgICAxMTYsXG4gICAgICAyMjksXG4gICAgICAxNTYsXG4gICAgICAyMCxcbiAgICAgIDIwLFxuICAgICAgNDAsXG4gICAgICA5LFxuICAgICAgNTAsXG4gICAgICAxOTIsXG4gICAgICAyMzQsXG4gICAgICAyNDEsXG4gICAgICAxMzcsXG4gICAgICA1MCxcbiAgICAgIDIzMyxcbiAgICAgIDE3MixcbiAgICAgIDc0LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNXTDdKU1pWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ3NzMyNjA2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmxvb2QtV29ya1wiLFxuICAgIFwibGlkXCI6IFwiMTgxMjk5NzEzMTQ3MDY1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmYXhJNFBFUFRHNzdRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0RQMHFYRTdNamFoNVNBN2VId3hrdnJEcEZYVG1OODduMkpVbXprNzB3WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXdmQwMytlVXhMRWhhQVNaUlgzeHpJZjI5MlZNc2owa0RPUVBMdU9MMFFFV1hVdHdJbFNEOG1nMysvbGQyNUFLU2VUc29ROFhnZnNSRlgzMEZ0OTJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyWGlQYVRCcUFwc1BRakJyYWtWZzBpaEU0MGFTTXNDMjVPMkczVWJoMFpoeTRJQmJ4ZzhYL25IVnYvMC9BYU11WWk0Q1FpY0FyWjZqYVh1WkFNOHFBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ3NzMyNjA2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTIzNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNjVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2NS5qc29uIjogIntcImtleURhdGFcIjpcIm9iNTBnSVVqa1U2b2I0cGY0WWR6SVJpMmIwLzRmbUhSaUQ5L29QeTJrYWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA1NzAxNzcxOSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NTM3NTk2NTJcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "=",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",
  packname: process.env.PACK_NAME || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲",
  botname : process.env.BOT_NAME  || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
