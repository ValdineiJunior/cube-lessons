export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <div
          className="bg-blue-200 p-3 flex flex-row gap-x-4
        "
        >
          <div>F2L</div>
          <div>OLL</div>
          <div>PLL</div>
        </div>
        {children}
      </div>
    </>
  )
}
