//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5015;

const server = http.createServer(async (req, res) => {
        // / : GET 
    if (req.url === "/" && req.method === "GET") {
        // set the status code, and content-type
           res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
           "Access-Control-Allow-Origin": "*" });
           res.end(JSON.stringify({ message: "App is active! 🚀" }));
       }
    // /api/v1 : GET
    else if (req.url === "/v1/fulldata" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    //

	    //
      // /api/v1/today : GET
      else if (req.url === "/v1/today" &&
      req.method === "GET") {
             // get today data.
            const todayData = await new AppData().getTodayData();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(todayData));
        }
        //
// Add above

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        res.end(JSON.stringify({ message: "Route not found 💣" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));