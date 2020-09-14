

module.exports = {
	input: 'design.sketch',
	output: [{
		type: 'svg',
		out: 'svg/sprite.svg',
		artboard: /^ico\/.*/,
		flatten: '-'
	},
	{
		type: 'style',
		out: 'pcss/colors.pcss',
		style: /^clr\/.*/,
		group: 2
	}
	]
}