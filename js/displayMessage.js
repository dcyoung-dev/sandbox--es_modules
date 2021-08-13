export const displayMessage = (message, targetId) => {
  const messageNode = document.createTextNode(message)
  const outputTarget = document.getElementById(targetId)

  outputTarget.appendChild(messageNode)
  outputTarget.appendChild(document.createElement("br"));
}