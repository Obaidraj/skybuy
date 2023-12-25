

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  
    return (
      <>
        <div className="flex-1 border h-full">{children}</div>
      </>
    );
  }
  