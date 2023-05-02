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
	cp dist/apps/clipboard-inspector/index.html ../ios-mono-repo-huahuahu/MonoRepos/ClipboardInspector/ClipboardInspector/Resources/clipboard.html

deploy-clipboard-inspector-web:
	git checkout azure-websites; \
	git reset --hard main; \
	git push --force-with-lease; \

deploy-clipboard-inspector-in-ci:
	make install; \
	npx nx build clipboard-inspector --configuration=production; \
	cp apps/clipboard-inspector/staticwebapp.config.json dist/apps/clipboard-inspector/staticwebapp.config.json; \

deploy-gpt-demo-in-ci:
	make install; \
	npx nx build gpt-app-web --configuration=production; \
	cp apps/gpt-app-web/staticwebapp.config.json dist/apps/gpt-app-web/staticwebapp.config.json; \

