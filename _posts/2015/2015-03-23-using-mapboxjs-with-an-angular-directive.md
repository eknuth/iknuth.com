---
layout: post
title: "using mapbox.js with an angular directive"
description: ""
category:
tags: ["angular", "javascript", "mapbox.js"]
controller: MapDemoCtrl
---
## JavaScript Centered Angular Directives
In the last [example angular directive]({% post_url /2015/2015-03-22-lets-make-a-bar-chart-with-an-angular-directive %}), the focus was rendering data into html elements. In that case, there was a minimum of javascript in the [link function](https://github.com/angular-reusable-components/chart-components/blob/master/src/barchart.js).

However, it is often useful to wrap functionality provided by a javascript library into a directive, so that the behavior can be controlled by angular.

The simplest form of angular directive is the single element replace, which follows the emerging web component pattern. Here is an [example map component](https://github.com/angular-reusable-components/angular-map-components) using mapbox.js.

In this way, the following html:

{% highlight html %}
<map></map>
{% endhighlight %}

Can become:
<map></map>

By passing a latitude and longitude to the directive, the map can be centered at a specific locations.

For example, a map of Angkor Wat:

<map options="{zoom: 14, lat: 13.4125, lng: 103.8667}"></map>

Is as easy as:

{% highlight html %}
<map options="{zoom: 14, lat: 13.4125, lng: 103.8667}"></map>
{% endhighlight %}
