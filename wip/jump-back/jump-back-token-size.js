/* This macro depends on having the token's previous
x and y coordinates stored in flags on the token. */

const token = canvas.tokens.controlled[0];

if (!token) {
	ui.notifications.warn("Please select a token first.");
} else {
	const prevX = await token.document.getFlag("pf2e-joes-custom-compendiaa", "prevX") ?? token.x;
	const prevY = await token.document.getFlag("pf2e-joes-custom-compendia", "prevY") ?? token.y;

	const gridSize = canvas.scene?.grid?.size || 100;

	const tokenWidth = token.document.width || 1;
	const tokenHeight = token.document.height || 1;

	const innerBounds = canvas.dimensions;
	const minX = innerBounds.sceneX;
	const minY = innerBounds.sceneY;
	const maxX = innerBounds.sceneX + innerBounds.sceneWidth;
	const maxY = innerBounds.sceneY + innerBounds.sceneHeight;

	const dx = prevX < token.x ? -gridSize * tokenWidth : prevX > token.x ? gridSize * tokenWidth : 0;
	const dy = prevY < token.y ? -gridSize * tokenHeight : prevY > token.y ? gridSize * tokenHeight : 0;

	let newX = token.x + dx;
	let newY = token.y + dy;

	newX = Math.max(minX, Math.min(newX, maxX - gridSize * tokenWidth));
	newY = Math.max(minY, Math.min(newY, maxY - gridSize * tokenHeight));

	if (dx !== 0 || dy !== 0) {
		await token.document.update({
			x: newX,
			y: newY,
		});
	}
}
