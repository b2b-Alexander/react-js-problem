# react-js-problem
Proxy does not work with npm start on my laptop

Setup:
```sh
cd ./backend
npm install
cd ..
cd ./frontend
npm install
```

Start backend (use command inside backend directory)
```sh
npm run start
```

Start frontend (create-react-app)
```sh
npm start
```

Then open inside the browser `http://localhost:80` or just `localhost`

If everything works fine you will see same page as you will se at `localhost:3000`

And then open `localhost/api` and `localhost/api/test`

You should see two prepared pages that are locating at `localhost:4000` and `localhost:4000/test`

For some reason when I start react server using `npm start` my proxy doesn't see the server (only on my laptop), but at the same time routes `/api` and `/api/test` are working fine.

But if I build react app using `npm run build` and then starting server using `serve` module (`npm install serve -g`) with command `serve -s build` server also starts at `:3000` port, but in this case my proxy server is able to see this page and returns react page as it should work.