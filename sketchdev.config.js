

module.exports = {
	// the origin for the input (design.sketch)
	origin: 'https://raw.githubusercontent.com/jeremychone/codewalk-s1-sketch-files/main/design-quickstart.sketch',
	// download origin to input if not present (otherwise, needs to do 'npm run sketchdev download' explicitly)
	download: true,

	input: 'design.sketch',

	output: [{
		type: 'svg',
		out: 'svg/sprite.svg',
		artboard: /^ico\/.*/,
		flatten: '-'
	},
	{
		type: 'png',
		out: './',
		artboard: /^images\/.*/
	},
	{
		type: 'style',
		out: 'pcss/var-colors.pcss',
		style: /^clr\/.*/,
		group: 2
	}
	]
}