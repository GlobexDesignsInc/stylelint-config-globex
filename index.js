module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		// ERRORS

		'alpha-value-notation': 'number',
		'at-rule-empty-line-before': ['always', {
			ignore: ['after-comment', 'inside-block'],
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always',
		'at-rule-no-unknown': true,
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always-multi-line',
		'block-no-empty': true,
		'color-function-notation': 'legacy',
		'color-hex-alpha': 'never',
		'color-hex-case': 'upper',
		'color-hex-length': 'short',
		'color-named': 'never',
		'color-no-hex': true,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': ['always', {
			ignore: ['stylelint-commands'],
		}],
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'custom-property-empty-line-before': 'never',
		'custom-property-no-missing-var-function': true,
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never-single-line',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': 'never',
		'declaration-no-important': true,
		'function-disallowed-list': ['calc'],
		'font-family-name-quotes': 'always-where-recommended',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'named-where-possible',
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 2,
		'function-name-case': 'lower',
		'function-no-unknown': true,
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		'hue-degree-notation': 'number',
		indentation: 'tab',
		'keyframe-declaration-no-important': true,
		'length-zero-no-unit': true,
		'max-empty-lines': 2,
		'max-line-length': 120,
		'max-nesting-depth': 2,
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-no-unknown': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'named-grid-areas-no-invalid': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-extra-semicolons': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'no-unknown-animations': true,
		'number-leading-zero': 'always',
		'number-max-precision': 3,
		'number-no-trailing-zeros': true,
		'order/order': [
			'at-rules',
			'custom-properties',
			'dollar-variables',
			'declarations',
			'rules',
		],
		'order/properties-alphabetical-order': true,
		'property-disallowed-list': ['float'],
		'property-case': 'lower',
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': ['always-multi-line', {
			except: ['first-nested'],
			ignore: ['after-comment'],
		}],
		'selector-attribute-quotes': 'always',
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-class-pattern': ['^[a-z]', {
			resolveNestedSelectors: true,
		}],
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'selector-max-attribute': 0,
		'selector-max-combinators': 0,
		'selector-max-id': 0,
		'selector-max-pseudo-class': 2,
		'selector-max-specificity': '0,4,0',
		'selector-max-type': 0,
		'selector-max-universal': 0,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['global']}],
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'selector-max-empty-lines': 0,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'string-quotes': 'double',
		'time-min-milliseconds': 100,
		'unit-disallowed-list': ['em'],
		'unit-case': 'lower',
		'unit-no-unknown': true,
		'value-list-max-empty-lines': 0,
		'value-no-vendor-prefix': true,
		'value-keyword-case': ['lower', {
			camelCaseSvgKeywords: true,
			ignoreKeywords: [
				'Arial', 'Consolas', 'Courier', 'Helvetica', 'Inconsolata', 'Menlo', 'Roboto',
			],
		}],
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',

		// WARNINGS

		'comment-word-disallowed-list': [['/^TODO/'], {severity: 'warning'}],
		'selector-max-compound-selectors': [3, {severity: 'warning'}],

		// DISABLED

		'at-rule-disallowed-list': null,
		'at-rule-name-newline-after': null,
		'at-rule-property-required-list': null,
		'at-rule-allowed-list': null,
		'block-closing-brace-newline-before': null,
		'block-closing-brace-space-after': null,
		'block-opening-brace-newline-before': null,
		// This rule cannot be turned off with 'null'
		// 'comment-pattern': null,
		'custom-media-pattern': null,
		'custom-property-pattern': null,
		'declaration-block-trailing-semicolon': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': null,
		'function-url-no-scheme-relative': null,
		'function-url-scheme-disallowed-list': null,
		'function-url-scheme-allowed-list': null,
		'function-allowed-list': null,
		'keyframes-name-pattern': null,
		linebreaks: null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-value-allowed-list': null,
		'media-feature-name-allowed-list': null,
		'no-descending-specificity': null,
		'no-empty-first-line': null,
		'no-eol-whitespace': null,
		'no-invalid-double-slash-comments': null,
		'no-missing-end-of-source-newline': null,
		'order/properties-order': null,
		'property-allowed-list': null,
		'rule-selector-property-disallowed-list': null,
		'selector-id-pattern': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-combinator-allowed-list': null,
		'selector-disallowed-list': null,
		'selector-max-class': null,
		'selector-nested-pattern': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		// This rule seems broken
		'unicode-bom': 'never',
		'unit-allowed-list': null,
	},
};
