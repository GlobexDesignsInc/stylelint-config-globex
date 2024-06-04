module.exports = {
	plugins: ['@stylistic/stylelint-plugin', 'stylelint-order'],
	rules: {
		// ERRORS

		'alpha-value-notation': 'number',
		'annotation-no-unknown': true,
		'at-rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'inside-block'],
			},
		],
		'at-rule-no-unknown': true,
		'at-rule-no-vendor-prefix': true,
		'block-no-empty': true,
		'@stylistic/at-rule-name-case': 'lower',
		'@stylistic/at-rule-name-space-after': 'always',
		'@stylistic/at-rule-semicolon-newline-after': 'always',
		'@stylistic/at-rule-semicolon-space-before': 'never',
		'@stylistic/block-closing-brace-empty-line-before': 'never',
		'@stylistic/block-closing-brace-newline-after': 'always',
		'@stylistic/block-closing-brace-space-before': 'always-single-line',
		'@stylistic/block-opening-brace-newline-after': 'always-multi-line',
		'@stylistic/block-opening-brace-space-after': 'always-single-line',
		'@stylistic/block-opening-brace-space-before': 'always-multi-line',
		'@stylistic/color-hex-case': 'upper',
		'@stylistic/declaration-bang-space-after': 'never',
		'@stylistic/declaration-bang-space-before': 'always',
		'@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
		'@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
		'@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
		'@stylistic/declaration-block-semicolon-space-before': 'never-single-line',
		'@stylistic/declaration-colon-newline-after': 'always-multi-line',
		'@stylistic/declaration-colon-space-after': 'always-single-line',
		'@stylistic/declaration-colon-space-before': 'never',
		'@stylistic/function-comma-newline-after': 'always-multi-line',
		'@stylistic/function-comma-newline-before': 'never-multi-line',
		'@stylistic/function-comma-space-after': 'always-single-line',
		'@stylistic/function-comma-space-before': 'never',
		'@stylistic/function-max-empty-lines': 2,
		'@stylistic/function-parentheses-newline-inside': 'always-multi-line',
		'@stylistic/function-parentheses-space-inside': 'never-single-line',
		'@stylistic/function-whitespace-after': 'always',
		'@stylistic/indentation': 'tab',
		'@stylistic/max-empty-lines': 2,
		'@stylistic/max-line-length': 120,
		'@stylistic/media-feature-colon-space-after': 'always',
		'@stylistic/media-feature-colon-space-before': 'never',
		'@stylistic/media-feature-name-case': 'lower',
		'@stylistic/media-feature-parentheses-space-inside': 'never',
		'@stylistic/media-feature-range-operator-space-after': 'always',
		'@stylistic/media-feature-range-operator-space-before': 'always',
		'@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
		'@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
		'@stylistic/media-query-list-comma-space-after': 'always-single-line',
		'@stylistic/media-query-list-comma-space-before': 'never',
		'@stylistic/no-extra-semicolons': true,
		'@stylistic/number-leading-zero': 'always',
		'@stylistic/number-no-trailing-zeros': true,
		'@stylistic/property-case': 'lower',
		'@stylistic/selector-attribute-brackets-space-inside': 'never',
		'@stylistic/selector-attribute-operator-space-after': 'never',
		'@stylistic/selector-attribute-operator-space-before': 'never',
		'@stylistic/selector-combinator-space-after': 'always',
		'@stylistic/selector-combinator-space-before': 'always',
		'@stylistic/selector-descendant-combinator-no-non-space': true,
		'@stylistic/selector-list-comma-newline-after': 'always-multi-line',
		'@stylistic/selector-list-comma-newline-before': 'never-multi-line',
		'@stylistic/selector-list-comma-space-after': 'always-single-line',
		'@stylistic/selector-list-comma-space-before': 'never',
		'@stylistic/selector-max-empty-lines': 0,
		'@stylistic/selector-pseudo-class-case': 'lower',
		'@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
		'@stylistic/selector-pseudo-element-case': 'lower',
		'@stylistic/string-quotes': 'double',
		'@stylistic/unit-case': 'lower',
		'@stylistic/value-list-comma-newline-after': 'always-multi-line',
		'@stylistic/value-list-comma-newline-before': 'never-multi-line',
		'@stylistic/value-list-comma-space-after': 'always-single-line',
		'@stylistic/value-list-comma-space-before': 'never',
		'@stylistic/value-list-max-empty-lines': 0,
		'color-function-notation': 'legacy',
		'color-hex-alpha': 'never',
		'color-hex-length': 'short',
		'color-named': 'never',
		'color-no-hex': true,
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'custom-property-empty-line-before': 'never',
		'custom-property-no-missing-var-function': true,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-empty-line-before': 'never',
		'declaration-no-important': true,
		'declaration-property-value-no-unknown': true,
		'font-family-name-quotes': 'always-where-recommended',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'named-where-possible',
		'function-calc-no-unspaced-operator': true,
		'function-disallowed-list': ['calc'],
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-no-unknown': true,
		'function-url-quotes': 'always',
		'hue-degree-notation': 'number',
		'import-notation': 'string',
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'length-zero-no-unit': true,
		'lightness-notation': 'percentage',
		'max-nesting-depth': 2,
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-value-no-unknown': true,
		'media-query-no-invalid': true,
		'named-grid-areas-no-invalid': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'no-unknown-animations': true,
		'no-unknown-custom-media': true,
		'number-max-precision': 3,
		'order/order': [
			'at-rules',
			'custom-properties',
			'dollar-variables',
			'declarations',
			'rules',
		],
		'order/properties-alphabetical-order': true,
		'property-disallowed-list': ['float'],
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment'],
			},
		],
		'selector-anb-no-unmatchable': true,
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': [
			'^[a-z]',
			{
				resolveNestedSelectors: true,
			},
		],
		'selector-max-attribute': 0,
		'selector-max-combinators': 0,
		'selector-max-id': 0,
		'selector-max-pseudo-class': 2,
		'selector-max-specificity': '0,4,0',
		'selector-max-type': 0,
		'selector-max-universal': 0,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-not-notation': 'simple',
		'selector-pseudo-class-no-unknown': [
			true,
			{ ignorePseudoClasses: ['global'] },
		],
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'time-min-milliseconds': 100,
		'unit-disallowed-list': ['em'],
		'unit-no-unknown': true,
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true,
				ignoreKeywords: [
					'Arial',
					'Consolas',
					'Courier',
					'Helvetica',
					'Inconsolata',
					'Menlo',
					'Roboto',
				],
			},
		],
		'value-no-vendor-prefix': true,

		// WARNINGS

		'comment-word-disallowed-list': [['/^TODO/'], { severity: 'warning' }],
		'selector-max-compound-selectors': [3, { severity: 'warning' }],

		// DISABLED

		'at-rule-allowed-list': null,
		'at-rule-disallowed-list': null,
		'at-rule-property-required-list': null,
		'@stylistic/at-rule-name-newline-after': null,
		'@stylistic/block-closing-brace-newline-before': null,
		'@stylistic/block-closing-brace-space-after': null,
		'@stylistic/block-opening-brace-newline-before': null,
		'@stylistic/declaration-block-trailing-semicolon': null,
		'@stylistic/linebreaks': null,
		'@stylistic/no-empty-first-line': null,
		'@stylistic/no-eol-whitespace': null,
		'@stylistic/no-missing-end-of-source-newline': null,
		// This rule seems broken
		'@stylistic/unicode-bom': 'never',
		'comment-empty-line-before': null,
		// This rule cannot be turned off with 'null'
		// 'comment-pattern': null,
		'custom-media-pattern': null,
		'custom-property-pattern': null,
		'declaration-property-max-values': null,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': null,
		'function-allowed-list': null,
		'function-url-no-scheme-relative': null,
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,
		'keyframe-selector-notation': null,
		'keyframes-name-pattern': null,
		'media-feature-name-allowed-list': null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-unit-allowed-list': null,
		'media-feature-name-value-allowed-list': null,
		'media-feature-range-notation': null,
		'no-descending-specificity': null,
		'no-invalid-double-slash-comments': null,
		'no-unknown-custom-properties': null,
		'order/properties-order': null,
		'property-allowed-list': null,
		'rule-selector-property-disallowed-list': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': null,
		'selector-id-pattern': null,
		'selector-max-class': null,
		'selector-nested-pattern': null,
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null,
		'unit-allowed-list': null,
	},
};
