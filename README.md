# Deploy Project React 

## Change package.json

```json
  "homepage":"https://imranesarsri.github.io/landing_page_react",
```

```json

  "scripts": {
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build",
  }
```

## npm run deploy

```bash
npm run deploy
```