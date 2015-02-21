({
	block: 'page',
	mods: { stretched: true },
	title: 'Demo BEM-Range control',
	styles: [
		{ elem: 'css', url: '_demo.css' }
	],
	scripts : [
		{ elem : 'js', url : '_demo.js' }
	],
	content: [
		{
			block: 'header',
			tag: 'header',
			content: [
				{
					block: 'title',
					tag: 'h1',
					content: '&#60;input type="range"&#62;'
				},
				{
					block: 'sub-title',
					tag: 'h2',
					content: 'в БЭМ-терминах'
				},
				{
					block: 'menu',
					tag: 'nav',
					content: [
						{
							elem: 'item',
							tag: 'a',
							attrs: {
								href: 'https://github.com/kuflash/bem-range'
							},
							content: "Посмотреть на GitHub"
						},
						{
							elem: 'item',
							tag: 'a',
							attrs: {
								href: 'https://github.com/kuflash/bem-range/wiki'
							},
							content: "Документация"
						}
					]
				}
			]
		},
		{
			block: 'main',
			tag: 'section',
			content: [
				{
					elem: 'header',
					mix: [ { block: 'content-header' } ],
					tag: 'h1',
					content: "Примеры"
				},
				{
					elem: 'content',
					mix: [ { block: 'demo' } ],
					content: [
						{
							block: 'demo',
							elem: 'item',
							tag: 'article',
							content: [
								{
									block: 'demo',
									elem: 'header',
									tag: 'h2',
									content: "Без темы"
								},
								{
									elem: 'content',
									mix: [ { block: 'variants' } ],
									content: [
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "Обычный вид",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:'
												}
											]
										},
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "С отображение текущего значения",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:',
													value: { type: 'static' }
												}
											]
										},
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "С тултипом",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:',
													value: { type: 'tooltip' }
												}
											]
										}
									]
								},
							]
						},
						{
							block: 'demo',
							elem: 'item',
							tag: 'article',
							content: [
								{
									block: 'demo',
									elem: 'header',
									tag: 'h2',
									content: "Тема «Island»"
								},
								{
									elem: 'variants',
									mix: [ { block: 'variants' } ],
									content: [
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "Обычный вид",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:',
													mods: { theme: 'island' }
												}
											]
										},
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "С отображение текущего значения",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:',
													value: { type: 'static' },
													mods: { theme: 'island' }
												}
											]
										},
										{
											block: 'variants',
											elem: 'item',
											content: [
												{
													elem: 'header',
													tag: 'h3',
													content: "С тултипом",
												},
												{
													block: 'range',
													mix: [ { block: 'variants', elem: 'control' } ],
													title: 'Выберите значение:',
													value: { type: 'tooltip' },
													mods: { theme: 'island' }
												}
											]
										}
									]
								},
							]
						}
					]
				}
			]
		}
	]
});
