/**
 * @module range
 */

modules.define('range', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {

			_trackSelectors: ['::-webkit-slider-runnable-track', '::-moz-range-track'],

			onSetMod: {
				js: {
					inited: function () {
						this.control = this.findElem('control');
						this._id = this.control.attr('id');
						this.bindTo('control', 'change', 		this._onChange, 		this);
						this.bindTo('control', 'mousedown', this._onMouseDown, 	this);
						this.bindTo('control', 'mouseup', 	this._onMouseUp, 		this);
						this.control.trigger('change');
					}
				}
			},

			/**
			 * Returns value of the input range
			 * @returns {Number}
			 */
			getVal: function () {
				return Number(this.control.val());
			},

			/**
			 * Sets value to the input range
			 * @param {Number} value
			 * @returns {range} this
			 */
			setVal: function (value) {
				this.control.val(Number(value));
				return this;
			},

			_updateFillTrack: function () {
				var max 				= Number(this.control.attr('max'));
				var min 				= Number(this.control.attr('min'));
				var property 		= 'background-size:' + 100 * (this.getVal() - min) / (max - min) + '% 100%, 100% 100%';
				var rule 				= '';
				var rules 			= '';

				this._trackSelectors.forEach(function (value, index) {
					var selector = '#' + this._id + value;
					rule += selector + '{' + property + '}';
				}, this);

				this.__self.cssRules[this._id] = rule;

				for (var index in this.__self.cssRules) rules += this.__self.cssRules[index];

				$('style.range-styles').text(rules);
			},

			_updateTooltipPosition: function (event) {
				if (event) {
					var widthValue = this.elem('value').outerWidth();
					var diffWidth = this.control.outerWidth() - this.control.width();
					var offsetX = event.offsetX || event.layerX;
					if (offsetX - diffWidth > 0 && offsetX + diffWidth / 2 < this.control.outerWidth()) {
						var coor = offsetX - widthValue;
						this.elem('value').css('left', coor + 'px');
					}
				}
			},

			_onChange: function (event) {
				if (this.hasMod(this.elem('value'), 'type', 'tooltip')) this._updateTooltipPosition(event.originalEvent);
				this.findElem('value').text(this.getVal());
				this._updateFillTrack();
				this.emit('change');
			},

			_onMouseDown: function (event) {
				if (this.hasMod(this.elem('value'), 'type', 'tooltip')) this.elem('value').show();
				this.bindTo('control', 'mousemove', this._onChange, this);
				this._onChange(event);
			},

			_onMouseUp: function (event) {
				if (this.hasMod(this.elem('value'), 'type', 'tooltip')) this.elem('value').hide();
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