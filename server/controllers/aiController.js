export const generateWebsite = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const code = `
      <html>
      <head>
        <title>AI Generated Website</title>
        <style>
          body{
            font-family: Arial, sans-serif;
            padding: 40px;
            background: #f5f5f5;
          }
          h1{
            color:#2563eb;
          }
        </style>
      </head>
      <body>
        <h1>AI Generated Website</h1>
        <p>${prompt}</p>
      </body>
      </html>
    `;

    res.status(200).json({
      success: true,
      code,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};