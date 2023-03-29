set -e
git --no-pager branch
git checkout azure-websites
npx nx build clipboard-inspector --configuration=production
git add .
git commit -m 'deploy from main'
