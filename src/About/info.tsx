import { Users, Eye, Leaf, Briefcase, Crown, Shield } from "lucide-react";

export default function InfoSection() {
  return (
    <section
      className="w-full bg-gray-100 py-16 px-6 md:px-20"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <Users size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">WHO WE ARE</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From small renovations to complex billion dollar projects.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Eye size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">VISION</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are passionately leading the way in digitizing the construction industry.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <Leaf size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">SUSTAINABILITY</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our holistic approach addresses partners, people, projects, practices & places.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <Briefcase size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">CAREERS</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We choose to include. People from every background are our greatest asset.
          </p>
        </div>

        {/* CARD 5 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Crown size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">LEADERSHIP</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Meet our leadership team who guides strategic operations across our company.
          </p>
        </div>

        {/* CARD 6 */}
        <div
          className="bg-white shadow-md rounded-xl p-10 text-center hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <Shield size={40} className="mx-auto mb-4 text-[#d80c18]" />
          <h3 className="text-lg font-semibold mb-3">SAFETY</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Creating a safe and healthy work.
          </p>
        </div>

      </div>
    </section>
  );
}
