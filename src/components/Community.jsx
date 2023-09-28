import React from "react";

const Community = () => {
  return (
    <div id="community" className="container mx-auto pt-12 p-4 xl:pt-20">
      <h1 className="lg:text-4xl sm:text-3xl text-2xl font-Montserrat font-extrabold text-center text-[#0dff1c] mb-4">
        Community Partnership with FOSSCU Conference
      </h1>
      <div className="">
        <p className="mb-4 font-Roboto text-md  lg:text-lg font-medium">
          What you should do as a Community Partner for FOSSCU Conference:
        </p>
        <ul className="list-disc font-Roboto pl-8 mb-4  border  border-gray-300 px-4 py-4">
          <li>
            Promotion for the FOSSCU Conference via Social Media. The copy and
            creative shall be provided by the FOSSCU team. Ideally, the logo for
            both communities should be present in the creative.
          </li>
          <li>
            Advertise the FOSSCU Conference within your own meetings and events.
            Optionally, let the attendees know about the upcoming conference and
            encourage them to attend.
          </li>
          <li>
            If you happen to have pre-conference events, have someone from
            FOSSCU talk about the upcoming conference for promotion.
          </li>
          <li>Organize meetups and events in association with the FOSSCU.</li>
          <li>
            Please do not share attendees' details with third-party
            organizations.
          </li>
        </ul>
        <p className="mb-4 font-Roboto text-lg font-medium">
          How FOSSCU Conference will support you:
        </p>
        <ul className="list-disc font-Roboto pl-8  border  border-gray-300 px-4 py-4">
          <li>
            Cross-posting about your community’s Meetups and Events. Copy and
            creative to be supplied by the community’s communications and social
            media Point of Contacts.
          </li>
          <li>
            Feature as a Community Partner in FOSSCU Conference’s creatives.
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <div className="mt-6 grid lg:grid-cols-4 grid-cols-2 gap-4  max-w-8xl px-8 m-auto">
          <div className="logo-container">
            <div className="logo-image-container">
              {" "}
              <a target="_blank" rel="noopener noreferrer">
                <img
                  className="text-gray-500 font-bold hover:bg-[#DFE4EF] p-3 h-40"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-image-container">
              {" "}
              <a target="_blank" rel="noopener noreferrer">
                <img
                  className="text-gray-500 font-bold hover:bg-[#DFE4EF] p-3 h-40"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-image-container">
              {" "}
              <a target="_blank" rel="noopener noreferrer">
                <img
                  className="text-gray-500 font-bold hover:bg-[#DFE4EF] p-3 h-40"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-image-container">
              {" "}
              <a target="_blank" rel="noopener noreferrer">
                <img
                  className="text-gray-500 font-bold hover:bg-[#DFE4EF] p-3 h-40"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
