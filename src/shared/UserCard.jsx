
const UserCard = ({ user }) => {
    const { firstName, lastName, email, image, address, company } = user;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
            <figure><img className="w-52 pt-7 sm:pt-0 md:w-36 md:pl-2" src={image} alt="Album" /></figure>
            <div className="card-body md:pl-4 md:pr-2 md:py-5">
                <div>
                    <span className="font-bold text-lg">First Name: </span>
                    <span className="text-lg">{firstName}</span>
                </div>
                <div>
                    <span className="font-bold text-lg">Last Name: </span>
                    <span className="text-lg">{lastName}</span>
                </div>
                <div>
                    <span className="font-bold text-lg">Email: </span>
                    <span className="text-lg">{email}</span>
                </div>
                <div>
                    <span className="font-bold text-lg">Company Name: </span>
                    <span className="text-lg">{company.name}</span>
                </div>
                <div>
                    <span className="font-bold text-lg">Address: </span>
                    <span className="text-lg">{address.address},</span><br />
                    <span className="text-lg ml-20">{address.city}</span>
                </div>
            </div>
        </div>
    );
};

export default UserCard;