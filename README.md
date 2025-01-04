# angular-env

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Deploy with github pages after a build
    
```bash
ng build --configuration production --base-href=/angular-env/
ng deploy --base-href=/angular-env/ --repo=https://github.com/aboudard/angular-env.git --dir=dist/angular-env --no-nojekyll
```

## Using environment variables in Angular

On linux, you can set environment variables with the following command:
```bash
export MY_VAR=theVar
```

On windows, you can set environment variables with the following command:
```bash
set MY_VAR=TheVar
```
