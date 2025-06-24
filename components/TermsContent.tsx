import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"

export default function TermsAndConditions() {
  const sections = [
    { id: "eligibility", title: "Eligibility" },
    { id: "user-accounts", title: "User Accounts" },
    { id: "acceptable-use", title: "Acceptable Use" },
    { id: "content-ownership", title: "Content Ownership" },
    { id: "data-privacy", title: "Data Privacy & Security" },
    { id: "subscriptions", title: "Subscriptions & Payments" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "termination", title: "Termination" },
    { id: "limitation-liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes-terms", title: "Changes to Terms" },
    { id: "contact", title: "Contact" },
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                      <h1 className="text-4xl font-bold text-gray-900">PepTalk - Terms and Conditions</h1>
                      <p className="text-muted-foreground">Effective Date: 24/06/2025</p>
                    </div>

                    <Separator />

                    {/* Introduction */}
                    <div className="prose prose-gray max-w-none">
                      <p>
                        These Terms and Conditions {"("}"Terms"{")"} govern your access to and use of the PepTalk chat
                        application {"("}"PepTalk"{")"}, provided by Clavel.ai {"("}"we", "our", or "us"{")"}. By
                        accessing or using PepTalk, you agree to be bound by these Terms. If you do not agree to these
                        Terms, do not use the Service.
                      </p>
                    </div>

                    <Separator />

                    {/* Section 1: Eligibility */}
                    <section id="eligibility" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">1. Eligibility</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          You must be at least 13 years old {"("}or 16 where required by local law{")"} to use PepTalk.
                          By using the app, you confirm that you meet the age requirements and agree to these Terms.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 2: User Accounts */}
                    <section id="user-accounts" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">2. User Accounts</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          To use PepTalk, you must create an account with a valid email address or phone number. You are
                          responsible for maintaining the confidentiality of your account credentials and for all
                          activities that occur under your account.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 3: Acceptable Use */}
                    <section id="acceptable-use" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">3. Acceptable Use</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>You agree not to use PepTalk for:</p>
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mt-4">
                          <ul className="space-y-2 text-red-800">
                            <li>• Sending spam or unsolicited messages</li>
                            <li>• Harassing, abusing, or threatening other users</li>
                            <li>• Sharing illegal, harmful, or offensive content</li>
                            <li>• Impersonating others or misrepresenting your identity</li>
                            <li>• Uploading viruses or other malicious code</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 4: Content Ownership */}
                    <section id="content-ownership" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">4. Content Ownership</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          You retain ownership of any messages or content you create. By using PepTalk, you grant
                          Clavel.ai a limited license to store and transmit your content to enable the functionality of
                          the service. You are solely responsible for the content you send.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 5: Data Privacy & Security */}
                    <section id="data-privacy" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">5. Data Privacy & Security</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          We respect your privacy. Please refer to our Privacy Policy for details on how your personal
                          data is collected and used. We implement industry-standard encryption and security practices.
                          By using PepTalk, you consent to the collection and use of your information as described.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                          <p className="text-blue-800 text-sm">
                            <strong>Note:</strong> For detailed information about data handling, please review our
                            <a href="/privacy" className="underline ml-1">
                              Privacy Policy
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 6: Subscriptions & Payments */}
                    <section id="subscriptions" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">6. Subscriptions & Payments</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          If PepTalk offers paid features or subscriptions, the terms will be outlined at the point of
                          purchase. Subscriptions auto-renew unless canceled. No refunds will be given for partial
                          subscription periods.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium text-yellow-800 mb-2">Auto-Renewal</h4>
                            <p className="text-sm text-yellow-700">
                              Subscriptions automatically renew unless you cancel before the renewal date.
                            </p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium text-orange-800 mb-2">Refund Policy</h4>
                            <p className="text-sm text-orange-700">
                              No refunds are provided for partial subscription periods.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 7: Intellectual Property */}
                    <section id="intellectual-property" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">7. Intellectual Property</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          All content, trademarks, and software within PepTalk are the property of Clavel.ai. You may
                          not copy, reverse-engineer, or distribute any part of PepTalk without written permission.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 8: Termination */}
                    <section id="termination" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">8. Termination</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          We may suspend or terminate your account if you violate these Terms. You may also delete your
                          account at any time from within the app. Data deletion follows applicable laws and retention
                          policies.
                        </p>
                        <div className="bg-gray-50 border rounded-lg p-4 mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Account Suspension</h4>
                              <p className="text-sm text-gray-600">
                                Violations of terms may result in account suspension or termination.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Self-Deletion</h4>
                              <p className="text-sm text-gray-600">
                                You can delete your account anytime through the app settings.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 9: Limitation of Liability */}
                    <section id="limitation-liability" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">9. Limitation of Liability</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          PepTalk is provided "as-is" without warranties of any kind. Clavel.ai is not responsible for
                          any loss or damage resulting from your use of the app.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 10: Indemnification */}
                    <section id="indemnification" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">10. Indemnification</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          You agree to indemnify and hold harmless Clavel.ai from any claims, damages, or expenses
                          arising from your misuse of the app or violation of these Terms.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 11: Governing Law */}
                    <section id="governing-law" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">11. Governing Law</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          These Terms are governed by the laws of [Insert Country/State]. Any disputes will be resolved
                          in the courts of that jurisdiction.
                        </p>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 12: Changes to Terms */}
                    <section id="changes-terms" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">12. Changes to Terms</h2>
                      <div className="prose prose-gray max-w-none">
                        <p>
                          We may update these Terms from time to time. Continued use of PepTalk after changes means you
                          accept the revised Terms.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                          <p className="text-green-800 text-sm">
                            <strong>Updates:</strong> We will notify users of significant changes to these terms through
                            the app or via email.
                          </p>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    {/* Section 13: Contact */}
                    <section id="contact" className="space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-900">13. Contact</h2>
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <p className="text-gray-600 mb-4">For questions or legal concerns, please contact us.</p>
                        <div className="space-y-2">
                          <p className="font-medium">Legal Department</p>
                          <p className="text-sm text-gray-500">legal@clavel.ai</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
