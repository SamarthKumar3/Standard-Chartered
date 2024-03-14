import React from "react";

const page = () => {
  return (
    <div>
      <h1>Chatbot</h1>
      <div
        id="tars-fullpage-container"
        className="tars-fullpage-container-class"
      >
        <iframe
          id="tars-fullpage"
          width="100%"
          height="100%"
          allow="geolocation; microphone; camera; midi; encrypted-media;"
          src="https://chatbot.hellotars.com/conv/lh-bkU/"
        ></iframe>
      </div>
      <script src="https://tars-file-upload.s3.amazonaws.com/bulb/js/fullpage.js"></script>
    </div>
  );
};

export default page;
