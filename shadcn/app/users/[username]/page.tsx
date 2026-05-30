'use client';

import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

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

      <div className="mt-4  flex flex-col xl:flex-row  gap-8 border border-white">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badge */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h2 className="text-xl font-semibold">User Badges</h2>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border borer-blue-500/30 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold mb-2">Verified user</h2>
                  <p className="font-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* Information */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">User Information</h2>
              <EditUser />
            </div>
            <div className="flex flex-col mt-4">
              <Progress value={75} />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold">Username:</span>
              <span>john.doe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <span>john.doe@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Phone:</span>
              <span>+1 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Location:</span>
              <span>New York, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Role:</span>
              <Badge>Admin</Badge>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* Card list */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6 ">
          {/* User Card container */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* Chart */}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
