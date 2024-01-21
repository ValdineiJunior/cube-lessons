export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="grid grid-cols-6 min-h-screen">
        <div
          className="col-span-1 bg-blue-200 p-6
        "
        >
          <div>F2L - 41 cases</div>
          <div>OLL - 57 cases</div>
          <div>PLL - 21 cases</div>
        </div>
        {children}
      </div>
    </>
  )
}
