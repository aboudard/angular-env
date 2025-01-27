# angular-env

This is an example of how to use environment variables in Angular.
We use different techniques, such as:
- Angular environment files
- Environment variables
- Docker environment variables
- Github Actions environment variables

## Deploy with github pages after a build
    
```bash
ng build --configuration production --base-href=/angular-env/
ng deploy --base-href=/angular-env/ --repo=https://github.com/aboudard/angular-env.git --dir=dist/angular-env --no-nojekyll
```

### Deploy with github actions

Automatic deployment with github actions after a push on the desired branch.
Action used : [JamesIves/github-pages-deploy-action](https://github.com/marketplace/actions/deploy-to-github-pages)

```yaml
Using the following workflow file configuration:
```yaml
env:
  MY_VAR: ${{ vars.MY_VAR }}
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
## On Docker

You can set environment variables in a Dockerfile with the following command:

```bash
ENV MY_VAR=theVar
```

Build the Docker image
```bash
docker build -t angular-env .
# Build the image and override the MY_VAR environment variable
docker build --build-arg MY_VAR="Docker Build" -t angular-env .
```

Run the Docker container
```bash
docker run -p 80:80 angular-env
```
