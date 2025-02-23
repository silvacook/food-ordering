"use client";

import { useState, useEffect } from "react";
import EditableImage from "./EditableImage";
import { useProfile } from "../UseProfile";
import AddressInputs from "@/components/layout/AddressInputs";

export default function UserForm({user = {}, onSave}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data:loggedInUserData} = useProfile();

    function handleAddressChange(propName, value) {
        if (propName === "phone") setPhone(value);
        if (propName === "streetAddress") setStreetAddress(value);
        if (propName === "postalCode") setPostalCode(value);
        if (propName === "city") setCity(value);
        if (propName === "country") setCountry(value);
    }

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setImage(user.image || "");
            setPhone(user.phone || "");
            setStreetAddress(user.streetAddress || "");
            setPostalCode(user.postalCode || "");
            setCity(user.city || "");
            setCountry(user.country || "");
        }
    }, [user]);

    function handleSubmit(ev) {
        ev.preventDefault();
        const data = {
            name,
            image, 
            phone, 
            streetAddress, 
            city, 
            country, 
            postalCode,
            admin
        };
        onSave(ev, data);
    }

    return (
        <div className="md:flex gap-4">
            <div>
                <div className="p-2 rounded-lg relative max-w-[120px]">
                    <EditableImage 
                        link={image} 
                        setLink={setImage}/>
                </div>
            </div>
            <form 
                className="grow"
                onSubmit={handleSubmit}>
                <label>First and last name</label>
                <input 
                    type="text" 
                    placeholder="First and last name"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                />
                <label>Email</label>
                <input 
                    type="email" 
                    disabled={true} 
                    value={user?.email || ""}
                    placeholder="email" 
                />
               <AddressInputs 
                    addressProps={{
                        phone,
                        streetAddress,
                        postalCode,
                        city,
                        country,
                    }}
                    setAddressProp={handleAddressChange}
               />
                {loggedInUserData.admin && (
                    <div>
                        <label 
                            className="p-2 inline-flex items-center gap-2 block mb-2" 
                            htmlFor="adminCb">
                        <input 
                            id="adminCb" 
                            type="checkbox" 
                            className=""
                            value={"1"}
                            checked={admin}
                            onChange={ev => setAdmin(ev.target.checked)}
                        />
                            <span>Admin</span>
                        </label>
                    </div>
                )}
                <button type="submit">Save</button>
            </form>
        </div>
    );
}