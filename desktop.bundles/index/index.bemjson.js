({
    block: 'page',
    title: 'Hello, World!',
    styles: [
			{ elem: 'css', url: '_index.css' }
    ],
		scripts : [
			{ elem : 'js', url : '_index.js' }
		],
    content: [
			{
				block: 'range',
				title: 'Range 1',
				min: 0,
				max: 50,
				val: 40
			},
			{
				block: 'range',
				mods: { theme: 'modern' },
				title: 'Range 1',
				displayedValue: { type: 'static' },
				min: 0,
				max: 50,
				val: 40
			},
			{
				block: 'range',
				mods: { theme: 'islands' },
				title: 'Range 1',
				displayedValue: { type: 'tooltip' },
				min: 0,
				max: 50,
				val: 40
			},
    ]
});
