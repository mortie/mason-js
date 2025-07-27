.PHONY: check
check: mason/.git/HEAD
	./mason/test-suite/run-tests.js ./mason-cli.js

mason/.git/HEAD:
	git clone https://github.com/mortie/mason.git
	cd mason && git switch --detach 61a22f6e4ed9a2f4dc0f486e4262edcf914309f6
