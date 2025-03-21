import BackToTop from "./backToTop";
import HomePage from "./01-main-demo/page";
import React from "react";

const WhatsAppChat = () => {
    return (
        <a
            href="https://wa.me/918765587221"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#25D366",
                color: "white",
                padding: "12px 18px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
            }}
        >
            💬 Chat with us
        </a>
    );
};

export const metadata = {
    title: "Web Development Company in Jodhpur",
    description: "Web Development Company in Jodhpur",
};

export default function Home() {
    return (
        <main>
            <HomePage />
            <BackToTop />
            <WhatsAppChat />
        </main>
    );
}
