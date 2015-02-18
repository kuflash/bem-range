modules.define('range__tooltip', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
	provide(BEMDOM.decl({ block: 'range', elem: 'tooltip' }, {
			onSetMod: {
				js: {
					inited: function () {
						console.log('init tooltip');
					}
				}
			}
		}
	));
});
