export default function FeaturedLawyers() {
    const lawyers = [
        {
            image: "https://i.ibb.co.com/bMmg6VH2/3images.jpg",
            name: "John Smith",
            role: "Corporate Lawyer",
            rating: 4.8,
        },
        {
            image: "https://i.ibb.co.com/MyhGyRyy/4-images.jpg",
            name: "Sarah Johnson",
            role: "Family Lawyer",
            rating: 4.7,
        },
        {
            image: "https://i.ibb.co.com/JWT7K6tH/2-images.jpg",
            name: "Michael Brown",
            role: "Criminal Lawyer",
            rating: 4.9,
        },
        {
            image: "https://i.ibb.co.com/j9ZvBGSJ/5-about-1-right.jpg",
            name: "Emily Davis",
            role: "Civil Lawyer",
            rating: 4.6,
        },
    ];

    return (
        <div className="py-20 bg-gray-50">

            {/* TITLE */}
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
                Featured Lawyers
            </h2>

            {/* GRID */}
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {lawyers.map((lawyer, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <img
                            src={lawyer.image}
                            alt={lawyer.name}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"/>
                            <div className="p-5 text-center"/>

                            {/* NAME */}

                        <h3 className="text-xl font-bold text-gray-800 text-center">
                            {lawyer.name}
                        </h3>

                        {/* ROLE */}
                        <p className="text-gray-500 mt-2 text-center">
                            {lawyer.role}
                        </p>

                        {/* RATING */}
                        <p className="mt-3 text-yellow-500 font-semibold text-center">
                            ⭐ {lawyer.rating}
                        </p>

                        {/* BUTTON */}
                        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105">
                            View Profile
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
}