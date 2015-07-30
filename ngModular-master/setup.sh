#!/bin/bash

# Install Homebrew
if [ -f /usr/local/bin/brew ]; then
    echo "Updating Homebrew to the latest version"
    brew update
else 
    echo "Installing Homebrew..."
    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
fi

# Install Node.js
if [ -f /usr/local/bin/node ]; then
    echo "Updating Node.js to the latest version"
    npm cache clean
    npm install -g n
    n latest
else 
    echo "Installing Node.js..."
    brew install node
    npm install -g n
fi

# Install Sass
if [ -f /usr/bin/sass ]; then
    echo "Updating Sass to the latest version"
    gem update sass
else 
    echo "Installing Sass.."
    gem install sass
fi

# Install Compass
if [ -f /usr/bin/compass ]; then
    echo "Updating Compass to the latest version"
    gem update compass --pre
else 
    echo "Installing Compass.."
    gem install compass --pre
fi
