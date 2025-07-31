import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { Dashboard } from "@/pages/dashboard";
import { NotFound } from "@/pages/not-found";
import { AppLayout } from "@/components/layout/AppLayout";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <AppLayout>
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AppLayout>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
