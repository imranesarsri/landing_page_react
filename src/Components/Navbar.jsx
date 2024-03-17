export default function Navbar({ Title, Content }) {


    return (
        <div className=" bg-gray-900 text-white p-5">
            <h1>{Title}</h1>
            <p>{Content}</p>
        </div>
    )
}
