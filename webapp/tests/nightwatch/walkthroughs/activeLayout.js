//
// // - it should resize templates when window resized
// // - it should resize templates when device orientation changes
//
//
// // Gagarin Verification Tests
// // - it should display in fullscreen mode
// // - it should display in sidebar mode
// // - it should display in page mode
// // - it should display in fence mode
// // - it should specify a northFence for templates
// // - it should specify a southFence for templates
// // - it should specify an eastFemce for templates
// // - it should specify a westFence for templates
// // - it should hide/show sidebar
//
// // - swipe right should open menu on phone and portrait tablet
// // - swipe left should close menu on phone and portrait tablet
//
// // Nightwatch Validation Tests
// // - it should display menu and fullscreen offset on phone instead of in a mode
// // - it should only display page mode on tablet when in landscape mode
// // - it should display menu and fullscreen offset on tablet when in portrait mode
//
// // - it should hide/show navbars
// // - it should hide/show footer
// // - it should hide/show header
//
// module.exports = {
//   tags: ['layout'],
//   before: function(client){
//     // this depends on the accounts-housemd package
//     client
//       .url("http://localhost:3000")
//       .initializeLists()
//       .pause(500)
//   },
//   "it should hide/show navbar": function(client){
//     client
//       .resizeWindow(1024,768)
//       .verify.elementPresent("#navbarHeader")
//       .verify.elementPresent("#navbarFooter")
//       .keys(client.Keys.CONTROL)
//       .keys(client.Keys.COMMAND)
//       .keys(client.Keys.N)
//       .pause(300)
//       .keys(client.Keys.NULL)
//       .verify.elementNotPresent("#navbarHeader")
//       .verify.elementNotPresent("#navbarFooter")
//       .keys(client.Keys.CONTROL)
//       .keys(client.Keys.COMMAND)
//       .keys(client.Keys.N)
//       .pause(300)
//       .keys(client.Keys.NULL)
//       .verify.elementPresent("#navbarHeader")
//       .verify.elementPresent("#navbarFooter")
//   },
//   "sidebar should be visible in landscape and desktop modes" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(1024, 768)
//       .verify.elementPresent("#sidebar")
//       .verify.elementPresent("#signInLink")
//       .verify.elementPresent("#mainPanel")
//   },
//   "sidebar should be hidden in portrait and phone mode" : function (client) {
//     var newUserId = false;
//     client
//       .resizeWindow(480, 690)
//         .verify.hidden("#sidebar")
//         .verify.hidden("#signInLink")
//         .verify.elementPresent("#mainPanel")
//       .resizeWindow(480, 690)
//         .verify.hidden("#sidebar")
//         .verify.hidden("#signInLink")
//         .verify.elementPresent("#mainPanel")
//   },
//   after: function(client){
//     client.end();
//   }
// }