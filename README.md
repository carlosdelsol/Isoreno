# Isoreno
Isomorphic app seed with React and Node.js

### Notes:

Because the files are .js and not .jsx, the `React.createFactory` has to be used when including components. See why here: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261

### Demo Install Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `https://github.com/carlosdelsol/isoreno.git`
2. Install packages: `npm install`
3. Build changes with `gulp`
4. Launch: `npm start`
5. Visit in your browser at: `http://localhost:3000`
6. To see serverside rendering, comment out main.js from the /views/layout.hbs and /views/index.hbs file. This will show what is rendered purely from the server side.
