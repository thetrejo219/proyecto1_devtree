
export default function ErrorMessage({children}:{children:React.ReactNode}) {
  return (
    <p className="bg-red-50 text-center text-red-600 p-3 uppercase text-sm font-bold">{children}</p>
  )
}
