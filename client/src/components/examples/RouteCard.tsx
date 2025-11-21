import { RouteCard } from "../RouteCard";

export default function RouteCardExample() {
  return (
    <div className="p-8 max-w-md">
      <RouteCard
        from="Chennai"
        to="Pondicherry"
        duration="2.5 hrs"
        startingPrice="₹1,800"
      />
    </div>
  );
}
