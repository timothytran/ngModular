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
    sudo npm install -g n
    sudo n stable
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
    gem update compass
else 
    echo "Installing Compass.."
    gem install compass
fi

# Install scss-lint
if [ -f /usr/bin/scss-lint ]; then
    echo "Updating scss-lint to the latest version"
    gem update scss-lint -v 0.29.0
else 
    echo "Installing scss-lint.."
    gem install scss-lint -v 0.29.0
fi

# Install scss-lint
if [[ -n $(gem which sass-globbing) ]]; then
    echo "Updating sass-globbing to the latest version"
    gem update sass-globbing
else 
    echo "Installing sass-globbing.."
    gem install sass-globbing
fi
