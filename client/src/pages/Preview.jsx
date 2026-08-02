import { useLocation } from "react-router-dom";

const Preview = () => {

  const location = useLocation();

  const project = location.state;

  if (!project) {

    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        No Preview Available
      </div>
    );

  }

  return (

    <div className="bg-black min-h-screen text-white p-5">

      <h1 className="text-3xl font-bold mb-5">
        Live Website Preview
      </h1>

      <iframe
        title="preview"
        srcDoc={project.generatedCode}
        className="w-full h-[85vh] bg-white rounded-lg"
      />

    </div>

  );

};

export default Preview;