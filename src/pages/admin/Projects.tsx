import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash2, Edit } from "lucide-react";

export default function Projects() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Cricket World Cup Poster", category: "Graphic Design", status: "Published" },
        { id: 2, title: "Social Media Marketing", category: "Marketing", status: "Draft" },
        { id: 3, title: "Independence Day", category: "Graphic Design", status: "Published" },
    ]);

    const [newProject, setNewProject] = useState({ title: "", category: "" });
    const [open, setOpen] = useState(false);

    const handleAdd = () => {
        if (!newProject.title || !newProject.category) {
            toast.error("Please fill in all fields");
            return;
        }
        setProjects([...projects, { id: projects.length + 1, ...newProject, status: "Draft" }]);
        setOpen(false);
        setNewProject({ title: "", category: "" });
        toast.success("Project added successfully");
    };

    const handleDelete = (id: number) => {
        setProjects(projects.filter(p => p.id !== id));
        toast.success("Project deleted");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Plus className="w-4 h-4" /> Add Project
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Project</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label>Title</Label>
                                <Input
                                    value={newProject.title}
                                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    placeholder="e.g. Website Redesign"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Category</Label>
                                <Input
                                    value={newProject.category}
                                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                                    placeholder="e.g. Web Development"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleAdd}>Save Project</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="rounded-md border bg-white dark:bg-gray-800 shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-medium">{project.title}</TableCell>
                                <TableCell>{project.category}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs ${project.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                        {project.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(project.id)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
