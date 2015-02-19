modules.define('range', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {

			trackSelectors: ['::-webkit-slider-runnable-track', '::-moz-range-track'],
			thumbSelectors: ['::-webkit-slider-thumb', '::-ms-thumb', '::-moz-range-thumb'],

			onSetMod: {
				js: {
					inited: function () {
						this.control = this.findElem('control');
						this._id = this.control.attr('id');
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
				var max 				= Number(this.control.attr('max'));
				var min 				= Number(this.control.attr('min'));
				var property 		= 'background-size:' + 100 * (this.getVal() - min) / (max - min) + '% 100%';
				var rule 				= '';
				var rules 			= '';

				this.trackSelectors.forEach(function (value, index) {
					var selector = '#' + this._id + value;
					rule += selector + '{' + property + '}';
				}, this);

				this.__self.cssRules[this._id] = rule;

				for (var index in this.__self.cssRules) rules += this.__self.cssRules[index];

				$('style.range-styles').text(rules);
			},

			_updateTooltipPosition: function () {
				var rules = '';
				var rule = '';
				var property = 'content:"' + this.getVal() + '";';

				this.thumbSelectors.forEach(function (value, index) {
					var selector = '#' + this._id + ':focus' + value + ':after';
					rule += selector + '{' + property + '}';
				}, this);

				this.__self.cssRules[this._id] += rule;

				for (var index in this.__self.cssRules) rules += this.__self.cssRules[index];

				$('style.range-styles').text(rules);
			},

			_onChange: function (event) {
				this._updateFillTrack();
				if (this.hasMod(this.elem('control'), 'show-tooltip', true)) this._updateTooltipPosition();
				this.findElem('value').text(this.getVal());
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
			cssRules: {},

			live: function() {
				$('<style>', { class: 'range-styles' }).appendTo('head');
				return false;
			}
		}
	));
});
