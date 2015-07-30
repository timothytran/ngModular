# ngModular
A highly scalable and modular AngularJS boilerplate which emphasize on following best practices.

## Purpose
ngModular is designed to provide a template for developing highly scalable AngularJS application.  It come prepackaged with the most popular design frameworks:  RequireJS, SASS, Twitter Bootstrap, Unit Testing, jsHint, Grunt, Docker, etc..

## Quick Start
#### Setup Local Environment
Install/update Homebrew, Node.js, Sass, and Compass. You probably need ```sudo``` access.

   	./setup.sh
   	
#### Install global npms
Install these npm globally. You probably need ```sudo``` access.

	npm install -g grunt-cli
	npm install -g bower
	npm install -g karma
	npm install -g protractor
   	
#### Build project
Build project and start watcher.

	npm install
	bower install
	grunt build
	grunt watch

#### Setup localhost alias
Point your localhost to the project ```build/``` directory.

## Grunt Tasks
Various grunt tasks that can be performed.

- ```grunt```: Generate local build and start watcher.
- ```grunt test```: Run Karma test and generate code coverate report.
- ```grunt watch```: Start watcher
- ```grunt local```: Generate build for LOCAL environment.
- ```grunt dev```: Generate build for DEV environment.
- ```grunt prod```: Generate build for PROD environment deployment.
- ```grunt update```: Git pull and update all npm and bower dependencies.
- ```grunt docs```: Generate annotated documentations.
    
	
## General
### Annotated Documentations
- Gruntfile: <http://localhost/docs/Gruntfile.js.html>
- App: <http://localhost/docs/app.js.html>

### Testing
- Unit Test Coverage: <http://localhost/test/coverage/>

### Resources
- Angular Coding Standard: <https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html>
- Angular Style Guide: <https://github.com/mgechev/angularjs-style-guide>
- Angular Best Practices: <https://github.com/angular/angular.js/wiki/Best-Practices>
- Unit Test Patterns: <https://github.com/daniellmb/angular-test-patterns>


### Application Structure
```
.
├── app
│   ├── app.js
│   ├── config.js
│   ├── main.js
│   ├── templates.js
│   ├── partials
│   ├── common
│   │   ├── directives.js
│   │   └── directives.spec.js
│   │   ├── filters.js
│   │   └── filters.spec.js
│   │   ├── services.js
│   │   └── services.spec.js
│   └── modules
│       └── home
│           ├── controllers
│           │	├── HomeCtrlr.js
│           │	└── HomeCtrl.spec.js
│           ├── directives
│           │	├── underline-text.js
│           │	└── underline-text.spec.js
│           ├── filters
│           │	├── camelcase.js
│           │	└── camelcase.spec.js
│           ├── services
│           ├── home.js
│           ├── home.spec.js
│           └── home.html
├── img
├── sass
│   ├── lib.scss
│   └── style.scss
├── vendor
└── index.html
```

## TODO
- Add JSCS to project
- Add more sample AngularJS files
- Add Sass directory structure
- Add sample partials file
- Add documentation on build process
- Update demo page with better layout
- Update all test cases to best practice format
- Update code comments to use JSDoc format
- Continue improving documentation
