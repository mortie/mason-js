.PHONY: check
check: mason/.git/HEAD
	./mason/test-suite/run-tests.js ./mason-cli.js

mason/.git/HEAD:
	git clone https://github.com/mortie/mason.git
