# Ruckenwind

A Pelican Theme.

Technically, it's supposed to be "rückenwind" with an umlaut, but we are silly Americans so we dropped it. It means "tailwind" in German, and we chose it because we use [TailwindCSS](https://tailwindcss.com/) for this theme's styling.

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
- Display Twitter, Github, Facebook, Instagram, Strava, and Goodreads icons in footer if configured

## Template support

### Supported

- archives.html
- period_archives.html
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

```
mkdir themes
cd themes
git submodule add https://github.com/androiddrew/ruckenwind.git
```

### Building the CSS

To make changes to the templates you will first need install dependencies with npm

```

cd themes/ruckenwind/
npm install

```

Tailwind cli will only output to `./static/ruckenwind.css` the utility classes used in the `templates/` directories as configured in `tailwind.config.js`. Changes to these templates will require recompiling the css.

```

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
