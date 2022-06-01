# Vedr-Starter-Template

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
