import { Link } from "react-router-dom";
import { Users, Target, Handshake, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const boardMembers = [
  {
    name: "Wessel Braakman",
    role: "Styreleder",
    description: "Leder NAIEs arbeid med å fremme etisk AI i Norge.",
    image: "wessel-braakman.png"
  },
  {
    name: "Alejandra Palacio Perez",
    role: "Nestleder",
    description: "Bidrar med ekspertise innen AI-etikk og teknologi.",
    image: "alejandra-palacio-perez.png"
  },
  {
    name: "Teresa Dalen Herland",
    role: "Styremedlem",
    description: "Bidrar med innsikt innen AI-forskning og bias-analyse.",
    image: "teresa-dalen-herland.png"
  },
  {
    name: "Kathinka Theodore Aakenes Vik",
    role: "Styremedlem",
    description: "Bidrar med innsikt innen AI-forskning og bias-analyse.",
    image: "kathinka-theodore-aakenes-vik.png"
  }
];

export default function OmOss() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D148A] to-[#5A23C9] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Om oss</h1>
            <p className="text-lg text-purple-200 leading-relaxed">
              NAIE (Norsk AI-Etikkforening) er en uavhengig, ideell forening som arbeider for etisk og ansvarlig bruk av kunstig intelligens i Norge.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D148A] mb-6">Vår misjon</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NAIE ble grunnlagt med en visjon om å gjøre AI mer rettferdig, transparent og bærekraftig. Vi tror at kunstig intelligens har enormt potensial til å forbedre samfunnet, men bare hvis den utvikles og brukes på en ansvarlig måte.
                </p>
                <p>
                  Vi leverer statistikk og innsikt om tre hovedområder: Bias i AI-systemer, Ansvarlig AI-utvikling, og Bærekraft i AI-teknologi. Gjennom forskning, benchmarking og samarbeid med organisasjoner bidrar vi til en mer etisk AI-fremtid.
                </p>
                <p>
                  NAIE samarbeider med Likestillings- og diskrimineringsombudet (LDO) og andre viktige aktører for å sikre at AI-systemer som brukes i Norge er rettferdige og ikke-diskriminerende.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Target, title: "Visjon", desc: "En fremtid der AI er rettferdig, transparent og bærekraftig for alle." },
                { icon: Handshake, title: "Samarbeid", desc: "Vi jobber tett med LDO, forskningsinstitusjoner og næringsliv." },
                { icon: Users, title: "Fellesskap", desc: "Vi bygger et nettverk av eksperter og engasjerte aktører innen AI-etikk." },
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
            <h2 className="text-3xl font-bold text-[#3D148A] mb-4">Styret</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NAIEs styre består av engasjerte fagpersoner med ekspertise innen AI, etikk og teknologi.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-50 h-50 mx-auto mb-4">
				    <img
				  	src={`/board/${member.image}`}
				  	alt={member.name}
				  	className="w-full h-full object-cover rounded-full"
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
                  <h2 className="text-3xl font-bold mb-4">Organisasjonsinformasjon</h2>
                  <ul className="space-y-3 text-purple-200">
                    <li><span className="text-white font-medium">Navn:</span> Norsk AI-Etikkforening (NAIE)</li>
                    <li><span className="text-white font-medium">Type:</span> Uavhengig, ideell forening</li>
                    <li><span className="text-white font-medium">Org.nr:</span> 932 552 728</li>
                    <li><span className="text-white font-medium">Lisens:</span> CC BY 4.0</li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <Button asChild size="lg" className="bg-[#FF7A1A] hover:bg-[#E85E00] text-white font-semibold rounded-lg">
                    <Link to="/kontakt">
                      Kontakt oss <ArrowRight className="ml-2 w-4 h-4" />
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