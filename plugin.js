const body = document.getElementById("body");
body.style.fontFamily = "Nunito Sans, sans-serif";
const myDiv = document.getElementById("myDiv");
const inputWidth = "220px";
const messageContainerWidth = "160px";

// Add inline style to the myDiv
myDiv.style.position = "fixed";
myDiv.style.bottom = "0";
myDiv.style.right = "0";
myDiv.style.width = "65px";
myDiv.style.padding = "20px";

const styleElement = document.createElement("style");
document.body.appendChild(styleElement);
const styleSheet = styleElement.sheet;

styleSheet.insertRule(`
        @keyframes popIn {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    `);

styleSheet.insertRule(`
            .message-timestamp {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-bottom: 0px;
                padding: 0px;
            }
        `);

styleSheet.insertRule(`
    .user-message {
        font-size: 13px;
        margin-left: 0px !important;
        margin-right: 0px !important;
        word-break: break-all;
        width: -webkit-fit-content;
        animation: popIn 0.3s linear 0.3s 1 normal both running;
    }
`);

styleSheet.insertRule(`
            .message-container {
                padding:20px;
                gap: 23px;
            }
        `);

styleSheet.insertRule(`
    .bot-message {
        font-size: 13px;
        margin-left: 0px !important;
        margin-right: 0px !important;
        word-break: break-all;
        width: -webkit-fit-content;
        animation: popIn 0.5s linear 0.5s 1 normal both running;
    }
`);

styleSheet.insertRule(`
        .user-message, .bot-message {
            font-size: 13px; 
            margin-left:0px !important;
            margin-right:0px !important;
            word-break: break-all;
            width: -webkit-fit-content;
            animation: 0.5s linear 0.3s 1 normal both running;
        }

        `);

styleSheet.insertRule(`
        .bot-message .message-timestamp {
            position: relative;
            top: -18px; 
            display: block;
            margin-bottom: 5px; 
            text-align: right; 
            height: fit-content;
        }
        `);

styleSheet.insertRule(`
            .bot-message-logo {
                position: absolute;
                bottom: -50px; 
                left: -30px; 
                padding: 30px;
            }
        `);

styleSheet.insertRule(`
            .bot-message {ƒ
                margin-bottom: 25px; 
                
            }
        `);

styleSheet.insertRule(`
            .chat-header {
                // border-radius: 10px 10px 0px 0px;
                background: linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%);
                box-shadow: 0px 8.255px 20.636px 0px rgba(57, 79, 182, 0.30);
                color: white;
                min-height: 54px;
                display: flex;
                align-items: center;
                padding: 10px 13px !important;
                // border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
            }
        `);
styleSheet.insertRule(`
           input,textarea {
                width: calc(100% - 41px) !important;
            }
        `);
styleSheet.insertRule(`
           form {
                padding: 0 18px 17px 14px;
                padding-bottom: 17px;
            }
        `);
styleSheet.insertRule(`
            .message-container::-webkit-scrollbar {
                width: 0;
              }
        `);

// Function to dynamically create and append meta tags
function addMetaTags() {
  var metaCacheControl = document.createElement('meta');
  metaCacheControl.setAttribute('http-equiv', 'cache-control');
  metaCacheControl.setAttribute('content', 'no-cache');

  var metaPragma = document.createElement('meta');
  metaPragma.setAttribute('http-equiv', 'Pragma');
  metaPragma.setAttribute('content', 'no-cache');

  var metaExpires = document.createElement('meta');
  metaExpires.setAttribute('http-equiv', 'Expires');
  metaExpires.setAttribute('content', '-1');

  // Append meta tags to the head section of the document
  document.head.appendChild(metaCacheControl);
  document.head.appendChild(metaPragma);
  document.head.appendChild(metaExpires);
}

// Call the function to add meta tags when the page loads
window.onload = function () {
  addMetaTags();
};

// const backgroundImageUrl="./images/mainBg.png"
const backgroundImageUrl = "https://i.ibb.co/NsvZq3w/mainBg.png";
// Create the chat container div
const chatContainer = document.createElement("div");
chatContainer.className = "chat-container";
chatContainer.id = "chatContainer";
chatContainer.style.position = "absolute";
chatContainer.style.bottom = "100px";
chatContainer.style.right = "20px";
chatContainer.style.width = "340px";
chatContainer.style.height = "0";
chatContainer.style.overflow = "hidden";
chatContainer.style.backgroundImage = `url(${backgroundImageUrl})`;
// chatContainer.style.background='linear-gradient(104.46deg, #282632 -29.5%, #18141E 75.44%, #110E17 171.77%),linear-gradient(0deg, #363636, #363636)';
chatContainer.style.borderRadius = "10px";
chatContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
chatContainer.style.transition = "height 0.3s ease-in-out";
chatContainer.style.display = "flex";
chatContainer.style.flexDirection = "column";
chatContainer.style.backgroundPosition = "center";
chatContainer.style.backgroundRepeat = "no-repeat";
chatContainer.style.backgroundSize = "cover";

