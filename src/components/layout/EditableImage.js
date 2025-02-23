import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
    async function handleFileChange(ev) {
        const files = ev.target.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set('file', files[0]);

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                if (response.ok) {
                    return response.json().then(link => {
                        setLink(link);
                    });
                }
                throw new Error("Something went wrong");
            });

            await toast.promise(uploadPromise, {
                loading: "Uploading...",
                success: "Upload complete",
                error: "Upload error",
            });
        }
    }

    return (
        <>
            {link && typeof link === 'string' && link.trim() !== "" ? ( // Ensure link is a valid non-empty string
                <Image
                    className="rounded-lg w-full h-full mb-1"
                    src={link}
                    width={250}
                    height={250}
                    alt="avatar" // Use a descriptive alt text
                />
            ) : (
                <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
                    No image
                </div>
            )}
            <label>
                <input type="file" className="hidden" onChange={handleFileChange} />
                <span className="block border-gray-300 border rounded-lg text-center p-2 cursor-pointer">
                    Edit Image
                </span>
            </label>
        </>
    );
}
