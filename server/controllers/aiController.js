
// GENERATE WEBSITE

export const generateWebsite = async (req, res) => {
  try {

    const { prompt } = req.body;

    // Validate prompt
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    // Generate Website Template
    const code = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Generated Website</title>

<style>

body{
    font-family: Arial, sans-serif;
    background:#f5f5f5;
    padding:40px;
    margin:0;
}

.container{
    max-width:900px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
}

h1{
    color:#2563eb;
}

p{
    font-size:18px;
    color:#444;
}

</style>

</head>

<body>

<div class="container">

<h1>AI Generated Website</h1>

<p>${prompt}</p>

</div>

</body>

</html>
`;

    return res.status(200).json({
      success: true,
      message: "Website generated successfully.",
      code,
    });

  } catch (error) {

    console.error("Generate Website Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};