export function parseCssToUniversal(token, source) {
	const tokenType = tokenNameToUniversal(token.type);
	let structured = null;
	if (tokenType === 'ident-token') {
		structured = {
			value: token.value
		}
	}

	if (tokenType === 'function-token') {
		structured = {
			value: token.value
		}
	}

	if (tokenType === 'at-keyword-token') {
		structured = {
			value: token.value
		}
	}

	if (tokenType === 'hash-token') {
		structured = {
			value: token.value,
			type: token.isIdent ? 'id' : 'unrestricted',
		}
	}

	if (tokenType === 'string-token') {
		structured = {
			value: token.value,
		}
	}

	if (tokenType === 'url-token') {
		structured = {
			value: token.value,
		}
	}

	if (tokenType === 'delim-token') {
		structured = {
			value: token.value,
		}
	}

	if (tokenType === 'percentage-token') {
		structured = {
			value: token.value
		}
	}

	if (tokenType === 'number-token') {
		structured = {
			value: token.value,
			type: token.isInteger ? 'integer' : 'number',
		}
	}

	if (tokenType === 'dimension-token') {
		structured = {
			value: token.value,
			type: token.isInteger ? 'integer' : 'number',
			unit: token.unit,
		}
	}

	return {
		type: tokenType,
		raw: token.toSource(),
		startIndex: -1,
		endIndex: -1,
		structured: structured
	}
}

const nameMapping = {
	'OPEN-PAREN': '(-token',
	'CLOSE-PAREN': ')-token',
	'CDC': 'CDC-token',
	'CDO': 'CDO-token',
	'EOF': 'EOF-token',
	'OPEN-SQUARE': '[-token',
	'CLOSE-SQUARE': ']-token',
	'AT-KEYWORD': 'at-keyword-token',
	'BADSTRING': 'bad-string-token',
	'BADURL': 'bad-url-token',
	'COLON': 'colon-token',
	'COMMA': 'comma-token',
	'comment': 'comment',
	'DELIM': 'delim-token',
	'DIMENSION': 'dimension-token',
	'FUNCTION': 'function-token',
	'HASH': 'hash-token',
	'IDENT': 'ident-token',
	'NUMBER': 'number-token',
	'PERCENTAGE': 'percentage-token',
	'SEMICOLON': 'semicolon-token',
	'STRING': 'string-token',
	'URL': 'url-token',
	'WHITESPACE': 'whitespace-token',
	'OPEN-CURLY': '{-token',
	'CLOSE-CURLY': '}-token',
}

function tokenNameToUniversal(name) {
	return nameMapping[name] ?? name
}
