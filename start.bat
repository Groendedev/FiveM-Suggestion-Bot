IF EXIST "node_modules" (
    npm start
) ELSE (
  npm i
  npm start
);