import { useGeoContext } from "../../../context/geoContext";

const UnitToggler = () => {
  const { handleUnit } = useGeoContext()
  return (
    <div className="flex gap-2">
      <button className="bg-secondary text-text-primary border border-shadow p-1 rounded-2xl" onClick={() => handleUnit("Metric")}>Metric: °C, m/s</button>
      <button className="bg-secondary text-text-primary border border-shadow p-1 rounded-2xl" onClick={() => handleUnit("Imperial")}>Imperial: °F, mph</button>
    </div>
  );
};

export default UnitToggler;
