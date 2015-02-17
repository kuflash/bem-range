modules.define('range', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {

			rangeSelectors: ['::-webkit-slider-runnable-track', '::-moz-range-track'],

			onSetMod: {
				js: {
					inited: function () {
						this.control = this.findElem('control');
						this.bindTo('control', 'change', this._onChange, this);
						this.bindTo('control', 'mousedown', this._onMouseDown, this);
						this.bindTo('control', 'mouseup', this._onMouseUp, this);
						this.control.trigger('change');
					}
				}
			},

			getVal: function () {
				return Number(this.control.val());
			},

			_updateFillTrack: function () {
				var selector 		= '';
				var elemClass 	= this.control.attr('class').split(' ')[0];
				var blockClass 	= this.domElem.attr('class').split(' ')[0];
				var blockIndex 	= this.domElem.data('index');
				var max 				= Number(this.control.attr('max'));
				var min 				= Number(this.control.attr('min'));
				var property 		= 'background-size:' + 100 * (this.getVal() - min) / (max - min) + '% 100%';
				var rule 				= '';
				var rules 			= '';

				this.rangeSelectors.forEach(function (value, index) {
					selector = '.' + blockClass + '[data-index="' + blockIndex + '"] .' + elemClass + value;
					rule += selector + '{' + property + '}';
				}, this);

				this.__self.cssRules[blockIndex] = rule;

				$('style.range-styles').remove();

				for (var index in this.__self.cssRules) {
					rules += this.__self.cssRules[index];
				}

				$('<style>', { class: 'range-styles' }).text(rules).appendTo('head');
			},

			_onChange: function (event) {
				this._updateFillTrack();
				this.findElem('tooltip').text(this.getVal());
				this.emit('change');
			},

			_onMouseDown: function (event) {
				this.bindTo('control', 'mousemove', this._onChange, this);
			},

			_onMouseUp: function (event) {
				this.unbindFrom('control', 'mousemove', this._onChange);
			}
		},
		{
			cssRules: {}
		}
	));
});