// Create the chat header
const chatHeader = document.createElement("div");
chatHeader.className = "chat-header";
chatHeader.style.color = "black";
chatHeader.style.textAlign = "center";
chatHeader.style.marginTop = "1px";
chatHeader.style.fontSize = "14px";
chatHeader.style.fontWeight = "700";
chatHeader.style.position = "relative";

// Create the logo image
const logoImg = document.createElement("img");
logoImg.src = "https://i.ibb.co/jfmW7GB/Wave-Hand-Icon.png";
logoImg.alt = "Antier Bot Logo";
logoImg.style.width = "33px";
logoImg.style.height = "34px";
logoImg.style.marginRight = "9px";

// Set the text content of the chat header
chatHeader.textContent = "Antier Chatbot";
chatHeader.style.color = "white";
//Close Image Goes here//
const miniMize = document.createElement("img");
miniMize.src = "https://stage-chatbot-frontend.s3.us-west-2.amazonaws.com/images/minimize.png"; ////arshit-- will change image////
miniMize.alt = "Mini-mize";
miniMize.style.width = "19px";
miniMize.style.height = "19px";
miniMize.style.position = "absolute";
miniMize.style.right = "38px";
miniMize.style.top = "50%";
miniMize.style.transform = "translateY(-50%)";
miniMize.style.cursor = "pointer";

//Close Image Goes here//
const closeImg = document.createElement("img");
closeImg.src = "https://i.ibb.co/wBYLLP6/Close-Icon.png";
closeImg.alt = "close";
closeImg.style.width = "19px";
closeImg.style.height = "19px";
closeImg.style.position = "absolute";
closeImg.style.right = "13px";
closeImg.style.top = "50%";
closeImg.style.transform = "translateY(-50%)";
closeImg.style.cursor = "pointer";

// Append the logo and chat header to the chatContainer
chatHeader.insertBefore(logoImg, chatHeader.firstChild);
chatHeader.insertBefore(miniMize, chatHeader.firstChild);
chatHeader.insertBefore(closeImg, chatHeader.firstChild);
chatContainer.appendChild(chatHeader);
miniMize.addEventListener("click", function () {
  toggleChatWindow();
});

// Create the message container div
const messageContainer = document.createElement("div");
messageContainer.className = "message-container";
messageContainer.className = "message-container hide-scrollbar";
messageContainer.id = "messageContainer";
messageContainer.style.flex = "1";
messageContainer.style.display = "flex";
messageContainer.style.flexDirection = "column";
messageContainer.style.overflowY = "auto";
messageContainer.style.maxHeight = "calc(100% - 100px)";
messageContainer.style.overflowX = "none";
messageContainer.style.scrollbarWidth = "thin"; // For Firefox
messageContainer.style.msOverflowStyle = "none"; // For IE and Edge
messageContainer.style.scrollbarColor = "transparent transparent"; // For Firefox
// var messageBody = messageContainer.id;
// messageContainer.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"})

//MY

const staticText = document.createElement("div");
const staticMessageContent = document.createElement("div");
staticMessageContent.textContent = "Hello Welcome to Ant bot";
staticText.appendChild(staticMessageContent);
staticText.style.padding = "10px 12px";
staticText.style.position = "relative";
staticText.style.alignSelf = "flex-start";
staticText.style.backgroundColor = "#E2DEDE";
staticText.style.color = "#000";
staticText.style.borderRadius = "12px";
staticText.style.borderBottomLeftRadius = "0px";
staticText.style.marginLeft = "10px";
staticText.style.fontSize = "14px";

messageContainer.appendChild(staticText);

var bubbleContainer = document.createElement("div");
bubbleContainer.style.display = "flex";
bubbleContainer.style.flexFlow = "wrap";
bubbleContainer.style.gap = "10px";

var numberOfTimes = 6;
var names = ["Raise a Query", "How to become a Validator", "Security at Shido", "RINGGGG", "Shido Coins"];

function updateMessageContainer(content) {
  const clickedElement = document.createElement("div");
  clickedElement.textContent = content;
  clickedElement.style.padding = "10px 12px";
  clickedElement.style.position = "relative";
  clickedElement.style.alignSelf = "flex-start";
  clickedElement.style.backgroundColor = "#E2DEDE";
  clickedElement.style.color = "#000";
  clickedElement.style.borderRadius = "12px";
  clickedElement.style.fontSize = "14px";
  clickedElement.style.cursor = "pointer";
  clickedElement.style.transition = "background-color 0.3s";
}

