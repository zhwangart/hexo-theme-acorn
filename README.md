# Acorn

Acorn is a Hexo theme for small to medium sized businesses or studios.

[Acorn Sample data](https://github.com/zhwangart/acorn-sample-data)

[中文文档](https://acorn.imaging.xin/docs/)

## Example

- [Acorn](https://acorn.imaging.xin/)
- [圣思睿](https://saintree.cn)

## Install

```bash
$ git clone https://github.com/zhwangart/hexo-theme-acorn.git themes/acorn
```

## Enable

Modify `theme` setting in `_config.yml` to `acorn`

```bash
theme: acorn
```

## Update

```bash
cd themes/acorn
git pull
```

## Plugins

### hexo-autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) plugin for Hexo.

#### Installation

```bash
$ npm install hexo-autoprefixer --save
```

#### Options

Configure Autoprefixer in your Hexo config.

```yml
autoprefixer:
  exclude:
    - '*.min.css'
```

In `package.json` :

```json
"browserslist": [
  "last 2 versions"
]
```

Complete sample: 

```json
"hexo": {
    "version": "6.0.0"
  },
  "dependencies": {
     ....
  },
  "browserslist": [
   "last 2 versions"
 ]
```

### hexo-clean-css

Minify CSS files with [clean-css](https://github.com/jakubpawlowicz/clean-css).

#### Installation

```bash
$ npm install hexo-clean-css --save
```

#### Options

```yml
clean_css:
  exclude: 
    - *.min.css
```
