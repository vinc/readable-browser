Readable Browser
================

[Readable Browser](https://github.com/vinc/readable-browser) is a web server
leveraging the [readability library](https://github.com/mozilla/readability)
to display any web page in a light and distraction free form.

1. Nowadays most websites ask you to download megabytes of stuff to view a few
   kilobytes of useful content. That's the equivalent of printing a whole book
   just to read a single page. With Readable Browser you skip all that and
   fetch only the text that you want to read. It's much faster, and better for
   the environment.

2. When you are reading a page, what you want is focus your attention on the
   text, but most websites are optimized to maximize user engagement by
   tracking and manipulating them to increase their advertising revenues.
   With Readable Browser you only see the content, not the bullshit.

3. Finally, if a content producer respects you, you'll see a box at the end
   of their articles explaining how you can help them produce their content.
   Usually that'll be a link to their subscription or donation page.


Usage
-----

You can try a [online demo](https://readable.vinc.cc) of Readable Browser but
for your privacy it's much better to run the server yourself:

```bash
git clone https://github.com/vinc/readable-browser
cd readable-browser
yarn install
yarn start
```

Then you can visit http://localhost:3000 with your browser favorite browser.


License
-------

Copyright (c) 2018 Vincent Ollivier. Released under MIT.
