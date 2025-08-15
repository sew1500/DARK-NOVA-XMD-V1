const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "uS5EGQ6R#ej_vIiKLq4hyBsH2ELVMo2Elq3X2xZmknkHqzB2eAl8",
  OWNER_NUM: process.env.OWNER_NUM || "94752978237 / 94770349867",
  PREFIX: process.env.PREFIX ||"."
};
