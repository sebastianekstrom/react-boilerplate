.PHONY: install serve clean build test-unit

WEBPACK_BIN = ./node_modules/webpack/bin/webpack.js

install:
	npm prune
	npm install

serve:
	UV_THREADPOOL_SIZE=100 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js

clean:
	rm -rf build/

build: clean test-unit
	NODE_ENV=production UV_THREADPOOL_SIZE=100 $(WEBPACK_BIN) --config webpack.config.prod.js --progress

test-unit:
	NODE_ENV=tests ./node_modules/.bin/mocha './test/**/*_spec.js'
