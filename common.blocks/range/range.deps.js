({
	mustDeps : { block : 'i-bem', elem : 'dom' },
	shouldDeps: [
		{ elems: ['control', 'title', 'value'] },
		{ elem: 'value', mods: { 'type': 'static'} },
		{ elem: 'value', mods: { 'type': 'tooltip'} }
	]
})