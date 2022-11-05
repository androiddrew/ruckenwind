# Ruckenwind

A Pelican Theme inspired by https://github.com/StartBootstrap/startbootstrap-clean-blog and it's Pelican https://github.com/gilsondev/pelican-clean-blog theme. Reimplemented in Tailwind, because I like it better. 

Technically, it's supposed to be "rückenwind" with an umlaut, but I am silly Americans so I dropped it. It means "tailwind" in German, and I chose it because I use [TailwindCSS](https://tailwindcss.com/) for this theme's styling.

## Markdown

I have only tested this theme with Markdown content.

I have found this guide to be one of the best markdown guides available: https://www.markdownguide.org/basic-syntax/. The tailwind typography plugin used in this project has full styling support for all items processed by the markdown engine.

## Header Images and Overlays

When using a header image with the `HEADER_COVER` configuration option, it may be advantageous to use a transparent overlay to make the navbar and h1 text more visible. We can use the `HEADER_COLOR` configuration option set to a safelisted background color in the `tailwind.conf.js` to achieve this outcome. 

By default we have safelisted the gray palatte, bu you can easily add additional colors.
```
  safelist: [
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-500',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
  ],
```

## Icons

You can extend the social sections of this template with svg icons from https://simpleicons.org/. Be sure to abide by branding guidelines if applicable.

## Features

- Clean, readable, accessible, and fast theme
- Mobile first
- W3C validated
- Clean slugified URLs
- Easy to extend and customize to your liking
- SEO optimized w/ OG tags and Twitter Card support
- Google Analytics support
- Gravatar support
- Disqus support
- Pygments syntax highlighting for code blocks
- Display Twitter, Github, Facebook, Instagram (Coming soon)

## Template support

### Supported

- archives.html (Coming soon)
- period_archives.html (Coming soon)
- social links (Coming soon)
- article.html
- categories.html
- category.html
- index.html
- page.html
- tag.html
- tags.html


## Getting started with dev

### Adding this submodule to your Pelican project

For an introduction in the use of git submodules see https://phoenixnap.com/kb/git-submodule.

Create a themes directory within your Pelican project, then add this repository as a git submodule.

```bash
mkdir themes
cd themes
git submodule add https://github.com/androiddrew/ruckenwind.git
```

### Building the CSS

To make changes to the templates you will first need install dependencies with npm

```bash
cd themes/ruckenwind/
npm install
```

Tailwind cli will only output to `./static/ruckenwind.css` the utility classes used in the `templates/` directories as configured in `tailwind.config.js`. Changes to these templates will require recompiling the css.

```bash
npx tailwindcss -i ./src/input.css -o ./static/css/ruckenwind.css --watch
```

## Configuration

Here is a list of theme settings you can configure to alter aspects of the theme. The theme also supports most of the general settings that Pelican offers so I won't go into those here.

```python
# Theme Settings
THEME = 'themes/ruckenwind'
## used for OG tags and Twitter Card data on index page. (see https://ahrefs.com/blog/open-graph-meta-tags/)
SITEIMAGE = 'site-cover.jpg'
## used for OG tags and Twitter Card data of index page
SITEDESCRIPTION = 'A simple mobile first Pelican theme built using TailwindCSS.'
## path to favicon
FAVICON = 'pelly.png'
## path to logo for nav menu (optional)
LOGO = 'pelly.png'
## first name for nav menu if logo isn't provided
FIRST_NAME = 'Ruckenwind'
## google analytics (fake code commented out)
# GOOGLE_ANALYTICS = 'UA-0011001-1'
## Twitter username for Twitter Card data
TWITTER_USERNAME = '@ruckenwind'
## Toggle display of theme attribution in the footer (scroll down and see)
## Attribution is appreciated but totally fine to turn off!
ATTRIBUTION = True
## Add a link to the tags page to the menu
## Other links can be added following the same tuple pattern
MENUITEMS = [('tags', '/tags')]
## Social icons for footer
## Set these to whatever your unique public URL is for that platform
## I've left mine here as a example
STRAVA = 'https://www.strava.com/athletes/27234301'
TWITTER = 'https://twitter.com/mcman_s'
INSTAGRAM = 'https://instagram.com/mcman_s'
GITHUB = 'https://github.com/mamcmanus'
TELEGRAM = 'https://t.me/mcman_s'
GOODREADS = 'https://www.goodreads.com/user/show/48849158-matthew-mcmanus'
FOURSQUARE = 'https://foursquare.com/mcman_s'
UNTAPPD = 'https://untappd.com/user/mcman_s'
## Disqus Sitename for comments on posts
## Commenting mine out for this theme site
DISQUS_SITENAME = 'brutalistpelican'
## Gravatar
## Commenting mine out so you can see how the theme looks without one
## See https://mamcmanus.com to see what it looks like with a Gravatar
# GRAVATAR = 'https://www.gravatar.com/avatar/a5544bcae63c5d56c0b7a3fa0ab5b295?s=256'
```

## Plugins

Example plugin configuration.

```python
# PLUGINS
PLUGIN_PATHS = ['plugins']
PLUGINS = ['sitemap', 'category_order', 'w3c_validate', 'optimize_images', 'gzip_cache']

## SITEMAP PLUGIN
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': .99,
        'pages': .75,
        'indexes': .5
    },
    'changefreqs': {
        'articles': 'daily',
        'pages': 'daily',
        'indexes': 'daily'
    },
}
```
