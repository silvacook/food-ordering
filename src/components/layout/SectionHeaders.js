export default function SectionHeaders({subHeader, mainHeader}) {
    return (
        <>
            <h3 className="text-center uppercase text-gray-500 font-semibold
            leading-4">
            {subHeader}
            </h3>
            <h2 className="text-center text-[#9e473b] font-semibold text-4xl italic">
            {mainHeader}
            </h2>
        </>
    )
}