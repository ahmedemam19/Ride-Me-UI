import { useState, useEffect } from "react";
import format from "date-fns/format";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PickDayMonth() {
  const [date, setDate] = useState(null);

  const [showDate, setShowDate] = useState(false);

  const [showMonth, setShowMonth] = useState(true);

  const handleDateChange = (date) => {
    setDate(date);
    setShowDate(true);
    setShowMonth(false);
  };

  // special code for showing only months ----------->
  const [month, setMonth] = useState(null);

  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };

  const handleMonthChange = (date) => {
    setMonth(date);
    setShowDate(false);
    setShowMonth(true);
  };
  // end of month code ----------->

  return (
    <div className="container-sm rounded border border-3 shadow mt-4 py-3">
      <div className="row justify-content-center">
        {/* <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Calculate total income by Day</button>
          <button type="button" class="btn btn-secondary">Calculate total income by Month</button>
        </div> */}

        <div className="row gap-5 align-items-center justify-content-center">
          <h2 className="display-3 text-center">Calculate total income</h2>

          <div className="col-4">
            <div className="row">
              <button type="button" className="btn btn-outline-primary">
                Calculate total income by Day
              </button>
            </div>
            <div className="row align-items-center justify-content-center">
              <DatePicker
                showIcon
                selected={date}
                onChange={handleDateChange}
                dateFormat="dd-MM-YYYY"
                inline
              />
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <button type="button" className="btn btn-outline-primary">
                Calculate total income by Month
              </button>
            </div>
            <div className="row align-items-center justify-content-center">
              <DatePicker
                showIcon
                selected={month}
                onChange={handleMonthChange}
                renderMonthContent={renderMonthContent}
                showMonthYearPicker
                dateFormat="MM-yyyy"
                inline
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <p className=" display-6 text-center">
            Total income for {showDate && date && format(date, "dd-MM-yyyy")}
            {showMonth && month && format(month, "MMMM yyyy")}
          </p>

          <p className="lead display-4 text-center fw-bold">$$$$$</p>
        </div>
      </div>
    </div>
  );
}

export default PickDayMonth;