for (var i = 0; i < numberOfTimes && i < names.length; i++) {
  const bubbleMessage = document.createElement("div");
  bubbleMessage.textContent = names[i];
  bubbleMessage.style.padding = "10px 12px";
  bubbleMessage.style.position = "relative";
  bubbleMessage.style.alignSelf = "flex-start";
  bubbleMessage.style.backgroundColor = "#E2DEDE";
  bubbleMessage.style.color = "#000";
  bubbleMessage.style.borderRadius = "12px";
  bubbleMessage.style.fontSize = "14px";
  bubbleMessage.style.cursor = "pointer";
  bubbleMessage.style.transition = "background-color 0.3s";

  bubbleMessage.addEventListener("click", async function () {
    if (this.textContent === "Raise a Query") {
      addInputFields();
    } else {
      addMessage(this.textContent, true);
      try {
        const response = await fetch(
          "https://chat-service.antiers.world/chatBot/ask/service",

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              pragma: "no-cache",
            },
            body: JSON.stringify({
              question: this.textContent,
              // "username": "shido",
              // "domain": "blockchain",
              // "enterprise": "company",
              // "folder_name": "shido",
              // "target_language": "english"
              assistant_id: "asst_3sXV2NC5j9CLyK34C5slOx2H",
              instructions:
                "You are a chat assistant for Shido which is a Blockchain company, and your dataset would be the file uploaded, provide me with answers as quickly as possible and in english language, and only answer questions related to shido or blockchain and not answer anything else other than these",
            }),
          }
        );

        if (response?.ok) {
          const data = await response.json();

          // Check if the status is 204
          if (data?.status === 204) {
            addMessage("Sorry did not get you", false);
            addMessage("please share your query below", false);

            // Display two user input fields and a send button
            addInputFields();
            updateMessageContainer();

            // addMessage("Thank you for your inquiry. We will get back to you within 24 hours.", false);
          } else {
            // Display the answer
            const answer =
              (data && data?.data?.text_response) ||
              "I'm sorry, I couldn't find an answer.";
            addMessage(answer, false);
            updateMessageContainer();
          }
        } else {
          addMessage(
            "An error occurred while fetching the answer1.",
            false
          );
          updateMessageContainer();
        }
      } catch (error) {
        addMessage("An error occurred while fetching the answer.", false);
        updateMessageContainer();
      }
    }
    names.splice(1);
    numberOfTimes = 1;
    bubbleContainer.innerHTML = `<div style="padding: 10px 12px; position: relative; align-self: flex-start; background-color: rgb(226, 222, 222); color: rgb(0, 0, 0); border-radius: 12px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease 0s;">Raise a Query</div>`;
    updateMessageContainer(names[i]);

    // Call the updateMessageContainer function with the clicked content
  });

  bubbleContainer.appendChild(bubbleMessage);
  messageContainer.appendChild(bubbleContainer);
}

