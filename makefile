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

deploy-clipboard-inspector-mobile:
	npx nx build clipboard-inspector --configuration=production-mobile; \
	cp dist/apps/clipboard-inspector/index.html ../TestWebview/TestWebView/TestWebView/resource/index.html


