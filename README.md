# BGStretch
A Simple Single Function Library alternative of backstretch.js

it is a Simple Rewrite because backstrecth.js uses JQuery and add additional Load Time 

Usage 
id must be Unique and must not exist anywhere Else in the page 

data-duration is the time of each slide will take to change ( in Seconds ) 

data-steps is to tell how much steps will a slide takes in transitioning ( optional ) 
if set to 0 it will smoothly fades

```HTML
<div 
id="UNIQUE_SLIDER_ID" 
data-duration="5"
data-steps="1"
>
</div>
```
CSS is very minimal and you dont need to add any classes just apply simple width and height and background-size by you preference

```CSS
#UNIQUE_SLIDER_ID{
  height:100vh;
  background-size:cover;
}
```
Use this Script tag as CDN

```HTML
<!-- CDN -->
<script src="https://cdn.jsdelivr.net/gh/user/repo@version/file"></script>
<!-- CDN -->
<script>
let Images_Array = [
      'https://unsplash.it/1280/720',
      'https://unsplash.it/1280/721',
      'https://unsplash.it/1280/722'];

BGStretch('#UNIQUE_SLIDER_ID', Images_Array)
</script>
```
