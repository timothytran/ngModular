# Speed up compass by enabling import-once importing
require "compass/import-once/activate"
require 'sass-globbing'

preferred_syntax = :sass
http_path = '/'
css_dir = 'build/css'
sass_dir = 'src/sass'
images_dir = 'src/img'
javascripts_dir = 'src/app'
relative_assets = true
output_style = (environment == :production) ? :compressed : :expanded
line_comments = (environment == :production) ? false : true
sourcemap = (environment == :production) ? false : true
