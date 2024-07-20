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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5L0h0NFVkbW4zbnFQYzFsVmM4R1NSRE4xa05pSkxuWkszM093aFN1ZTVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDc3MzI2MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMEYyMkY5OUIxMDFGOEFBNzMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5NTE0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDc3MzI2MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQUU0MkVGOUI4NDdBNTlFODkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5NTE0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJieDN6MzVTMVIxaTBfdGtiMzByNmh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2ZjcwZmE1LTFlZTAtNDY5OC1iMmFlLWY5NTA5ZDAyMDRjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE0NyxcbiAgICAgIDE1OCxcbiAgICAgIDE1LFxuICAgICAgMjQ2LFxuICAgICAgODgsXG4gICAgICAxMzQsXG4gICAgICA2NixcbiAgICAgIDEzNyxcbiAgICAgIDE1NixcbiAgICAgIDIzNSxcbiAgICAgIDE5LFxuICAgICAgMTExLFxuICAgICAgMTkzLFxuICAgICAgODUsXG4gICAgICAyMCxcbiAgICAgIDg0LFxuICAgICAgMTQ3LFxuICAgICAgOTMsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICA2NCxcbiAgICAgIDE1LFxuICAgICAgMTQ2LFxuICAgICAgNTcsXG4gICAgICA5OSxcbiAgICAgIDUyLFxuICAgICAgMTYzLFxuICAgICAgMjQxLFxuICAgICAgNzMsXG4gICAgICA3NixcbiAgICAgIDI0NCxcbiAgICAgIDk4LFxuICAgICAgMjA2LFxuICAgICAgNyxcbiAgICAgIDE5NyxcbiAgICAgIDIwMCxcbiAgICAgIDEzNixcbiAgICAgIDExMSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWFM3U1lLVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NzczMjYwNjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJsb29kLVdvcmtcIixcbiAgICBcImxpZFwiOiBcIjE4MTI5OTcxMzE0NzA2NToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZmF4STRQRU9IYzc3UUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdEUDBxWEU3TWphaDVTQTdlSHd4a3ZyRHBGWFRtTjg3bjJKVW16azcwd1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicW02U0thbU5GNGZvZDlVWitJeHU4d01EZ3hnNXpnVmF5WjZVSUNYbXMxeWtUeDc2SVNHRlduZDVWQVN6a2NKU3NxWGRKcjRsTDFVVVFLKzFjcjRtQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVkU5ZVhrTDV3d2h6MjNyVnNldUhwK0dQeGpaYUZndHVDQUFUNGtnWERrVkhzN2dpamNKQU5nUFNGWndUUkwwaUJsZCtiYU9CR2tySGZzZzNDTXZnQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NzczMjYwNjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDk1MTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTY1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvYjUwZ0lVamtVNm9iNHBmNFlkeklSaTJiMC80Zm1IUmlEOS9vUHkya2FnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwNTcwMTc3MTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNDUzNzU5NjUyXCJ9Igp9" // PUT ur SESSION_ID

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
