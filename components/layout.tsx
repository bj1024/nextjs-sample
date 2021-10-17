
export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      {/* <div>header</div> */}
      <main className="form-signin">
        {children}
      </main>
      {/* <div>hooter</div> */}
    </>
  )
}
