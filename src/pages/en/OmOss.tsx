import { Link } from "react-router-dom";
import { Users, Target, Handshake, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const boardMembers = [
  {
    name: "Wessel Braakman",
    role: "Chair",
    description: "Leads NAIE’s work to promote ethical AI in Norway.",
    image: "wessel-braakman.png"
  },
  {
    name: "Alejandra Palacio Perez",
    role: "Vice Chair",
    description: "Leads NAIE’s work to promote ethical AI in Norway.",
    image: "alejandra-palacio-perez.png"
  },
  {
    name: "Teresa Dalen Herland",
    role: "Board Member",
    description: "Contributes insight in AI research and bias analysis.",
    image: "teresa-dalen-herland.png"
  },
  {
    name: "Kathinka Theodore Aakenes Vik",
    role: "Board Member",
    description: "Contributes insight in AI research and bias analysis.",
    image: "kathinka-theodore-aakenes-vik.png"
  }
];

export default function OmOss() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE (Norwegian AI Ethics Association) is an independent, non-profit organization working to promote the ethical and responsible use of artificial intelligence in Norway.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D148A] mb-6">Our mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NAIE was founded with a vision to make AI more fair, transparent, and sustainable. We believe that artificial intelligence has enormous potential to improve society, but only if it is developed and used responsibly.
                </p>
                <p>
                  We provide statistics and insights in three main areas: Bias in AI systems, Responsible AI development, and Sustainability in AI technology. Through research, benchmarking, and collaboration with organizations, we contribute to a more ethical AI future.
                </p>
                <p>
                  NAIE collaborates with the Equality and Anti-Discrimination Ombud (LDO) and other key stakeholders to ensure that AI systems used in Norway are fair and non-discriminatory.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Target, title: "Vision", desc: "A future where AI is fair, transparent, and sustainable for everyone." },
                { icon: Handshake, title: "Collaboration", desc: "We work closely with LDO, research institutions, and industry." },
                { icon: Users, title: "Community", desc: "We build a network of experts and engaged stakeholders within AI ethics." },
              ].map((item) => (
                <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ECE7FF] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#5A23C9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3D148A] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D148A] mb-4">Board</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NAIE’s board consists of engaged professionals with expertise in AI, ethics, and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}board/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#3D148A]">{member.name}</h3>
                  <p className="text-[#FF7A1A] text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-3">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Organization information</h2>
                  <ul className="space-y-3 text-purple-200">
                    <li><span className="text-white font-medium">Name:</span> Norwegian AI Ethics Association (NAIE)</li>
                    <li><span className="text-white font-medium">Type:</span> Independent, non-profit organization</li>
                    <li><span className="text-white font-medium">Org. no.:</span> 932 552 728</li>
                    <li><span className="text-white font-medium">License:</span> CC BY 4.0</li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                    <Link to="/en/kontakt">
                      Contact us <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}