// Assuming you have a function to update the content of messageContainer
function updateMessageContainer() {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

///updatedMessageContainer

// Initial scroll to bottom
messageContainer.scrollTop = messageContainer.scrollHeight;

// Create the input form
const questionForm = document.createElement("form");
questionForm.id = "questionForm";
questionForm.style.marginTop = "auto";

// Add an arrow button inside the input container
const inputContainer = document.createElement("div");
inputContainer.style.position = "relative";
inputContainer.style.display = "flex";
inputContainer.style.alignItems = "center";

const attachmentIcon = document.createElement("div");
attachmentIcon.innerHTML = "&#128206;";
attachmentIcon.style.position = "absolute";
attachmentIcon.style.left = "8px";
attachmentIcon.style.top = "8px";
attachmentIcon.style.cursor = "pointer";

const buttonAndFileContainer = document.createElement("div");
buttonAndFileContainer.style.position = "relative";

attachmentIcon.addEventListener("click", function () {
  fileInput.click();
});

const chatInput = document.createElement("input");
chatInput.type = "text";
chatInput.id = "chatInput";
chatInput.autocomplete = "off";
chatInput.name = "question";
chatInput.placeholder = "Aa";
chatInput.style.flex = "1";
chatInput.style.padding = "10px 15px 10px";
chatInput.style.borderRadius = "50px";
chatInput.style.border = "0px";
chatInput.style.outline = "unset";
chatInput.style.fontSize = "14px";
chatInput.style.color = "#fff";
chatInput.style.background = "rgba(255, 255, 255, 0.10";
chatInput.style.marginRight = "0";
chatInput.style.width = "100%";

const sendButton = document.createElement("button");
const sendButtonImg = document.createElement("img");
sendButton.style.width = "25px";
sendButton.style.height = "25px";
sendButton.style.background = "transparent";
sendButton.style.padding = "0";
sendButton.style.border = "0";
sendButton.style.display = "flex";
sendButton.style.alignItems = "center";
sendButton.style.justifyContent = "center";
sendButton.style.marginLeft = "8px";

sendButton.style.cursor = "pointer";
sendButtonImg.alt = "sendImg";
sendButtonImg.src = "https://i.ibb.co/BN6M6hb/Frame.png";
sendButton.appendChild(sendButtonImg);

inputContainer.appendChild(chatInput);
inputContainer.appendChild(sendButton);

// Append the input container to the questionForm
questionForm.appendChild(inputContainer);

// Append the message container and questionForm to the chatContainer
chatContainer.appendChild(messageContainer);
chatContainer.appendChild(questionForm);

// Append the chatContainer to myDiv
myDiv.appendChild(chatContainer);

// Create Buttons outer container
const chatButtonContainer = document.createElement("div");
chatButtonContainer.style.position = "fixed";
chatButtonContainer.style.bottom = "20px";
chatButtonContainer.style.right = "20px";
chatButtonContainer.style.display = "flex";
chatButtonContainer.style.alignItems = "center";
chatButtonContainer.style.gap = "4px";

//Chat text Container
const chatTextButton = document.createElement("button");
chatTextButton.id = "chatTextButton";
chatTextButton.style.display = "block";
chatTextButton.style.background =
  "linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%)";
chatTextButton.style.color = "white";

chatTextButton.style.border = "none";
chatTextButton.style.cursor = "pointer";
chatTextButton.style.borderRadius = "10px";
chatTextButton.style.position = "relative";
chatTextButton.style.boxShadow = "0px 0px 12px 0px #4680CF";
chatTextButton.style.fontSize = "14px";
chatTextButton.style.fontWeight = "700";
chatTextButton.style.padding = "12px";
chatTextButton.textContent = "Chat with Us";

// Create the button element dynamically
const openChatBtn = document.createElement("button");
openChatBtn.id = "openChatBtn";
openChatBtn.style.display = "block";
openChatBtn.style.background =
  "linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%)";
openChatBtn.style.color = "white";
openChatBtn.style.width = "70px";
openChatBtn.style.height = "70px";
openChatBtn.style.border = "none";
openChatBtn.style.cursor = "pointer";
openChatBtn.style.borderRadius = "70%";
openChatBtn.style.position = "relative";
openChatBtn.style.boxShadow = "0px 0px 12px 0px #4680CF";

const span = document.createElement("span");
span.style.position = "absolute";
span.style.top = "50%";
span.style.left = "50%";
span.style.transform = "translate(-50%, -50%)";
span.style.display = "flex";
span.style.alignItems = "center";

const chatIcon = document.createElement("img");
chatIcon.src = "https://i.ibb.co/LtxHFnC/ChatIcon.png";
chatIcon.alt = "Alternative text for the image";
chatIcon.width = 25; // Set the width as needed

chatButtonContainer.appendChild(chatTextButton);
chatButtonContainer.appendChild(openChatBtn);
openChatBtn.appendChild(span);
span.appendChild(chatIcon);

// Append the button to the body element
document.body.appendChild(chatButtonContainer);

document.body.appendChild(buttonAndFileContainer);

// Create the hidden file input element
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.style.display = "none";
fileInput.id = "fileInput";

// Append the file input to the button and file container
buttonAndFileContainer.appendChild(fileInput);

let chatOpen = false;

function toggleChatWindow() {
  chatOpen = !chatOpen;
  chatContainer.style.height = chatOpen ? "480px" : "0";
  // span.textContent = chatOpen ? "🤖" : "💬";
  chatIcon.src = chatOpen
    ? "https://i.ibb.co/0JmMFBL/BotIcon.png"
    : "https://i.ibb.co/LtxHFnC/ChatIcon.png";
}

function addMessage(content, isUser) {
  const message = document.createElement("div");
  message.classList.add(isUser ? "user-message" : "bot-message");

  // Create a message content element
  const messageContent = document.createElement("div");
  messageContent.textContent = content;

  message.appendChild(messageContent);

  message.style.padding = "10px 12px";
  message.style.position = "relative";

  if (isUser) {
    message.style.alignSelf = "flex-end";
    // message.style.backgroundColor = "rgba(23, 73, 77)";
    message.style.background =
      "linear-gradient(280.3deg, #61CDF9 -15.99%, #3147AF 100.2%)";
    message.style.color = "#fff";
    message.style.borderRadius = "12px";
    message.style.borderBottomRightRadius = "0px";
    message.style.marginRight = "10px";
    message.style.fontSize = "14px";
    message.style.maxWidth = "230px";
    // message.style.width = "100%";
  } else {
    message.style.alignSelf = "flex-start";
    message.style.backgroundColor = "#E2DEDE";
    message.style.color = "#000";
    message.style.borderRadius = "12px";
    message.style.borderBottomLeftRadius = "0px";
    message.style.marginLeft = "10px";
    message.style.fontSize = "14px";

    if (!isUser) {
      // Create the logo for bot messages
      const logoImg = document.createElement("img");
      // logoImg.src = "./images/LogoAntier.png";
      logoImg.src = "https://i.ibb.co/CMBfGh9/Logo-Antier.png";
      logoImg.alt = "Bot Logo";
      logoImg.style.width = "14px";
      logoImg.style.height = "14px";
      logoImg.style.marginTop = "5px";

      // Add a CSS class to the logo for positioning
      logoImg.classList.add("bot-message-logo");

      // Append the logo to the bot message
      message.appendChild(logoImg);

      // Create a timestamp element for bot messages
      const timestamp = document.createElement("div");
      timestamp.classList.add("message-timestamp");
      timestamp.textContent = getCurrentTime();
      timestamp.style.position = "absolute";
      timestamp.style.bottom = "0";
      timestamp.style.right = "0";
      timestamp.style.fontSize = "12px";
      timestamp.style.color = "#fff";

      // Append the timestamp to the message
      message.appendChild(timestamp);
    }
  }

  messageContainer.appendChild(message);
  updateMessageContainer();
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

openChatBtn.addEventListener("click", function () {
  toggleChatWindow();
});

// Fetch default bot messages and suggestions
async function fetchDefaultBotMessages() {
  chatButtonContainer.appendChild(chatTextButton);

  //   try {
  //     const response = await fetch("http://127.0.0.1:6100/get_data");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch default bot messages");
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching default bot messages:", error);
  //     return null;
  //   }
}

// Function to add default bot messages and suggestions
// async function addDefaultBotMessages() {

// const data = await fetchDefaultBotMessages();
//   if (data && data.default_bot_messages) {
//     data.default_bot_messages.forEach((message) => {
//       addMessage(message, false);
//     });
//   }
//   if (data && data.suggestions) {
//     data.suggestions.forEach((suggestion) => {
//       addSuggestion(suggestion);
//     });
//   }
// }

// addDefaultBotMessages();

// Function to add a suggestion
function addSuggestion(suggestion) {
  const suggestionElement = document.createElement("div");
  suggestionElement.classList.add("bot-message");
  suggestionElement.style.backgroundColor = "#E2DEDE";
  suggestionElement.style.color = "black";
  suggestionElement.style.borderRadius = "15px";
  suggestionElement.style.marginLeft = "10px";
  suggestionElement.style.display = "flex";

  const bubble = document.createElement("div");
  bubble.style.backgroundColor = "inherit";
  bubble.style.padding = "10px";
  bubble.style.borderRadius = "15px";
  bubble.textContent = suggestion;

  suggestionElement.appendChild(bubble);
  messageContainer.appendChild(suggestionElement);
}

document
  .getElementById("questionForm")
  .addEventListener("submit", async function (event) {
    // Get the current URL
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    const queryParams = url.searchParams;
    const token = queryParams.get("token");
    const lang = queryParams.get("lang");
    event.preventDefault();
    const chatInput = document.getElementById("chatInput");
    const question = chatInput.value;
    chatInput.value = "";
    addMessage(question, true);
    try {
      const response = await fetch(
        "https://chat-service.antiers.world/chatBot/ask/service",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            pragma: "no-cache",
          },
          body: JSON.stringify({
            question: question,
            // "username": "shido",
            // "domain": "blockchain",
            // "enterprise": "company",
            // "folder_name": "shido",
            // "target_language": "english"
            assistant_id: "asst_3sXV2NC5j9CLyK34C5slOx2H",
            instructions:
              "You are a chat assistant for Shido which is a Blockchain company, and your dataset would be the file uploaded, provide me with answers as quickly as possible and in english language, and only answer questions related to shido or blockchain and not answer anything else other than these",
          }),
        }
      );

      if (response?.ok) {
        const data = await response.json();

        // Check if the status is 204
        if (data?.status === 204) {
          addMessage("Sorry did not get you", false);
          addMessage("please share your query below", false);

          // Display two user input fields and a send button
          addInputFields();
          updateMessageContainer();

          // addMessage("Thank you for your inquiry. We will get back to you within 24 hours.", false);
        } else {
          // Display the answer
          const answer =
            (data && data?.data?.text_response) ||
            "I'm sorry, I couldn't find an answer.";
          addMessage(answer, false);
          updateMessageContainer();
        }
      } else {
        addMessage(
          "An error occurred while fetching the answer1.",
          false
        );
        updateMessageContainer();
      }
    } catch (error) {
      addMessage("An error occurred while fetching the answer2.", false);
      updateMessageContainer();
    }
  });
