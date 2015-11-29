System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },

    map: {
        "babel": "npm:babel-core@5.8.25",
        "babel-runtime": "npm:babel-runtime@5.8.25",
        "bootstrap": "npm:bootstrap@3.3.6",
        "core-js": "npm:core-js@1.2.6",
        "express": "npm:express@4.13.3",
        "fluxxor": "npm:fluxxor@1.7.3",
        "font-awesome": "npm:font-awesome@4.4.0",
        "history": "npm:history@1.13.1",
        "jquery": "github:components/jquery@2.1.4",
        "jsx": "github:floatdrop/plugin-jsx@1.1.0",
        "koa": "npm:koa@1.1.0",
        "react": "npm:react@0.14.3",
        "react-dom": "npm:react-dom@0.14.3",
        "react-redux": "npm:react-redux@4.0.0",
        "github:floatdrop/plugin-jsx@1.1.0": {
            "react-tools": "npm:react-tools@0.13.3"
        },
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.5.2"
        },
        "github:jspm/nodelibs-constants@0.1.0": {
            "constants-browserify": "npm:constants-browserify@0.0.1"
        },
        "github:jspm/nodelibs-crypto@0.1.0": {
            "crypto-browserify": "npm:crypto-browserify@3.11.0"
        },
        "github:jspm/nodelibs-domain@0.1.0": {
            "domain-browser": "npm:domain-browser@1.1.4"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-http@1.7.1": {
            "Base64": "npm:Base64@0.2.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-net@0.1.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "timers": "github:jspm/nodelibs-timers@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-querystring@0.1.0": {
            "querystring": "npm:querystring@0.2.0"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-string_decoder@0.1.0": {
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "github:jspm/nodelibs-timers@0.1.0": {
            "timers-browserify": "npm:timers-browserify@1.4.1"
        },
        "github:jspm/nodelibs-tty@0.1.0": {
            "tty-browserify": "npm:tty-browserify@0.0.0"
        },
        "github:jspm/nodelibs-url@0.1.0": {
            "url": "npm:url@0.10.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "npm:accepts@1.2.13": {
            "mime-types": "npm:mime-types@2.1.7",
            "negotiator": "npm:negotiator@0.5.3"
        },
        "npm:accepts@1.3.0": {
            "mime-types": "npm:mime-types@2.1.7",
            "negotiator": "npm:negotiator@0.6.0"
        },
        "npm:acorn@1.2.2": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:amdefine@1.0.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "module": "github:jspm/nodelibs-module@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:asap@2.0.3": {
            "domain": "github:jspm/nodelibs-domain@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:asn1.js@4.2.0": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "bn.js": "npm:bn.js@4.3.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.25": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:bootstrap@3.3.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:brace-expansion@1.1.2": {
            "balanced-match": "npm:balanced-match@0.3.0",
            "concat-map": "npm:concat-map@0.0.1"
        },
        "npm:browserify-aes@1.0.5": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "buffer-xor": "npm:buffer-xor@1.0.3",
            "cipher-base": "npm:cipher-base@1.0.2",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:browserify-cipher@1.0.0": {
            "browserify-aes": "npm:browserify-aes@1.0.5",
            "browserify-des": "npm:browserify-des@1.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        },
        "npm:browserify-des@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "cipher-base": "npm:cipher-base@1.0.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "des.js": "npm:des.js@1.0.0",
            "inherits": "npm:inherits@2.0.1"
        },
        "npm:browserify-rsa@4.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:browserify-sign@4.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "browserify-rsa": "npm:browserify-rsa@4.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "create-hmac": "npm:create-hmac@1.1.4",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@6.0.2",
            "inherits": "npm:inherits@2.0.1",
            "parse-asn1": "npm:parse-asn1@5.0.0",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:buffer-xor@1.0.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:buffer@3.5.2": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "is-array": "npm:is-array@1.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:cipher-base@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
        },
        "npm:commander@2.9.0": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "graceful-readlink": "npm:graceful-readlink@1.0.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:commoner@0.10.4": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "commander": "npm:commander@2.9.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "detective": "npm:detective@4.3.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "glob": "npm:glob@5.0.15",
            "graceful-fs": "npm:graceful-fs@4.1.2",
            "iconv-lite": "npm:iconv-lite@0.4.13",
            "mkdirp": "npm:mkdirp@0.5.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "private": "npm:private@0.1.6",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "q": "npm:q@1.4.1",
            "recast": "npm:recast@0.10.39",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:composition@2.2.1": {
            "co": "npm:co@4.6.0",
            "native-or-bluebird": "npm:native-or-bluebird@1.2.0"
        },
        "npm:constants-browserify@0.0.1": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:content-disposition@0.5.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:cookie-signature@1.0.6": {
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:cookies@0.5.1": {
            "http": "github:jspm/nodelibs-http@1.7.1",
            "keygrip": "npm:keygrip@1.0.1"
        },
        "npm:core-js@1.2.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:core-util-is@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:create-ecdh@4.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@6.0.2"
        },
        "npm:create-hash@1.1.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "cipher-base": "npm:cipher-base@1.0.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "ripemd160": "npm:ripemd160@1.0.1",
            "sha.js": "npm:sha.js@2.4.4"
        },
        "npm:create-hmac@1.1.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:crypto-browserify@3.11.0": {
            "browserify-cipher": "npm:browserify-cipher@1.0.0",
            "browserify-sign": "npm:browserify-sign@4.0.0",
            "create-ecdh": "npm:create-ecdh@4.0.0",
            "create-hash": "npm:create-hash@1.1.2",
            "create-hmac": "npm:create-hmac@1.1.4",
            "diffie-hellman": "npm:diffie-hellman@5.0.0",
            "inherits": "npm:inherits@2.0.1",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "public-encrypt": "npm:public-encrypt@4.0.0",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:debug@2.2.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ms": "npm:ms@0.7.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "tty": "github:jspm/nodelibs-tty@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:depd@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:des.js@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        },
        "npm:destroy@1.0.3": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:detective@4.3.1": {
            "acorn": "npm:acorn@1.2.2",
            "defined": "npm:defined@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:diffie-hellman@5.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "miller-rabin": "npm:miller-rabin@4.0.0",
            "randombytes": "npm:randombytes@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:domain-browser@1.1.4": {
            "events": "github:jspm/nodelibs-events@0.1.1"
        },
        "npm:elliptic@6.0.2": {
            "bn.js": "npm:bn.js@4.3.0",
            "brorand": "npm:brorand@1.0.5",
            "hash.js": "npm:hash.js@1.0.3",
            "inherits": "npm:inherits@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:envify@3.4.0": {
            "jstransform": "npm:jstransform@10.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "through": "npm:through@2.3.8"
        },
        "npm:error-inject@1.0.0": {
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:etag@1.7.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:eventemitter3@0.1.6": {
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:evp_bytestokey@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:express@4.13.3": {
            "accepts": "npm:accepts@1.2.13",
            "array-flatten": "npm:array-flatten@1.1.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "content-disposition": "npm:content-disposition@0.5.0",
            "content-type": "npm:content-type@1.0.1",
            "cookie": "npm:cookie@0.1.3",
            "cookie-signature": "npm:cookie-signature@1.0.6",
            "debug": "npm:debug@2.2.0",
            "depd": "npm:depd@1.0.1",
            "escape-html": "npm:escape-html@1.0.2",
            "etag": "npm:etag@1.7.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "finalhandler": "npm:finalhandler@0.4.0",
            "fresh": "npm:fresh@0.3.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "merge-descriptors": "npm:merge-descriptors@1.0.0",
            "methods": "npm:methods@1.1.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "on-finished": "npm:on-finished@2.3.0",
            "parseurl": "npm:parseurl@1.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "path-to-regexp": "npm:path-to-regexp@0.1.7",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "proxy-addr": "npm:proxy-addr@1.0.8",
            "qs": "npm:qs@4.0.0",
            "querystring": "github:jspm/nodelibs-querystring@0.1.0",
            "range-parser": "npm:range-parser@1.0.2",
            "send": "npm:send@0.13.0",
            "serve-static": "npm:serve-static@1.10.0",
            "type-is": "npm:type-is@1.6.9",
            "utils-merge": "npm:utils-merge@1.0.0",
            "vary": "npm:vary@1.0.1"
        },
        "npm:fbjs@0.3.2": {
            "core-js": "npm:core-js@1.2.6",
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "promise": "npm:promise@7.0.4",
            "ua-parser-js": "npm:ua-parser-js@0.7.9",
            "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
        },
        "npm:finalhandler@0.4.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "debug": "npm:debug@2.2.0",
            "escape-html": "npm:escape-html@1.0.2",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "on-finished": "npm:on-finished@2.3.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "unpipe": "npm:unpipe@1.0.0"
        },
        "npm:fluxxor@1.7.3": {
            "eventemitter3": "npm:eventemitter3@0.1.6",
            "lodash": "npm:lodash@3.10.1",
            "object-path": "npm:object-path@0.6.0"
        },
        "npm:font-awesome@4.4.0": {
            "css": "github:systemjs/plugin-css@0.1.20"
        },
        "npm:glob@5.0.15": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inflight": "npm:inflight@1.0.4",
            "inherits": "npm:inherits@2.0.1",
            "minimatch": "npm:minimatch@3.0.0",
            "once": "npm:once@1.3.3",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "path-is-absolute": "npm:path-is-absolute@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:graceful-fs@4.1.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:graceful-readlink@1.0.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:hash.js@1.0.3": {
            "inherits": "npm:inherits@2.0.1"
        },
        "npm:history@1.13.1": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "deep-equal": "npm:deep-equal@1.0.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "invariant": "npm:invariant@2.2.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "qs": "npm:qs@4.0.0",
            "warning": "npm:warning@2.1.0"
        },
        "npm:http-assert@1.1.1": {
            "deep-equal": "npm:deep-equal@1.0.1",
            "http-errors": "npm:http-errors@1.3.1"
        },
        "npm:http-errors@1.3.1": {
            "inherits": "npm:inherits@2.0.1",
            "statuses": "npm:statuses@1.2.1"
        },
        "npm:iconv-lite@0.4.13": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:inflight@1.0.4": {
            "once": "npm:once@1.3.3",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "wrappy": "npm:wrappy@1.0.1"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:invariant@2.2.0": {
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:jstransform@10.1.0": {
            "base62": "npm:base62@0.1.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "source-map": "npm:source-map@0.1.31"
        },
        "npm:keygrip@1.0.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:koa-is-json@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:koa@1.1.0": {
            "accepts": "npm:accepts@1.3.0",
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "co": "npm:co@4.6.0",
            "composition": "npm:composition@2.2.1",
            "content-disposition": "npm:content-disposition@0.5.0",
            "content-type": "npm:content-type@1.0.1",
            "cookies": "npm:cookies@0.5.1",
            "debug": "npm:debug@2.2.0",
            "delegates": "npm:delegates@0.1.0",
            "destroy": "npm:destroy@1.0.3",
            "error-inject": "npm:error-inject@1.0.0",
            "escape-html": "npm:escape-html@1.0.3",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fresh": "npm:fresh@0.3.0",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "http-assert": "npm:http-assert@1.1.1",
            "http-errors": "npm:http-errors@1.3.1",
            "koa-compose": "npm:koa-compose@2.3.0",
            "koa-is-json": "npm:koa-is-json@1.0.0",
            "mime-types": "npm:mime-types@2.1.7",
            "on-finished": "npm:on-finished@2.3.0",
            "only": "npm:only@0.0.2",
            "parseurl": "npm:parseurl@1.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "querystring": "github:jspm/nodelibs-querystring@0.1.0",
            "statuses": "npm:statuses@1.2.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "type-is": "npm:type-is@1.6.9",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "vary": "npm:vary@1.1.0"
        },
        "npm:lodash@3.10.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:loose-envify@1.1.0": {
            "js-tokens": "npm:js-tokens@1.0.2",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:miller-rabin@4.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "brorand": "npm:brorand@1.0.5"
        },
        "npm:mime-db@1.19.0": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:mime-types@2.1.7": {
            "mime-db": "npm:mime-db@1.19.0",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:mime@1.3.4": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:minimatch@3.0.0": {
            "brace-expansion": "npm:brace-expansion@1.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:mkdirp@0.5.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "minimist": "npm:minimist@0.0.8",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:native-or-bluebird@1.2.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:on-finished@2.3.0": {
            "ee-first": "npm:ee-first@1.1.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:once@1.3.3": {
            "wrappy": "npm:wrappy@1.0.1"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:parse-asn1@5.0.0": {
            "asn1.js": "npm:asn1.js@4.2.0",
            "browserify-aes": "npm:browserify-aes@1.0.5",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:parseurl@1.3.0": {
            "url": "github:jspm/nodelibs-url@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:path-is-absolute@1.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:pbkdf2@3.0.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "create-hmac": "npm:create-hmac@1.1.4",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:promise@7.0.4": {
            "asap": "npm:asap@2.0.3",
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:proxy-addr@1.0.8": {
            "forwarded": "npm:forwarded@0.1.0",
            "ipaddr.js": "npm:ipaddr.js@1.0.1"
        },
        "npm:public-encrypt@4.0.0": {
            "bn.js": "npm:bn.js@4.3.0",
            "browserify-rsa": "npm:browserify-rsa@4.0.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.2",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "parse-asn1": "npm:parse-asn1@5.0.0",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:punycode@1.3.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:q@1.4.1": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:randombytes@2.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:react-dom@0.14.3": {
            "react": "npm:react@0.14.3"
        },
        "npm:react-redux@4.0.0": {
            "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.3",
            "invariant": "npm:invariant@2.2.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "react": "npm:react@0.14.3",
            "redux": "npm:redux@3.0.4"
        },
        "npm:react-tools@0.13.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "commoner": "npm:commoner@0.10.4",
            "jstransform": "npm:jstransform@10.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:react@0.14.3": {
            "envify": "npm:envify@3.4.0",
            "fbjs": "npm:fbjs@0.3.2",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:readable-stream@1.1.13": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.2",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:recast@0.10.39": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "ast-types": "npm:ast-types@0.8.12",
            "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "os": "github:jspm/nodelibs-os@0.1.0",
            "private": "npm:private@0.1.6",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "source-map": "npm:source-map@0.5.3"
        },
        "npm:redux@3.0.4": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:ripemd160@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:send@0.13.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "debug": "npm:debug@2.2.0",
            "depd": "npm:depd@1.0.1",
            "destroy": "npm:destroy@1.0.3",
            "escape-html": "npm:escape-html@1.0.2",
            "etag": "npm:etag@1.7.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fresh": "npm:fresh@0.3.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "http-errors": "npm:http-errors@1.3.1",
            "mime": "npm:mime@1.3.4",
            "ms": "npm:ms@0.7.1",
            "on-finished": "npm:on-finished@2.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "range-parser": "npm:range-parser@1.0.2",
            "statuses": "npm:statuses@1.2.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:serve-static@1.10.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "escape-html": "npm:escape-html@1.0.2",
            "parseurl": "npm:parseurl@1.3.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "send": "npm:send@0.13.0",
            "url": "github:jspm/nodelibs-url@0.1.0"
        },
        "npm:sha.js@2.4.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:source-map@0.1.31": {
            "amdefine": "npm:amdefine@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:source-map@0.5.3": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:statuses@1.2.1": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.13"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:through@2.3.8": {
            "process": "github:jspm/nodelibs-process@0.1.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:timers-browserify@1.4.1": {
            "process": "npm:process@0.11.2"
        },
        "npm:type-is@1.6.9": {
            "media-typer": "npm:media-typer@0.3.0",
            "mime-types": "npm:mime-types@2.1.7"
        },
        "npm:ua-parser-js@0.7.9": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:url@0.10.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "punycode": "npm:punycode@1.3.2",
            "querystring": "npm:querystring@0.2.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "npm:warning@2.1.0": {
            "loose-envify": "npm:loose-envify@1.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});