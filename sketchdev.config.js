

module.exports = {
	// the origin for the input (design.sketch)
	origin: 'https://raw.githubusercontent.com/jeremychone/sketch-files/main/design-quickstart.sketch',
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
		type: 'color',
		out: './pcss/var-colors.pcss',
		prefix: 'clr-',
		group: 1,
		ref: ['prime', 'gray', 'second']
	}
	]
}