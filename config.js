const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923164104704";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_03_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZRklEakZwK2NhQU1Xb3creEEvb2toUDhuZDhhZDAvK24zbUZSOWZqVUpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2NDEwNDcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTE2Mzk3N0I5OEY4RDRENDM5ODBERDQzQTVFM0M0MjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjYwMjE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTY0MTA0NzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5N0ZGN0RCRkE1NDU5OEQyRkFCODI0MTMyRkQ5MkVBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NjAyMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibzhGOFZTbS1TT3lUMzY2S1F0RmZkQVwiLFxuICBcInBob25lSWRcIjogXCIzMzU5ODkwZS1jYmM2LTQ1MmEtOTcwNC02OGJhMThkZDhlODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICA5MixcbiAgICAgIDIzMyxcbiAgICAgIDYwLFxuICAgICAgMTYxLFxuICAgICAgNDgsXG4gICAgICAyMjEsXG4gICAgICA5MyxcbiAgICAgIDQzLFxuICAgICAgMTUsXG4gICAgICAxMDQsXG4gICAgICAxMjUsXG4gICAgICAzOSxcbiAgICAgIDM3LFxuICAgICAgMjI4LFxuICAgICAgMTgxLFxuICAgICAgMTk1LFxuICAgICAgMTg0LFxuICAgICAgMTQ1LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAxNixcbiAgICAgIDExMSxcbiAgICAgIDI1MSxcbiAgICAgIDE4LFxuICAgICAgNjEsXG4gICAgICAxMDAsXG4gICAgICA4NCxcbiAgICAgIDIxMSxcbiAgICAgIDIwMSxcbiAgICAgIDE0MCxcbiAgICAgIDc1LFxuICAgICAgMTI5LFxuICAgICAgMzQsXG4gICAgICAyMzAsXG4gICAgICAxNzcsXG4gICAgICAzOCxcbiAgICAgIDM2LFxuICAgICAgMTY4LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2kxOHVZQ0VQRFB5TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0UVM3NVVwRlBNYURLelAvZkhxSWlQQXpiUmZMcWxwRTdTOWRoWmcvd2tjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInI5STZuQ0w2WmZrbmxsVVYwOTBlajJ6eGFHdlBYbmFJNlpTellkWWljOXZEaWw0Q3pEQlpBQzdzSnMrUWYzZlE0RjN1ODYzekZxdzZ6bTdkSlNsakF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRGRHBXTWdtNkxvcDRHQlBSL2JTalFDcVdteVRVOW1LUzl6Z1N2Wm4rbzJ4VWlpS0EzYW1zSG5FRDhpZ1MxaDlHbStRR01RblhVWGN2azIyMXpreURBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY0MTA0NzA0Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTQ3NzE3MTE1NTA5ODo3NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJHaHVsYW0tTXVydGF6YVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTY0MTA0NzA0Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjYwMjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFa0FBTFgvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsNnRNOE5DcHplb3pqVXlvODhNdFpCS3pBWisrcUpIZTNIeU5SZlJ2NUFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1MjY1NTA3OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYxODg5NTE3MDJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPMFVtT2J1bG5yR0hFZW1NaDF1V1MxY2g2QVJ6MTZzaVlUNzV3OWZKZTAwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1MjY1NTA3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSHNjZitqTDBrck9nZGxnamlSbGtBZnRzTm1HaTMvSG1SMDNpL1labXMxdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTI2NTUwNzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE2MTAwMzA4MDkzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFlBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYlo5clhjWm12UFlXZFZJMWh4UHlZZXU2OXprUGE1c09LZHorTVM3VGpIUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTI2NTUwNzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFlCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFN0SmlGOXNSSkVxNFQyL04zUmYzOWxuYUhaMkZBS0t3Y2dTcjh2N3Q3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTI2NTUwNzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjY2MDExOTE1M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRWtBQUxYOS5qc29uIjogIntcImtleURhdGFcIjpcIjQ0U0VOMy9OWmVnVmFuS0FZWGZWeFJVenIxVENheWVQNG8vTHlGTEh0TTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzUyNjU1MDc5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNzNdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjEzNDE5MDQ0NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRWtBQUxYX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRNm9XK0RlcHgwNXlield2ejBhdVg2WldVSUhRdkYrY3hWaEpMUytIVk9rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1MjY1NTA3OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw3M119LFwidGltZXN0YW1wXCI6XCIxNzE2MjI3Mzg4NDM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Genie",
  ownername:process.env.OWNER_NAME|| "Ghulam-Murtaza",


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
