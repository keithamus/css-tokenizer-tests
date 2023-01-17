module.exports = { testCorpus: {"tests/at-keyword/0001":{"css":"@foo\n","tokens":[{"type":"at-keyword-token","raw":"@foo","startIndex":0,"endIndex":4,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/at-keyword/0002":{"css":"@--\n","tokens":[{"type":"at-keyword-token","raw":"@--","startIndex":0,"endIndex":3,"structured":{"value":"--"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/at-keyword/0003":{"css":"@-1\n","tokens":[{"type":"delim-token","raw":"@","startIndex":0,"endIndex":1,"structured":{"value":"@"}},{"type":"number-token","raw":"-1","startIndex":1,"endIndex":3,"structured":{"value":-1,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/at-keyword/0004":{"css":"@--1\n","tokens":[{"type":"at-keyword-token","raw":"@--1","startIndex":0,"endIndex":4,"structured":{"value":"--1"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/at-keyword/0005":{"css":"@\\@\n","tokens":[{"type":"at-keyword-token","raw":"@\\@","startIndex":0,"endIndex":3,"structured":{"value":"@"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/at-keyword/0006":{"css":"@_\n","tokens":[{"type":"at-keyword-token","raw":"@_","startIndex":0,"endIndex":2,"structured":{"value":"_"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/at-keyword/0007":{"css":"@\n","tokens":[{"type":"delim-token","raw":"@","startIndex":0,"endIndex":1,"structured":{"value":"@"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/at-keyword/0008":{"css":"pvA3@\\\neBnP\n","tokens":[{"type":"ident-token","raw":"pvA3","startIndex":0,"endIndex":4,"structured":{"value":"pvA3"}},{"type":"delim-token","raw":"@","startIndex":4,"endIndex":5,"structured":{"value":"@"}},{"type":"delim-token","raw":"\\","startIndex":5,"endIndex":6,"structured":{"value":"\\"}},{"type":"whitespace-token","raw":"\n","startIndex":6,"endIndex":7,"structured":null},{"type":"ident-token","raw":"eBnP","startIndex":7,"endIndex":11,"structured":{"value":"eBnP"}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/bad-url/0001":{"css":"url(\n","tokens":[{"type":"url-token","raw":"url(\n","startIndex":0,"endIndex":5,"structured":{"value":""}}]},"tests/bad-url/0002":{"css":"url( a\n","tokens":[{"type":"url-token","raw":"url( a\n","startIndex":0,"endIndex":7,"structured":{"value":"a"}}]},"tests/bad-url/0003":{"css":"url( a a\n","tokens":[{"type":"bad-url-token","raw":"url( a a\n","startIndex":0,"endIndex":9,"structured":null}]},"tests/bad-url/0004":{"css":"url( a a)\n","tokens":[{"type":"bad-url-token","raw":"url( a a)","startIndex":0,"endIndex":9,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":9,"endIndex":10,"structured":null}]},"tests/bad-url/0005":{"css":"url( a a\\)\n","tokens":[{"type":"bad-url-token","raw":"url( a a\\)\n","startIndex":0,"endIndex":11,"structured":null}]},"tests/bad-url/0006":{"css":"url( \\\n","tokens":[{"type":"bad-url-token","raw":"url( \\\n","startIndex":0,"endIndex":7,"structured":null}]},"tests/bad-url/0007":{"css":"url(a'')\n","tokens":[{"type":"bad-url-token","raw":"url(a'')","startIndex":0,"endIndex":8,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":8,"endIndex":9,"structured":null}]},"tests/bad-url/0008":{"css":"url(a\")\n","tokens":[{"type":"bad-url-token","raw":"url(a\")","startIndex":0,"endIndex":7,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/colon/0001":{"css":":\n","tokens":[{"type":"colon-token","raw":":","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/comma/0001":{"css":",\n","tokens":[{"type":"comma-token","raw":",","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/comment/0001":{"css":"/* a comment */\n","tokens":[{"type":"comment","raw":"/* a comment */","startIndex":0,"endIndex":15,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":15,"endIndex":16,"structured":null}]},"tests/comment/0002":{"css":"/* a comment ","tokens":[{"type":"comment","raw":"/* a comment ","startIndex":0,"endIndex":13,"structured":null}]},"tests/comment/0003":{"css":"a/**/b\n","tokens":[{"type":"ident-token","raw":"a","startIndex":0,"endIndex":1,"structured":{"value":"a"}},{"type":"comment","raw":"/**/","startIndex":1,"endIndex":5,"structured":null},{"type":"ident-token","raw":"b","startIndex":5,"endIndex":6,"structured":{"value":"b"}},{"type":"whitespace-token","raw":"\n","startIndex":6,"endIndex":7,"structured":null}]},"tests/comment/0004":{"css":"/*\\*/*/\n","tokens":[{"type":"comment","raw":"/*\\*/","startIndex":0,"endIndex":5,"structured":null},{"type":"delim-token","raw":"*","startIndex":5,"endIndex":6,"structured":{"value":"*"}},{"type":"delim-token","raw":"/","startIndex":6,"endIndex":7,"structured":{"value":"/"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/digit/0001":{"css":"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n","tokens":[{"type":"number-token","raw":"0","startIndex":0,"endIndex":1,"structured":{"type":"integer","value":0}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null},{"type":"number-token","raw":"1","startIndex":2,"endIndex":3,"structured":{"type":"integer","value":1}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null},{"type":"number-token","raw":"2","startIndex":4,"endIndex":5,"structured":{"type":"integer","value":2}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null},{"type":"number-token","raw":"3","startIndex":6,"endIndex":7,"structured":{"type":"integer","value":3}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null},{"type":"number-token","raw":"4","startIndex":8,"endIndex":9,"structured":{"type":"integer","value":4}},{"type":"whitespace-token","raw":"\n","startIndex":9,"endIndex":10,"structured":null},{"type":"number-token","raw":"5","startIndex":10,"endIndex":11,"structured":{"type":"integer","value":5}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null},{"type":"number-token","raw":"6","startIndex":12,"endIndex":13,"structured":{"type":"integer","value":6}},{"type":"whitespace-token","raw":"\n","startIndex":13,"endIndex":14,"structured":null},{"type":"number-token","raw":"7","startIndex":14,"endIndex":15,"structured":{"type":"integer","value":7}},{"type":"whitespace-token","raw":"\n","startIndex":15,"endIndex":16,"structured":null},{"type":"number-token","raw":"8","startIndex":16,"endIndex":17,"structured":{"type":"integer","value":8}},{"type":"whitespace-token","raw":"\n","startIndex":17,"endIndex":18,"structured":null},{"type":"number-token","raw":"9","startIndex":18,"endIndex":19,"structured":{"type":"integer","value":9}},{"type":"whitespace-token","raw":"\n","startIndex":19,"endIndex":20,"structured":null}]},"tests/dimension/0001":{"css":"10px\n","tokens":[{"type":"dimension-token","raw":"10px","startIndex":0,"endIndex":4,"structured":{"value":10,"type":"integer","unit":"px"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/dimension/0002":{"css":"10\\70 x\n","tokens":[{"type":"dimension-token","raw":"10\\70 x","startIndex":0,"endIndex":7,"structured":{"value":10,"type":"integer","unit":"px"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/dimension/0003":{"css":"10--custom-px\n","tokens":[{"type":"dimension-token","raw":"10--custom-px","startIndex":0,"endIndex":13,"structured":{"value":10,"type":"integer","unit":"--custom-px"}},{"type":"whitespace-token","raw":"\n","startIndex":13,"endIndex":14,"structured":null}]},"tests/dimension/0004":{"css":"10e2px\n","tokens":[{"type":"dimension-token","raw":"10e2px","startIndex":0,"endIndex":6,"structured":{"value":1000,"type":"number","unit":"px"}},{"type":"whitespace-token","raw":"\n","startIndex":6,"endIndex":7,"structured":null}]},"tests/dimension/0005":{"css":"10E2PX\n","tokens":[{"type":"dimension-token","raw":"10E2PX","startIndex":0,"endIndex":6,"structured":{"value":1000,"type":"number","unit":"PX"}},{"type":"whitespace-token","raw":"\n","startIndex":6,"endIndex":7,"structured":null}]},"tests/dimension/0006":{"css":"10\\0\n","tokens":[{"type":"dimension-token","raw":"10\\0\n","startIndex":0,"endIndex":5,"structured":{"value":10,"type":"integer","unit":"�"}}]},"tests/escaped-code-point/0001":{"css":"\\","tokens":[{"type":"ident-token","raw":"\\","startIndex":0,"endIndex":1,"structured":{"value":"�"}}]},"tests/escaped-code-point/0002":{"css":"\\0","tokens":[{"type":"ident-token","raw":"\\0","startIndex":0,"endIndex":2,"structured":{"value":"�"}}]},"tests/escaped-code-point/0003":{"css":"\\\\","tokens":[{"type":"ident-token","raw":"\\\\","startIndex":0,"endIndex":2,"structured":{"value":"\\"}}]},"tests/escaped-code-point/0004":{"css":"\\0a b\n","tokens":[{"type":"ident-token","raw":"\\0a b","startIndex":0,"endIndex":5,"structured":{"value":"\nb"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/escaped-code-point/0005":{"css":"\\0ab \n","tokens":[{"type":"ident-token","raw":"\\0ab ","startIndex":0,"endIndex":5,"structured":{"value":"«"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/escaped-code-point/0006":{"css":"\\0ab (foo)\n","tokens":[{"type":"function-token","raw":"\\0ab (","startIndex":0,"endIndex":6,"structured":{"value":"«"}},{"type":"ident-token","raw":"foo","startIndex":6,"endIndex":9,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":9,"endIndex":10,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":10,"endIndex":11,"structured":null}]},"tests/escaped-code-point/0007":{"css":"\\0ab  (foo)\n","tokens":[{"type":"ident-token","raw":"\\0ab ","startIndex":0,"endIndex":5,"structured":{"value":"«"}},{"type":"whitespace-token","raw":" ","startIndex":5,"endIndex":6,"structured":null},{"type":"(-token","raw":"(","startIndex":6,"endIndex":7,"structured":null},{"type":"ident-token","raw":"foo","startIndex":7,"endIndex":10,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":10,"endIndex":11,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/escaped-code-point/0008":{"css":"\\0000ab\n","tokens":[{"type":"ident-token","raw":"\\0000ab\n","startIndex":0,"endIndex":8,"structured":{"value":"«"}}]},"tests/escaped-code-point/0009":{"css":"\\00000ab\n","tokens":[{"type":"ident-token","raw":"\\00000ab","startIndex":0,"endIndex":8,"structured":{"value":"\nb"}},{"type":"whitespace-token","raw":"\n","startIndex":8,"endIndex":9,"structured":null}]},"tests/escaped-code-point/0010":{"css":"\\110000\n","tokens":[{"type":"ident-token","raw":"\\110000\n","startIndex":0,"endIndex":8,"structured":{"value":"�"}}]},"tests/escaped-code-point/0011":{"css":"\\00D800\n","tokens":[{"type":"ident-token","raw":"\\00D800\n","startIndex":0,"endIndex":8,"structured":{"value":"�"}}]},"tests/escaped-code-point/0012":{"css":"\\00DFFF\n","tokens":[{"type":"ident-token","raw":"\\00DFFF\n","startIndex":0,"endIndex":8,"structured":{"value":"�"}}]},"tests/escaped-code-point/0013":{"css":"\\\n","tokens":[{"type":"delim-token","raw":"\\","startIndex":0,"endIndex":1,"structured":{"value":"\\"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/escaped-code-point/0014":{"css":"\\\u0000\n","tokens":[{"type":"ident-token","raw":"\\\u0000","startIndex":0,"endIndex":2,"structured":{"value":"\u0000"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/escaped-code-point/0015":{"css":"\\\u0000\b\n","tokens":[{"type":"ident-token","raw":"\\\u0000","startIndex":0,"endIndex":2,"structured":{"value":"\u0000"}},{"type":"delim-token","raw":"\b","startIndex":2,"endIndex":3,"structured":{"value":"\b"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/full-stop/0001":{"css":".\n","tokens":[{"type":"delim-token","raw":".","startIndex":0,"endIndex":1,"structured":{"value":"."}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/full-stop/0002":{"css":".a\n","tokens":[{"type":"delim-token","raw":".","startIndex":0,"endIndex":1,"structured":{"value":"."}},{"type":"ident-token","raw":"a","startIndex":1,"endIndex":2,"structured":{"value":"a"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/full-stop/0003":{"css":".1\n","tokens":[{"type":"number-token","raw":".1","startIndex":0,"endIndex":2,"structured":{"value":0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/fuzz/4e630a47-507b-4b79-b00f-57f7dc1cc79d":{"css":"\u000e7rSD6I5L1lglVRlL2X7BbEk\\3HCd\r94 \\\u0000skoW25d4%l64UUskN\"pHun\"!","tokens":[{"type":"delim-token","raw":"\u000e","startIndex":0,"endIndex":1,"structured":{"value":"\u000e"}},{"type":"dimension-token","raw":"7rSD6I5L1lglVRlL2X7BbEk\\3HCd","startIndex":1,"endIndex":29,"structured":{"value":7,"type":"integer","unit":"rSD6I5L1lglVRlL2X7BbEk\u0003HCd"}},{"type":"whitespace-token","raw":"\r","startIndex":29,"endIndex":30,"structured":null},{"type":"number-token","raw":"94","startIndex":30,"endIndex":32,"structured":{"value":94,"type":"integer"}},{"type":"whitespace-token","raw":" ","startIndex":32,"endIndex":33,"structured":null},{"type":"ident-token","raw":"\\\u0000skoW25d4","startIndex":33,"endIndex":43,"structured":{"value":"\u0000skoW25d4"}},{"type":"delim-token","raw":"%","startIndex":43,"endIndex":44,"structured":{"value":"%"}},{"type":"ident-token","raw":"l64UUskN","startIndex":44,"endIndex":52,"structured":{"value":"l64UUskN"}},{"type":"string-token","raw":"\"pHun\"","startIndex":52,"endIndex":58,"structured":{"value":"pHun"}},{"type":"delim-token","raw":"!","startIndex":58,"endIndex":59,"structured":{"value":"!"}}]},"tests/fuzz/91de56d3-d1c7-41c9-93e2-4b0770e36e79":{"css":"\tb6SUejoqAEDa\u000e9,kYO\\","tokens":[{"type":"whitespace-token","raw":"\t","startIndex":0,"endIndex":1,"structured":null},{"type":"ident-token","raw":"b6SUejoqAEDa","startIndex":1,"endIndex":13,"structured":{"value":"b6SUejoqAEDa"}},{"type":"delim-token","raw":"\u000e","startIndex":13,"endIndex":14,"structured":{"value":"\u000e"}},{"type":"number-token","raw":"9","startIndex":14,"endIndex":15,"structured":{"value":9,"type":"integer"}},{"type":"comma-token","raw":",","startIndex":15,"endIndex":16,"structured":null},{"type":"ident-token","raw":"kYO\\","startIndex":16,"endIndex":20,"structured":{"value":"kYO�"}}]},"tests/fuzz/eb11f9d4-f8ef-4e11-88dc-2cbf7f56e537":{"css":">u)k2a76}y4\\6fb9ONI\\","tokens":[{"type":"delim-token","raw":">","startIndex":0,"endIndex":1,"structured":{"value":">"}},{"type":"ident-token","raw":"u","startIndex":1,"endIndex":2,"structured":{"value":"u"}},{"type":")-token","raw":")","startIndex":2,"endIndex":3,"structured":null},{"type":"ident-token","raw":"k2a76","startIndex":3,"endIndex":8,"structured":{"value":"k2a76"}},{"type":"}-token","raw":"}","startIndex":8,"endIndex":9,"structured":null},{"type":"ident-token","raw":"y4\\6fb9ONI\\","startIndex":9,"endIndex":20,"structured":{"value":"y4澹ONI�"}}]},"tests/hash/0001":{"css":"#1\n","tokens":[{"type":"hash-token","raw":"#1","startIndex":0,"endIndex":2,"structured":{"value":"1","type":"unrestricted"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0002":{"css":"#-2\n","tokens":[{"type":"hash-token","raw":"#-2","startIndex":0,"endIndex":3,"structured":{"value":"-2","type":"unrestricted"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/hash/0003":{"css":"#--3\n","tokens":[{"type":"hash-token","raw":"#--3","startIndex":0,"endIndex":4,"structured":{"value":"--3","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/hash/0004":{"css":"#---4\n","tokens":[{"type":"hash-token","raw":"#---4","startIndex":0,"endIndex":5,"structured":{"value":"---4","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/hash/0005":{"css":"#a\n","tokens":[{"type":"hash-token","raw":"#a","startIndex":0,"endIndex":2,"structured":{"value":"a","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0006":{"css":"#-b\n","tokens":[{"type":"hash-token","raw":"#-b","startIndex":0,"endIndex":3,"structured":{"value":"-b","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/hash/0007":{"css":"#--c\n","tokens":[{"type":"hash-token","raw":"#--c","startIndex":0,"endIndex":4,"structured":{"value":"--c","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/hash/0008":{"css":"#---d\n","tokens":[{"type":"hash-token","raw":"#---d","startIndex":0,"endIndex":5,"structured":{"value":"---d","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/hash/0009":{"css":"#_\n","tokens":[{"type":"hash-token","raw":"#_","startIndex":0,"endIndex":2,"structured":{"value":"_","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0010":{"css":"#_1\n","tokens":[{"type":"hash-token","raw":"#_1","startIndex":0,"endIndex":3,"structured":{"value":"_1","type":"id"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/hash/0011":{"css":"#-\n","tokens":[{"type":"hash-token","raw":"#-","startIndex":0,"endIndex":2,"structured":{"value":"-","type":"unrestricted"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0012":{"css":"#+\n","tokens":[{"type":"delim-token","raw":"#","startIndex":0,"endIndex":1,"structured":{"value":"#"}},{"type":"delim-token","raw":"+","startIndex":1,"endIndex":2,"structured":{"value":"+"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0013":{"css":"##\n","tokens":[{"type":"delim-token","raw":"#","startIndex":0,"endIndex":1,"structured":{"value":"#"}},{"type":"delim-token","raw":"#","startIndex":1,"endIndex":2,"structured":{"value":"#"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hash/0014":{"css":"#","tokens":[{"type":"delim-token","raw":"#","startIndex":0,"endIndex":1,"structured":{"value":"#"}}]},"tests/hyphen-minus/0001":{"css":"-\n","tokens":[{"type":"delim-token","raw":"-","startIndex":0,"endIndex":1,"structured":{"value":"-"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/hyphen-minus/0002":{"css":"-1\n","tokens":[{"type":"number-token","raw":"-1","startIndex":0,"endIndex":2,"structured":{"value":-1,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hyphen-minus/0003":{"css":"-.1\n","tokens":[{"type":"number-token","raw":"-.1","startIndex":0,"endIndex":3,"structured":{"value":-0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/hyphen-minus/0004":{"css":"--1\n","tokens":[{"type":"ident-token","raw":"--1","startIndex":0,"endIndex":3,"structured":{"value":"--1"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/hyphen-minus/0005":{"css":"-0\n","tokens":[{"type":"number-token","raw":"-0","startIndex":0,"endIndex":2,"structured":{"value":0,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/hyphen-minus/0006":{"css":"-->\n","tokens":[{"type":"CDC-token","raw":"-->","startIndex":0,"endIndex":3,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/ident/0001":{"css":"foo\n","tokens":[{"type":"ident-token","raw":"foo","startIndex":0,"endIndex":3,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/ident/0002":{"css":"--\n","tokens":[{"type":"ident-token","raw":"--","startIndex":0,"endIndex":2,"structured":{"value":"--"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/ident/0003":{"css":"--0\n","tokens":[{"type":"ident-token","raw":"--0","startIndex":0,"endIndex":3,"structured":{"value":"--0"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/ident-like/0001":{"css":"url(foo)\n","tokens":[{"type":"url-token","raw":"url(foo)","startIndex":0,"endIndex":8,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":8,"endIndex":9,"structured":null}]},"tests/ident-like/0002":{"css":"\\75 Rl(foo)\n","tokens":[{"type":"url-token","raw":"\\75 Rl(foo)","startIndex":0,"endIndex":11,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/ident-like/0003":{"css":"uR\\6c (foo)\n","tokens":[{"type":"url-token","raw":"uR\\6c (foo)","startIndex":0,"endIndex":11,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/ident-like/0004":{"css":"url('foo')\n","tokens":[{"type":"function-token","raw":"url(","startIndex":0,"endIndex":4,"structured":{"value":"url"}},{"type":"string-token","raw":"'foo'","startIndex":4,"endIndex":9,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":9,"endIndex":10,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":10,"endIndex":11,"structured":null}]},"tests/ident-like/0005":{"css":"url( 'foo')\n","tokens":[{"type":"function-token","raw":"url(","startIndex":0,"endIndex":4,"structured":{"value":"url"}},{"type":"whitespace-token","raw":" ","startIndex":4,"endIndex":5,"structured":null},{"type":"string-token","raw":"'foo'","startIndex":5,"endIndex":10,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":10,"endIndex":11,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/ident-like/0006":{"css":"url(  'foo')\n","tokens":[{"type":"function-token","raw":"url(","startIndex":0,"endIndex":4,"structured":{"value":"url"}},{"type":"whitespace-token","raw":"  ","startIndex":4,"endIndex":6,"structured":null},{"type":"string-token","raw":"'foo'","startIndex":6,"endIndex":11,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":11,"endIndex":12,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":12,"endIndex":13,"structured":null}]},"tests/ident-like/0007":{"css":"url(   'foo')\n","tokens":[{"type":"function-token","raw":"url(","startIndex":0,"endIndex":4,"structured":{"value":"url"}},{"type":"whitespace-token","raw":"   ","startIndex":4,"endIndex":7,"structured":null},{"type":"string-token","raw":"'foo'","startIndex":7,"endIndex":12,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":12,"endIndex":13,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":13,"endIndex":14,"structured":null}]},"tests/ident-like/0008":{"css":"not-url(   'foo')\n","tokens":[{"type":"function-token","raw":"not-url(","startIndex":0,"endIndex":8,"structured":{"value":"not-url"}},{"type":"whitespace-token","raw":"   ","startIndex":8,"endIndex":11,"structured":null},{"type":"string-token","raw":"'foo'","startIndex":11,"endIndex":16,"structured":{"value":"foo"}},{"type":")-token","raw":")","startIndex":16,"endIndex":17,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":17,"endIndex":18,"structured":null}]},"tests/ident-like/0009":{"css":"url(   foo)\n","tokens":[{"type":"url-token","raw":"url(   foo)","startIndex":0,"endIndex":11,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/left-curly-bracket/0001":{"css":"{\n","tokens":[{"type":"{-token","raw":"{","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/left-parenthesis/0001":{"css":"(\n","tokens":[{"type":"(-token","raw":"(","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/left-square-bracket/0001":{"css":"[\n","tokens":[{"type":"[-token","raw":"[","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/less-than/0001":{"css":"<\n","tokens":[{"type":"delim-token","raw":"<","startIndex":0,"endIndex":1,"structured":{"value":"<"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/less-than/0002":{"css":"<!--\n","tokens":[{"type":"CDO-token","raw":"<!--","startIndex":0,"endIndex":4,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/less-than/0003":{"css":"<--\n","tokens":[{"type":"delim-token","raw":"<","startIndex":0,"endIndex":1,"structured":{"value":"<"}},{"type":"ident-token","raw":"--","startIndex":1,"endIndex":3,"structured":{"value":"--"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/less-than/0004":{"css":"<!-\n","tokens":[{"type":"delim-token","raw":"<","startIndex":0,"endIndex":1,"structured":{"value":"<"}},{"type":"delim-token","raw":"!","startIndex":1,"endIndex":2,"structured":{"value":"!"}},{"type":"delim-token","raw":"-","startIndex":2,"endIndex":3,"structured":{"value":"-"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0001":{"css":"10\n","tokens":[{"type":"number-token","raw":"10","startIndex":0,"endIndex":2,"structured":{"value":10,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/number/0002":{"css":"+10\n","tokens":[{"type":"number-token","raw":"+10","startIndex":0,"endIndex":3,"structured":{"value":10,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0003":{"css":"-10\n","tokens":[{"type":"number-token","raw":"-10","startIndex":0,"endIndex":3,"structured":{"value":-10,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0004":{"css":"0\n","tokens":[{"type":"number-token","raw":"0","startIndex":0,"endIndex":1,"structured":{"value":0,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/number/0005":{"css":"+0\n","tokens":[{"type":"number-token","raw":"+0","startIndex":0,"endIndex":2,"structured":{"value":0,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/number/0006":{"css":"-0\n","tokens":[{"type":"number-token","raw":"-0","startIndex":0,"endIndex":2,"structured":{"value":0,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/number/0007":{"css":".0\n","tokens":[{"type":"number-token","raw":".0","startIndex":0,"endIndex":2,"structured":{"value":0,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/number/0008":{"css":".1\n","tokens":[{"type":"number-token","raw":".1","startIndex":0,"endIndex":2,"structured":{"value":0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/number/0009":{"css":"+.1\n","tokens":[{"type":"number-token","raw":"+.1","startIndex":0,"endIndex":3,"structured":{"value":0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0010":{"css":"-.1\n","tokens":[{"type":"number-token","raw":"-.1","startIndex":0,"endIndex":3,"structured":{"value":-0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0011":{"css":"1.1\n","tokens":[{"type":"number-token","raw":"1.1","startIndex":0,"endIndex":3,"structured":{"value":1.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/number/0012":{"css":"+1.1\n","tokens":[{"type":"number-token","raw":"+1.1","startIndex":0,"endIndex":4,"structured":{"value":1.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/number/0013":{"css":"-1.1\n","tokens":[{"type":"number-token","raw":"-1.1","startIndex":0,"endIndex":4,"structured":{"value":-1.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/number/0014":{"css":"1.1e2\n","tokens":[{"type":"number-token","raw":"1.1e2","startIndex":0,"endIndex":5,"structured":{"value":110,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/number/0015":{"css":"+1.1e+2\n","tokens":[{"type":"number-token","raw":"+1.1e+2","startIndex":0,"endIndex":7,"structured":{"value":110,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/number/0016":{"css":"-1.1e-2\n","tokens":[{"type":"number-token","raw":"-1.1e-2","startIndex":0,"endIndex":7,"structured":{"value":-0.011,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/numeric/0001":{"css":"-123.753e-2\n","tokens":[{"type":"number-token","raw":"-123.753e-2","startIndex":0,"endIndex":11,"structured":{"type":"number","value":-1.23753}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/numeric/0002":{"css":"-123.753e-2px\n","tokens":[{"type":"dimension-token","raw":"-123.753e-2px","startIndex":0,"endIndex":13,"structured":{"type":"number","unit":"px","value":-1.23753}},{"type":"whitespace-token","raw":"\n","startIndex":13,"endIndex":14,"structured":null}]},"tests/numeric/0003":{"css":"-123.753e-2%\n","tokens":[{"type":"percentage-token","raw":"-123.753e-2%","startIndex":0,"endIndex":12,"structured":{"value":-1.23753}},{"type":"whitespace-token","raw":"\n","startIndex":12,"endIndex":13,"structured":null}]},"tests/numeric/0004":{"css":"1.2.3\n","tokens":[{"type":"number-token","raw":"1.2","startIndex":0,"endIndex":3,"structured":{"type":"number","value":1.2}},{"type":"number-token","raw":".3","startIndex":3,"endIndex":5,"structured":{"type":"number","value":0.3}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/plus/0001":{"css":"+\n","tokens":[{"type":"delim-token","raw":"+","startIndex":0,"endIndex":1,"structured":{"value":"+"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/plus/0002":{"css":"+1\n","tokens":[{"type":"number-token","raw":"+1","startIndex":0,"endIndex":2,"structured":{"value":1,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/plus/0003":{"css":"+.1\n","tokens":[{"type":"number-token","raw":"+.1","startIndex":0,"endIndex":3,"structured":{"value":0.1,"type":"number"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/plus/0004":{"css":"++1\n","tokens":[{"type":"delim-token","raw":"+","startIndex":0,"endIndex":1,"structured":{"value":"+"}},{"type":"number-token","raw":"+1","startIndex":1,"endIndex":3,"structured":{"value":1,"type":"integer"}},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null}]},"tests/reverse-solidus/0001":{"css":"\\\n","tokens":[{"type":"delim-token","raw":"\\","startIndex":0,"endIndex":1,"structured":{"value":"\\"}},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/reverse-solidus/0002":{"css":"\\#\n","tokens":[{"type":"ident-token","raw":"\\#","startIndex":0,"endIndex":2,"structured":{"value":"#"}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/reverse-solidus/0003":{"css":"\\ \n","tokens":[{"type":"ident-token","raw":"\\ ","startIndex":0,"endIndex":2,"structured":{"value":" "}},{"type":"whitespace-token","raw":"\n","startIndex":2,"endIndex":3,"structured":null}]},"tests/reverse-solidus/0004":{"css":"\\61 b\n","tokens":[{"type":"ident-token","raw":"\\61 b","startIndex":0,"endIndex":5,"structured":{"value":"ab"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/reverse-solidus/0005":{"css":"\\","tokens":[{"type":"ident-token","raw":"\\","startIndex":0,"endIndex":1,"structured":{"value":"�"}}]},"tests/right-curly-bracket/0001":{"css":"}\n","tokens":[{"type":"}-token","raw":"}","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/right-parenthesis/0001":{"css":")\n","tokens":[{"type":")-token","raw":")","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/right-square-bracket/0001":{"css":"]\n","tokens":[{"type":"]-token","raw":"]","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/semi-colon/0001":{"css":";\n","tokens":[{"type":"semicolon-token","raw":";","startIndex":0,"endIndex":1,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":1,"endIndex":2,"structured":null}]},"tests/string/0001":{"css":"\"foo\"\n'foo'\n","tokens":[{"type":"string-token","raw":"\"foo\"","startIndex":0,"endIndex":5,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null},{"type":"string-token","raw":"'foo'","startIndex":6,"endIndex":11,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":11,"endIndex":12,"structured":null}]},"tests/string/0002":{"css":"\"foo","tokens":[{"type":"string-token","raw":"\"foo","startIndex":0,"endIndex":4,"structured":{"value":"foo"}}]},"tests/string/0003":{"css":"\"fo\no\"","tokens":[{"type":"bad-string-token","raw":"\"fo","startIndex":0,"endIndex":3,"structured":null},{"type":"whitespace-token","raw":"\n","startIndex":3,"endIndex":4,"structured":null},{"type":"ident-token","raw":"o","startIndex":4,"endIndex":5,"structured":{"value":"o"}},{"type":"string-token","raw":"\"","startIndex":5,"endIndex":6,"structured":{"value":""}}]},"tests/string/0004":{"css":"\"fo\\\no\"\n","tokens":[{"type":"string-token","raw":"\"fo\\\no\"","startIndex":0,"endIndex":7,"structured":{"value":"foo"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]},"tests/string/0005":{"css":"\"fo\\","tokens":[{"type":"string-token","raw":"\"fo\\","startIndex":0,"endIndex":4,"structured":{"value":"fo"}}]},"tests/string/0006":{"css":"\"esc\\61 ped\"\n","tokens":[{"type":"string-token","raw":"\"esc\\61 ped\"","startIndex":0,"endIndex":12,"structured":{"value":"escaped"}},{"type":"whitespace-token","raw":"\n","startIndex":12,"endIndex":13,"structured":null}]},"tests/string/0007":{"css":"\"foo\\\"","tokens":[{"type":"string-token","raw":"\"foo\\\"","startIndex":0,"endIndex":6,"structured":{"value":"foo\""}}]},"tests/string/0008":{"css":"\"'foo'\"\n'\"foo\"'\n","tokens":[{"type":"string-token","raw":"\"'foo'\"","startIndex":0,"endIndex":7,"structured":{"value":"'foo'"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null},{"type":"string-token","raw":"'\"foo\"'","startIndex":8,"endIndex":15,"structured":{"value":"\"foo\""}},{"type":"whitespace-token","raw":"\n","startIndex":15,"endIndex":16,"structured":null}]},"tests/string/0009":{"css":"\"\\\"foo\\\"\"\n'\\'foo\\''\n","tokens":[{"type":"string-token","raw":"\"\\\"foo\\\"\"","startIndex":0,"endIndex":9,"structured":{"value":"\"foo\""}},{"type":"whitespace-token","raw":"\n","startIndex":9,"endIndex":10,"structured":null},{"type":"string-token","raw":"'\\'foo\\''","startIndex":10,"endIndex":19,"structured":{"value":"'foo'"}},{"type":"whitespace-token","raw":"\n","startIndex":19,"endIndex":20,"structured":null}]},"tests/whitespace/0001":{"css":"\n","tokens":[{"type":"whitespace-token","raw":"\n","startIndex":0,"endIndex":1,"structured":null}]},"tests/whitespace/0002":{"css":" \n","tokens":[{"type":"whitespace-token","raw":" \n","startIndex":0,"endIndex":2,"structured":null}]},"tests/whitespace/0003":{"css":"a  b\n","tokens":[{"type":"ident-token","raw":"a","startIndex":0,"endIndex":1,"structured":{"value":"a"}},{"type":"whitespace-token","raw":"  ","startIndex":1,"endIndex":3,"structured":null},{"type":"ident-token","raw":"b","startIndex":3,"endIndex":4,"structured":{"value":"b"}},{"type":"whitespace-token","raw":"\n","startIndex":4,"endIndex":5,"structured":null}]},"tests/whitespace/0004":{"css":"\\61 b\n","tokens":[{"type":"ident-token","raw":"\\61 b","startIndex":0,"endIndex":5,"structured":{"value":"ab"}},{"type":"whitespace-token","raw":"\n","startIndex":5,"endIndex":6,"structured":null}]},"tests/whitespace/0005":{"css":"\\000061 b\n","tokens":[{"type":"ident-token","raw":"\\000061 b","startIndex":0,"endIndex":9,"structured":{"value":"ab"}},{"type":"whitespace-token","raw":"\n","startIndex":9,"endIndex":10,"structured":null}]},"tests/whitespace/0006":{"css":"\\61  b\n","tokens":[{"type":"ident-token","raw":"\\61 ","startIndex":0,"endIndex":4,"structured":{"value":"a"}},{"type":"whitespace-token","raw":" ","startIndex":4,"endIndex":5,"structured":null},{"type":"ident-token","raw":"b","startIndex":5,"endIndex":6,"structured":{"value":"b"}},{"type":"whitespace-token","raw":"\n","startIndex":6,"endIndex":7,"structured":null}]},"tests/whitespace/0007":{"css":"\t\n","tokens":[{"type":"whitespace-token","raw":"\t\n","startIndex":0,"endIndex":2,"structured":null}]},"tests/whitespace/0008":{"css":"f\\ o\\\to\n","tokens":[{"type":"ident-token","raw":"f\\ o\\\to","startIndex":0,"endIndex":7,"structured":{"value":"f o\to"}},{"type":"whitespace-token","raw":"\n","startIndex":7,"endIndex":8,"structured":null}]}} }