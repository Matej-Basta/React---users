

export function User({name, email, picture, setSelected, selected, ...options}) {

    return (
        <div className="users">
            {/* when clicked, it becomes the "selected state" in the parent  */}
            <p onClick={() => {setSelected(name)}}><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <img src={picture} alt={"picture of " + name} />

            {/* this gets displayed only if it is the "selected state" of the parent  */}
            {selected === name &&
            <>
                <p><strong>Age:</strong> {options.age}</p>
                <p><strong>Balance:</strong> {options.balance}</p>
                <p><strong>Company:</strong> {options.company}</p>
                <p><strong>Gender:</strong> {options.gender}</p>
            </>
            }
        </div>
    );
}