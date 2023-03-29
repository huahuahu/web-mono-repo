clean-package:
	rm -rf node_modules

install:
	npm install

clean-output:
	rm -rf dist

build:
	npx nx run-many --target=build --all=true

lint:
	npx nx run-many --target=lint --all=true; \
	npx stylelint "**/*.css"; \
	npx prettier --check **/*.css

lint-fix:
	npx nx run-many --target=lint --all=true --fix=true; \
	npx stylelint "**/*.css" --fix; \
	npx prettier --write **/*.css;

deploy-clipboard-inspector-mobile:
	npx nx build clipboard-inspector --configuration=production-mobile; \
	cp dist/apps/clipboard-inspector/index.html ../TestWebview/TestWebView/TestWebView/resource/index.html

