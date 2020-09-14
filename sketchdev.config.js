

module.exports = {
	origin: 'https://raw.githubusercontent.com/jeremychone/codewalk-s1-sketch-files/main/design-quickstart.sketch',
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