import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="max-h-150 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-lg max-h-165 ">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 max-h-165">
        <CardList title="popularcontent" />
      </div>
      <div className="bg-primary-foreground p-4 max-h-165">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 "><TodoList /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
        {" "}
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 ">
        {" "}
        <CardList title="latestTransactions" />
      </div>
    </div>
  );
}
