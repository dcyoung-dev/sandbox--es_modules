import {displayMessage} from "displayMessage";

export const log = (message) => {
  console.log({message})

  displayMessage(message, "log");
}