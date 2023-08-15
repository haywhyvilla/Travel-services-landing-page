import "./globals.scss";
// import { Poppins } from "next/font/google"

// const inter = Poppins({ subsets: ["latin"] });

export const metadata = {
    title: "Travel-demo-site",
    description:
        "Travels and tours",
    icons: [
        {
            rel: "icon",
            url: "favicon.ico",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/favicon/apple-touch-icon.png",
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}