export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>
        <div className="grid grid-cols-6 min-h-screen">
            <h1 className="col-span-1 bg-zinc-200 ">Sidebar</h1>
            {children}
        </div>
    </>
}