function addEndChatButton() {
  const endButtonAfter = document.createElement("button");
  endButtonAfter.textContent = "End Chat";
  endButtonAfter.style.padding = "12px 13px";
  endButtonAfter.style.borderRadius = "9px";
  endButtonAfter.style.border = "1px solid rgba(213, 65, 69, 0.70)";
  endButtonAfter.style.background = "rgba(213, 65, 69, 0.15)";
  endButtonAfter.style.boxShadow =
    "0px 8.255px 20.636px 0px rgba(213, 65, 69, 0.30)";
  endButtonAfter.style.color = "#fff";
  endButtonAfter.style.fontSize = "14px";
  endButtonAfter.style.fontWeight = "700";
  endButtonAfter.style.marginTop = "10px";
  endButtonAfter.style.height = "44px";
  endButtonAfter.style.width = "calc(50% - 12px)";
  endButtonAfter.style.minWidth = "120px";
  endButtonAfter.style.cursor = "pointer";

  endButtonAfter.addEventListener("click", async function () {
    // Handle the data from the input fields and send a request if needed
    // addMessage(
    //   "Please share your feedback with us.",
    //   false
    // );

    smileFun();
    updateMessageContainer();
  });
  const afterButtonsContainer = document.createElement("div");
  afterButtonsContainer.style.display = "flex";
  afterButtonsContainer.style.alignItems = "center";

  afterButtonsContainer.appendChild(endButtonAfter);
  function reactionContainersOuterFun() {
    messageContainer.appendChild(afterButtonsContainer);
  }
}
// Function to add two user input fields and a send button
function addInputFields() {
  const inputField1 = document.createElement("input");
  inputField1.type = "text";
  inputField1.placeholder = "Enter Email:";
  inputField1.style.padding = "12px 13px";
  inputField1.style.borderRadius = "8px 8px 8px 0px";
  inputField1.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  inputField1.style.background = "#25222b";
  inputField1.style.color = "#fff";
  inputField1.style.fontSize = "14px";
  inputField1.style.fontWeight = "400";
  inputField1.style.marginBottom = "10px";
  inputField1.style.outline = "none";
  chatInput.focus();
  // Set border color when the input is in focus
  inputField1.addEventListener("focus", function () {
    inputField1.style.border = "1px solid #0F9AD7";
  });
  inputField1.addEventListener("blur", function () {
    inputField1.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  });

  const inputField2 = document.createElement("textarea");
  inputField2.type = "text";
  inputField2.placeholder = "Enter Your Query:";
  inputField2.style.padding = "12px 13px";
  inputField2.style.borderRadius = "8px 8px 8px 0px";
  inputField2.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  inputField2.style.background = "#25222b";
  inputField2.style.color = "#fff";
  inputField2.style.fontSize = "14px";
  inputField2.style.fontWeight = "400";
  inputField2.style.marginBottom = "10px";
  inputField2.style.outline = "none";
  inputField2.style.resize = "none";

  // Set border color when the input is in focus
  inputField2.addEventListener("focus", function () {
    inputField2.style.border = "1px solid #0F9AD7";
  });
  inputField2.addEventListener("blur", function () {
    inputField2.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  });

  //Reaction Containers//
  const reactionContainersOuter = document.createElement("div");
  reactionContainersOuter.style.display = "flex";
  reactionContainersOuter.style.alignItems = "center";

  const reactionContainers = document.createElement("div");
  reactionContainers.style.display = "flex";
  reactionContainers.style.flexDirection = "column";
  reactionContainers.style.justifyContent = "center";
  reactionContainers.style.textAlign = "center";
  reactionContainers.style.width = "20%";

  const reactionIcons = document.createElement("button");
  reactionIcons.style.padding = "3px 10px";
  reactionIcons.style.borderRadius = "23px";
  reactionIcons.style.border = "0.5px solid #3654B6";
  reactionIcons.style.background = "#26232B";
  reactionIcons.style.boxShadow =
    "0px 8.255px 20.636px 0px rgba(57, 79, 182, 0.30)";
  reactionIcons.style.color = "#fff";
  reactionIcons.style.fontSize = "14px";
  reactionIcons.style.fontWeight = "700";
  reactionIcons.style.marginTop = "10px";
  reactionIcons.style.height = "32px";
  reactionIcons.style.width = "54px";
  reactionIcons.style.minWidth = "54px";
  reactionIcons.style.cursor = "pointer";

  const reactionIconsImg = document.createElement("img");
  // reactionIconsImg.src = "./images/EmojiSad.png"
  reactionIconsImg.src = "https://i.ibb.co/Z6NRwbB/EmojiSad.png";
  reactionIconsImg.style.width = "24px";
  reactionIconsImg.style.height = "24px";
  reactionIcons.appendChild(reactionIconsImg);

  const reactionAltText = document.createElement("span");
  reactionAltText.textContent = "smile"; // Change the text content if needed
  reactionAltText.style.paddingTop = "3px";
  reactionAltText.style.color = "#fff";
  reactionAltText.style.fontSize = "14px";
  reactionAltText.style.fontWeight = "400";

  reactionContainersOuter.appendChild(reactionContainers);
  reactionContainers.appendChild(reactionIcons);
  reactionContainers.appendChild(reactionAltText);

  function smileFun() {
    messageContainer.appendChild(reactionContainersOuter);
    messageContainer.appendChild(inputField3);
    messageContainer.appendChild(inputField4);
    messageContainer.appendChild(submitbtn);
  }

  const submitbtn = document.createElement("button");
  submitbtn.textContent = "Submit";
  submitbtn.style.padding = "12px 13px";
  submitbtn.style.borderRadius = "9px 9px 9px 0px";
  submitbtn.style.border = "0";
  submitbtn.style.background =
    "linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%)";
  submitbtn.style.color = "#fff";
  submitbtn.style.fontSize = "14px";
  submitbtn.style.fontWeight = "700";
  submitbtn.style.marginTop = "10px";
  submitbtn.style.height = "44px";
  submitbtn.style.width = "calc(50% - 12px)";
  submitbtn.style.minWidth = "120px";
  submitbtn.style.cursor = "pointer";
  submitbtn.style.marginRight = "10px";

  const inputField3 = document.createElement("input");
  inputField3.type = "text";
  inputField3.placeholder = "Enter Email:";
  inputField3.style.padding = "12px 13px";
  inputField3.style.borderRadius = "8px 8px 8px 0px";
  inputField3.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  inputField3.style.background = "#25222b";
  inputField3.style.color = "#fff";
  inputField3.style.fontSize = "14px";
  inputField3.style.fontWeight = "400";
  inputField3.style.marginBottom = "10px";
  inputField3.style.outline = "none";
  chatInput.focus();
  // Set border color when the input is in focus
  inputField1.addEventListener("focus", function () {
    inputField1.style.border = "1px solid #0F9AD7";
  });
  inputField1.addEventListener("blur", function () {
    inputField1.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  });

  const inputField4 = document.createElement("textarea");
  inputField4.type = "text";
  inputField4.placeholder = "Enter Your Query:";
  inputField4.style.padding = "12px 13px";
  inputField4.style.borderRadius = "8px 8px 8px 0px";
  inputField4.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  inputField4.style.background = "#25222b";
  inputField4.style.color = "#fff";
  inputField4.style.fontSize = "14px";
  inputField4.style.fontWeight = "400";
  inputField4.style.marginBottom = "10px";
  inputField4.style.outline = "none";
  inputField4.style.resize = "none";

  // Set border color when the input is in focus
  inputField2.addEventListener("focus", function () {
    inputField2.style.border = "1px solid #0F9AD7";
  });
  inputField2.addEventListener("blur", function () {
    inputField2.style.border = "1px solid rgba(255, 255, 255, 0.10)";
  });

  //Send Button Further Actions

  const sendButtonAfter = document.createElement("button");
  sendButtonAfter.textContent = "Done";
  sendButtonAfter.style.padding = "12px 13px";
  sendButtonAfter.style.borderRadius = "9px 9px 9px 0px";
  sendButtonAfter.style.border = "0";
  sendButtonAfter.style.background =
    "linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%)";
  sendButtonAfter.style.color = "#fff";
  sendButtonAfter.style.fontSize = "14px";
  sendButtonAfter.style.fontWeight = "700";
  sendButtonAfter.style.marginTop = "10px";
  sendButtonAfter.style.height = "44px";
  sendButtonAfter.style.width = "calc(50% - 12px)";
  sendButtonAfter.style.minWidth = "120px";
  sendButtonAfter.style.cursor = "pointer";
  sendButtonAfter.style.marginRight = "10px";

  const endButtonAfter = document.createElement("button");
  endButtonAfter.textContent = "End Chat";
  endButtonAfter.style.padding = "12px 13px";
  endButtonAfter.style.borderRadius = "9px";
  endButtonAfter.style.border = "1px solid rgba(213, 65, 69, 0.70)";
  endButtonAfter.style.background = "rgba(213, 65, 69, 0.15)";
  endButtonAfter.style.boxShadow =
    "0px 8.255px 20.636px 0px rgba(213, 65, 69, 0.30)";
  endButtonAfter.style.color = "#fff";
  endButtonAfter.style.fontSize = "14px";
  endButtonAfter.style.fontWeight = "700";
  endButtonAfter.style.marginTop = "10px";
  endButtonAfter.style.height = "44px";
  endButtonAfter.style.width = "calc(50% - 12px)";
  endButtonAfter.style.minWidth = "120px";
  endButtonAfter.style.cursor = "pointer";

  endButtonAfter.addEventListener("click", async function () {
    // Handle the data from the input fields and send a request if needed
    addMessage("Please share your feedback with us.", false);
    smileFun();
    updateMessageContainer();
  });
  const afterButtonsContainer = document.createElement("div");
  afterButtonsContainer.style.display = "flex";
  afterButtonsContainer.style.alignItems = "center";

  afterButtonsContainer.appendChild(sendButtonAfter);
  afterButtonsContainer.appendChild(endButtonAfter);

  function reactionContainersOuterFun() {
    messageContainer.appendChild(afterButtonsContainer);
  }

  const sendButton = document.createElement("button");
  sendButton.textContent = "Submit";
  sendButton.style.padding = "12px 13px";
  sendButton.style.borderRadius = "9px 9px 9px 0px";
  sendButton.style.border = "0";
  sendButton.style.background =
    "linear-gradient(280deg, #61CDF9 -15.99%, #3147AF 100.2%)";
  sendButton.style.color = "#fff";
  sendButton.style.fontSize = "14px";
  sendButton.style.fontWeight = "700";
  sendButton.style.marginTop = "10px";
  sendButton.style.height = "44px";
  sendButton.style.width = "calc(50% - 12px)";
  sendButton.style.minWidth = "120px";
  sendButton.style.cursor = "pointer";
  sendButton.style.marginRight = "10px";

  //raise q query/
  sendButton.addEventListener("click", async function () {
    // Handle the data from the input fields and send a request if needed
    const input1Value = inputField1.value;
    const input2Value = inputField2.value;
    try {
      const response = await fetch(
        "https://chat-service.antiers.world/chatBot/ticket/saveDetails",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijoic2hpZG8iLCJkb21haW4iOiI6OmZmZmY6MTAuNDIuMTUwLjEyOCIsImVudGVycHJpc2UiOiJibG9ja2NoYWluIiwidGFyZ2V0TGFuZ3VhZ2UiOiJlbmdsaXNoIiwiaWF0IjoxNzA2MTEyNjkyLCJleHAiOjE3MDY3MTc0OTJ9.RIc7gKmWCZVW7K05C25nafj2dddoP840vgR46aYknOE",
          },
          body: JSON.stringify({
            userEmail: input1Value,
            query: input2Value,
          }),
        }
      );
      if (response?.ok) {
        const data = await response.json();
        // addMessage(
        //   data?.message,
        //   false
        // );
        addMessage("Will get back to you soon", false);
        // reactionContainersOuterFun()
        // updateMessageContainer();

        // // Clear the input fields
        inputField1.value = "";
        inputField2.value = "";
        addEndChatButton();
      } else {
      }
    } catch (error) { }
  });

  ///raise a query end//
  // Append the Emojies button to the document

  const endButton = document.createElement("button");
  endButton.textContent = "End Chat";
  endButton.style.padding = "12px 13px";
  endButton.style.borderRadius = "9px";
  endButton.style.border = "1px solid rgba(213, 65, 69, 0.70)";
  endButton.style.background = "rgba(213, 65, 69, 0.15)";
  endButton.style.boxShadow =
    "0px 8.255px 20.636px 0px rgba(213, 65, 69, 0.30)";
  endButton.style.color = "#fff";
  endButton.style.fontSize = "14px";
  endButton.style.fontWeight = "700";
  endButton.style.marginTop = "10px";
  endButton.style.height = "44px";
  endButton.style.width = "calc(50% - 12px)";
  endButton.style.minWidth = "120px";
  endButton.style.cursor = "pointer";

  endButton.addEventListener("click", async function () {
    // Handle the data from the input fields and send a request if needed
    // addMessage(
    //   "Please share your feedback with us.",
    //   false
    // );
    smileFun();
    updateMessageContainer();
  });

  const inputContainer = document.createElement("div");
  inputContainer.appendChild(inputField1);
  inputContainer.appendChild(inputField2);
  inputContainer.appendChild(sendButton);
  inputContainer.appendChild(endButton);
  messageContainer.appendChild(inputContainer);
}
