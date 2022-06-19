# Vedr-Starter-Template
[![Netlify Status](https://api.netlify.com/api/v1/badges/2439f46d-a39e-4b18-a106-7a8530336948/deploy-status)](https://app.netlify.com/sites/vedr-template/deploys)

## Setup nieuw project
1. Maak een nieuwe repo aan in https://github.com/vedr-nl/ (maak deze private)
2. git clone --bare https://github.com/vedr-nl/Vedr-Starter-Template.git of git@github.com:vedr-nl/Vedr-Starter-Template.git voor SSH
3. cd old-repository.git
4. git push --mirror https://github.com/vedr-nl/new-repository.git
https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository

Maak nu de volgende branches aan in de nieuwe repo
- development

De main branch zal worden gebruikt voor production deployment.
De development branch dient voor development deployment.

## Project runnen
    1. npm install
    2. npm run dev

## Contentful
    1. log in op https://contentful.com/
    2. ga naar settings en kies API keys
    3. kopieer space id en content delivery api in .env.local file

## Netlify
    1. log in op https://netlify.com/
    2. link github account
    3. configureer de deploy
    4. configureer environment variables hetzelfde als de .env.local file


## Production deploy
- [ ] Verander head.js
- [ ] Verander contact formulier variabelen in .env.local
- [ ] Deploy op production branch
