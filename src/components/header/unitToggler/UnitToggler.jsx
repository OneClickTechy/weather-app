import { useGeoContext } from "../../../context/geoContext";

const UnitToggler = () => {
  const { handleUnit } = useGeoContext()
  return (
    <div className="flex gap-2 lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-[-1]">
      <button className="bg-btn-secondary-bg text-btn-secondary-text border border-shadow p-1 rounded-2xl" onClick={() => handleUnit("Metric")}>Metric: °C, m/s</button>
      <button className="bg-btn-secondary-bg text-btn-secondary-text border border-shadow p-1 rounded-2xl" onClick={() => handleUnit("Imperial")}>Imperial: °F, mph</button>
    </div>
  );
};

export default UnitToggler;
