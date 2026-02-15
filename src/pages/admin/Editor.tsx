import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSite } from "../../context/SiteContext";
import { Save, RotateCcw } from "lucide-react";

export default function Editor() {
    const { siteContent, updateSiteContent, resetContent } = useSite();
    const [formData, setFormData] = useState(siteContent);

    // Sync local state with context when context changes
    useEffect(() => {
        setFormData(siteContent);
    }, [siteContent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        updateSiteContent(formData);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Content Editor</h2>
                    <p className="text-muted-foreground">Customize text and details across your website.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={resetContent} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> Reset to Defaults
                    </Button>
                    <Button onClick={handleSave} className="gap-2">
                        <Save className="w-4 h-4" /> Save Changes
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="hero" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="hero">Hero Section</TabsTrigger>
                    <TabsTrigger value="about">About Section</TabsTrigger>
                    <TabsTrigger value="contact">Contact Info</TabsTrigger>
                </TabsList>

                <TabsContent value="hero">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hero Section</CardTitle>
                            <CardDescription>
                                The first thing visitors see on your home page.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="heroTitle">Main Heading</Label>
                                <Input
                                    id="heroTitle"
                                    name="heroTitle"
                                    value={formData.heroTitle}
                                    onChange={handleChange}
                                    placeholder="e.g. Unlock Your Brand's Potential"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="heroSubtitle">Subtitle</Label>
                                <Textarea
                                    id="heroSubtitle"
                                    name="heroSubtitle"
                                    value={formData.heroSubtitle}
                                    onChange={handleChange}
                                    placeholder="e.g. We help businesses grow..."
                                    rows={3}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="about">
                    <Card>
                        <CardHeader>
                            <CardTitle>About Section</CardTitle>
                            <CardDescription>
                                Tell your story and mission.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="aboutTitle">Section Title</Label>
                                <Input
                                    id="aboutTitle"
                                    name="aboutTitle"
                                    value={formData.aboutTitle}
                                    onChange={handleChange}
                                    placeholder="e.g. About Us"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="aboutText">Main Description</Label>
                                <Textarea
                                    id="aboutText"
                                    name="aboutText"
                                    value={formData.aboutText}
                                    onChange={handleChange}
                                    placeholder="e.g. We are a creative agency..."
                                    rows={6}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="contact">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>
                                Used in the contact form and footer.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactEmail">Email Address</Label>
                                <Input
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    placeholder="e.g. contact@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactPhone">Phone Number</Label>
                                <Input
                                    id="contactPhone"
                                    name="contactPhone"
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    placeholder="e.g. +91 1234567890"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
