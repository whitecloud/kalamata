# Kalamata

Just a temporary place to host new Angular frontend components for Kalamata until we bundle it to deploy with the Kalamata solution as it is.  

## Getting started  

- Clone the repository  
- Install ionic and cordova globally: `npm i -g ionic cordova`  
- Run `npm i` in the root of the project, to get the project dependencies  
- Run `ionic serve` in the root of the project to serve the app  

## Dev  

### Stack  
- [Ionic](https://ionicframework.com/docs/)
- [Angular](https://angular.io/docs)
- [SASS](https://sass-lang.com/documentation)
- [Lodash](https://lodash.com/docs)
- NEEDS INFO: Charting framework

### Components
When you are serving the app with `ionic serve`, it should open up your default browser to localhost:8100/ and you will the app re-build and update in the browser whenever you make code changes. Whenever the app is being served locally (with localhost in the URL) then there will be a Dev Style Guide link at the bottom of the left side nav, where you can see examples of the components, styles, icons, and more of what we use throughout the product.  

If the spec you're reading requires something that isn't built yet, build it, prove it works on that page (and on your page) so that we can re-use the component in the future. Ask Matt for more information.  

### Ionic CLI
When you want to create a new component, page, service, or any other Angular/Ionic thing, please use the Ionic CLI to generate these files. Read more about how it works in the [ionic generate documentation](https://ionicframework.com/docs/cli/commands/generate).

Our general layout however is to put files of the same type in the same directory. For example, all pages are underneath the `pages/` directory and you would create a new page like so: `ionic g page "pages/PI Plans"` and it will do the right thing. Components are then nested under `components/` and would be created like so: `ionic g component "components/Filter Bar"`.

## Test  

When you generate pages, components, and other types of files with the Ionic CLI, it automatically creates test files for you that end with `.spec.ts`  

NEEDS INFO: document what a good frontend test looks like including how it's written, how it works, and some examples of what to test and what not to test.

## Deploy

NEEDS INFO: We still need to figure out where this code will live and how it will be deployed with Kalamata as it is today, or if it will live alongside it.
