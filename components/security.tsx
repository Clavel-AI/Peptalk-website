"use client"

import { Shield, Lock, Eye, Users, Smartphone, AlertTriangle, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3971C0] to-[#2c5aa0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-5xl font-bold mb-6">We Keep Your Conversations Private and Secure</h1>
          <p className="text-xl md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            PepTalk protects your messages and personal data with strong encryption and secure systems built into every chat.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
            Explore Our Security Practices
          </Button>
        </div>
      </section>

      {/* End-to-End Encryption */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Lock className="w-12 h-12 text-[#3971C0] mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-gray-900">End-to-End Encryption</h2>
              <p className="text-lg text-gray-600 mb-6">
All messages, calls, and shared media on PepTalk are protected with end-to-end encryption. This ensures that only the intended participants can read or listen to the content. Translations are processed securely, and your messages remain private throughout the conversation. PepTalk does not have access to any part of your communication.

              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Messages are encrypted before leaving your device</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Translations happen directly on your device</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Encryption keys are never stored on PepTalk servers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Signal Protocol</h3>
                <p className="text-gray-600">
                  PepTalk uses the Signal Protocol to protect all your messages, calls, and shared content. This industry-standard encryption method ensures that your multilingual conversations stay private and secure from end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Eye className="w-12 h-12 text-[#3971C0] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Privacy by Design</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
PepTalk is built to protect your privacy at every step. We design every feature to keep your data safe, local, and minimal.

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Language Privacy</h3>
                <p className="text-gray-600">
                  Your language settings and translation history stay on your device. We do not store or access them from our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contact Protection</h3>
                <p className="text-gray-600">
                  Your contact list stays private. PepTalk does not upload, sync, or store your address book.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Eye className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Minimal Data</h3>
                <p className="text-gray-600">
          We only collect the basic information needed to run the app, such as your phone number and account details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Advanced Security Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Two-Step Verification</h3>
              <p className="text-gray-600 text-sm">
                Add another layer of protection to your account with a simple verification step during login.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Notifications</h3>
              <p className="text-gray-600 text-sm">Get notified if your account is accessed from a new device or unusual location.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">App Lock</h3>
              <p className="text-gray-600 text-sm">
Protect the app with fingerprint, face recognition, or a custom PIN to prevent unauthorized access.              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Block & Report</h3>
              <p className="text-gray-600 text-sm">Block unwanted contacts and report spam or abuse directly from any conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How We Protect Your Data</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Servers</h3>
                  <p className="text-gray-600">
                    Our servers are protected by advanced security measures including encryption at rest, regular
                    security audits, and strict access controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Minimization</h3>
                  <p className="text-gray-600">
                    We only collect and store the minimum amount of data necessary to provide our service. Messages are
                    automatically deleted from our servers once delivered.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
                  <p className="text-gray-600">
                    We continuously update our security measures and release regular app updates to address any
                    potential vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#3971C0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                  <p className="text-gray-600">
                    PepTalk complies with international privacy regulations including GDPR, CCPA, and other regional
                    data protection laws.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3971C0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Secure Multilingual Messaging?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of users who trust PepTalk for their private, secure, and seamless multilingual conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-[#3971C0] hover:bg-gray-100 border-white"
              onClick={() => window.open('https://play.google.com/store/apps/', '_blank')}
            >
              Download PepTalk
            </Button>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Have Security Concerns?</h3>
          <p className="text-gray-600 mb-6">
            If you discover a security vulnerability, please report it to our security team.
          </p>
          <Button
            variant="outline"
            className="bg-white text-[#3971C0] border-[#3971C0] hover:bg-[#3971C0] hover:text-white"
            onClick={() => window.open('https://clavel.ai/contacts/', '_blank')}
          >
            Contact Security Team
          </Button>
        </div>
      </section>
    </div>
  )
}
