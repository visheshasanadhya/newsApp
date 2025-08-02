# news_app


## Some screenshots

|                                                        |                                                        |
| ------------------------------------------------------ | -------------------------------------------------------|
| <img src="ss/Screenshot_1736529848.png"  width="300"/> | <img src="ss/Screenshot_1736529886.png"  width="300"/> |
| <img src="ss/Screenshot_1736529881.png" width="300"/>  | <img src="ss/Screenshot_1736529889.png" width="300"/>  |


---

### :heart: Found this project useful?

If you found this project useful, then please consider giving it a :star: on Github and sharing it with your friends via social media.

#### for deploynment to github commands

## flutter clean

## flutter pub get

## flutter build web --base-href "/newsApp/"

## flutter clean

## flutter pub get

## git init    
## git add .
## git commit -m "first commit"
## git branch -M main
## git remote add origin https://github.com/visheshasanadhya/newsApp.git
## git push -u origin main


## flutter build web --release

## flutter build web --release --no-tree-shake-icons

<<<<<<< HEAD
## cd build/web>> git init
=======
## cd build/web
## git init
>>>>>>> 856644a5fc927e65594fbad535bad1b9b40d1624
## git remote add origin https://github.com/visheshasanadhya/newsApp.git
## git checkout -b gh-pages
## git add .
## git commit -m "Deploy Flutter Web to GitHub Pages"
<<<<<<< HEAD
## git push -f origin gh-pages
=======
## git push -f origin gh-pages
>>>>>>> 856644a5fc927e65594fbad535bad1b9b40d1624



-----------------------

#gh pages command

```bash #
git checkout --orphan gh-pages
git reset --hard
git clean -fdx

cp -r build/web/* .

git add .
git commit -m "Deploy web app to gh-pages"
git push -f origin gh-pages


```
