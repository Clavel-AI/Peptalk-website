import { Globe, Users, Shield, Zap, Heart, Award, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "XYZ",
      role: "CEO & Co-Founder",
      bio: "Former Google Translate engineer with 10+ years in AI and natural language processing. Passionate about breaking down language barriers.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "ABC",
      role: "CTO & Co-Founder",
      bio: "Ex-WhatsApp security architect. Expert in end-to-end encryption and scalable messaging infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
     {
      name: "MOP",
      role: "CTO & Co-Founder",
      bio: "Ex-WhatsApp security architect. Expert in end-to-end encryption and scalable messaging infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    }
  ]

  const values = [
    {
      icon: Globe,
      title: "Global Connection",
      description: "We believe language should never be a barrier to human connection and understanding.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are yours alone. We build security and privacy into everything we do.",
    },
    {
      icon: Users,
      title: "Inclusive Communication",
      description: "Everyone deserves to be heard and understood, regardless of the language they speak.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in real-time translation technology.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Founded by Sarah and Michael with a vision to break down language barriers in digital communication.",
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Released PepTalk 1.0 with support for 25 languages and end-to-end encryption.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Reached 1 million users across 50 countries and expanded to 75 supported languages.",
    },
    {
      year: "2023",
      title: "AI Breakthrough",
      description: "Launched advanced AI translation with 95% accuracy and real-time voice translation.",
    },
    {
      year: "2024",
      title: "10M+ Users",
      description: "Celebrated 10 million users worldwide and launched PepTalk 3.0 with enhanced features.",
    },
  ]

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "100+", label: "Languages Supported" },
    { number: "50+", label: "Countries" },
    { number: "1B+", label: "Messages Translated" },
  ]

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, commodi!</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            At PepTalk, we're on a mission to break down language barriers and create a world where everyone can
            communicate freely, regardless of the language they speak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
              Our Story
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3971C0] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad quasi necessitatibus dolore facilis culpa nostrum nesciunt voluptate. Natus, suscipit? Necessitatibus officia deserunt cum? Qui sapiente natus quod ea amet.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cupiditate maxime minima et dicta obcaecati voluptatum nobis error dignissimos! Quos?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, molestiae.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita. Lorem ipsum dolor sit.
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <Heart className="w-16 h-16 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To eliminate language barriers in digital communication and create a world where everyone can connect,
                  collaborate, and understand each other effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Founder's</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts from around the world is united by a shared passion for connecting people
              through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <Badge className="bg-[#3971C0] text-white mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Best Communication App 2023</h3>
                <p className="text-gray-600 text-sm">TechCrunch Awards</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovation in AI Translation</h3>
                <p className="text-gray-600 text-sm">Global Tech Summit 2023</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Top 10 Startups to Watch</h3>
                <p className="text-gray-600 text-sm">Forbes 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <MapPin className="w-8 h-8 text-[#3971C0] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                  <p className="text-gray-600 text-sm">
                    121 Gemini, Irvine, CA 92618, USA
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Mail className="w-8 h-8 text-[#3971C0] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm">
                    Support: support@peptalk.com
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Phone className="w-8 h-8 text-[#3971C0] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm">
                    US: +1 (213) 803 1017
                    <br />
                    Available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3971C0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to be part of a world without language barriers? Download PepTalk today and start connecting with
            people from around the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
              Download PepTalk
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
