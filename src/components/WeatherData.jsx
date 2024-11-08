import Span from "./SpanValue";

const WeatherData = ({
  icon: Icon,
  iconclass,
  iconstyle = "",
  label,
  value,
  unit = "",
}) => {
  return (
    <p className="flex justify-center items-center text-nowrap h-fit">
      <Icon className={iconclass} style={iconstyle} />
      &nbsp;
      {label}:&nbsp; <Span value={`${value ?? "--"} ${unit}`} />
    </p>
  );
};

export default WeatherData;
