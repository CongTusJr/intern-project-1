// CalendarComponent.tsx

import React from "react";
import { Calendar, theme } from "antd";
import { Dayjs } from "dayjs";
import { CalendarProps } from "../../../interface";

const CalendarComponent: React.FC<CalendarProps> = ({
  onSelect,
  disabledDate,
}) => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    position: "absolute",
    top: -330,
    left: -35,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const handlePanelChange = (value: Dayjs) => {
    onSelect(value);
  };

  // Function to disable dates before today
  const defaultDisabledDate = (current: Dayjs) => {
    return current.startOf("day").isBefore(new Date().setHours(0, 0, 0, 0));
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        onSelect={handlePanelChange}
        disabledDate={disabledDate ? disabledDate : defaultDisabledDate}
      />
    </div>
  );
};

export default CalendarComponent;
