const socket = io();

// Elements
const $messageForm = document.querySelector("#message-form");
const $messageFormInput = document.querySelector("input");
const $messageFormBtn = document.querySelector("button");
const $sendLocationBtn = document.querySelector("#send-location");
const $messages = document.querySelector("#messages");

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationMessageTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;

// Options:
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const autoscroll = () => {
  // new Message
  const $newMessage = $messages.lastElementChild;

  // Height of the last message
  const newwMessageStyles = getComputedStyle($newMessage);
  const newMessageMargin = parseInt(newwMessageStyles.marginBottom);
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;

  // Visible Height
  const visibleHeight = $messages.offsetHeight;

  // Height of messages container
  const containerHeight = $messages.scrollHeight;

  // How far have i scrolled?
  const scrollOffset = $messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight;
  }

  console.log(newMessageMargin);
};

socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoscroll();
});

socket.on("locationMessage", (url) => {
  console.log(url);
  const html = Mustache.render(locationMessageTemplate, {
    username,
    createdAt: moment(url.createdAt).format("h:mm a"),
    url: url.url,
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoscroll();
});

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
  });
  document.querySelector("#sidebar").innerHTML = html;
});

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  $messageFormBtn.setAttribute("disabled", "disabled");

  // disable
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    $messageFormBtn.removeAttribute("disabled");
    $messageFormInput.value = "";
    $messageFormInput.focus();
    // enable
    if (error) {
      return console.log(error);
    }
    console.log("Message Delivered");
  });
  // document.querySelector('#messageInput')
});

$sendLocationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not support by your browser.");
  }
  $sendLocationBtn.setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        $sendLocationBtn.removeAttribute("disabled");
        console.log("Location Shared!");
      }
    );
  });
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
