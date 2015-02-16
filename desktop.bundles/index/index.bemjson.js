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
				attrs: {
					'data-index': 1
				}
			},
			{
				block: 'range',
				attrs: {
					'data-index': 2
				}
			}
    ]
});
