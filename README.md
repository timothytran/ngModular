# ngModular

## Quick Start

#### Prerequisite
Make sure you have Node, Sass, and Compass installed.	
   	
#### Install global npms
Install these npm globally. You'll need ```sudo``` access.

	sudo npm install -g grunt-cli
	sudo npm install -g bower
	sudo npm install -g karma
	sudo npm install -g protractor
	sudo npm install -g jshint
	sudo npm install -g jscs
   	
#### Build project
Build project and start watcher.

	sudo npm install
	bower install
	grunt build
	grunt watch

#### Setup localhost alias
Point your localhost to the project ```build/``` directory.

#### Update Project
Whenever you do a git pull from master please remember to run
```
bower update
```

This will make sure that you have the latest libraries required for the project.

## Grunt Tasks
Various grunt tasks that can be performed.

- ```grunt```: Generate local build and start watcher.
- ```grunt watch```: Start watcher
- ```grunt test```: Run Karma test and generate code coverate report.
- ```grunt build```: Generate build for LOCAL (without watcher).
    
	
## General


### Application Structure
```
.
├── app
│   ├── app.js
│   ├── config.js
│   ├── main.js
│   ├── templates.js
│   ├── common
│   │   ├── controllers
│   │   ├── directives
│   │   ├── interceptors
│   │   ├── filters
│   │   ├── models
│   │   ├── services
│   │   ├── utils
│   │   └── views
│   │
│   └── modules
│       └── home
│           ├── controllers
│           │	├── HomeCtrlr.js
│           │	└── HomeCtrl.spec.js
│           │
│           ├── services.js
│           ├── services.spec.js
│           ├── directives.js
│           ├── directives.spec.js
│           ├── filters.js
│           ├── filters.spec.js
│           ├── home.js
│           ├── home.spec.js
│           └── views
│            	└── home.html
│
├── fonts
├── img
├── locales
├── sass
├── vendor
└── index.html
```

### SASS Structure
```
sass/
|
|-- base/                 # Configurations that used throughout the app
|   |-- _base.scss        # main configuration
|   |-- _fonts.scss  	  # fonts
|   |-- _typography.scss  # typography
|   ...
|
|-- components/           # Reusable components across the site
|   |-- _animations.scss  # animations
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _forms.scss       # forms
|   ...
|
|-- layout/               # Layout styles
|   |-- _footer.scss      # footer
|   |-- _global.scss      # global
|   |-- _header.scss      # header
|   |-- _navigation.scss  # navigation
|   ...
|
|-- modules/              # Modules styles
|   |-- devices        	  # Devices
|   |	|-- _devices.scss # devices specific style
|   |	|-- _mixins.scss  # devices specific mixins
|   |	...
|   |-- home      		   # Home
|   |-- _all.scss  		   # import all modules css
|   ...
|
|-- utils/                # Utility SASS that is not outputted
|   |-- _functions.scss   # functions
|   |-- _helpers.scss     # placeholders
|   |-- _mixins.scss      # mixins
|   ...
|
|-- vendors-ext/          # Override vendors styles
|   ...
|
`-- style.scss            # Primary Sass file where everything is imported to
```
