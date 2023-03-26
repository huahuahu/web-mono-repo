clean-package:
	rm -rf node_modules

install:
	npm install

clean-output:
	rm -rf dist

build:
	npx nx run-many --target=build --all=true

lint:
	npx nx run-many --target=lint --all=true

lint-fix:
	npx nx run-many --target=lint --all=true --fix=true

