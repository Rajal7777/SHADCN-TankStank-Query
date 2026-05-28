import CardList from "@/components/CardList";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">DashBoard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Pine Apple</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left */}
            <div className="w-full xl:w-1/3 space-y-6">
            {/* User Badge */}
             <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
             {/* Information */}
             <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
             {/* Card list */}
             <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title="Recent Transactions" />
             </div>
            </div>
            </div>

            {/* Right */}
            <div className="w-full xl:w-2/3 space-y-6 mt-4">
            {/* User Card container */}
            <div className="bg-primary-foreground p-4 rounded-;g">User Card</div>
            {/* Chart */}
            <div className="bg-primary-foreground p-4 rounded-;g">Chart</div>
            </div>
        </div>
    );
};

export default SingleUserPage;