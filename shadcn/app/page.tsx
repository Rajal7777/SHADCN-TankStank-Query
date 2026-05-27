import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";


export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2 rounded-lg">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4">

      </div>
      <div className="bg-primary-foreground p-4">Test</div>
      <div className="bg-primary-foreground p-4">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"> <AppAreaChart /></div>
      <div className="bg-primary-foreground p-4 ">Test</div>
    </div>
  );
}
