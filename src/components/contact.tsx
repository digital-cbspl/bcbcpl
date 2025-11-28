import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section
            className="w-full py-16 bg-white"
            data-aos="fade-in"
            data-aos-duration="1000"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h3 className="text-red-600 text-lg font-semibold tracking-wide">
                        GET IN TOUCH WITH US!
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Transform your business today.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* FORM */}
                    <div
                        className="lg:col-span-2"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <form className="space-y-6">

                            {/* First Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full bg-[#f7f4ef] border border-transparent focus:border-red-600 focus:ring-0 px-5 py-4 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full bg-[#f7f4ef] border border-transparent focus:border-red-600 focus:ring-0 px-5 py-4 rounded-lg"
                                />
                            </div>

                            {/* Second Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-[#f7f4ef] border border-transparent focus:border-red-600 focus:ring-0 px-5 py-4 rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#f7f4ef] border border-transparent focus:border-red-600 focus:ring-0 px-5 py-4 rounded-lg"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                rows={6}
                                placeholder="Message"
                                className="w-full bg-[#f7f4ef] border border-transparent focus:border-red-600 focus:ring-0 px-5 py-4 rounded-lg"
                            ></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="bg-red-600 text-white font-semibold px-10 py-4 rounded-md cursor-pointer hover:bg-[#102039] transition"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                Send Massage
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div
                        className="space-y-10 pt-5"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >

                        {/* Box 1 */}
                        <div
                            className="flex items-center gap-4"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                        >
                            <div className="w-20 h-14 bg-red-600 rounded-md flex items-center justify-center">
                                <MapPin size={26} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Address</p>
                                <p className="text-gray-600">
                                    Plot No.-890, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751010
                                </p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div
                            className="flex items-center gap-4"
                            data-aos="zoom-in"
                            data-aos-duration="900"
                        >
                            <div className="w-14 h-14 bg-red-600 rounded-md flex items-center justify-center">
                                <PhoneCall size={26} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Phone</p>
                                <p className="text-gray-600">
                                    (+91) 9237976291<br />
                                    (+91) 9437017204
                                </p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div
                            className="flex items-center gap-4"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <div className="w-14 h-14 bg-red-600 rounded-md flex items-center justify-center">
                                <Mail size={26} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Write us email</p>
                                <p className="text-gray-600">ho_bcbhuyan@bcbcpl.in</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
