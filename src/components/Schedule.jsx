import React from "react";

const Schedule = () => {
  return (
    <div className="pt-8 ">
      <section id="schedule" className="bg-[#000300]  antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight text-[#0dff1c] tracking-tight">
              Event Schedule <span className="font-semibold"> (Hall 1) </span>
            </h2>
          </div>
          <div className="flow-root max-w-3xl mx-auto mt-8">
            <div className="-my-4 divide-y divide-gray-200">
              <div className="schedule-list-item">
                <p className="schedule-time">11:00 AM - 11:30 AM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Opening remarks</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">11:30 AM - 12:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Panel Discussion on Topic Q</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">12:00 PM - 12:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Workshop on Topic R</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">12:30 PM - 01:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Lunch Break</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">01:00 PM - 01:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Keynote Address</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">01:30 PM - 02:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Panel Discussion on Emerging Technologies</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">02:00 PM - 02:30 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Updates from the Open Source Multimedia community</a>
                </h3>
              </div>

              <div className="schedule-list-item">
                <p className="schedule-time">02:30 PM - 03:00 PM</p>
                <h3 className="schedule-text">
                  <a className="cursor-grab">Keynote Speech by Speaker B</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
