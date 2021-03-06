export default function template(body, initialState) {
  return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pro MERN Stack</title>
            <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
            <style>
                .header {
                    border-bottom: 1px solid silver;
                    margin-bottom: 20px;
                }

                .footer {
                    border-top: 1px solid silver;
                    padding-top: 5px;
                    margin-top: 20px;
                    font-family: Helvetica;
                    font-size: 10px;
                    color: grey;
                }

                .panel-title a {
                  display: block;
                  width: 100%;
                  cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div id="contents">${body}</div>

            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
            <script src="/vendor.bundle.js"></script>
            <script src="/app.bundle.js"></script>
        </body>
    </html>
  `;
}
