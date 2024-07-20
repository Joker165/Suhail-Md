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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_37_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNvZ2tzU3BmTytCb1Z0T05FRlVHZzROMnNKT0dRUG9FTUM4M1lIYzNnQm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NzczMjYwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3Rjg1OTVGMkFGNEQzMUVEMDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDUzODY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk13ZEdoZUk3VHR1cHNPV2VZb1R3RHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzEzNGIwYjctZjc0MC00M2FlLTk2NTItY2VjODRiZjVkOTZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDksXG4gICAgICAxNjMsXG4gICAgICAxNzQsXG4gICAgICA5MSxcbiAgICAgIDEzMSxcbiAgICAgIDE2MSxcbiAgICAgIDk4LFxuICAgICAgMTc3LFxuICAgICAgMSxcbiAgICAgIDEyNixcbiAgICAgIDE1NyxcbiAgICAgIDIyOCxcbiAgICAgIDU0LFxuICAgICAgMTUsXG4gICAgICAyOSxcbiAgICAgIDM1LFxuICAgICAgNTcsXG4gICAgICAxMCxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDIzOCxcbiAgICAgIDM3LFxuICAgICAgNzQsXG4gICAgICAyMSxcbiAgICAgIDM4LFxuICAgICAgODgsXG4gICAgICAyNTUsXG4gICAgICAyNyxcbiAgICAgIDM1LFxuICAgICAgMjE2LFxuICAgICAgNyxcbiAgICAgIDUwLFxuICAgICAgMTUwLFxuICAgICAgOTksXG4gICAgICAyMDksXG4gICAgICAxMzUsXG4gICAgICA4NCxcbiAgICAgIDEwOSxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYTlI4Q1c4M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NzczMjYwNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJsb29kLVdvcmtcIixcbiAgICBcImxpZFwiOiBcIjE4MTI5OTcxMzE0NzA2NToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZmF4STRQRUtXYTdiUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdEUDBxWEU3TWphaDVTQTdlSHd4a3ZyRHBGWFRtTjg3bjJKVW16azcwd1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHNZOXFROGpZUm1JcVNlMkRyOE1xUVRUaldwTmNKenR6eTlWeFd3WlQyemNiY3UzUGljOTdQVVBPTEVSUXJsS2Jrb1N0M3ZtZ1lJV2FBOHpOQXdlQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRE4xUjg2YkY5VWUvS3ZWVVFKR05xdDRLSUxtR2V6eTRnbTc5ekpSYnJ6TExnVTVocU1QV1UxRlNHR1d1c2Rkc21SbjlUeUdsOGVNRmwxK2hFZTZ1aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NzczMjYwNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDUzODY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTY1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvYjUwZ0lVamtVNm9iNHBmNFlkeklSaTJiMC80Zm1IUmlEOS9vUHkya2FnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwNTcwMTc3MTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDIsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDUzNzU5NjUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
