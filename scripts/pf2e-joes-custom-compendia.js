// console.log("Joe's Custom Compendia | Initializing");

// let pf2eJoesCustomCompendiaReady = async () => {
//   const tokens = canvas.scene.tokens.contents;
//   for (const token of tokens) {
//     try {
//       await token.setFlag("pf2e-joes-custom-compendia", "prevX", token.x);
//       await token.setFlag("pf2e-joes-custom-compendia", "prevY", token.y);
//       console.log(`Flags initialized for token ${token.name}`);
//     } catch (error) {
//       console.error(`Error setting flags for token ${token.name}:`, error);
//     }
//   }
// };

// let pf2eJoesCustomCompendiaCreateEmbeddedDocuments = async (documentType, documents, options, userId) => {
//   if (documentType === "Token") {
//     for (const tokenDocument of documents) {
//       try {
//         await tokenDocument.setFlag("pf2e-joes-custom-compendia", "prevX", tokenDocument.x);
//         await tokenDocument.setFlag("pf2e-joes-custom-compendia", "prevY", tokenDocument.y);
//         console.log(`Flags set for token ${tokenDocument.name}`);
//       } catch (error) {
//         console.error(`Error setting flags for token ${tokenDocument.name}:`, error);
//       }
//     }
//   }
// };

// let pf2eJoesCustomCompendiaCreateTokenDocument = async (tokenDocument, options, userId) => {
//   console.log("Joe's Custom Compendia | Token created:", tokenDocument.name);
//   try {
//     await tokenDocument.setFlag("pf2e-joes-custom-compendia", "prevX", tokenDocument.x);
//     await tokenDocument.setFlag("pf2e-joes-custom-compendia", "prevY", tokenDocument.y);
//   } catch (error) {
//     console.error(`pf2e-joes-custom-compendia | Error initializing previous position flags for ${tokenDocument.name}:`, error);
//   }
// }

// const tokenUpdateMap = new Map();
// const flagCache = new Map();

// let pf2eJoesCustomCompendiaPreUpdateToken = async (tokenDocument, changed, options, userId) => {
//   // Prevent re-entry
//   if (tokenUpdateMap.get(tokenDocument.id)) return;
//   tokenUpdateMap.set(tokenDocument.id, true);

//   try {
//     // Cache prevX and prevY to avoid redundant database calls
//     let prevX = flagCache.get(`${tokenDocument.id}-prevX`);
//     let prevY = flagCache.get(`${tokenDocument.id}-prevY`);

//     if (prevX === undefined) {
//       prevX = await tokenDocument.getFlag("pf2e-joes-custom-compendia", "prevX") ?? tokenDocument.x;
//       flagCache.set(`${tokenDocument.id}-prevX`, prevX);
//     }

//     if (prevY === undefined) {
//       prevY = await tokenDocument.getFlag("pf2e-joes-custom-compendia", "prevY") ?? tokenDocument.y;
//       flagCache.set(`${tokenDocument.id}-prevY`, prevY);
//     }

//     if ((changed.x !== undefined && changed.x !== prevX) || (changed.y !== undefined && changed.y !== prevY)) {
//       const updates = {
//         'flags.pf2e-joes-custom-compendia.prevX': tokenDocument.x,
//         'flags.pf2e-joes-custom-compendia.prevY': tokenDocument.y,
//       };
//       await tokenDocument.update(updates);

//       const user = game.users.get(userId);
//       if (user && user.isGM === false) {
//         console.log("Move caused by a player:", user.name);
//       } else if (user && user.isGM === true) {
//         console.log("Move caused by a GM:", user.name);
//       } else {
//         console.log("Move caused by MATT or another system action.");
//       }

//       flagCache.set(`${tokenDocument.id}-prevX`, changed.x ?? tokenDocument.x);
//       flagCache.set(`${tokenDocument.id}-prevY`, changed.y ?? tokenDocument.y);

//     }

//   } catch (error) {
//     console.error(`pf2e-joes-custom-compendia |  Error updating previous position flags for ${tokenDocument.name}:`, error);
//   }

//   tokenUpdateMap.delete(tokenDocument.id);
// };

// Hooks.once("ready", pf2eJoesCustomCompendiaReady);
// Hooks.on("createEmbeddedDocuments", pf2eJoesCustomCompendiaCreateEmbeddedDocuments);
// Hooks.on("createTokenDocument", pf2eJoesCustomCompendiaCreateTokenDocument);
// Hooks.on("preUpdateToken", pf2eJoesCustomCompendiaPreUpdateToken);
