console.log("Joe's Custom Compendia | Initializing");

const tokenUpdateMap = new Map();
const flagCache = new Map();

let joesCustomCompendiaPreUpdateToken = async (tokenDocument, changed, options, userId) => {
  // Prevent re-entry
  if (tokenUpdateMap.get(tokenDocument.id)) return;
  tokenUpdateMap.set(tokenDocument.id, true);

  try {
    // Cache prevX and prevY to avoid redundant database calls
    let prevX = flagCache.get(`${tokenDocument.id}-prevX`);
    let prevY = flagCache.get(`${tokenDocument.id}-prevY`);

    if (prevX === undefined) {
      prevX = await tokenDocument.getFlag("joes-custom-compendia", "prevX") ?? tokenDocument.x;
      flagCache.set(`${tokenDocument.id}-prevX`, prevX);
    }

    if (prevY === undefined) {
      prevY = await tokenDocument.getFlag("joes-custom-compendia", "prevY") ?? tokenDocument.y;
      flagCache.set(`${tokenDocument.id}-prevY`, prevY);
    }

    if ((changed.x !== undefined && changed.x !== prevX) || (changed.y !== undefined && changed.y !== prevY)) {
      const updates = {
        'flags.joes-custom-compendia.prevX': tokenDocument.x,
        'flags.joes-custom-compendia.prevY': tokenDocument.y,
      };
      await tokenDocument.update(updates);

      console.log(`joes-custom-compendia |  ${tokenDocument.name}: moved from (${prevX}, ${prevY}) to (${changed.x ?? tokenDocument.x}, ${changed.y ?? tokenDocument.y})`);

      const user = game.users.get(userId);
      if (user && user.isGM === false) {
        console.log("Move caused by a player:", user.name);
      } else if (user && user.isGM === true) {
        console.log("Move caused by a GM:", user.name);
      } else {
        console.log("Move caused by MATT or another system action.");
      }

      flagCache.set(`${tokenDocument.id}-prevX`, changed.x ?? tokenDocument.x);
      flagCache.set(`${tokenDocument.id}-prevY`, changed.y ?? tokenDocument.y);

    }

  } catch (error) {
    console.error(`joes-custom-compendia |  Error updating previous position flags for ${tokenDocument.name}:`, error);
  }

  tokenUpdateMap.delete(tokenDocument.id);
};

Hooks.on("preUpdateToken", joesCustomCompendiaPreUpdateToken);
