import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Users, FileText, MessageSquare } from "lucide-react";
import { useSite } from "../../context/SiteContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

const data = [
    { name: 'Mon', views: 400 },
    { name: 'Tue', views: 300 },
    { name: 'Wed', views: 500 },
    { name: 'Thu', views: 280 },
    { name: 'Fri', views: 590 },
    { name: 'Sat', views: 320 },
    { name: 'Sun', views: 450 },
];

export default function Dashboard() {
    const { messages } = useSite();

    const data = [
        { name: 'Mon', views: 400 },
        { name: 'Tue', views: 300 },
        { name: 'Wed', views: 500 },
        { name: 'Thu', views: 280 },
        { name: 'Fri', views: 590 },
        { name: 'Sat', views: 320 },
        { name: 'Sun', views: 450 },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,450</div>
                        <p className="text-xs text-muted-foreground">+18% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{messages.length}</div>
                        <p className="text-xs text-muted-foreground">Recent messages</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[350px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Recent Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {messages.length === 0 ? (
                            <p className="text-muted-foreground text-center py-8">No messages yet.</p>
                        ) : (
                            <div className="overflow-auto max-h-[350px]">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Service</TableHead>
                                            <TableHead className="text-right">Date</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {messages.slice(0, 5).map((msg) => (
                                            <TableRow key={msg.id}>
                                                <TableCell className="font-medium">
                                                    <div>{msg.name}</div>
                                                    <div className="text-xs text-muted-foreground">{msg.email}</div>
                                                </TableCell>
                                                <TableCell>{msg.service}</TableCell>
                                                <TableCell className="text-right text-xs">
                                                    {format(new Date(msg.timestamp), 'MMM d, h:mm a')}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
