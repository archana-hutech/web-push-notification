const publicVapidKey =
  "BHJ41X_cafhClIC1U8_KjLt7iOygI_6CrxjGOJm0PYD3q61r2LPzwZ1WQWVkw99lpWih-Cm4YSH_BZz_4QKn8c0";

// Check for service worker (use in current browser)
if ("serviceWorker" in navigator) {
  //the api for browser itself
  send().catch((err) => console.error(err));
}

//Registe ServiceWorker, Register Push(using browsers push api), send push(notification)
// async function send() {
//   //Register Service worker
//   console.log("registering service worker....");
//   const register = await navigator.serviceWorker.register("/worker.js", {
//     scope: "/",
//   });
//   console.log("service worker registered....");

//   // Register Push
//   console.log("Registering Push...........");
//   const subsciption = await register.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: publicVapidKey,
//   });
//   //   console.log("7777", subsciption);
//   console.log("Push Registered....");

//   //Send Push Notification
//   console.log("Sending Push.........");
//   await fetch("/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subsciption),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log("Push Sent....");
// }

async function send() {
  //Register Service worker
  console.log("registering service worker....");
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });
  console.log("service worker registered....");

  // Register Push
  console.log("Registering Push...........");
  const subsciption = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey,
  });
  //   console.log("7777", subsciption);
  console.log("Push Registered....");

  //Send Push Notification
  console.log("Sending Push.........");
  console.log({ subsciption });
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subsciption),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("Push Sent....");
}

// function myFunction() {

// }
