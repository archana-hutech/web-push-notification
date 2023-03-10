// console.log("Service worker loaded");

// self.addEventListener("push", (e) => {
//   const data = e.data.json();
//   console.log("Push Recieved...");
//   self.registration.showNotification(data.title, {
//     body: data.body,
//   });
// });

// console.log("Service worker loaded");
// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "yes",
//         type: "button",
//         title: "👍 Yes",
//       },
//       {
//         action: "no",
//         type: "text",
//         title: "👎 No (explain why)",
//         placeholder: "Type your explanation here",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("poll", options);
// });

// self.addEventListener("push", (e) => {
//   console.log("99999999999");
//   const data = e.data.json();
//   console.log("Push Recieved...");
//   //   self.registration.showNotification(data.title, {
//   //     body: data.body,
//   self.registration.showNotification(data.title, {
//     body: data.body,
//     image: data.image,
//     // options: data.options,
//   });
// });

this.addEventListener("push", function (e) {
  console.log("here-1");
  const data = e.data.json();
  const options = {
    body: data.body,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQOKYTdFq-pklcbw-ZKo7PdWmbP6qu5kiqg&usqp=CAU",
    badge: "https://zefayar-uat.hutechweb.com/08a4491b2e23b6e7.png", // icon
    icon: "https://i.pinimg.com/originals/be/33/76/be3376b0f835a1766cb7a95003ea4a7d.jpg", // icon
  };
  console.log({ options });
  this.registration.showNotification("Zefayar", options);
});

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "coffee-action",
//         type: "button",
//         title: "View Cart",
//         icon: "https://zefayar-uat.hutechweb.com/08a4491b2e23b6e7.png",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     actions: [
//       {
//         action: "reply",
//         type: "text",
//         title: "Reply",
//         placeholder: "Type text here",
//       },
//     ],
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// registration.showNotification(data.title, {
//   body: data.options,
//   // options: data.options,
// });

// navigator.serviceWorker.getRegistration().then((registration) => {
//   registration.showNotification("👋 sent from push notification");
// });

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: data.body,
//     sound: "./apple.mp3",
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// this.addEventListener("push", function (e) {
//   const data = e.data.json();
//   const options = {
//     body: 'Timestamp is set to "01 Jan 2000 00:00:00".',
//     timestamp: Date.parse("01 Jan 2000 00:00:00"),
//   };
//   console.log({ options });
//   this.registration.showNotification("Zefayar", options);
// });

// registration.showNotification("🍊 Your daily notification", options);
