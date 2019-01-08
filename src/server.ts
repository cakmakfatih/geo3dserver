import app from './app';

app.listen(app.get("port"), () => console.log("server started at port %d", app.get("port")));