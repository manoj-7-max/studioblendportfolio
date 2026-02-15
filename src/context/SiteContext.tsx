import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface Message {
    id: string;
    name: string;
    email: string;
    mobile: string;
    service: string;
    message: string;
    timestamp: string;
    read: boolean;
}

interface SiteContent {
    heroTitle: string;
    heroSubtitle: string;
    aboutTitle: string;
    aboutText: string;
    contactEmail: string;
    contactPhone: string;
    // Add more content keys as needed
}

interface SiteContextType {
    messages: Message[];
    addMessage: (msg: Omit<Message, "id" | "timestamp" | "read">) => void;
    deleteMessage: (id: string) => void;
    markAsRead: (id: string) => void;
    siteContent: SiteContent;
    updateSiteContent: (content: Partial<SiteContent>) => void;
    resetContent: () => void;
}

const defaultContent: SiteContent = {
    const defaultContent: SiteContent = {
        heroTitle: "We Bring Your Brand to Life",
        heroSubtitle: "Transform your digital presence with stunning videos, compelling graphics, and strategic social media marketing that drives real results.",
        aboutTitle: "studioblend. Bold Results.",
        aboutText: "We're a team of passionate digital creators who believe that every brand has a unique story to tell. Our mission is to help you tell that story in the most compelling and engaging way possible.\n\nFrom eye-catching videos to scroll-stopping social content, we combine creativity with data-driven strategy to deliver measurable results that matter.",
        contactEmail: "studioblend0@gmail.com",
        contactPhone: "+91 8610511096",
    };
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [siteContent, setSiteContent] = useState<SiteContent>(defaultContent);

    // Load from localStorage on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("site_messages");
        if (savedMessages) {
            try {
                setMessages(JSON.parse(savedMessages));
            } catch (e) {
                console.error("Failed to parse messages", e);
            }
        }

        const savedContent = localStorage.getItem("site_content");
        if (savedContent) {
            try {
                setSiteContent({ ...defaultContent, ...JSON.parse(savedContent) });
            } catch (e) {
                console.error("Failed to parse content", e);
            }
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("site_messages", JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem("site_content", JSON.stringify(siteContent));
    }, [siteContent]);

    const addMessage = (msg: Omit<Message, "id" | "timestamp" | "read">) => {
        const newMessage: Message = {
            ...msg,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            read: false,
        };
        setMessages((prev) => [newMessage, ...prev]);
        // Simulate notification if admin is viewing
        // In a real app, this would be a websocket/push notification
    };

    const deleteMessage = (id: string) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
        toast.success("Message deleted");
    };

    const markAsRead = (id: string) => {
        setMessages((prev) =>
            prev.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
        );
    };

    const updateSiteContent = (content: Partial<SiteContent>) => {
        setSiteContent((prev) => ({ ...prev, ...content }));
        toast.success("Site content updated successfully");
    };

    const resetContent = () => {
        setSiteContent(defaultContent);
        toast.success("Content reset to defaults");
    };

    return (
        <SiteContext.Provider
            value={{
                messages,
                addMessage,
                deleteMessage,
                markAsRead,
                siteContent,
                updateSiteContent,
                resetContent,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
};

export const useSite = () => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error("useSite must be used within a SiteProvider");
    }
    return context;
};
