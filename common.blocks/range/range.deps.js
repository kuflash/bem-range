({
	mustDeps : { block : 'i-bem', elem : 'dom' },
	shouldDeps: [
		{ elems: ['box', 'control', 'title', 'value'] },
		{ elem: 'value', mods: { 'type': 'static'} },
		{ elem: 'value', mods: { 'type': 'tooltip'} }
	]
})