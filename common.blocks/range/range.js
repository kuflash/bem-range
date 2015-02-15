modules.define('range', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {

			rangeSelectors: ['::-webkit-slider-runnable-track', '::-moz-range-track'],

			onSetMod: {
				js: {
					inited: function () {
						this.control = this.findElem('control');
						this.bindTo('control', 'change', this._onChange, this);
						this._updateFillTrack();
					}
				}
			},

			getVal: function () {
				return Number(this.control.val());
			},

			_updateFillTrack: function () {
				var selectors = '';
				var elemClass = this.control.attr('class').split(' ')[0];
				var max = Number(this.control.attr('max'));
				var min = Number(this.control.attr('min'));
				var val = this.getVal();
				var property = 'background-size:' + 100 * val / (max - min) + '% 100%';
				var rule = "";

				this.rangeSelectors.forEach(function (value, index) {
					selectors = '.' + elemClass + value;
					rule += selectors + '{' + property + '}';
				}, this);

				$('style.range-styles').remove();
				$('<style>', { class: 'range-styles' }).text(rule).appendTo('head');
			},

			_onChange: function (event) {
				this._updateFillTrack();
			}
		}
	));
});
