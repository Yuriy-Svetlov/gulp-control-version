# gulp-control-version

> [gulp-control-version](https://github.com/semiromid/gulp-control-version) is a gulp plugin to update modules easily.



[En]
gulp-control-version is a plugin to rename file with the addition of version.

[Ru]
gulp-control-version переименовывает конечный файл, добавляя к нему префикс, с уникальным неповторяющимся индексом. 



## Install

```shell
npm install  gulp-control-version --save-dev
```

## Usage

Then, add it to your gulpfile.js:

```javascript
var conver = require('gulp-control-version');



//-----------gulp-control-version-----------
gulp.task('v-concat_css_1',  function () { //
    conver.rewrite({
                   resdir: "basic/components/widgets/assets/css/",
                   namefile: "-general_style-min.css", 
                   dirrefactor: ["basic/assets/", ["NavbarAsset.php","NavbarAsset_transparent.php"]], 
                   namerefactor: "-general_style-min",
                   codname: "utf-8"
                  });
});
//------------------------------------------
```


## Example

```javascript
var conver = require('gulp-control-version');
//-----------CONCAT-------------------------
gulp.task('concat_js_1', ['compress-js'], function () {
    return gulp.src(['./src/js/js_min/navbar_animate_button-min.js' , './src/js/js_min/navbar_mobilemenu-min.js'])
      .pipe(concat(conver('./basic/components/widgets/assets/js/','-navbar.js')+'-navbar.js'))
      .pipe(gulp.dest("./basic/components/widgets/assets/js/"));
});
//------------------------------------------

//-----------gulp-control-version-----------
gulp.task('v-concat_js_1', ['concat_js_1'], function () { 
  conver.rewrite({
                resdir: "basic/components/widgets/assets/js/",
                namefile: "-navbar.js", 
                dirrefactor: ["basic/assets/", ["NavbarAsset.php"]]
              });
});
//------------------------------------------
```


OR

## 1

```javascript
basic/components/widgets/assets/css/123423198-general_style-min.сss
```

## 2

```javascript
var conver = require('gulp-control-version');
//-----------CSSNANO-------------------------
gulp.task('cssnano', function () {
    return gulp.src('src/css/css/**/*.css')
        .pipe(nano({
            autoprefixer: {
                browsers: ['last 16 versions'],
                add: true
            }
        }))
        //gulp - rename
        //-----------------------------
        .pipe(rename({
              basename: conver('./basic/components/widgets/assets/css/','-general_style-min.сss')+"aloha",
            }))
        //-----------------------------
        .pipe(gulp.dest('src/css/css_min/'));
});
//------------------------------------------

//-----------gulp-control-version-----------
gulp.task('v-concat_js_1', ['cssnano'], function () { 
  conver.rewrite({
                resdir: "basic/components/widgets/assets/css/",
                namefile: "-general_style-min.сss", 
                dirrefactor: ["basic/assets/", ["NavbarAsset.php"]]
              });
//------------------------------------------
```

## 3

```javascript
basic/components/widgets/assets/css/313787045-general_style-min.сss
```

## 4

NavbarAsset.php

```javascript
class NavbarAsset extends AssetBundle
{
    public $sourcePath = '@app/components/widgets/assets';
    public $css = [
        'css/313787045-general_style-min',
    ];
    public $js = [
        'js/lib/jquery.color-2.1.0.min.js',
        'js/317260467-navbar.js'
    ];
}

```
## API

### rewrite({resdir, namefile , dirrefactor, namerefactor , codname})
+ resdir

  Resource file directory

+ namefile

  Resource file name

+ dirrefactor[url,[filename]]

    +  url

      File directory that connects resources

      dirrefactor: ["URL", ["NavbarAsset.php"]]

      Exmample: dirrefactor: ["basic/assets/", ["NavbarAsset.php"]]

    +  filename

      The file name in which you want to rename the resource name

+ namerefactor

  + namerefactor = namefile ('Default')

    Resource file name, which will be connected

+ codname

  + codname = "utf-8" ('Default')

    Encoding



## Bugs

* Please to write

  * github - [github.com/semiromid/gulp-update-modul](https://github.com/semiromid/gulp-control-version) 

  * email - xor.wind@mail.ru
 

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
