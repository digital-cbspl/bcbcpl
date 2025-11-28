"use client";

export default function CrewSection() {
    const groups = [
        {
            title: "Project Team",
            members: ["GM-Operation", "Project Manager", "Sr. Planning Engineer", "Sr. Electrical Engineer", "Sr. Safety Officer"],
        },
        {
            title: "Finance & Accounts Team",
            members: ["GM-Finance", "Sr. Accounts Officer", "Accounts Officer", "Jr. Accountant"],
        },
        {
            title: "Tendering Team",
            members: [ "Planning Engineer", "Planning & Billing Engineer"],
        },
        {
            title: "Procurement Team",
            members: ["GM-Procurement", "Sr. Procurement Officer", "Procurement Officer", "Store Manager"],
        },
        {
            title: "HR & Admin Team",
            members: ["Sr. Human Resource", "HR Executive", "Site HR"],
        },
    ];

    return (
        <section className="w-full py-20 px-6 lg:px-20 bg-white">
            {/* Animated Heading */}
            <h2
                className="text-4xl font-extrabold text-center text-[#101828] mb-12"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
            >
                OUR CREW
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {groups.map((group, index) => (
                    <div
                        key={index}
                        className="bg-[#f8f8f8] rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        data-aos-duration="900"
                        data-aos-easing="ease-out-cubic"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {/* Top Red Bar */}
                        <div
                            className="bg-[#d80c18] text-white text-center py-3 rounded-t-xl font-bold text-lg tracking-wide"
                            data-aos="slide-down"
                            data-aos-delay={index * 150}
                        >
                            {group.title}
                        </div>

                        {/* Member List */}
                        <div className="p-6">
                            {group.members.map((m, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 mb-3"
                                    data-aos="fade-left"
                                    data-aos-delay={i * 120}
                                    data-aos-duration="700"
                                    data-aos-easing="ease-out"
                                >
                                    <div className="text-[#d80c18] text-xl mt-1">✔</div>
                                    <p className="text-gray-800 font-medium text-[15px]">
                                        {m}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
