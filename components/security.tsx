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
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Security is Our Priority</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            PepTalk is built with advanced security features to protect your multilingual conversations and personal
            information.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#3971C0] hover:bg-gray-100 border-white">
            Learn About Our Security
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
                Every message, call, and media file you send through PepTalk is secured with end-to-end encryption. This
                means only you and the person you're communicating with can read or listen to what's sent - not even
                PepTalk can access your conversations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Messages encrypted before leaving your device</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Translation happens locally on your device</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Keys stored only on your devices</span>
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
                  We use the industry-standard Signal Protocol for all communications, ensuring military-grade security
                  for your multilingual conversations.
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
              Your privacy is fundamental to how PepTalk works. We've built our app to know as little as possible about
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Globe className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Language Privacy</h3>
                <p className="text-gray-600">
                  Your language preferences and translation history are stored locally on your device, never on our
                  servers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contact Protection</h3>
                <p className="text-gray-600">
                  We don't store your contacts on our servers. Your address book stays private and secure on your
                  device.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Eye className="w-10 h-10 text-[#3971C0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Minimal Data</h3>
                <p className="text-gray-600">
                  We collect only the minimum data necessary to provide our service - your phone number and basic
                  account info.
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
                Add an extra layer of security to your account with two-step verification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Notifications</h3>
              <p className="text-gray-600 text-sm">Get notified when your account is accessed from a new device.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">App Lock</h3>
              <p className="text-gray-600 text-sm">
                Secure your app with fingerprint, face recognition, or PIN protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3971C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Block & Report</h3>
              <p className="text-gray-600 text-sm">Easily block unwanted contacts and report spam or abuse.</p>
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
