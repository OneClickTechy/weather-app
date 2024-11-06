import Span from "./SpanValue";

const WeatherData = ({ icon: Icon, iconclass, label, value, unit = "" }) => {
  return (
    <p className="flex justify-center items-center">
      <Icon className={iconclass} />
      {label}: <Span value={`${value ?? "--"} ${unit}`} />
    </p>
  );
};

export default WeatherData;
