(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableChat = exports.disableChat = exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n    <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":<span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    messages: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var messages = _ref.messages,
      nickname = _ref.nickname;
  appendMsg(messages, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

var disableChat = function disableChat() {
  sendMsg.style.display = "none";
};

exports.disableChat = disableChat;

var enableChat = function enableChat() {
  sendMsg.style.display = "flex";
};

exports.enableChat = enableChat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVOZXdNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2FibGVDaGF0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZW5hYmxlQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW1CO0FBQ2pDLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILHdDQUNzQkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUR6QyxnQkFDb0RBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRDFFLHFCQUMwRkQsSUFEMUY7QUFHQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjtBQUNILENBTkQ7O0FBUUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVU7QUFDNUJBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGNEIsTUFHckJDLEtBSHFCLEdBR1pGLEtBSFksQ0FHckJFLEtBSHFCO0FBSTVCLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUNILElBQUFBLFFBQVEsRUFBQ2dCO0FBQVYsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWEsRUFBYjtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBUEQ7O0FBU08sSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUEwQjtBQUFBLE1BQXhCcEIsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZE0sUUFBYyxRQUFkQSxRQUFjO0FBQ3RERixFQUFBQSxTQUFTLENBQUNKLFFBQUQsRUFBV00sUUFBWCxDQUFUO0FBQ0gsQ0FGTTs7OztBQUlQLElBQUdILE9BQUgsRUFBVztBQUNQQSxFQUFBQSxPQUFPLENBQUNrQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1YsYUFBbkM7QUFDSDs7QUFFTSxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQzdCbkIsRUFBQUEsT0FBTyxDQUFDb0IsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0gsQ0FGTTs7OztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDNUJ0QixFQUFBQSxPQUFPLENBQUNvQixLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcblxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PntcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pbm5lckhUTUw9YFxuICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3VcIn06PHNwYW4+ICR7dGV4dH1cbiAgICBgO1xuICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcbn1cblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT57XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBpbnB1dDtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywge21lc3NhZ2VzOnZhbHVlfSk7XG4gICAgaW5wdXQudmFsdWUgPVwiXCI7XG4gICAgYXBwZW5kTXNnKHZhbHVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoe21lc3NhZ2VzLCBuaWNrbmFtZX0pID0+IHtcbiAgICBhcHBlbmRNc2cobWVzc2FnZXMsIG5pY2tuYW1lKTtcbn1cblxuaWYoc2VuZE1zZyl7XG4gICAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2hhdCA9ICgpID0+IHtcbiAgICBzZW5kTXNnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxufVxuXG5leHBvcnQgY29uc3QgZW5hYmxlQ2hhdCA9ICgpID0+IHtcbiAgICBzZW5kTXNnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxufVxuXG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./paint");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjA2MWJjYjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9wYWludFwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7Il19
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUc7QUFDckIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUNULElBQUFBLFFBQVEsRUFBUkE7QUFBRCxHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0gsQ0FKRDs7QUFNQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBR0QsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRjRCLE1BR3BCcUIsS0FIb0IsR0FHVkQsS0FIVSxDQUdwQkMsS0FIb0I7QUFJNUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCbkIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcblxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcblxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT57XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHtuaWNrbmFtZX0pO1xuICAgIGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICAgIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4odmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn0iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQ3BDLE1BQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDSCxDQU5EOztBQVFPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDekNYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FBaEI7QUFDSCxDQUZNOzs7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUFlO0FBQUEsTUFBYkQsUUFBYSxTQUFiQSxRQUFhO0FBQzdDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBQWhCO0FBQ0gsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcik9PntcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7bmlja25hbWV9KSA9PiB7XG4gICAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpXG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHtuaWNrbmFtZX0pID0+e1xuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdCFgLCBcInJnYigyNTUsIDE0OSwgMClcIilcbn0iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCavas = exports.disableCanvas = exports.handleFilld = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var controls = document.getElementById("jsControls");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 550;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

function handleCM(event) {
  event.preventDefault();
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilld = function handleFilld(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilld = handleFilld;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCavas = function enableCavas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCavas = enableCavas;

var hideControls = function hideControls() {
  controls.style.display = "none";
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  controls.style.display = "flex";
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImN0eCIsImdldENvbnRleHQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZSIsIklOSVRJQUxfQ09MT1IiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0b3BQYWludGluZyIsInN0YXJ0UGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImhhbmRsZUZpbGxkIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYXZhcyIsImhpZGVDb250cm9scyIsImRpc3BsYXkiLCJzaG93Q29udHJvbHMiLCJyZXNldENhbnZhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1FLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLElBQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFFQSxJQUFNTyxhQUFhLEdBQUcsU0FBdEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQVYsTUFBTSxDQUFDVyxLQUFQLEdBQWVELFdBQWY7QUFDQVYsTUFBTSxDQUFDWSxNQUFQLEdBQWdCRixXQUFoQjtBQUVBTixHQUFHLENBQUNTLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVQsR0FBRyxDQUFDVSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosV0FBbkIsRUFBZ0NBLFdBQWhDO0FBQ0FOLEdBQUcsQ0FBQ1csV0FBSixHQUFrQk4sYUFBbEI7QUFDQUwsR0FBRyxDQUFDUyxTQUFKLEdBQWdCSixhQUFoQjtBQUNBTCxHQUFHLENBQUNZLFNBQUosR0FBZ0IsR0FBaEI7QUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEJGLEVBQUFBLFFBQVEsR0FBRyxLQUFYO0FBQ0Q7O0FBRUQsU0FBU0csYUFBVCxHQUF5QjtBQUN2QkgsRUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQm5CLEVBQUFBLEdBQUcsQ0FBQ2lCLFNBQUo7QUFDQWpCLEVBQUFBLEdBQUcsQ0FBQ29CLE1BQUosQ0FBV0YsQ0FBWCxFQUFjQyxDQUFkO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxDQUFELEVBQUlDLENBQUosRUFBd0I7QUFBQSxNQUFqQkcsS0FBaUIsdUVBQVQsSUFBUztBQUN6QyxNQUFJQyxZQUFZLEdBQUd2QixHQUFHLENBQUNXLFdBQXZCOztBQUNBLE1BQUlXLEtBQUssS0FBSyxJQUFkLEVBQW1CO0FBQ2pCdEIsSUFBQUEsR0FBRyxDQUFDVyxXQUFKLEdBQWlCVyxLQUFqQjtBQUNEOztBQUNEdEIsRUFBQUEsR0FBRyxDQUFDd0IsTUFBSixDQUFXTixDQUFYLEVBQWNDLENBQWQ7QUFDQW5CLEVBQUFBLEdBQUcsQ0FBQ3lCLE1BQUo7QUFDQXpCLEVBQUFBLEdBQUcsQ0FBQ1csV0FBSixHQUFrQlksWUFBbEI7QUFDRCxDQVJEOztBQVVBLFNBQVNHLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLE1BQU1ULENBQUMsR0FBR1MsS0FBSyxDQUFDQyxPQUFoQjtBQUNBLE1BQU1ULENBQUMsR0FBR1EsS0FBSyxDQUFDRSxPQUFoQjs7QUFDQSxNQUFJLENBQUNoQixRQUFMLEVBQWU7QUFDYkksSUFBQUEsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBVDtBQUNBLDhCQUFZVyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsU0FBL0IsRUFBMEM7QUFBRUMsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUExQztBQUNELEdBSEQsTUFHTztBQUNMRSxJQUFBQSxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixDQUFWO0FBQ0EsOEJBQVlXLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxVQUEvQixFQUEyQztBQUFFSCxNQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsTUFBQUEsQ0FBQyxFQUFEQSxDQUFMO0FBQVFHLE1BQUFBLEtBQUssRUFBR3RCLEdBQUcsQ0FBQ1c7QUFBcEIsS0FBM0M7QUFDRDtBQUNGOztBQUVELFNBQVNzQixnQkFBVCxDQUEwQk4sS0FBMUIsRUFBaUM7QUFDL0IsTUFBTUwsS0FBSyxHQUFHSyxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsZUFBakM7QUFDQXBDLEVBQUFBLEdBQUcsQ0FBQ1csV0FBSixHQUFrQlcsS0FBbEI7QUFDQXRCLEVBQUFBLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQmEsS0FBaEI7QUFDRDs7QUFFRCxTQUFTZSxlQUFULEdBQTJCO0FBQ3pCLE1BQUl2QixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJBLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FWLElBQUFBLElBQUksQ0FBQ2tDLFNBQUwsR0FBaUIsTUFBakI7QUFDRCxHQUhELE1BR087QUFDTHhCLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0FWLElBQUFBLElBQUksQ0FBQ2tDLFNBQUwsR0FBaUIsT0FBakI7QUFDRDtBQUNGOztBQUVELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQWtCO0FBQUEsTUFBakJqQixLQUFpQix1RUFBVCxJQUFTO0FBQzdCLE1BQUlDLFlBQVksR0FBRXZCLEdBQUcsQ0FBQ1MsU0FBdEI7O0FBQ0EsTUFBR2EsS0FBSyxLQUFJLElBQVosRUFBaUI7QUFDZnRCLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixHQUFjYSxLQUFkO0FBQ0Q7O0FBQ0R0QixFQUFBQSxHQUFHLENBQUNVLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CSixXQUFuQixFQUFnQ0EsV0FBaEM7QUFDQU4sRUFBQUEsR0FBRyxDQUFDUyxTQUFKLEdBQWdCYyxZQUFoQjtBQUNELENBUEQ7O0FBU0EsU0FBU2lCLGlCQUFULEdBQTZCO0FBQzNCLE1BQUkxQixPQUFKLEVBQWE7QUFDWHlCLElBQUFBLElBQUk7QUFDSiw4QkFBWVQsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNPLElBQS9CLEVBQXFDO0FBQUNqQixNQUFBQSxLQUFLLEVBQUd0QixHQUFHLENBQUNTO0FBQWIsS0FBckM7QUFDRDtBQUNGOztBQUVELFNBQVNnQyxRQUFULENBQWtCZCxLQUFsQixFQUF5QjtBQUN2QkEsRUFBQUEsS0FBSyxDQUFDZSxjQUFOO0FBQ0Q7O0FBRURDLEtBQUssQ0FBQ0MsSUFBTixDQUFXMUMsTUFBWCxFQUFtQjJDLE9BQW5CLENBQTJCLFVBQUN2QixLQUFEO0FBQUEsU0FDM0JBLEtBQUssQ0FBQ3dCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDYixnQkFBaEMsQ0FEMkI7QUFBQSxDQUEzQjs7QUFJQSxJQUFJN0IsSUFBSixFQUFVO0FBQ1JBLEVBQUFBLElBQUksQ0FBQzBDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCVCxlQUEvQjtBQUNEOztBQUVNLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHN0IsQ0FBSCxRQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixRQUFNQSxDQUFOO0FBQUEsU0FBY0YsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBdkI7QUFBQSxDQUF4Qjs7OztBQUNBLElBQU02QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBRzlCLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLE1BQVNHLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFNBQXFCRCxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixFQUFPRyxLQUFQLENBQS9CO0FBQUEsQ0FBMUI7Ozs7QUFDQSxJQUFNMkIsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFFM0IsS0FBRixTQUFFQSxLQUFGO0FBQUEsU0FBY2lCLElBQUksQ0FBQ2pCLEtBQUQsQ0FBbEI7QUFBQSxDQUFwQjs7OztBQUNBLElBQU00QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDakN0RCxFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixXQUEzQixFQUF3Q3pCLFdBQXhDO0FBQ0E5QixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixXQUEzQixFQUF3Q25DLGFBQXhDO0FBQ0FwQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ3BDLFlBQXRDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixZQUEzQixFQUF5Q3BDLFlBQXpDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ1gsaUJBQXBDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDL0J4RCxFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3BCLFdBQXJDO0FBQ0E5QixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQzlCLGFBQXJDO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQy9CLFlBQW5DO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixZQUF4QixFQUFzQy9CLFlBQXRDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ04saUJBQWpDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDL0J0RCxFQUFBQSxRQUFRLENBQUNvQyxLQUFULENBQWVtQixPQUFmLEdBQXlCLE1BQXpCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDL0J4RCxFQUFBQSxRQUFRLENBQUNvQyxLQUFULENBQWVtQixPQUFmLEdBQXlCLE1BQXpCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTWpCLElBQUksQ0FBQyxNQUFELENBQVY7QUFBQSxDQUFwQjs7OztBQUVQLElBQUkzQyxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUNMLFFBQXZDO0FBQ0FZLEVBQUFBLFlBQVk7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NvbnRyb2xzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqc0NvbG9yXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuXG5jb25zdCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XG5jb25zdCBDQU5WQVNfU0laRSA9IDU1MDtcblxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XG5jYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX1NJWkU7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5saW5lV2lkdGggPSAyLjU7XG5cbmxldCBwYWludGluZyA9IGZhbHNlO1xubGV0IGZpbGxpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xuICBwYWludGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKCkge1xuICBwYWludGluZyA9IHRydWU7XG59XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmKCBjb2xvciAhPT0gbnVsbCl7XG4gICAgY3R4LnN0cm9rZVN0eWxlID1jb2xvcjtcbiAgfVxuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgaWYgKCFwYWludGluZykge1xuICAgIGJlZ2luUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwgeyB4LCB5LCBjb2xvciA6IGN0eC5zdHJva2VTdHlsZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb2xvckNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIGZpbGxpbmcgPSBmYWxzZTtcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xuICB9IGVsc2Uge1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICB9XG59XG5cbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3I9IGN0eC5maWxsU3R5bGU7XG4gIGlmKGNvbG9yICE9PW51bGwpe1xuICAgIGN0eC5maWxsU3R5bGU9Y29sb3I7XG4gIH1cbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3Jcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2FudmFzQ2xpY2soKSB7XG4gIGlmIChmaWxsaW5nKSB7XG4gICAgZmlsbCgpO1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7Y29sb3IgOiBjdHguZmlsbFN0eWxlfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDTShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgoY29sb3IpID0+XG5jb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcbik7XG5cbmlmIChtb2RlKSB7XG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxkID0gKHtjb2xvcn0pID0+ICBmaWxsKGNvbG9yKTtcbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2FudmFzID0gKCkgPT4ge1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xufVxuXG5leHBvcnQgY29uc3QgZW5hYmxlQ2F2YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlQ29udHJvbHMgPSAoKSA9PntcbiAgY29udHJvbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd0NvbnRyb2xzID0gKCkgPT57XG4gIGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XG4gIGhpZGVDb250cm9scygpO1xufSJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameStarting = exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

var _chat = require("./chat");

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotif");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, " : ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var setNotif = function setNotif(text) {
  notifs.innerHTML = "";
  notifs.innerHTML = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotif("");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _chat.enableChat)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCavas)();
  (0, _paint.showControls)();
  (0, _chat.disableChat)();
  notifs.innerText = "You are the Painter, Paint : ".concat(word);
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded() {
  setNotif("Game ended.");
  (0, _paint.disableCanvas)();
  (0, _paint.disableCanvas)();
  (0, _paint.resetCanvas)();
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  setNotif("Game will start soon");
};

exports.handleGameStarting = handleGameStarting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwic2V0Tm90aWYiLCJ0ZXh0IiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImhhbmRsZUdhbWVTdGFydGVkIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJ3b3JkIiwiaGFuZGxlR2FtZUVuZGVkIiwiaGFuZGxlR2FtZVN0YXJ0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWY7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFZO0FBQzNCTCxFQUFBQSxLQUFLLENBQUNNLFNBQU4sR0FBa0IsRUFBbEI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBSTtBQUMxQixRQUFNQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixNQUF2QixDQUF0QjtBQUNBRCxJQUFBQSxhQUFhLENBQUNFLFNBQWQsYUFBNEJILE1BQU0sQ0FBQ0ksUUFBbkMsZ0JBQWlESixNQUFNLENBQUNLLE1BQXhEO0FBQ0FiLElBQUFBLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkwsYUFBbEI7QUFDSCxHQUpHO0FBS0gsQ0FQRDs7QUFTQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDdkJiLEVBQUFBLE1BQU0sQ0FBQ0csU0FBUCxHQUFtQixFQUFuQjtBQUNBSCxFQUFBQSxNQUFNLENBQUNHLFNBQVAsR0FBbUJVLElBQW5CO0FBQ0gsQ0FIRDs7QUFLTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsU0FBZWQsVUFBVSxDQUFDYyxPQUFELENBQXpCO0FBQUEsQ0FBM0I7Ozs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkNKLEVBQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQUxNOzs7O0FBTUEsSUFBTUssaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixRQUFXO0FBQUEsTUFBVEMsSUFBUyxTQUFUQSxJQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDUSxTQUFQLDBDQUFtRFUsSUFBbkQ7QUFDSCxDQUxNOzs7O0FBT0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDUCxFQUFBQSxRQUFRLENBQUMsYUFBRCxDQUFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FMTTs7OztBQU9BLElBQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBSztBQUNuQ1IsRUFBQUEsUUFBUSxDQUFDLHNCQUFELENBQVI7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlzYWJsZUNhbnZhcywgaGlkZUNvbnRyb2xzLCBlbmFibGVDYXZhcywgc2hvd0NvbnRyb2xzLCByZXNldENhbnZhcyB9IGZyb20gXCIuL3BhaW50XCI7XG5pbXBvcnQgeyBkaXNhYmxlQ2hhdCwgZW5hYmxlQ2hhdCB9IGZyb20gXCIuL2NoYXRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmXCIpO1xuXG5jb25zdCBhZGRQbGF5ZXJzID0gKHBsYXllcnMpID0+e1xuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBsYXllckVsZW1lbnQuaW5uZXJUZXh0PSBgJHtwbGF5ZXIubmlja25hbWV9IDogJHtwbGF5ZXIucG9pbnRzfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG59KTtcbn07XG5cbmNvbnN0IHNldE5vdGlmID0gKHRleHQpID0+IHtcbiAgICBub3RpZnMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBub3RpZnMuaW5uZXJIVE1MID0gdGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7c29ja2V0c30pID0+IGFkZFBsYXllcnMoc29ja2V0cyk7XG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoKSA9PiB7XG4gICAgc2V0Tm90aWYoXCJcIik7XG4gICAgZGlzYWJsZUNhbnZhcygpO1xuICAgIGhpZGVDb250cm9scygpO1xuICAgIGVuYWJsZUNoYXQoKTtcbn1cbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7d29yZH0pID0+e1xuICAgIGVuYWJsZUNhdmFzKCk7XG4gICAgc2hvd0NvbnRyb2xzKCk7XG4gICAgZGlzYWJsZUNoYXQoKTtcbiAgICBub3RpZnMuaW5uZXJUZXh0ID0gYFlvdSBhcmUgdGhlIFBhaW50ZXIsIFBhaW50IDogJHt3b3JkfWA7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoKSA9PiB7XG4gICAgc2V0Tm90aWYoXCJHYW1lIGVuZGVkLlwiKTtcbiAgICBkaXNhYmxlQ2FudmFzKCk7XG4gICAgZGlzYWJsZUNhbnZhcygpO1xuICAgIHJlc2V0Q2FudmFzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRpbmcgPSAoKSA9PntcbiAgICBzZXROb3RpZihcIkdhbWUgd2lsbCBzdGFydCBzb29uXCIpXG59Il19
},{"./chat":1,"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilld);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.leaderNotif, _players.handleLeaderNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
  socket.on(events.gameStarting, _players.handleGameStarting);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwibGVhZGVyTm90aWYiLCJoYW5kbGVMZWFkZXJOb3RpZiIsImdhbWVFbmRlZCIsImhhbmRsZUdhbWVFbmRlZCIsImdhbWVTdGFydGluZyIsImhhbmRsZUdhbWVTdGFydGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsZ0JBQ2xCQyxNQURrQjtBQUFBLE1BQzVCQyxNQUQ0QixXQUM1QkEsTUFENEI7QUFFbkNMLEVBQUFBLE1BQU0sR0FBRUcsT0FBUjtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxPQUFqQixFQUEwQkMsNEJBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLFlBQWpCLEVBQStCQyxpQ0FBL0I7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLHNCQUF6QjtBQUNBWixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDUSxTQUFqQixFQUE0QkMsc0JBQTVCO0FBQ0FkLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNVLFdBQWpCLEVBQThCQyx3QkFBOUI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNZLE1BQWpCLEVBQXlCQyxrQkFBekI7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNjLFlBQWpCLEVBQStCQywyQkFBL0I7QUFDQXBCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNnQixXQUFqQixFQUE4QkMsMEJBQTlCO0FBQ0F0QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDa0IsV0FBakIsRUFBOEJDLDBCQUE5QjtBQUNBeEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ29CLFNBQWpCLEVBQTRCQyx3QkFBNUI7QUFDQTFCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNzQixZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0gsQ0FkTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRsZURpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoLCBoYW5kbGVGaWxsZCB9IGZyb20gXCIuL3BhaW50XCI7XG5pbXBvcnQgeyBoYW5kbGVQbGF5ZXJVcGRhdGUsIGhhbmRsZUdhbWVTdGFydGVkLCBoYW5kbGVMZWFkZXJOb3RpZiwgaGFuZGxlR2FtZUVuZGVkLCBoYW5kbGVHYW1lU3RhcnRpbmcgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHM9IChhU29ja2V0KSA9PiB7XG4gICAgY29uc3Qge2V2ZW50c30gPSB3aW5kb3c7XG4gICAgc29ja2V0PSBhU29ja2V0O1xuICAgIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlciApO1xuICAgIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICAgIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XG4gICAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxkKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLmdhbWVTdGFydGVkLCBoYW5kbGVHYW1lU3RhcnRlZCk7XG4gICAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJOb3RpZiwgaGFuZGxlTGVhZGVyTm90aWYpO1xuICAgIHNvY2tldC5vbihldmVudHMuZ2FtZUVuZGVkLCBoYW5kbGVHYW1lRW5kZWQpO1xuICAgIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0aW5nLCBoYW5kbGVHYW1lU3RhcnRpbmcpO1xufTsiXX0=
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])