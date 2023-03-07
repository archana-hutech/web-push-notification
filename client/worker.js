console.log("Service worker loaded");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: data.body,
  });
});

// console.log("Service worker loaded");

// self.addEventListener("push", (e) => {
//   const data = e.data.json();
//   console.log("Push Recieved...");
//   self.registration.showNotification(data.title, {

//     body: data.body,
//   });
// });

// const title = "Poll";

// const options = {
//   body: "Do you like this photo?",
//   image: "/images/demos/cat-image.jpg",
//   icon: "/images/demos/icon-512x512.png",
//   badge: "/images/demos/badge-128x128.png",
//   actions: [
//     {
//       action: "yes",
//       type: "button",
//       title: "👍 Yes",
//     },
//     {
//       action: "no",
//       type: "text",
//       title: "👎 No (explain why)",
//       placeholder: "Type your explanation here",
//     },
//   ],
// };

// registration.showNotification(title, options);
